import { useState } from 'react';

export function useBeatActions() {
  const [isLiked, setIsLiked] = useState(false);

  const handleShare = async (title: string) => {
    try {
      await navigator.share({
        title,
        text: `Check out ${title} by RudyBtz`,
        url: window.location.href,
      });
    } catch {
      await navigator.clipboard.writeText(window.location.href);
    }
  };

  const handleLike = () => {
    setIsLiked(!isLiked);
  };

  const handlePurchase = (title: string) => {
    console.log('Purchase:', title);
  };

  return {
    isLiked,
    handleShare,
    handleLike,
    handlePurchase
  };
}