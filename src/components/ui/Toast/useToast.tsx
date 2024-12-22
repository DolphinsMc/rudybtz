import { create } from 'zustand';
import { Toast, ToastType } from './types';

interface ToastStore {
  toasts: Toast[];
  addToast: (type: ToastType, message: string) => void;
  removeToast: (id: string) => void;
}

export const useToast = create<ToastStore>((set) => ({
  toasts: [],
  addToast: (type, message) => set((state) => ({
    toasts: [...state.toasts, {
      id: Date.now().toString(),
      type,
      message
    }]
  })),
  removeToast: (id) => set((state) => ({
    toasts: state.toasts.filter(toast => toast.id !== id)
  }))
}));