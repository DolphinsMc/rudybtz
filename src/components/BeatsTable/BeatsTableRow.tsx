import React from 'react';
import { Play, Pause, Heart, FileText, ListPlus, ShoppingCart } from 'lucide-react';
import { Beat } from '../BeatsMarketplace/types';
import { useAudioPlayer } from '../BeatsMarketplace/hooks/useAudioPlayer';
import { useBeatActions } from '../BeatsMarketplace/hooks/useBeatActions';
import { useModals } from '../../hooks/useModals';
import { Button } from '../ui';
import LyricsModal from './modals/LyricsModal';
import PlaylistModal from './modals/PlaylistModal';

interface BeatsTableRowProps {
  beat: Beat;
  index: number;
}

export default function BeatsTableRow({ beat, index }: BeatsTableRowProps) {
  const { isPlaying, togglePlay } = useAudioPlayer(beat.audioUrl);
  const { isLiked, handleLike, handleShare, handlePurchase } = useBeatActions();
  const { 
    isLyricsOpen, 
    isPlaylistOpen, 
    openLyrics, 
    closeLyrics,
    openPlaylist,
    closePlaylist
  } = useModals();

  return (
    <>
      <tr className="group hover:bg-gray-800/50">
        <td className="py-4 px-4">
          <div className="flex items-center">
            <button
              onClick={togglePlay}
              className="p-2 rounded-full hover:bg-gray-700"
              aria-label={isPlaying ? 'Pause' : 'Play'}
            >
              {isPlaying ? (
                <Pause className="text-purple-500" size={16} />
              ) : (
                <Play className="text-white" size={16} />
              )}
            </button>
          </div>
        </td>
        <td className="py-4 px-4">
          <div className="flex items-center space-x-3">
            <img
              src={beat.cover}
              alt={beat.title}
              className="w-10 h-10 rounded object-cover"
            />
            <span className="font-medium text-white">{beat.title}</span>
          </div>
        </td>
        <td className="py-4 px-4 text-gray-400">{beat.bpm}</td>
        <td className="py-4 px-4 text-gray-400">{beat.key}</td>
        <td className="py-4 px-4 text-gray-400">{beat.genre}</td>
        <td className="py-4 px-4 text-gray-400">${beat.price}</td>
        <td className="py-4 px-4">
          <div className="flex items-center justify-end space-x-2 opacity-0 group-hover:opacity-100 transition-opacity">
            <Button
              variant="ghost"
              size="sm"
              icon={Heart}
              onClick={() => handleLike(beat.id.toString())}
              aria-label={isLiked ? 'Unlike' : 'Like'}
              className={isLiked ? 'text-red-500 hover:text-red-600' : ''}
            />
            <Button
              variant="ghost"
              size="sm"
              icon={FileText}
              onClick={openLyrics}
              aria-label="View lyrics"
            />
            <Button
              variant="ghost"
              size="sm"
              icon={ListPlus}
              onClick={openPlaylist}
              aria-label="Add to playlist"
            />
            <Button
              variant="primary"
              size="sm"
              icon={ShoppingCart}
              onClick={() => handlePurchase(beat.title)}
            >
              Buy
            </Button>
          </div>
        </td>
      </tr>

      <LyricsModal
        isOpen={isLyricsOpen}
        onClose={closeLyrics}
        title={beat.title}
        lyrics={beat.lyrics}
      />

      <PlaylistModal
        isOpen={isPlaylistOpen}
        onClose={closePlaylist}
        beatTitle={beat.title}
        onAddToPlaylist={(playlistId) => {
          console.log('Adding to playlist:', playlistId);
          // TODO: Implement playlist addition
        }}
      />
    </>
  );
}