'use client';

import { mockData } from '@/lib/mockData';

export default function EarnContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Earn</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active Earning Products</h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          {mockData.earnings.map((earning, index) => (
            <div key={index} className="p-6 flex items-center justify-between">
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">{earning.product}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">APY: {earning.apy}</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium text-gray-900 dark:text-white">{earning.amount} staked</div>
                <div className="text-sm text-success">+{earning.earnings} earned</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}