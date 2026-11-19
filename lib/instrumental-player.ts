'use client';

/**
 * Polyphonic Ambient Instrumental Song Engine (Web Audio API)
 * Plays a warm, melodic electric-piano + ambient pad + gentle bell arpeggio
 * progression (Fmaj7 -> Em7 -> Dm7 -> Cmaj7) in a continuous seamless loop.
 */
class InstrumentalSongController {
  private ctx: AudioContext | null = null;
  private isPlaying = false;
  private intervalId: number | null = null;
  private stepIndex = 0;
  private masterGain: GainNode | null = null;

  // Chord progression (frequencies in Hz) + melody notes per step
  // Progression: Fmaj7 -> Em7 -> Dm7 -> Cmaj7 (16 steps per cycle, 4 steps per chord)
  private readonly chords: number[][] = [
    [174.61, 220.0, 261.63, 329.63], // Fmaj7 (F3, A3, C4, E4)
    [164.81, 196.0, 246.94, 293.66], // Em7   (E3, G3, B3, D4)
    [146.83, 174.61, 220.0, 261.63], // Dm7   (D3, F3, A3, C4)
    [130.81, 164.81, 196.0, 246.94], // Cmaj7 (C3, E3, G3, B3)
  ];

  private readonly melodyNotes: number[] = [
    523.25, 659.25, 587.33, 523.25, // over Fmaj7 (C5, E5, D5, C5)
    493.88, 587.33, 523.25, 392.0,  // over Em7   (B4, D5, C5, G4)
    440.0,  523.25, 659.25, 587.33, // over Dm7   (A4, C5, E5, D5)
    392.0,  523.25, 493.88, 659.25, // over Cmaj7 (G4, C5, B4, E5)
  ];

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  public getPlayingState(): boolean {
    return this.isPlaying;
  }

  public start(): void {
    if (this.isPlaying || typeof window === 'undefined') return;

    const AudioCtx =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext;

    if (!this.ctx) {
      this.ctx = new AudioCtx();
    }

    if (this.ctx.state === 'suspended') {
      this.ctx.resume();
    }

    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.01, this.ctx.currentTime);
    this.masterGain.gain.exponentialRampToValueAtTime(
      0.22,
      this.ctx.currentTime + 0.8
    );
    this.masterGain.connect(this.ctx.destination);

    this.isPlaying = true;
    this.stepIndex = 0;

    this.triggerStep();
    this.intervalId = window.setInterval(() => {
      this.triggerStep();
    }, 680);
  }

  public stop(): void {
    if (!this.isPlaying) return;
    this.isPlaying = false;

    if (this.intervalId !== null) {
      window.clearInterval(this.intervalId);
      this.intervalId = null;
    }

    if (this.ctx && this.masterGain) {
      try {
        const now = this.ctx.currentTime;
        this.masterGain.gain.cancelScheduledValues(now);
        this.masterGain.gain.setValueAtTime(
          Math.max(this.masterGain.gain.value, 0.01),
          now
        );
        this.masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.35);
      } catch {
        // Ignore audio context state errors on teardown
      }
    }
  }

  private triggerStep(): void {
    if (!this.ctx || !this.masterGain || !this.isPlaying) return;

    const now = this.ctx.currentTime;
    const stepInCycle = this.stepIndex % 16;
    const chordIdx = Math.floor(stepInCycle / 4);

    // Every 4 steps (start of bar), play warm Rhodes-like chord pad
    if (stepInCycle % 4 === 0) {
      const chord = this.chords[chordIdx];
      chord.forEach((freq, idx) => {
        this.playWarmPadNote(freq, now + idx * 0.035, 2.5, 0.11);
      });
      // Warm sub-bass root note one octave lower
      this.playWarmPadNote(chord[0] * 0.5, now, 2.6, 0.14);
    }

    // Play gentle bell/piano melody note on each beat
    const melodyFreq = this.melodyNotes[stepInCycle];
    if (melodyFreq) {
      this.playMelodyNote(melodyFreq, now, 1.2, 0.085);
    }

    this.stepIndex += 1;
  }

  private playWarmPadNote(
    freq: number,
    startTime: number,
    duration: number,
    peakGain: number
  ): void {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const filter = this.ctx.createBiquadFilter();
    const noteGain = this.ctx.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(freq, startTime);

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(900, startTime);

    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(peakGain, startTime + 0.18);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(filter);
    filter.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }

  private playMelodyNote(
    freq: number,
    startTime: number,
    duration: number,
    peakGain: number
  ): void {
    if (!this.ctx || !this.masterGain) return;

    const osc = this.ctx.createOscillator();
    const noteGain = this.ctx.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    noteGain.gain.setValueAtTime(0.0001, startTime);
    noteGain.gain.linearRampToValueAtTime(peakGain, startTime + 0.03);
    noteGain.gain.exponentialRampToValueAtTime(0.0001, startTime + duration);

    osc.connect(noteGain);
    noteGain.connect(this.masterGain);

    osc.start(startTime);
    osc.stop(startTime + duration + 0.05);
  }
}

export const instrumentalPlayer = new InstrumentalSongController();
