'use client';

import { mockData } from '@/lib/mockData';
import { Plus, Minus, ArrowLeftRight } from 'lucide-react';

export default function WalletContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Wallet</h1>
      </div>
      
      {/* Total Balance */}
      <div className="bg-gradient-to-r from-primary to-purple-700 rounded-lg p-6 text-white">
        <div className="text-sm opacity-80">Total Portfolio Value</div>
        <div className="text-3xl font-bold">${mockData.dashboard.balance.totalUSDT.toLocaleString()}</div>
        <div className="text-sm opacity-80 mt-2">≈ {mockData.dashboard.balance.totalUSDT.toLocaleString()} USDT</div>
      </div>

      {/* Assets */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">My Assets</h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {mockData.walletAssets.map((asset, index) => (
            <div key={index} className="p-6 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-full flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-600 dark:text-gray-300">{asset.symbol}</span>
                </div>
                <div>
                  <div className="text-sm font-medium text-gray-900 dark:text-white">{asset.name}</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">{asset.symbol}</div>
                </div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{asset.balance} {asset.symbol}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">${asset.value.toLocaleString()}</div>
                <div className={`text-xs ${asset.change >= 0 ? 'text-success' : 'text-danger'}`}>
                  {asset.change >= 0 ? '+' : ''}{asset.change}%
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <button className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Plus className="text-success text-xl mb-2" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">Deposit</div>
        </button>
        <button className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <Minus className="text-danger text-xl mb-2" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">Withdraw</div>
        </button>
        <button className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors">
          <ArrowLeftRight className="text-primary text-xl mb-2" />
          <div className="text-sm font-medium text-gray-900 dark:text-white">Convert</div>
        </button>
      </div>
    </div>
  );
}