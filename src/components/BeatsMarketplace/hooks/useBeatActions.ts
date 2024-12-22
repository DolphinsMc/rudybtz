import { useState } from 'react';
import { useToast } from '../../ui/Toast';

export function useBeatActions() {
  const [isLiked, setIsLiked] = useState(false);
  const { addToast } = useToast();

  const handleShare = async (title: string) => {
    try {
      if (navigator.share) {
        await navigator.share({
          title,
          text: `Check out ${title} by RudyBtz`,
          url: window.location.href,
        });
        addToast('success', 'Shared successfully!');
      } else {
        await navigator.clipboard.writeText(window.location.href);
        addToast('success', 'Link copied to clipboard!');
      }
    } catch (error) {
      addToast('error', 'Failed to share');
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
    addToast('success', isLiked ? 'Removed from favorites' : 'Added to favorites');
  };

  const handlePurchase = (title: string) => {
    addToast('info', `Processing purchase for ${title}...`);
    // TODO: Implement purchase flow
  };

  return {
    isLiked,
    handleShare,
    handleLike,
    handlePurchase
  };
}