import React from 'react';
import { Heart, Share2, ShoppingCart } from 'lucide-react';
import { Button } from '../../ui';

interface ActionButtonsProps {
  price: number;
  isLiked: boolean;
  onShare: () => void;
  onLike: () => void;
  onPurchase: () => void;
}

export default function ActionButtons({ 
  price, 
  isLiked, 
  onShare, 
  onLike, 
  onPurchase 
}: ActionButtonsProps) {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="sm"
          icon={Heart}
          onClick={onLike}
          aria-label={isLiked ? 'Unlike' : 'Like'}
          className={isLiked ? 'text-red-500 hover:text-red-600' : ''}
        />
        <Button
          variant="ghost"
          size="sm"
          icon={Share2}
          onClick={onShare}
          aria-label="Share"
        />
      </div>
      <Button
        variant="primary"
        size="sm"
        icon={ShoppingCart}
        onClick={onPurchase}
      >
        ${price}
      </Button>
    </div>
  );
}