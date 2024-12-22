import React from 'react';
import { Play, Share2, Heart, ShoppingCart, MoreVertical } from 'lucide-react';

interface BeatProps {
  beat: {
    title: string;
    cover: string;
    bpm: number;
    key: string;
    genre: string;
    price: number;
  };
}

export default function BeatCard({ beat }: BeatProps) {
  return (
    <div className="bg-gray-800 rounded-lg overflow-hidden">
      {/* Cover Art */}
      <div className="relative aspect-square">
        <img 
          src={beat.cover} 
          alt={beat.title}
          className="w-full h-full object-cover"
        />
        <button className="absolute inset-0 flex items-center justify-center bg-black/40 opacity-0 hover:opacity-100 transition-opacity">
          <Play size={48} className="text-white" />
        </button>
      </div>

      {/* Beat Info */}
      <div className="p-4">
        <div className="flex items-center justify-between mb-2">
          <h3 className="text-lg font-semibold text-white">{beat.title}</h3>
          <button className="text-gray-400 hover:text-white">
            <MoreVertical size={20} />
          </button>
        </div>

        <div className="flex items-center space-x-4 text-sm text-gray-400 mb-4">
          <span>{beat.bpm} BPM</span>
          <span>{beat.key}</span>
          <span>{beat.genre}</span>
        </div>

        {/* Waveform Placeholder */}
        <div className="h-8 bg-gray-700 rounded mb-4">
          <div className="h-full w-1/3 bg-purple-500 rounded" />
        </div>

        {/* Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <button className="text-gray-400 hover:text-white">
              <Share2 size={20} />
            </button>
            <button className="text-gray-400 hover:text-white">
              <Heart size={20} />
            </button>
          </div>
          <button className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700">
            <ShoppingCart size={16} />
            <span>${beat.price}</span>
          </button>
        </div>
      </div>
    </div>
  );
}