import React from 'react';
import { Music, DollarSign, Users, TrendingUp } from 'lucide-react';

const STATS = [
  { icon: Music, label: 'Total Beats', value: '24' },
  { icon: DollarSign, label: 'Revenue', value: '$1,234' },
  { icon: Users, label: 'Customers', value: '56' },
  { icon: TrendingUp, label: 'Sales', value: '+12%' },
];

export default function Overview() {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-white">Overview</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {STATS.map(({ icon: Icon, label, value }) => (
          <div key={label} className="bg-gray-800 p-6 rounded-lg">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-gray-400 text-sm">{label}</p>
                <p className="text-2xl font-bold text-white mt-1">{value}</p>
              </div>
              <Icon className="text-purple-500" size={24} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}