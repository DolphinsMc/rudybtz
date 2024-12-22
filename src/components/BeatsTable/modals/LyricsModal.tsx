import React from 'react';
import { X } from 'lucide-react';
import { Button } from '../../ui';

interface LyricsModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  lyrics?: string;
}

export default function LyricsModal({ isOpen, onClose, title, lyrics }: LyricsModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-gray-800 rounded-lg w-full max-w-lg">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">{title} - Lyrics</h3>
          <Button
            variant="ghost"
            size="sm"
            icon={X}
            onClick={onClose}
            aria-label="Close lyrics"
          />
        </div>
        <div className="p-4 max-h-[60vh] overflow-y-auto">
          {lyrics ? (
            <p className="text-gray-300 whitespace-pre-line">{lyrics}</p>
          ) : (
            <p className="text-gray-400 text-center">No lyrics available for this beat.</p>
          )}
        </div>
      </div>
    </div>
  );
}