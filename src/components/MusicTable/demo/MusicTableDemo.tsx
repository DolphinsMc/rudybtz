import React from 'react';
import MusicTable from '../index';
import { DEMO_TRACKS } from './data';
import { useMusicPlayer } from '../hooks/useMusicPlayer';
import { useTrackActions } from '../hooks/useTrackActions';

export default function MusicTableDemo() {
  const { playingTrackId, handlePlayPause } = useMusicPlayer();
  const {
    likedTracks,
    handleLike,
    handleShowLyrics,
    handleAddToPlaylist,
    handlePurchase
  } = useTrackActions();

  const tracks = DEMO_TRACKS.map(track => ({
    ...track,
    isPlaying: track.id === playingTrackId,
    isLiked: likedTracks.has(track.id)
  }));

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-white mb-4">Featured Tracks</h2>
      <MusicTable
        tracks={tracks}
        onPlayPause={handlePlayPause}
        onLike={handleLike}
        onShowLyrics={handleShowLyrics}
        onAddToPlaylist={handleAddToPlaylist}
        onPurchase={handlePurchase}
      />
    </div>
  );
}