import React, { useState, type FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { Button } from './Button';

interface SignupPageProps {
    onSwitchToLogin: () => void;
}

export const SignupPage: React.FC<SignupPageProps> = ({ onSwitchToLogin }) => {
    const { signup, loading, error, clearError } = useAuth();
    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [validationError, setValidationError] = useState<string | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        clearError();
        setValidationError(null);

        if (password !== confirmPassword) {
            setValidationError('Passwords do not match.');
            return;
        }

        if (password.length < 6) {
            setValidationError('Password must be at least 6 characters.');
            return;
        }

        try {
            await signup(email, password, displayName);
        } catch {
            // Error is handled by context
        }
    };

    const displayError = validationError || error;

    return (
        <div className="min-h-screen bg-[#fdfcf9] flex items-center justify-center px-4 py-8">
            <div className="w-full max-w-md">
                <div className="text-center mb-8">
                    <h1 className="text-3xl md:text-4xl font-extrabold text-[#2c2c2c] tracking-tight mb-2">
                        The French Goat
                    </h1>
                    <p className="text-gray-600">Training Portal</p>
                </div>

                <div className="bg-white border border-gray-200 rounded-xl shadow-sm p-8">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
                        Create Your Account
                    </h2>

                    {displayError && (
                        <div
                            className="bg-rose-50 border border-rose-200 text-rose-700 px-4 py-3 rounded-lg mb-6"
                            role="alert"
                            aria-live="polite"
                        >
                            {displayError}
                        </div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-5">
                        <div>
                            <label
                                htmlFor="displayName"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Full Name
                            </label>
                            <input
                                id="displayName"
                                type="text"
                                value={displayName}
                                onChange={(e) => setDisplayName(e.target.value)}
                                required
                                autoComplete="name"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="John Smith"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="email"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Email Address
                            </label>
                            <input
                                id="email"
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                                autoComplete="email"
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="your.email@example.com"
                            />
                        </div>

                        <div>
                            <label
                                htmlFor="password"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Password
                            </label>
                            <input
                                id="password"
                                type="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                                autoComplete="new-password"
                                minLength={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="••••••••"
                            />
                            <p className="text-xs text-gray-500 mt-1">
                                Must be at least 6 characters
                            </p>
                        </div>

                        <div>
                            <label
                                htmlFor="confirmPassword"
                                className="block text-sm font-medium text-gray-700 mb-1"
                            >
                                Confirm Password
                            </label>
                            <input
                                id="confirmPassword"
                                type="password"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                                autoComplete="new-password"
                                minLength={6}
                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 transition-colors"
                                placeholder="••••••••"
                            />
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full py-3"
                            disabled={loading}
                            aria-busy={loading}
                        >
                            {loading ? 'Creating Account...' : 'Create Account'}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <p className="text-sm text-gray-600">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={onSwitchToLogin}
                                className="text-indigo-600 hover:text-indigo-700 font-medium"
                            >
                                Sign in
                            </button>
                        </p>
                    </div>
                </div>

                <p className="text-center text-sm text-gray-500 mt-6">
                    &copy; {new Date().getFullYear()} The French Goat. All Rights Reserved.
                </p>
            </div>
        </div>
    );
};
