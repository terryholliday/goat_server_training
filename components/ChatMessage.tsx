import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../lib/utils';
import { User, Sparkles } from 'lucide-react';

export interface ChatMessageProps {
    role: 'user' | 'ai';
    content: string | React.ReactNode;
    isTyping?: boolean;
    className?: string;
}

export const TypingIndicator = () => (
    <div className="flex space-x-1.5 p-2 items-center">
        <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0 }}
        />
        <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
        />
        <motion.div
            className="w-2 h-2 rounded-full bg-gradient-to-r from-indigo-500 to-violet-500"
            animate={{ opacity: [0.4, 1, 0.4], scale: [0.9, 1.1, 0.9] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
        />
    </div>
);

export const ChatMessage: React.FC<ChatMessageProps> = ({ role, content, isTyping, className }) => {
    const isAi = role === 'ai';

    return (
        <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className={cn(
                "group flex w-full mb-6",
                isAi ? "justify-start" : "justify-end",
                className
            )}
        >
            <div className={cn(
                "flex max-w-[85%] md:max-w-[75%] items-end gap-3",
                isAi ? "flex-row" : "flex-row-reverse"
            )}>
                {/* Avatar / Icon */}
                <div className={cn(
                    "w-8 h-8 rounded-full flex items-center justify-center shrink-0 shadow-sm transition-all duration-300",
                    isAi
                        ? "bg-gradient-to-br from-indigo-500/10 to-violet-500/10 border border-indigo-500/20 text-indigo-500"
                        : "bg-slate-200 text-slate-600 dark:bg-slate-800 dark:text-slate-400"
                )}>
                    {isAi ? <Sparkles size={16} /> : <User size={16} />}
                </div>

                {/* Message Bubble/Content */}
                <div className={cn(
                    "relative text-sm md:text-base leading-relaxed overflow-hidden",
                    isAi
                        ? "text-slate-800 dark:text-slate-100 px-1 py-1" // No bubble background for AI
                        : "bg-[#4F46E5] text-white px-5 py-3 rounded-2xl rounded-br-sm shadow-md shadow-indigo-500/10 font-medium" // User Bubble
                )}>
                    {isTyping ? (
                        <TypingIndicator />
                    ) : (
                        <div className="whitespace-pre-wrap break-words">
                            {content}
                        </div>
                    )}

                    {/* Subtle glow effect for AI messages */}
                    {isAi && (
                        <div className="absolute -inset-4 bg-indigo-500/5 blur-xl -z-10 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                    )}
                </div>
            </div>
        </motion.div>
    );
};
