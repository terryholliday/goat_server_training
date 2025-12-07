import React, { createContext, useContext, useState, useEffect, useCallback, type ReactNode } from 'react';
import type { UserProfile, UserRole } from '../types';

// Demo mode flag - set to true to bypass Firebase auth
const DEMO_MODE = true;

// Mock user for demo mode
const DEMO_USER = {
    uid: 'demo-user-001',
    email: 'demo@thefrenchgoat.com',
    displayName: 'Demo Staff',
    emailVerified: true,
};

const DEMO_PROFILE: UserProfile = {
    uid: 'demo-user-001',
    email: 'demo@thefrenchgoat.com',
    displayName: 'Demo Staff',
    role: 'staff' as UserRole,
    createdAt: new Date(),
    lastActive: new Date(),
};

// Minimal User type for demo mode (matches Firebase User interface we need)
interface DemoUser {
    uid: string;
    email: string | null;
    displayName: string | null;
    emailVerified: boolean;
}

interface AuthContextType {
    user: DemoUser | null;
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
    const [user, setUser] = useState<DemoUser | null>(null);
    const [userProfile, setUserProfile] = useState<UserProfile | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    // Initialize - auto-login in demo mode
    useEffect(() => {
        if (DEMO_MODE) {
            // Auto-login removed to restore login screen
            // setUser(DEMO_USER);
            // setUserProfile(DEMO_PROFILE);
            setLoading(false);
        } else {
            // Firebase auth would go here
            setLoading(false);
        }
    }, []);

    const login = useCallback(async (email: string, password: string): Promise<void> => {
        setError(null);
        setLoading(true);

        if (DEMO_MODE) {
            // Demo mode - accept any login
            setUser({ ...DEMO_USER, email });
            setUserProfile({ ...DEMO_PROFILE, email });
            setLoading(false);
            return;
        }

        // Firebase auth would go here
        setLoading(false);
    }, []);

    const signup = useCallback(async (
        email: string,
        password: string,
        displayName: string,
        role: UserRole = 'staff'
    ): Promise<void> => {
        setError(null);
        setLoading(true);

        if (DEMO_MODE) {
            // Demo mode - accept any signup
            setUser({ ...DEMO_USER, email, displayName });
            setUserProfile({ ...DEMO_PROFILE, email, displayName, role });
            setLoading(false);
            return;
        }

        // Firebase auth would go here
        setLoading(false);
    }, []);

    const logout = useCallback(async (): Promise<void> => {
        setError(null);
        if (DEMO_MODE) {
            // In demo mode, clearly logout
            setUser(null);
            setUserProfile(null);
            return;
        }
        setUser(null);
        setUserProfile(null);
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
