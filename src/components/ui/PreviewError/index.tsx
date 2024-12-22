import React from 'react';
import { AlertCircle, RefreshCw } from 'lucide-react';
import { Button } from '../Button';

interface PreviewErrorProps {
  onRetry?: () => void;
  message?: string;
}

export default function PreviewError({ 
  onRetry,
  message = "We couldn't load the preview at this time."
}: PreviewErrorProps) {
  return (
    <div className="flex flex-col items-center justify-center p-6 bg-gray-800/50 rounded-lg text-center space-y-4">
      <AlertCircle className="text-red-400 mb-2" size={32} />
      
      <div className="space-y-2">
        <p className="text-white font-medium">{message}</p>
        <p className="text-gray-400 text-sm">
          This might be due to a temporary connection issue.
        </p>
      </div>

      {onRetry && (
        <Button
          variant="secondary"
          size="sm"
          icon={RefreshCw}
          onClick={onRetry}
          className="mt-4"
        >
          Try Again
        </Button>
      )}
    </div>
  );
}