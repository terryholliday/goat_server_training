import React, { useState, type FormEvent } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { motion } from 'framer-motion';
import { Mail, Lock, User, Loader2, ArrowRight, ChefHat, CheckCircle2, AlertCircle } from 'lucide-react';
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
        <div className="min-h-screen w-full flex items-center justify-center bg-[#fdfcf9] dark:bg-zinc-950 relative overflow-hidden px-4 py-8">
            {/* Background Effects */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-indigo-500/10 blur-3xl opacity-50" />
                <div className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-rose-500/10 blur-3xl opacity-50" />
                <div className="absolute bottom-0 right-[20%] w-[60%] h-[40%] rounded-full bg-amber-500/5 blur-3xl opacity-30" />
                <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] dark:invert" />
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="w-full max-w-md relative z-10"
            >
                {/* Logo / Header */}
                <div className="text-center mb-8">
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                        className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-violet-600 shadow-xl shadow-indigo-500/20 mb-4"
                    >
                        <ChefHat className="text-white w-6 h-6" strokeWidth={1.5} />
                    </motion.div>
                    <h1 className="text-3xl font-bold text-slate-900 dark:text-white tracking-tight mb-2">
                        Join the Team
                    </h1>
                    <p className="text-slate-500 dark:text-slate-400">
                        Create your profile to start training
                    </p>
                </div>

                {/* Card */}
                <div className="bg-white/70 dark:bg-zinc-900/70 backdrop-blur-xl border border-white/50 dark:border-zinc-800 rounded-3xl shadow-2xl p-6 md:p-8">
                    {displayError && (
                        <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            className="bg-rose-50/50 dark:bg-rose-900/20 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-300 text-sm px-4 py-3 rounded-xl mb-6 flex items-center gap-2"
                        >
                            <AlertCircle className="w-4 h-4 shrink-0" />
                            {displayError}
                        </motion.div>
                    )}

                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
                                Full Name
                            </label>
                            <div className="relative group">
                                <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors w-5 h-5" />
                                <input
                                    type="text"
                                    value={displayName}
                                    onChange={(e) => setDisplayName(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    placeholder="John Smith"
                                />
                            </div>
                        </div>

                        <div className="space-y-1.5">
                            <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
                                Email
                            </label>
                            <div className="relative group">
                                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors w-5 h-5" />
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                    placeholder="name@example.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
                                    Password
                                </label>
                                <div className="relative group">
                                    <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors w-5 h-5" />
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required
                                        minLength={6}
                                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                            <div className="space-y-1.5">
                                <label className="text-xs font-semibold text-slate-500 dark:text-slate-400 uppercase tracking-wider ml-1">
                                    Confirm
                                </label>
                                <div className="relative group">
                                    <CheckCircle2 className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 group-focus-within:text-indigo-500 transition-colors w-5 h-5" />
                                    <input
                                        type="password"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        required
                                        minLength={6}
                                        className="w-full pl-12 pr-4 py-3 bg-white dark:bg-zinc-950/50 border border-slate-200 dark:border-zinc-800 rounded-xl focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all text-slate-900 dark:text-white placeholder:text-slate-400"
                                        placeholder="••••••••"
                                    />
                                </div>
                            </div>
                        </div>

                        <Button
                            type="submit"
                            variant="primary"
                            className="w-full py-4 mt-2 text-base font-semibold shadow-lg shadow-indigo-500/25 hover:shadow-indigo-500/40 transition-all active:scale-[0.98] rounded-xl flex items-center justify-center gap-2"
                            disabled={loading}
                        >
                            {loading ? (
                                <>
                                    <Loader2 className="w-5 h-5 animate-spin" />
                                    Creating Account...
                                </>
                            ) : (
                                <>
                                    Create Account
                                    <ArrowRight className="w-5 h-5" />
                                </>
                            )}
                        </Button>
                    </form>

                    <div className="mt-8 pt-6 border-t border-slate-100 dark:border-zinc-800 text-center">
                        <p className="text-sm text-slate-500 dark:text-slate-400">
                            Already have an account?{' '}
                            <button
                                type="button"
                                onClick={onSwitchToLogin}
                                className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 font-semibold transition-colors hover:underline decoration-2 underline-offset-2"
                            >
                                Sign in
                            </button>
                        </p>
                    </div>
                </div>

                <p className="text-center text-xs text-slate-400 mt-8 opacity-60">
                    &copy; {new Date().getFullYear()} The French Goat. Internal Use Only.
                </p>
            </motion.div>
        </div>
    );
};
