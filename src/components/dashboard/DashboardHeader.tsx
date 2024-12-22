import React from 'react';
import { LogOut, Settings, User } from 'lucide-react';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../hooks/useAuth';
import { Button } from '../ui';

export default function DashboardHeader() {
  const { user } = useAuth();

  const handleLogout = async () => {
    await supabase.auth.signOut();
  };

  return (
    <header className="bg-gray-800 border-b border-gray-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <h1 className="text-xl font-bold text-white">Dashboard</h1>
          
          <div className="flex items-center space-x-4">
            <span className="text-gray-300">{user?.email}</span>
            <Button
              variant="ghost"
              size="sm"
              icon={Settings}
              aria-label="Settings"
            />
            <Button
              variant="ghost"
              size="sm"
              icon={User}
              aria-label="Profile"
            />
            <Button
              variant="ghost"
              size="sm"
              icon={LogOut}
              onClick={handleLogout}
              aria-label="Logout"
            />
          </div>
        </div>
      </div>
    </header>
  );
}