import { MarcelEmotion } from '../contexts/TrainerContext';

type ScriptKey = 'welcome' | 'correct' | 'incorrect' | 'streak' | 'idle' | 'login' | 'logout';

export interface ScriptEntry {
    text: string;
    emotion: MarcelEmotion;
    audio?: string;
}

export const marcelScripts: Record<ScriptKey, ScriptEntry[]> = {
    // Replaced original 'login'/'welcome' with the one file we have: intro_main.mp3
    // We'll use this for both 'login' and 'welcome' to ensure we have something.
    login: [
        {
            text: "Bonjour! I am Marcel, your virtual maitre d'. I am here to help you master our menu and service standards.",
            emotion: 'happy',
            audio: '/intro_main.mp3'
        }
    ],
    welcome: [
        {
            text: "Bonjour! I am Marcel, your virtual maitre d'. I am here to help you master our menu and service standards.",
            emotion: 'happy',
            audio: '/intro_main.mp3'
        }
    ],
    // No audio for logout, so we leave it empty to avoid robot voice.
    logout: [],

    correct: [
        { text: "Magnifique! You have the palate of a chef.", emotion: 'happy', audio: '/correct_1.mp3' },
        { text: "Oui! Exactly right.", emotion: 'happy', audio: '/correct_2.mp3' },
        { text: "Tres bien! You are learning fast.", emotion: 'happy', audio: '/correct_3.mp3' },
        { text: "Excellent!", emotion: 'happy', audio: '/correct_4.mp3' }
    ],
    incorrect: [
        { text: "Sacrebleu! Not quite. Try again, mon ami.", emotion: 'stern', audio: '/incorrect_1.mp3' },
        { text: "Non, non. Check your notes.", emotion: 'thinking', audio: '/incorrect_2.mp3' },
        { text: "Close, but the guests would notice.", emotion: 'neutral', audio: '/incorrect_3.mp3' },
        { text: "Oops! Review the menu card.", emotion: 'stern', audio: '/incorrect_4.mp3' }
    ],
    streak: [
        { text: "You are on fire! The kitchen is impressed.", emotion: 'surprised', audio: '/streak_1.mp3' },
        { text: "Unstoppable! Keep going!", emotion: 'happy', audio: '/streak_2.mp3' }
    ],
    idle: [
        { text: "Did you know? The Sancerre pairs best with the Goat Cheese Croquettes.", emotion: 'thinking', audio: '/idle_1.mp3' }
    ]
};

export const getRandomScript = (key: ScriptKey): ScriptEntry | null => {
    const options = marcelScripts[key];
    if (!options || options.length === 0) return null;
    return options[Math.floor(Math.random() * options.length)];
};
