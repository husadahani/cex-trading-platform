'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  BarChart3, 
  TrendingUp, 
  ArrowLeftRight, 
  Wallet, 
  Coins, 
  AreaChart, 
  DollarSign, 
  CreditCard, 
  Handshake, 
  History, 
  User, 
  Shield, 
  IdCard, 
  Settings, 
  HelpCircle, 
  LogOut 
} from 'lucide-react';
import { mockData } from '@/lib/mockData';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const navigation = [
  {
    title: 'Core',
    items: [
      { name: 'Dashboard', href: '/dashboard', icon: BarChart3 },
      { name: 'Markets', href: '/markets', icon: TrendingUp },
      { name: 'Trade', href: '/trade', icon: ArrowLeftRight },
      { name: 'Wallet', href: '/wallet', icon: Wallet },
    ]
  },
  {
    title: 'Finance',
    items: [
      { name: 'Spot', href: '/spot', icon: Coins },
      { name: 'Futures', href: '/futures', icon: AreaChart },
      { name: 'Earn', href: '/earn', icon: DollarSign },
      { name: 'Cards', href: '/cards', icon: CreditCard },
      { name: 'P2P Trading', href: '/p2p', icon: Handshake },
    ]
  },
  {
    title: 'Management',
    items: [
      { name: 'Transaction History', href: '/history', icon: History },
      { name: 'Account', href: '/account', icon: User },
      { name: 'Security', href: '/security', icon: Shield },
      { name: 'KYC Verification', href: '/kyc', icon: IdCard },
      { name: 'Settings', href: '/settings', icon: Settings },
      { name: 'Help Center', href: '/help', icon: HelpCircle },
    ]
  }
];

export default function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* Sidebar Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={onClose}
        />
      )}

      {/* Sidebar */}
      <aside className={`
        fixed lg:static inset-y-0 left-0 z-50 w-64 bg-white dark:bg-gray-800 
        border-r border-gray-200 dark:border-gray-700 transform transition-transform 
        duration-300 ease-in-out mt-16 lg:mt-0 lg:translate-x-0
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        <div className="h-full overflow-y-auto p-4 space-y-6">
          {/* Navigation Sections */}
          {navigation.map((section) => (
            <div key={section.title}>
              <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                {section.title}
              </h3>
              <nav className="space-y-1">
                {section.items.map((item) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      href={item.href}
                      className={`
                        flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors
                        ${isActive 
                          ? 'bg-primary text-white' 
                          : 'text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                        }
                      `}
                      onClick={onClose}
                    >
                      <item.icon className="mr-3 w-5 h-5" />
                      {item.name}
                    </Link>
                  );
                })}
              </nav>
            </div>
          ))}

          {/* Logout */}
          <div>
            <button className="flex items-center px-3 py-2 text-sm font-medium rounded-md w-full text-left text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20">
              <LogOut className="mr-3 w-5 h-5" />
              Logout
            </button>
          </div>

          {/* Market Watch */}
          <div className="border-t border-gray-200 dark:border-gray-700 pt-4">
            <h3 className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
              Market Watch
            </h3>
            <div className="space-y-2">
              {mockData.markets.slice(0, 4).map((market) => (
                <div key={market.symbol} className="flex justify-between items-center py-2">
                  <span className="text-sm text-gray-600 dark:text-gray-300">{market.symbol}</span>
                  <span className={`text-sm font-semibold ${market.change >= 0 ? 'text-success' : 'text-danger'}`}>
                    ${market.price.toLocaleString()}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}