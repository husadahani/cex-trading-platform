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
  LogOut,
  X
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
      {/* Mobile Sidebar */}
      <div className={`
        fixed inset-y-0 left-0 z-50 w-80 bg-bg-secondary border-r border-border-primary
        transform transition-transform duration-300 ease-in-out lg:hidden
        ${isOpen ? 'translate-x-0' : '-translate-x-full'}
      `}>
        {/* Mobile Header */}
        <div className="flex items-center justify-between p-4 border-b border-border-primary">
          <h2 className="text-lg font-semibold text-text-primary">Menu</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg hover:bg-bg-tertiary transition-colors"
          >
            <X className="w-5 h-5 text-text-secondary" />
          </button>
        </div>

        {/* Navigation Content */}
        <div className="h-full overflow-y-auto">
          <div className="p-4 space-y-6">
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3 px-3">
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
                          flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200
                          ${isActive 
                            ? 'bg-gradient-primary text-text-secondary shadow-lg' 
                            : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                          }
                        `}
                        onClick={onClose}
                      >
                        <item.icon className={`mr-3 w-5 h-5 ${isActive ? 'text-text-secondary' : 'text-text-tertiary'}`} />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}

            {/* Logout */}
            <div className="pt-4 border-t border-border-primary">
              <button className="flex items-center px-3 py-3 text-sm font-medium rounded-lg w-full text-left text-danger hover:bg-danger/10 transition-colors">
                <LogOut className="mr-3 w-5 h-5" />
                Logout
              </button>
            </div>

            {/* Market Watch */}
            <div className="border-t border-border-primary pt-4">
              <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3 px-3">
                Market Watch
              </h3>
              <div className="space-y-2">
                {mockData.markets.slice(0, 4).map((market) => (
                  <div key={market.symbol} className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-bg-tertiary transition-colors">
                    <span className="text-sm text-text-secondary">{market.symbol}</span>
                    <span className={`text-sm font-semibold ${market.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      ${market.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop Sidebar */}
      <aside className="hidden lg:block w-80 bg-bg-secondary border-r border-border-primary h-screen sticky top-0">
        <div className="h-full overflow-y-auto">
          <div className="p-6 space-y-6">
            {/* Logo/Brand */}
            <div className="pb-4 border-b border-border-primary">
              <h1 className="text-xl font-bold text-text-primary">Trading Platform</h1>
            </div>

            {/* Navigation Sections */}
            {navigation.map((section) => (
              <div key={section.title}>
                <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3 px-3">
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
                          flex items-center px-3 py-3 text-sm font-medium rounded-lg transition-all duration-200
                          ${isActive 
                            ? 'bg-gradient-primary text-text-secondary shadow-lg' 
                            : 'text-text-secondary hover:bg-bg-tertiary hover:text-text-primary'
                          }
                        `}
                      >
                        <item.icon className={`mr-3 w-5 h-5 ${isActive ? 'text-text-secondary' : 'text-text-tertiary'}`} />
                        {item.name}
                      </Link>
                    );
                  })}
                </nav>
              </div>
            ))}

            {/* Logout */}
            <div className="pt-4 border-t border-border-primary">
              <button className="flex items-center px-3 py-3 text-sm font-medium rounded-lg w-full text-left text-danger hover:bg-danger/10 transition-colors">
                <LogOut className="mr-3 w-5 h-5" />
                Logout
              </button>
            </div>

            {/* Market Watch */}
            <div className="border-t border-border-primary pt-4">
              <h3 className="text-xs font-semibold text-text-tertiary uppercase tracking-wider mb-3 px-3">
                Market Watch
              </h3>
              <div className="space-y-2">
                {mockData.markets.slice(0, 4).map((market) => (
                  <div key={market.symbol} className="flex justify-between items-center py-2 px-3 rounded-lg hover:bg-bg-tertiary transition-colors">
                    <span className="text-sm text-text-secondary">{market.symbol}</span>
                    <span className={`text-sm font-semibold ${market.change >= 0 ? 'text-success' : 'text-danger'}`}>
                      ${market.price.toLocaleString()}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
}