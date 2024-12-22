import React from 'react';
import { Youtube, Instagram, Twitter, Cloud } from 'lucide-react';

interface SocialLink {
  icon: typeof Youtube;
  href: string;
  label: string;
}

const SOCIAL_LINKS: SocialLink[] = [
  { icon: Youtube, href: 'https://youtube.com/@rudybtz', label: 'YouTube' },
  { icon: Instagram, href: 'https://instagram.com/rudybtz', label: 'Instagram' },
  { icon: Twitter, href: 'https://twitter.com/rudybtz', label: 'Twitter' },
  { icon: Cloud, href: 'https://soundcloud.com/rudybtz', label: 'SoundCloud' }
];

export default function SocialLinks() {
  return (
    <div className="flex items-center space-x-4">
      {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
        <a 
          key={href}
          href={href}
          className="text-gray-300 hover:text-white transition-colors"
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
        >
          <Icon size={20} />
        </a>
      ))}
    </div>
  );
}