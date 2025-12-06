import React, { useEffect, useState } from 'react';
import { useTrainer } from '../contexts/TrainerContext';
import { soundService } from '../services/SoundService';

const VirtualTrainer: React.FC = () => {
    const { isVisible, message, emotion, hideTrainer } = useTrainer();
    const [animateIn, setAnimateIn] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setAnimateIn(true);
            soundService.playPop();
        } else {
            const timer = setTimeout(() => setAnimateIn(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    // Sound handled by TrainerContext now

    if (!isVisible && !animateIn) return null;

    const getEmotionImage = () => {
        switch (emotion) {
            case 'happy': return '/marcel-happy.png';
            case 'stern': return '/marcel-stern.png';
            case 'thinking': return '/marcel-thinking.png';
            case 'surprised': return '/marcel-surprised.png';
            default: return '/marcel-neutral.png';
        }
    };

    return (
        <div className={`fixed bottom-0 left-1/2 -translate-x-1/2 z-50 flex flex-col items-center transition-all duration-500 ease-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0'}`}>

            {/* Speech Bubble */}
            {message && (
                <div className="bg-white p-6 rounded-2xl rounded-bl-none shadow-2xl mb-4 max-w-md border-2 border-indigo-100 relative animate-fade-in-up origin-bottom">
                    <p className="text-gray-800 font-medium text-lg font-serif leading-relaxed">
                        {message}
                    </p>
                    {/* Close button */}
                    <button
                        onClick={hideTrainer}
                        className="absolute -top-3 -right-3 bg-white hover:bg-red-50 text-red-400 border border-red-100 rounded-full w-6 h-6 flex items-center justify-center shadow-sm transition-colors"
                        aria-label="Close trainer"
                    >
                        ✕
                    </button>
                    {/* Triangle pointer */}
                    <div className="absolute -bottom-2 left-8 w-4 h-4 bg-white border-b-2 border-r-2 border-indigo-100 transform rotate-45 z-10"></div>
                </div>
            )}

            {/* Avatar - Static Image as requested */}
            <div className="relative group cursor-pointer" onClick={() => hideTrainer()}>
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72 transition-transform duration-300">
                    <img
                        src={getEmotionImage()}
                        alt={`Marcel - ${emotion}`}
                        className="w-full h-full object-contain filter drop-shadow-2xl"
                    />
                </div>
                {/* Name Badge */}
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-sm px-4 py-1 rounded-full shadow-lg font-bold tracking-wide uppercase border-2 border-white">
                    Marcel
                </div>
            </div>

            <style>{`
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s cubic-bezier(0.16, 1, 0.3, 1);
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(20px) scale(0.9); }
                    to { opacity: 1; transform: translateY(0) scale(1); }
                }
            `}</style>
        </div>
    );
};

export default VirtualTrainer;
