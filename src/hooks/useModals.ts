import { useState } from 'react';

export function useModals() {
  const [isLyricsOpen, setIsLyricsOpen] = useState(false);
  const [isPlaylistOpen, setIsPlaylistOpen] = useState(false);

  return {
    isLyricsOpen,
    isPlaylistOpen,
    openLyrics: () => setIsLyricsOpen(true),
    closeLyrics: () => setIsLyricsOpen(false),
    openPlaylist: () => setIsPlaylistOpen(true),
    closePlaylist: () => setIsPlaylistOpen(false)
  };
}