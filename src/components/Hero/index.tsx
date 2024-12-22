import React from 'react';
import Background from './Background';
import ProfileImage from './ProfileImage';
import Bio from './Bio';

// Your profile image in Michigan jersey
const PROFILE_IMAGE = "https://i.ibb.co/wQPFYKR/michigan.jpg";
const BACKGROUND_IMAGE = "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?auto=format&fit=crop&q=80";

export default function Hero() {
  return (
    <div className="relative min-h-screen">
      <Background imageUrl={BACKGROUND_IMAGE} />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <ProfileImage 
            imageUrl={PROFILE_IMAGE}
            alt="RudyBtz in Michigan jersey"
          />
          <Bio />
        </div>
      </div>
    </div>
  );
}