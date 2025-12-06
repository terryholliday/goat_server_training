
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
    // AUDIO DISABLED - Marcel is silent
    public speak(text: string, audioFile?: string, options?: { onEnded?: () => void }) {
        // Audio is disabled - call onEnded immediately so UI doesn't hang
        if (options?.onEnded) {
            setTimeout(() => options.onEnded!(), 100);
        }
        return;
    }
}

export const soundService = new SoundService();
