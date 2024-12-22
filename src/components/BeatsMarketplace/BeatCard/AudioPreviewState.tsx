import React from 'react';
import { Loader2, AlertCircle } from 'lucide-react';

export type PreviewState = 'idle' | 'loading' | 'error';

interface AudioPreviewStateProps {
  state: PreviewState;
  onRetry?: () => void;
}

export default function AudioPreviewState({ state, onRetry }: AudioPreviewStateProps) {
  if (state === 'loading') {
    return (
      <div className="absolute inset-0 flex items-center justify-center bg-black/40">
        <Loader2 className="text-white animate-spin" size={48} />
      </div>
    );
  }

  if (state === 'error') {
    return (
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/40 p-4 text-center">
        <AlertCircle className="text-red-400 mb-2" size={32} />
        <p className="text-white text-sm mb-2">Unable to load preview</p>
        {onRetry && (
          <button 
            onClick={onRetry}
            className="text-sm text-purple-400 hover:text-purple-300"
          >
            Try again
          </button>
        )}
      </div>
    );
  }

  return null;
}