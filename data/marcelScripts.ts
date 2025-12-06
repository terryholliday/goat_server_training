import { MarcelEmotion } from '../contexts/TrainerContext';

type ScriptKey = 'welcome' | 'correct' | 'incorrect' | 'streak' | 'idle' | 'login' | 'logout';

interface ScriptEntry {
    text: string;
    emotion: MarcelEmotion;
}

export const marcelScripts: Record<ScriptKey, ScriptEntry[]> = {
    welcome: [
        { text: "Bonjour! I am Marcel. Ready to master the menu?", emotion: 'happy' },
        { text: "Bienvenue! Let us make you a wine expert today.", emotion: 'neutral' },
        { text: "Ah, you are here! The guests are waiting.", emotion: 'happy' }
    ],
    login: [
        { text: "Welcome back! The kitchen is busy today.", emotion: 'neutral' },
        { text: "Allez! Let's get to work.", emotion: 'happy' }
    ],
    logout: [
        { text: "Au revoir! Rest well.", emotion: 'neutral' },
        { text: "Great work today. See you soon!", emotion: 'happy' }
    ],
    correct: [
        { text: "Magnifique! You have the palate of a chef.", emotion: 'happy' },
        { text: "Oui! Exactly right.", emotion: 'happy' },
        { text: "Tres bien! You are learning fast.", emotion: 'happy' },
        { text: "Excellent!", emotion: 'happy' }
    ],
    incorrect: [
        { text: "Sacrebleu! Not quite. Try again, mon ami.", emotion: 'stern' },
        { text: "Non, non. Check your notes.", emotion: 'thinking' },
        { text: "Close, but the guests would notice.", emotion: 'neutral' },
        { text: "Oops! Review the menu card.", emotion: 'stern' }
    ],
    streak: [
        { text: "You are on fire! The kitchen is impressed.", emotion: 'surprised' },
        { text: "Unstoppable! Keep going!", emotion: 'happy' }
    ],
    idle: [
        { text: "Did you know? The Sancerre pairs best with the Goat Cheese Croquettes.", emotion: 'thinking' },
        { text: "Don't forget to smile at table 4.", emotion: 'neutral' },
        { text: "Always recommend the specials first.", emotion: 'neutral' }
    ]
};

export const getRandomScript = (key: ScriptKey): ScriptEntry => {
    const options = marcelScripts[key];
    return options[Math.floor(Math.random() * options.length)];
};
