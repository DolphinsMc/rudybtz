import React from 'react';
import { Plus, Filter } from 'lucide-react';
import { Button } from '../../ui';

export default function BeatsToolbar() {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4">
        <h2 className="text-2xl font-bold text-white">My Beats</h2>
        <Button variant="ghost" size="sm" icon={Filter}>
          Filter
        </Button>
      </div>
      <Button variant="primary" icon={Plus}>
        Upload Beat
      </Button>
    </div>
  );
}