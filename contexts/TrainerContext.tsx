import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type MarcelEmotion = 'neutral' | 'happy' | 'thinking' | 'stern' | 'surprised';

interface TrainerState {
    isVisible: boolean;
    message: string | null;
    emotion: MarcelEmotion;
    isTalking: boolean;
}

interface TrainerContextType extends TrainerState {
    showTrainer: (message: string, emotion?: MarcelEmotion) => void;
    hideTrainer: () => void;
    setEmotion: (emotion: MarcelEmotion) => void;
    say: (message: string, duration?: number) => void;
}

const TrainerContext = createContext<TrainerContextType | undefined>(undefined);

export function useTrainer() {
    const context = useContext(TrainerContext);
    if (context === undefined) {
        throw new Error('useTrainer must be used within a TrainerProvider');
    }
    return context;
}

interface TrainerProviderProps {
    children: ReactNode;
}

export function TrainerProvider({ children }: TrainerProviderProps) {
    const [isVisible, setIsVisible] = useState(false); // Hidden by default, appears when needed or on delays
    const [message, setMessage] = useState<string | null>(null);
    const [emotion, setEmotion] = useState<MarcelEmotion>('neutral');
    const [isTalking, setIsTalking] = useState(false);

    const showTrainer = useCallback((msg: string, emo: MarcelEmotion = 'neutral') => {
        setMessage(msg);
        setEmotion(emo);
        setIsVisible(true);
        setIsTalking(true);

        // Stop "talking" animation after a rough estimate of reading time (or fixed)
        setTimeout(() => setIsTalking(false), 2000);
    }, []);

    const hideTrainer = useCallback(() => {
        setIsVisible(false);
        setMessage(null);
    }, []);

    const setTrainerEmotion = useCallback((emo: MarcelEmotion) => {
        setEmotion(emo);
    }, []);

    const say = useCallback((msg: string, duration: number = 5000) => {
        showTrainer(msg);
        // Auto-hide after duration if strictly informational
        if (duration > 0) {
            setTimeout(() => {
                setIsVisible(false);
            }, duration);
        }
    }, [showTrainer]);

    const value = {
        isVisible,
        message,
        emotion,
        isTalking,
        showTrainer,
        hideTrainer,
        setEmotion: setTrainerEmotion,
        say
    };

    return (
        <TrainerContext.Provider value={value}>
            {children}
        </TrainerContext.Provider>
    );
}
