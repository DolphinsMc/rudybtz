import React from 'react';
import { Youtube, Instagram, Twitter, Cloud } from 'lucide-react';
import { SOCIAL_LINKS } from '../../utils/constants';

export default function BottomBar() {
  return (
    <div className="mt-12 pt-8 border-t border-gray-800">
      <div className="flex flex-col md:flex-row items-center justify-between">
        <p>&copy; {new Date().getFullYear()} RudyBtz. All rights reserved.</p>
        <div className="flex items-center space-x-6 mt-4 md:mt-0">
          <a href={SOCIAL_LINKS.youtube} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <Youtube size={20} />
          </a>
          <a href={SOCIAL_LINKS.instagram} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <Instagram size={20} />
          </a>
          <a href={SOCIAL_LINKS.twitter} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <Twitter size={20} />
          </a>
          <a href={SOCIAL_LINKS.soundcloud} className="hover:text-white" target="_blank" rel="noopener noreferrer">
            <Cloud size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}