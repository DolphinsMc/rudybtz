import { useState, useEffect } from 'react';
import { AudioManager } from '../../../../utils/audio';

export function useAudioPlayer(beatId: number, audioUrl?: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioManager = AudioManager.getInstance();

  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setProgress(audioManager.getProgress());
      }
    }, 100);

    return () => clearInterval(interval);
  }, [isPlaying]);

  useEffect(() => {
    setIsPlaying(audioManager.getCurrentBeatId() === beatId);
  }, [beatId]);

  const togglePlay = () => {
    if (audioUrl) {
      audioManager.play(beatId, audioUrl);
      setIsPlaying(!isPlaying);
    }
  };

  return {
    isPlaying,
    progress,
    togglePlay
  };
}