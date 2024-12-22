import { useState } from 'react';
import { useToast } from '../../ui/Toast';

export function useTrackActions() {
  const [likedTracks, setLikedTracks] = useState<Set<string>>(new Set());
  const { addToast } = useToast();

  const handleLike = (trackId: string) => {
    setLikedTracks(prev => {
      const newLiked = new Set(prev);
      if (newLiked.has(trackId)) {
        newLiked.delete(trackId);
        addToast('info', 'Removed from favorites');
      } else {
        newLiked.add(trackId);
        addToast('success', 'Added to favorites');
      }
      return newLiked;
    });
  };

  const handleShowLyrics = (trackId: string) => {
    addToast('info', 'Opening lyrics...');
  };

  const handleAddToPlaylist = (trackId: string) => {
    addToast('success', 'Added to playlist');
  };

  const handlePurchase = (trackId: string) => {
    addToast('info', 'Processing purchase...');
  };

  return {
    likedTracks,
    handleLike,
    handleShowLyrics,
    handleAddToPlaylist,
    handlePurchase
  };
}