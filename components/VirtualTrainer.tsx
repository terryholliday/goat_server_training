import React, { useEffect, useState, useRef } from 'react';
import { useTrainer } from '../contexts/TrainerContext';
import { soundService } from '../services/SoundService';

const VirtualTrainer: React.FC = () => {
    const { isVisible, message, audio, emotion, hideTrainer, isTalking } = useTrainer();
    const [animateIn, setAnimateIn] = useState(false);
    const prevMessageRef = useRef<string | null>(null);

    useEffect(() => {
        if (isVisible) {
            setAnimateIn(true);
            soundService.playPop();
        } else {
            const timer = setTimeout(() => setAnimateIn(false), 300);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    useEffect(() => {
        // Speak when message changes and is not null
        if (message && message !== prevMessageRef.current && isVisible) {
            // Note: audio can be undefined, speak handles that
            soundService.speak(message, audio || undefined);
            prevMessageRef.current = message;
        }
    }, [message, audio, isVisible]);

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
        <div className={`fixed bottom-4 right-4 z-50 flex flex-col items-end transition-transform duration-300 ease-in-out ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* Speech Bubble */}
            {message && (
                <div className="bg-white p-4 rounded-2xl rounded-br-none shadow-lg mb-2 max-w-xs border border-gray-200 relative animate-fade-in-up">
                    <p className="text-gray-800 font-medium text-sm md:text-base font-serif">
                        {message}
                    </p>
                    {/* Close button */}
                    <button
                        onClick={hideTrainer}
                        className="absolute -top-2 -right-2 bg-gray-200 hover:bg-gray-300 rounded-full p-1 text-gray-600 text-xs transition-colors"
                        aria-label="Close trainer"
                    >
                        ✕
                    </button>
                </div>
            )}

            {/* Avatar */}
            <div className="relative group cursor-pointer" onClick={() => hideTrainer()}>
                <div className={`w-24 h-24 md:w-32 md:h-32 rounded-full border-4 border-white shadow-xl overflow-hidden bg-white hover:scale-105 transition-transform duration-200 ${isTalking ? 'animate-talk-bob' : ''}`}>
                    <img
                        src={getEmotionImage()}
                        alt={`Marcel - ${emotion}`}
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* Name Badge */}
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 bg-blue-600 text-white text-xs px-2 py-0.5 rounded-full shadow-sm font-bold tracking-wide">
                    MARCEL
                </div>
            </div>

            <style>{`
                @keyframes talk-bob {
                    0%, 100% { transform: translateY(0) scale(1); }
                    50% { transform: translateY(-3px) scale(1.02); }
                }
                .animate-talk-bob {
                    animation: talk-bob 0.2s infinite;
                }
                .animate-fade-in-up {
                    animation: fade-in-up 0.5s ease-out;
                }
                @keyframes fade-in-up {
                    from { opacity: 0; transform: translateY(10px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            `}</style>
        </div>
    );
};

export default VirtualTrainer;
