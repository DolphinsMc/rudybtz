import React from 'react';
import { Youtube, Instagram, Twitter, Cloud, Menu } from 'lucide-react';
import Logo from './Logo';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-black/80 backdrop-blur-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Logo />
          
          <div className="hidden md:flex items-center space-x-8">
            {/* Social Media Icons */}
            <div className="flex items-center space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Cloud size={20} />
              </a>
            </div>

            {/* Navigation Menu */}
            <nav className="flex items-center space-x-8">
              <a href="#" className="text-white font-medium hover:text-purple-400 transition-colors">Home</a>
              <a href="#" className="text-white font-medium hover:text-purple-400 transition-colors">Beats</a>
              <a href="#" className="text-white font-medium hover:text-purple-400 transition-colors">Presets</a>
              <a href="#" className="text-white font-medium hover:text-purple-400 transition-colors">Soundpacks</a>
            </nav>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-gray-300 hover:text-white">
            <Menu size={24} />
          </button>
        </div>
      </div>
    </header>
  );
}