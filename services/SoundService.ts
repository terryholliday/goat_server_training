
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
    public speak(text: string) {
        if (this.speechSynthesis.speaking) {
            this.speechSynthesis.cancel();
        }

        const utterance = new SpeechSynthesisUtterance(text);
        // Try to find a French voice if possible, or a good English one
        const voices = this.speechSynthesis.getVoices();
        const frenchVoice = voices.find(v => v.lang.includes('fr'));
        const englishVoice = voices.find(v => v.lang.includes('en'));

        if (frenchVoice) {
            // utterance.voice = frenchVoice; // Marcel should probably speak English with an accent, but for now English is safer for clarity
        }

        utterance.rate = 1.0;
        utterance.pitch = 1.0;

        this.speechSynthesis.speak(utterance);
    }
}

export const soundService = new SoundService();
