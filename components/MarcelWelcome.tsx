import React, { useState } from 'react';
import { soundService } from '../services/SoundService';

interface MarcelWelcomeProps {
    onDismiss: () => void;
    steps?: string[]; // optional steps, not used currently
}

export const MarcelWelcome: React.FC<MarcelWelcomeProps> = ({ onDismiss }) => {
    const [isVisible, setIsVisible] = useState(true);

    const handleDismiss = () => {
        setIsVisible(false);
        soundService.playPop(); // play a welcome sound
        onDismiss();
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4">
            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border-4 border-indigo-100 relative">
                {/* Decorative background */}
                <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-r from-indigo-500 to-purple-600"></div>
                <div className="pt-12 pb-8 px-8 text-center relative z-10">
                    {/* Avatar */}
                    <div className="w-32 h-32 rounded-full border-4 border-white shadow-xl mx-auto mb-6 bg-white overflow-hidden">
                        <img src="/marcel-happy.png" alt="Marcel" className="w-full h-full object-cover" />
                    </div>
                    <h2 className="text-3xl font-bold text-gray-900 mb-2 font-serif">Bonjour! I am Marcel, your virtual maitre d'.</h2>
                    <p className="text-indigo-600 font-medium mb-6">I am here to help you master our menu and service standards.</p>
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
                    <button onClick={handleDismiss} className="w-full py-3 px-6 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl shadow-lg shadow-indigo-200 transition-all transform hover:scale-[1.02] active:scale-[0.98]">
                        Allons-y! (Let's Go!)
                    </button>
                </div>
            </div>
        </div>
    );
};
