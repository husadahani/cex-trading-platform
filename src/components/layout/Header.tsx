'use client';

import { Bell, Menu, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [notifications] = useState(3);

  return (
    <header className="bg-white dark:bg-gray-800 shadow-sm border-b border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-700"
          >
            <Menu className="w-5 h-5 text-gray-600 dark:text-gray-300" />
          </button>
          <h1 className="text-2xl font-bold text-primary">CEX</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700">
            <Bell className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gray-300 dark:bg-gray-600 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-gray-600 dark:text-gray-300" />
            </div>
            <span className="hidden md:block text-gray-700 dark:text-gray-200">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
}