import React from 'react';
import { Home, Music, Package, Settings, Users } from 'lucide-react';

const MENU_ITEMS = [
  { icon: Home, label: 'Overview', href: '/dashboard' },
  { icon: Music, label: 'My Beats', href: '/dashboard/beats' },
  { icon: Package, label: 'Products', href: '/dashboard/products' },
  { icon: Users, label: 'Customers', href: '/dashboard/customers' },
  { icon: Settings, label: 'Settings', href: '/dashboard/settings' },
];

export default function DashboardSidebar() {
  return (
    <aside className="w-64 bg-gray-800 min-h-screen p-4">
      <nav className="space-y-2">
        {MENU_ITEMS.map(({ icon: Icon, label, href }) => (
          <a
            key={href}
            href={href}
            className="flex items-center space-x-2 px-4 py-2 rounded-lg text-gray-300 hover:bg-gray-700 hover:text-white transition-colors"
          >
            <Icon size={20} />
            <span>{label}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}