'use client';

import { Bell, Menu, User } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [notifications] = useState(3);

  return (
    <header className="bg-bg-secondary dark:bg-bg-primary shadow-sm border-b border-bg-secondary dark:border-bg-secondary/20">
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-md hover:bg-bg-secondary/50 dark:hover:bg-bg-secondary/10 transition-colors"
          >
            <Menu className="w-5 h-5 text-text-secondary dark:text-text-primary" />
          </button>
          <h1 className="text-2xl font-bold text-cta-primary">CEX</h1>
        </div>
        
        <div className="flex items-center space-x-4">
          <button className="relative p-2 rounded-full hover:bg-bg-secondary/50 dark:hover:bg-bg-secondary/10 transition-colors">
            <Bell className="w-5 h-5 text-text-secondary dark:text-text-primary" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                {notifications}
              </span>
            )}
          </button>
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-cta-secondary dark:bg-cta-secondary/80 rounded-full flex items-center justify-center">
              <User className="w-4 h-4 text-text-secondary" />
            </div>
            <span className="hidden md:block text-text-secondary dark:text-text-primary">John Doe</span>
          </div>
        </div>
      </div>
    </header>
  );
}