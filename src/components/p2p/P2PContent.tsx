'use client';

import { Handshake } from 'lucide-react';

export default function P2PContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">P2P Trading</h1>
      </div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Active P2P Orders</h3>
        </div>
        <div className="p-6">
          <div className="text-center py-8">
            <Handshake className="text-gray-400 text-3xl mb-4 mx-auto" />
            <p className="text-gray-500 dark:text-gray-400">No active P2P orders</p>
            <button className="mt-4 bg-primary hover:bg-purple-700 text-white px-4 py-2 rounded-lg">
              Create New Order
            </button>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-success mb-4">Buy Offers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <div className="text-sm font-medium">User123</div>
                <div className="text-xs text-gray-500">98.5% completion</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">$36,800</div>
                <div className="text-xs text-gray-500">0.5-2.0 BTC</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-danger mb-4">Sell Offers</h3>
          <div className="space-y-3">
            <div className="flex justify-between items-center p-3 bg-gray-50 dark:bg-gray-700 rounded">
              <div>
                <div className="text-sm font-medium">Trader456</div>
                <div className="text-xs text-gray-500">95.2% completion</div>
              </div>
              <div className="text-right">
                <div className="text-sm font-medium">$36,750</div>
                <div className="text-xs text-gray-500">0.1-1.0 BTC</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}