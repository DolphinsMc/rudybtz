import React from 'react';
import { Play, Pause, Heart, FileText, ListPlus, ShoppingCart } from 'lucide-react';
import { Track } from './index';
import { Button } from '../ui';

interface TrackRowProps {
  track: Track;
  index: number;
  onPlayPause: (trackId: string) => void;
  onLike: (trackId: string) => void;
  onShowLyrics: (trackId: string) => void;
  onAddToPlaylist: (trackId: string) => void;
  onPurchase: (trackId: string) => void;
}

export default function TrackRow({
  track,
  index,
  onPlayPause,
  onLike,
  onShowLyrics,
  onAddToPlaylist,
  onPurchase
}: TrackRowProps) {
  return (
    <tr className="group hover:bg-gray-800/50 transition-colors">
      <td className="py-2 px-4">
        <span className="group-hover:hidden">{index}</span>
        <button
          className="hidden group-hover:block"
          onClick={() => onPlayPause(track.id)}
          aria-label={track.isPlaying ? 'Pause' : 'Play'}
        >
          {track.isPlaying ? (
            <Pause className="text-purple-500" size={16} />
          ) : (
            <Play className="text-white" size={16} />
          )}
        </button>
      </td>
      <td className="py-2">
        <img
          src={track.albumArt}
          alt={`${track.title} album art`}
          className="w-10 h-10 rounded"
        />
      </td>
      <td className="py-2 px-4">
        <span className="font-medium text-white">{track.title}</span>
      </td>
      <td className="py-2 px-4 text-gray-400">{track.artist}</td>
      <td className="py-2 px-4 text-gray-400">{track.duration}</td>
      <td className="py-2 px-4">
        <div className="flex items-center justify-end space-x-2">
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
      </td>
    </tr>
  );
}