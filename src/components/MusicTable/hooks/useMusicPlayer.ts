import { useState } from 'react';
import { useToast } from '../../ui/Toast';

export function useMusicPlayer() {
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const { addToast } = useToast();

  const handlePlayPause = (trackId: string) => {
    setPlayingTrackId(playingTrackId === trackId ? null : trackId);
    addToast('info', playingTrackId === trackId ? 'Paused' : 'Now playing');
  };

  return {
    playingTrackId,
    handlePlayPause
  };
}