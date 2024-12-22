import React from 'react';

interface NavigationProps {
  className?: string;
}

const NAVIGATION_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Beats', href: '/beats' },
  { label: 'Presets', href: '/presets' },
  { label: 'Soundpacks', href: '/soundpacks' }
];

export default function Navigation({ className = '' }: NavigationProps) {
  return (
    <nav className={`flex items-center space-x-8 ${className}`}>
      {NAVIGATION_ITEMS.map(({ label, href }) => (
        <a 
          key={href}
          href={href} 
          className="text-white font-medium hover:text-purple-400 transition-colors"
        >
          {label}
        </a>
      ))}
    </nav>
  );
}