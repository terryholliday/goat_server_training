import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { soundService } from '../services/SoundService';

interface MarcelWelcomeProps {
    onDismiss: () => void;
    steps?: string[]; // Optional specific guide steps
}

export const MarcelWelcome: React.FC<MarcelWelcomeProps> = ({ onDismiss, steps }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false);
        soundService.playPop(); // Or a specific welcome sound
        onDismiss();
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.9, y: 20 }}
                        className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-4 border-indigo-100 relative"
                    >
                        {/* Decorative background */}
                        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>

                        <div className="pt-12 pb-8 px-8 text-center relative z-10">
                            {/* Avatar */}
                            <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto mb-6 bg-white overflow-hidden">
                                <img
                                    src="/marcel-happy.png"
                                    alt="Marcel"
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">
                                Bonjour! I am Marcel.
                            </h2>
                            <p className="text-indigo-600 font-medium mb-6">
                                Your personal guide to The French Goat
                            </p>

                            <div className="bg-indigo-50 rounded-xl p-5 mb-8 text-left border border-indigo-100">
                                <p className="text-gray-700 mb-2">Today we will focus on:</p>
                                <ul className="space-y-2">
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">1</span>
                                        Mastering the new Seasonal Menu
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">2</span>
                                        Completing the Service Sequence
                                    </li>
                                    <li className="flex items-center gap-2 text-sm text-gray-700">
                                        <span className="w-5 h-5 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-xs">3</span>
                                        Final Certification
                                    </li>
                                </ul>
                            </div>

                            <button
                                onClick={handleDismiss}
                                className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]"
                            >
                                Allons-y! (Let's Go!)
                            </button>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
