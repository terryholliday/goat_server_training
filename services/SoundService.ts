
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
        // Stop any current speech or audio
        if (this.speechSynthesis.speaking) {
            this.speechSynthesis.cancel();
        }
        if (this.currentAudio) {
            this.currentAudio.pause();
            this.currentAudio = null;
        }

        // If audio file is provided, play it and DO NOT use TTS
        if (audioFile) {
            this.currentAudio = new Audio(audioFile);
            if (options?.onEnded) {
                this.currentAudio.addEventListener('ended', options.onEnded);
            }
            this.currentAudio.play().catch(e => {
                console.error("Error playing audio file:", e);
                // If audio fails (e.g. autoplay blocked), manually trigger onEnded so the UI doesn't hang
                if (options?.onEnded) {
                    options.onEnded();
                }
            });
            return;
        }

        // If NO audio file, be silent (per user request for no mixed voices)
        return;
    }
}

export const soundService = new SoundService();
