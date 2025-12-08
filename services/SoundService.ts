
class SoundService {
    private audioContext: AudioContext | null = null;
    private speechSynthesis: SpeechSynthesis = window.speechSynthesis;

    constructor() {
        this.initAudio();
    }

    private initAudio() {
        if (typeof window !== 'undefined' && !this.audioContext) {
            this.audioContext = new (window.AudioContext || (window as any).webkitAudioContext)();
        }
    }

    // Play a simple pop sound (synthesized)
    public playPop() {
        if (!this.audioContext) this.initAudio();
        if (!this.audioContext) return;

        try {
            const oscillator = this.audioContext.createOscillator();
            const gainNode = this.audioContext.createGain();

            oscillator.type = 'sine';
            oscillator.frequency.setValueAtTime(800, this.audioContext.currentTime);
            oscillator.frequency.exponentialRampToValueAtTime(400, this.audioContext.currentTime + 0.1);

            gainNode.gain.setValueAtTime(0.3, this.audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, this.audioContext.currentTime + 0.1);

            oscillator.connect(gainNode);
            gainNode.connect(this.audioContext.destination);

            oscillator.start();
            oscillator.stop(this.audioContext.currentTime + 0.1);
        } catch (e) {
            console.error('Error playing sound:', e);
        }
    }

    // Speak text using Web Speech API
    private currentAudio: HTMLAudioElement | null = null;

    // Speak text using Web Speech API or play Audio file
    public speak(text: string, audioFile?: string, options?: { onEnded?: () => void }) {
        if (!this.speechSynthesis) {
            if (options?.onEnded) options.onEnded();
            return;
        }

        // Cancel any current speaking
        this.speechSynthesis.cancel();

        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'fr-FR'; // French accent for our French Goat!
        utterance.rate = 0.9; // Slightly slower for clarity

        utterance.onend = () => {
            if (options?.onEnded) options.onEnded();
        };

        utterance.onerror = (e) => {
            console.error('Speech synthesis error:', e);
            if (options?.onEnded) options.onEnded();
        };

        this.speechSynthesis.speak(utterance);
    }
}

export const soundService = new SoundService();
