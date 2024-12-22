import React from 'react';
import { Share2, Heart, ShoppingCart } from 'lucide-react';

interface ActionBarProps {
  price: number;
  isLiked: boolean;
  onShare: () => void;
  onLike: () => void;
  onPurchase: () => void;
}

export default function ActionBar({ price, isLiked, onShare, onLike, onPurchase }: ActionBarProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-3">
        <button 
          onClick={onShare}
          className="text-gray-400 hover:text-white transition-colors"
          aria-label="Share"
        >
          <Share2 size={20} />
        </button>
        <button 
          onClick={onLike}
          className={`${isLiked ? 'text-red-500' : 'text-gray-400'} hover:text-red-500 transition-colors`}
          aria-label={isLiked ? 'Unlike' : 'Like'}
        >
          <Heart size={20} />
        </button>
      </div>
      <button 
        onClick={onPurchase}
        className="flex items-center space-x-2 bg-purple-600 text-white px-4 py-2 rounded-full hover:bg-purple-700 transition-colors"
        aria-label={`Purchase for $${price}`}
      >
        <ShoppingCart size={16} />
        <span>${price}</span>
      </button>
    </div>
  );
}