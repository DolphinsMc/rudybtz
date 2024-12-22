import { useState, useEffect } from 'react';
import { PreviewState } from '../BeatCard/AudioPreviewState';
import { AudioManager } from '../../../utils/audio';

export function useAudioPlayer(audioUrl?: string) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [previewState, setPreviewState] = useState<PreviewState>('idle');
  const audioManager = AudioManager.getInstance();

  const togglePlay = async () => {
    if (!audioUrl) return;

    try {
      setPreviewState('loading');
      await audioManager.play(audioUrl);
      setIsPlaying(true);
      setPreviewState('idle');
    } catch (error) {
      setPreviewState('error');
      setIsPlaying(false);
    }
  };

  const handleRetry = () => {
    setPreviewState('idle');
    togglePlay();
  };

  useEffect(() => {
    return () => {
      if (isPlaying) {
        audioManager.pause();
      }
    };
  }, [isPlaying]);

  return {
    isPlaying,
    previewState,
    togglePlay,
    handleRetry
  };
}