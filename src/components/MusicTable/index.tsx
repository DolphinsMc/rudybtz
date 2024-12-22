import React from 'react';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import MusicTableHeader from './MusicTableHeader';
import MusicTableBody from './MusicTableBody';
import MobileTrackList from './MobileTrackList';

export interface Track {
  id: string;
  title: string;
  artist: string;
  albumArt: string;
  duration: string;
  isPlaying?: boolean;
  isLiked?: boolean;
  hasLyrics?: boolean;
}

interface MusicTableProps {
  tracks: Track[];
  onPlayPause: (trackId: string) => void;
  onLike: (trackId: string) => void;
  onShowLyrics: (trackId: string) => void;
  onAddToPlaylist: (trackId: string) => void;
  onPurchase: (trackId: string) => void;
}

export default function MusicTable({
  tracks,
  onPlayPause,
  onLike,
  onShowLyrics,
  onAddToPlaylist,
  onPurchase
}: MusicTableProps) {
  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <div className="w-full bg-gray-900 rounded-lg overflow-hidden">
      {isMobile ? (
        <MobileTrackList
          tracks={tracks}
          onPlayPause={onPlayPause}
          onLike={onLike}
          onShowLyrics={onShowLyrics}
          onAddToPlaylist={onAddToPlaylist}
          onPurchase={onPurchase}
        />
      ) : (
        <div className="relative h-[200px] overflow-y-auto">
          <table className="w-full">
            <MusicTableHeader />
            <MusicTableBody
              tracks={tracks}
              onPlayPause={onPlayPause}
              onLike={onLike}
              onShowLyrics={onShowLyrics}
              onAddToPlaylist={onAddToPlaylist}
              onPurchase={onPurchase}
            />
          </table>
        </div>
      )}
    </div>
  );
}