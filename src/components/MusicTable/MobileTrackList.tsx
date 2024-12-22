import React from 'react';
import { Play, Pause, Heart, FileText, ListPlus, ShoppingCart } from 'lucide-react';
import { Track } from './index';
import { Button } from '../ui';

interface MobileTrackListProps {
  tracks: Track[];
  onPlayPause: (trackId: string) => void;
  onLike: (trackId: string) => void;
  onShowLyrics: (trackId: string) => void;
  onAddToPlaylist: (trackId: string) => void;
  onPurchase: (trackId: string) => void;
}

export default function MobileTrackList({
  tracks,
  onPlayPause,
  onLike,
  onShowLyrics,
  onAddToPlaylist,
  onPurchase
}: MobileTrackListProps) {
  return (
    <div className="h-[200px] overflow-y-auto divide-y divide-gray-800">
      {tracks.map(track => (
        <div key={track.id} className="p-4 flex items-center space-x-4">
          <div className="relative">
            <img
              src={track.albumArt}
              alt={`${track.title} album art`}
              className="w-12 h-12 rounded"
            />
            <button
              className="absolute inset-0 flex items-center justify-center bg-black/40"
              onClick={() => onPlayPause(track.id)}
              aria-label={track.isPlaying ? 'Pause' : 'Play'}
            >
              {track.isPlaying ? (
                <Pause className="text-purple-500" size={20} />
              ) : (
                <Play className="text-white" size={20} />
              )}
            </button>
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-white truncate">{track.title}</h3>
            <p className="text-sm text-gray-400 truncate">{track.artist}</p>
          </div>

          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              icon={Heart}
              onClick={() => onLike(track.id)}
              aria-label={track.isLiked ? 'Unlike' : 'Like'}
              className={track.isLiked ? 'text-red-500 hover:text-red-600' : ''}
            />
            {track.hasLyrics && (
              <Button
                variant="ghost"
                size="sm"
                icon={FileText}
                onClick={() => onShowLyrics(track.id)}
                aria-label="Show lyrics"
              />
            )}
            <Button
              variant="ghost"
              size="sm"
              icon={ListPlus}
              onClick={() => onAddToPlaylist(track.id)}
              aria-label="Add to playlist"
            />
            <Button
              variant="primary"
              size="sm"
              icon={ShoppingCart}
              onClick={() => onPurchase(track.id)}
              aria-label="Purchase track"
            />
          </div>
        </div>
      ))}
    </div>
  );
}