import React, { createContext, useContext, useState, ReactNode, useCallback } from 'react';

export type MarcelEmotion = 'neutral' | 'happy' | 'thinking' | 'stern' | 'surprised';

interface TrainerState {
    isVisible: boolean;
    message: string | null;
    audio: string | null;
    emotion: MarcelEmotion;
    isTalking: boolean;
}

interface TrainerContextType extends TrainerState {
    showTrainer: (message: string, emotion?: MarcelEmotion, audio?: string) => void;
    hideTrainer: () => void;
    setEmotion: (emotion: MarcelEmotion) => void;
    say: (message: string, audio?: string, duration?: number) => void;
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

import { soundService } from '../services/SoundService';

export function TrainerProvider({ children }: TrainerProviderProps) {
    const [isVisible, setIsVisible] = useState(false); // Hidden by default, appears when needed or on delays
    const [message, setMessage] = useState<string | null>(null);
    const [audio, setAudio] = useState<string | null>(null);
    const [emotion, setEmotion] = useState<MarcelEmotion>('neutral');
    const [isTalking, setIsTalking] = useState(false);

    const showTrainer = useCallback((msg: string, emo: MarcelEmotion = 'neutral', audioFile?: string) => {
        setMessage(msg);
        setEmotion(emo);
        setAudio(audioFile || null);
        setIsVisible(true);
        setIsTalking(true);
        // We rely on the caller or 'say' to handle stop talking timing
    }, []);

    const hideTrainer = useCallback(() => {
        setIsVisible(false);
        setMessage(null);
        setAudio(null);
        setIsTalking(false);
    }, []);

    const setTrainerEmotion = useCallback((emo: MarcelEmotion) => {
        setEmotion(emo);
    }, []);

    const say = useCallback((msg: string, audioFile?: string, _duration: number = 5000) => {
        // Reset state first to ensure clean transition
        setMessage(msg);
        setEmotion('neutral');
        setAudio(audioFile || null);
        setIsVisible(true);
        setIsTalking(true);

        if (audioFile) {
            // Play audio and sync visibility
            soundService.speak(msg, audioFile, {
                onEnded: () => {
                    setIsTalking(false);
                    // Marcel stays visible - user can close with X button
                }
            });
        } else {
            // Text only fallback
            soundService.speak(msg);

            // Artificial talking animation time
            setTimeout(() => {
                setIsTalking(false);
            }, 2000);

            // Marcel stays visible - user can close with X button
        }
    }, []);

    const value = {
        isVisible,
        message,
        audio,
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

