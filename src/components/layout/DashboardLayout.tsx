'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export default function DashboardLayout({ children }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Handle responsive behavior
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Close sidebar when clicking outside on mobile
  const handleOverlayClick = () => {
    if (isMobile) {
      setSidebarOpen(false);
    }
  };

  return (
    <div className="min-h-screen bg-bg-primary flex flex-col">
      <Header onMenuClick={() => setSidebarOpen(true)} />
      
      <div className="flex flex-1 relative">
        {/* Sidebar */}
        <Sidebar 
          isOpen={sidebarOpen} 
          onClose={() => setSidebarOpen(false)} 
        />
        
        {/* Overlay for mobile */}
        {sidebarOpen && isMobile && (
          <div 
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            onClick={handleOverlayClick}
          />
        )}
        
        {/* Main Content Area */}
        <main className={`
          flex-1 transition-all duration-300 ease-in-out
          ${sidebarOpen && isMobile ? 'ml-0' : 'ml-0'}
          lg:ml-0
          p-4 sm:p-6 lg:p-8
          min-h-[calc(100vh-4rem)]
          bg-bg-primary
        `}>
          <div className="max-w-7xl mx-auto w-full">
            <div className="animate-fade-in">
              {children}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}