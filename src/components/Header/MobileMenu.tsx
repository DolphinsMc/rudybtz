import React from 'react';
import { X } from 'lucide-react';
import Navigation from './Navigation';
import SocialLinks from './SocialLinks';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-black/95 backdrop-blur-sm">
      <div className="flex flex-col h-full p-6">
        <div className="flex justify-end">
          <button 
            onClick={onClose}
            className="text-gray-300 hover:text-white"
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center space-y-8">
          <Navigation className="flex-col space-y-6 space-x-0 text-xl" />
          <div className="mt-8">
            <SocialLinks />
          </div>
        </div>
      </div>
    </div>
  );
}