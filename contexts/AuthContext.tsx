import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import {
    onAuthStateChanged,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
    updateProfile,
    type User
} from 'firebase/auth';
import { auth } from '../firebase';
import { createUserProfile, getUserProfile, updateLastActive } from '../services/trainingProgress';
import type { UserProfile, UserRole } from '../types';

interface AuthContextType {
    user: User | null;
    userProfile: UserProfile | null;
    loading: boolean;
    error: string | null;
    login: (email: string, password: string) => Promise<void>;
    signup: (email: string, password: string, displayName: string, role?: UserRole) => Promise<void>;
    logout: () => Promise<void>;
    clearError: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth(): AuthContextType {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth must be used within an AuthProvider');
    }
    return context;
}

interface AuthProviderProps {
    children: ReactNode;
}

export function AuthProvider({ children }: AuthProviderProps): React.ReactElement {
    const [user, setUser] = useState<User | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Listen for auth state changes
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (firebaseUser) => {
            setUser(firebaseUser);

            if (firebaseUser) {
                try {
                    // Fetch user profile from Firestore
                    const profile = await getUserProfile(firebaseUser.uid);
                    setUserProfile(profile);

                    // Update last active timestamp
                    if (profile) {
                        await updateLastActive(firebaseUser.uid);
                    }
                } catch (err) {
                    console.error('Error fetching user profile:', err);
                }
            } else {
                setUserProfile(null);
            }

            setLoading(false);
        });

        return () => unsubscribe();
    }, []);

    const login = useCallback(async (email: string, password: string): Promise<void> => {
        setError(null);
        setLoading(true);

        try {
            const credential = await signInWithEmailAndPassword(auth, email, password);

            // Fetch and set user profile
            const profile = await getUserProfile(credential.user.uid);
            setUserProfile(profile);

            // Update last active
            if (profile) {
                await updateLastActive(credential.user.uid);
            }
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to login';
            setError(getReadableErrorMessage(errorMessage));
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const signup = useCallback(async (
        email: string,
        password: string,
        displayName: string,
        role: UserRole = 'staff'
    ): Promise<void> => {
        setError(null);
        setLoading(true);

        try {
            const credential = await createUserWithEmailAndPassword(auth, email, password);

            // Update Firebase Auth profile
            await updateProfile(credential.user, { displayName });

            // Create user profile in Firestore
            const profile = await createUserProfile(
                credential.user.uid,
                email,
                displayName,
                role
            );
            setUserProfile(profile);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to create account';
            setError(getReadableErrorMessage(errorMessage));
            throw err;
        } finally {
            setLoading(false);
        }
    }, []);

    const logout = useCallback(async (): Promise<void> => {
        setError(null);
        try {
            await signOut(auth);
            setUserProfile(null);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Failed to logout';
            setError(errorMessage);
            throw err;
        }
    }, []);

    const clearError = useCallback(() => {
        setError(null);
    }, []);

    const value: AuthContextType = {
        user,
        userProfile,
        loading,
        error,
        login,
        signup,
        logout,
        clearError
    };

    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    );
}

// Helper function to convert Firebase error codes to readable messages
function getReadableErrorMessage(error: string): string {
    if (error.includes('auth/email-already-in-use')) {
        return 'An account with this email already exists.';
    }
    if (error.includes('auth/invalid-email')) {
        return 'Please enter a valid email address.';
    }
    if (error.includes('auth/weak-password')) {
        return 'Password should be at least 6 characters.';
    }
    if (error.includes('auth/user-not-found') || error.includes('auth/wrong-password')) {
        return 'Invalid email or password.';
    }
    if (error.includes('auth/too-many-requests')) {
        return 'Too many failed attempts. Please try again later.';
    }
    if (error.includes('auth/invalid-credential')) {
        return 'Invalid email or password.';
    }
    return error;
}
