import React from 'react';
import { useTrainer } from '../contexts/TrainerContext';


const VirtualTrainer: React.FC = () => {
    const { isVisible, message, emotion, hideTrainer } = useTrainer();
    // Animation state and effect removed; component now appears instantly without animation.

    // Sound handled by TrainerContext now

    if (!isVisible) return null;

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
                <div className="bg-white p-6 rounded-2xl rounded-bl-none shadow-2xl mb-4 max-w-md border-2 border-indigo-100 relative origin-bottom">
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
                <div className="w-48 h-48 md:w-64 md:h-64 lg:w-72 lg:h-72">
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


        </div>
    );
};

export default VirtualTrainer;
