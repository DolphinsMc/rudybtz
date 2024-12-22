import React from 'react';
import { Track } from './index';
import TrackRow from './TrackRow';

interface MusicTableBodyProps {
  tracks: Track[];
  onPlayPause: (trackId: string) => void;
  onLike: (trackId: string) => void;
  onShowLyrics: (trackId: string) => void;
  onAddToPlaylist: (trackId: string) => void;
  onPurchase: (trackId: string) => void;
}

export default function MusicTableBody({
  tracks,
  onPlayPause,
  onLike,
  onShowLyrics,
  onAddToPlaylist,
  onPurchase
}: MusicTableBodyProps) {
  return (
    <tbody className="divide-y divide-gray-800">
      {tracks.map((track, index) => (
        <TrackRow
          key={track.id}
          track={track}
          index={index + 1}
          onPlayPause={onPlayPause}
          onLike={onLike}
          onShowLyrics={onShowLyrics}
          onAddToPlaylist={onAddToPlaylist}
          onPurchase={onPurchase}
        />
      ))}
    </tbody>
  );
}