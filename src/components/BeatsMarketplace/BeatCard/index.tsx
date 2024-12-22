import React from 'react';
import { Beat } from '../types';
import { useAudioPlayer } from '../hooks/useAudioPlayer';
import { useBeatActions } from '../hooks/useBeatActions';
import CoverArt from './CoverArt';
import BeatInfo from './BeatInfo';
import ActionButtons from './ActionButtons';

interface BeatCardProps {
  beat: Beat;
}

export default function BeatCard({ beat }: BeatCardProps) {
  const { isPlaying, previewState, togglePlay, handleRetry } = useAudioPlayer(beat.audioUrl);
  const { isLiked, handleLike, handleShare, handlePurchase } = useBeatActions();

  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      <CoverArt
        cover={beat.cover}
        title={beat.title}
        isPlaying={isPlaying}
        previewState={previewState}
        onPlayPause={togglePlay}
        onRetry={handleRetry}
      />
      
      <div className="p-4 space-y-4">
        <BeatInfo
          title={beat.title}
          bpm={beat.bpm}
          key={beat.key}
          genre={beat.genre}
        />
        
        <ActionButtons
          price={beat.price}
          isLiked={isLiked}
          onShare={() => handleShare(beat.title)}
          onLike={handleLike}
          onPurchase={() => handlePurchase(beat.title)}
        />
      </div>
    </div>
  );
}