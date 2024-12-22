import React from 'react';
import { useToast } from './useToast';
import ToastMessage from './ToastMessage';

export default function ToastContainer() {
  const { toasts } = useToast();

  return (
    <div className="fixed bottom-4 right-4 z-50 space-y-2">
      {toasts.map(toast => (
        <ToastMessage key={toast.id} {...toast} />
      ))}
    </div>
  );
}