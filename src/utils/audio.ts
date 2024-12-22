export class AudioManager {
  private static instance: AudioManager;
  private audio: HTMLAudioElement | null = null;
  private currentBeatId: number | null = null;
  private context: AudioContext | null = null;
  private analyzer: AnalyserNode | null = null;

  private constructor() {
    this.context = new AudioContext();
    this.analyzer = this.context.createAnalyser();
    this.analyzer.fftSize = 256;
  }

  static getInstance(): AudioManager {
    if (!AudioManager.instance) {
      AudioManager.instance = new AudioManager();
    }
    return AudioManager.instance;
  }

  async play(beatId: number, audioUrl: string): Promise<void> {
    if (this.currentBeatId === beatId && this.audio?.paused === false) {
      this.pause();
      return;
    }

    try {
      if (this.audio) {
        this.audio.pause();
      }

      this.audio = new Audio(audioUrl);
      await this.audio.play();
      
      if (this.context && this.analyzer) {
        const source = this.context.createMediaElementSource(this.audio);
        source.connect(this.analyzer);
        this.analyzer.connect(this.context.destination);
      }
      
      this.currentBeatId = beatId;
    } catch (error) {
      console.error('Error playing audio:', error);
      throw error;
    }
  }

  pause(): void {
    if (this.audio) {
      this.audio.pause();
      this.currentBeatId = null;
    }
  }

  getCurrentBeatId(): number | null {
    return this.currentBeatId;
  }

  getAnalyzer(): AnalyserNode | null {
    return this.analyzer;
  }

  getProgress(): number {
    if (!this.audio) return 0;
    return (this.audio.currentTime / this.audio.duration) * 100;
  }
}