import React from 'react';

interface ActionButtonProps {
  variant: 'primary' | 'secondary';
  children: React.ReactNode;
  onClick?: () => void;
}

function ActionButton({ variant, children, onClick }: ActionButtonProps) {
  const baseStyles = "px-8 py-3 rounded-full font-medium transition-colors";
  const styles = variant === 'primary'
    ? `${baseStyles} bg-purple-600 text-white hover:bg-purple-700`
    : `${baseStyles} border-2 border-purple-500 text-white hover:bg-purple-500/20`;

  return (
    <button className={styles} onClick={onClick}>
      {children}
    </button>
  );
}

export default function CallToAction() {
  return (
    <div className="flex flex-wrap gap-4 justify-center md:justify-start">
      <ActionButton variant="primary">
        Explore Beats
      </ActionButton>
      <ActionButton variant="secondary">
        Listen to Rudy B Bass
      </ActionButton>
    </div>
  );
}