'use client';

import { Plus, ShoppingCart, Fuel } from 'lucide-react';

export default function CardsContent() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Cards</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg p-6 text-white">
          <div className="text-sm opacity-80">CEX Visa Card</div>
          <div className="text-xl font-bold mt-2">**** **** **** 1234</div>
          <div className="text-sm opacity-80 mt-4">John Doe</div>
          <div className="text-sm opacity-80">Exp: 12/26</div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 flex items-center justify-center">
          <div className="text-center">
            <Plus className="text-gray-400 text-2xl mb-2" />
            <div className="text-sm text-gray-500 dark:text-gray-400">Apply for New Card</div>
          </div>
        </div>
      </div>

      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Card Transactions</h3>
        </div>
        <div className="divide-y divide-gray-200 dark:divide-gray-700">
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900 rounded-full flex items-center justify-center">
                <ShoppingCart className="text-blue-600 dark:text-blue-400 text-sm" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Amazon Purchase</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Today, 14:32</div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">-$89.99</div>
          </div>
          <div className="p-6 flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-green-100 dark:bg-green-900 rounded-full flex items-center justify-center">
                <Fuel className="text-green-600 dark:text-green-400 text-sm" />
              </div>
              <div>
                <div className="text-sm font-medium text-gray-900 dark:text-white">Gas Station</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">Yesterday, 08:15</div>
              </div>
            </div>
            <div className="text-sm font-medium text-gray-900 dark:text-white">-$45.30</div>
          </div>
        </div>
      </div>
    </div>
  );
}