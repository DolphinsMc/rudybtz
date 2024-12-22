import React from 'react';
import { Mail } from 'lucide-react';

export default function ContactInfo() {
  return (
    <div>
      <h3 className="text-white font-semibold mb-4">Contact</h3>
      <div className="flex items-center space-x-2 mb-2">
        <Mail size={16} />
        <span>contact@rudybtz.com</span>
      </div>
    </div>
  );
}