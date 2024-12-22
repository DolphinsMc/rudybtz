import React from 'react';
import CircularImage from '../ui/CircularImage';

interface ProfileImageProps {
  imageUrl: string;
  alt: string;
}

export default function ProfileImage({ imageUrl, alt }: ProfileImageProps) {
  return (
    <CircularImage
      src={imageUrl}
      alt={alt}
      size="xl"
      borderColor="border-purple-500"
      className="shadow-lg"
    />
  );
}