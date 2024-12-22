import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { useToast } from './useToast';
import { Toast } from './types';

export default function ToastMessage({ id, type, message }: Toast) {
  const { removeToast } = useToast();

  useEffect(() => {
    const timer = setTimeout(() => {
      removeToast(id);
    }, 5000);

    return () => clearTimeout(timer);
  }, [id, removeToast]);

  const styles = {
    success: 'bg-green-500',
    error: 'bg-red-500',
    info: 'bg-blue-500'
  };

  return (
    <div className={`${styles[type]} text-white px-4 py-2 rounded-lg flex items-center justify-between min-w-[300px]`}>
      <span>{message}</span>
      <button 
        onClick={() => removeToast(id)}
        className="ml-2 hover:opacity-80"
        aria-label="Close notification"
      >
        <X size={16} />
      </button>
    </div>
  );
}