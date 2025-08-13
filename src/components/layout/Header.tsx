'use client';

import { Bell, Menu, User, Search, Settings } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onMenuClick: () => void;
}

export default function Header({ onMenuClick }: HeaderProps) {
  const [notifications] = useState(3);

  return (
    <header className="bg-bg-secondary-light dark:bg-bg-secondary-dark border-b border-border-primary shadow-sm sticky top-0 z-30">
      <div className="flex items-center justify-between px-4 py-4 lg:px-6">
        {/* Left Section */}
        <div className="flex items-center space-x-4">
          <button
            onClick={onMenuClick}
            className="lg:hidden p-2 rounded-lg hover:bg-bg-tertiary transition-colors"
          >
            <Menu className="w-5 h-5 text-text-secondary" />
          </button>
          
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-text-secondary font-bold text-sm">T</span>
            </div>
            <h1 className="text-xl font-bold text-text-primary hidden sm:block">Trading Platform</h1>
          </div>
        </div>
        
        {/* Center Section - Search (Desktop) */}
        <div className="hidden lg:flex items-center flex-1 max-w-md mx-8">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
            <input
              type="text"
              placeholder="Search markets, assets..."
              className="w-full pl-10 pr-4 py-2 bg-bg-primary border border-border-primary rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary transition-all"
            />
          </div>
        </div>
        
        {/* Right Section */}
        <div className="flex items-center space-x-2 lg:space-x-4">
          {/* Search Button (Mobile) */}
          <button className="lg:hidden p-2 rounded-lg hover:bg-bg-tertiary transition-colors">
            <Search className="w-5 h-5 text-text-secondary" />
          </button>
          
          {/* Notifications */}
          <button className="relative p-2 rounded-lg hover:bg-bg-tertiary transition-colors">
            <Bell className="w-5 h-5 text-text-secondary" />
            {notifications > 0 && (
              <span className="absolute -top-1 -right-1 bg-danger text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">
                {notifications}
              </span>
            )}
          </button>
          
          {/* Settings */}
          <button className="p-2 rounded-lg hover:bg-bg-tertiary transition-colors">
            <Settings className="w-5 h-5 text-text-secondary" />
          </button>
          
          {/* User Profile */}
          <div className="flex items-center space-x-2 lg:space-x-3">
            <div className="w-8 h-8 lg:w-10 lg:h-10 bg-gradient-primary rounded-full flex items-center justify-center">
              <User className="w-4 h-4 lg:w-5 lg:h-5 text-text-secondary" />
            </div>
            <div className="hidden md:block">
              <div className="text-sm font-medium text-text-primary">John Doe</div>
              <div className="text-xs text-text-tertiary">Premium User</div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Mobile Search Bar */}
      <div className="lg:hidden px-4 pb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-text-tertiary" />
          <input
            type="text"
            placeholder="Search markets, assets..."
            className="w-full pl-10 pr-4 py-2 bg-bg-primary border border-border-primary rounded-lg text-text-primary placeholder-text-tertiary focus:outline-none focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary transition-all"
          />
        </div>
      </div>
    </header>
  );
}