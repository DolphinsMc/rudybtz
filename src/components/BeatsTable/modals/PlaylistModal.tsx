import React, { useState } from 'react';
import { X, Plus, Check } from 'lucide-react';
import { Button } from '../../ui';

interface Playlist {
  id: string;
  name: string;
}

interface PlaylistModalProps {
  isOpen: boolean;
  onClose: () => void;
  beatTitle: string;
  onAddToPlaylist: (playlistId: string) => void;
}

const DEMO_PLAYLISTS: Playlist[] = [
  { id: '1', name: 'Favorites' },
  { id: '2', name: 'Trap Beats' },
  { id: '3', name: 'Lo-Fi Collection' }
];

export default function PlaylistModal({ 
  isOpen, 
  onClose, 
  beatTitle,
  onAddToPlaylist 
}: PlaylistModalProps) {
  const [newPlaylist, setNewPlaylist] = useState('');
  
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50">
      <div className="bg-gray-800 rounded-lg w-full max-w-md">
        <div className="flex items-center justify-between p-4 border-b border-gray-700">
          <h3 className="text-lg font-semibold text-white">Add to Playlist</h3>
          <Button
            variant="ghost"
            size="sm"
            icon={X}
            onClick={onClose}
            aria-label="Close modal"
          />
        </div>
        
        <div className="p-4">
          <p className="text-gray-400 mb-4">Add "{beatTitle}" to:</p>
          
          <div className="space-y-2 mb-4">
            {DEMO_PLAYLISTS.map(playlist => (
              <button
                key={playlist.id}
                onClick={() => {
                  onAddToPlaylist(playlist.id);
                  onClose();
                }}
                className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-gray-700 text-left"
              >
                <span className="text-white">{playlist.name}</span>
                <Plus size={16} className="text-gray-400" />
              </button>
            ))}
          </div>

          <div className="flex items-center space-x-2">
            <input
              type="text"
              value={newPlaylist}
              onChange={(e) => setNewPlaylist(e.target.value)}
              placeholder="Create new playlist"
              className="flex-1 bg-gray-700 text-white px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button
              variant="primary"
              size="sm"
              icon={Plus}
              onClick={() => {
                if (newPlaylist.trim()) {
                  // Handle new playlist creation
                  setNewPlaylist('');
                }
              }}
              disabled={!newPlaylist.trim()}
            >
              Create
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}