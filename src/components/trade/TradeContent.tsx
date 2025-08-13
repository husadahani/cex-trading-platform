'use client';

import { useState } from 'react';

export default function TradeContent() {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');

  const tradingPairs = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT'];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Trade</h1>
      </div>
      
      {/* Trading Pair Selector */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-4 shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="flex flex-wrap gap-2">
          {tradingPairs.map((pair) => (
            <button
              key={pair}
              onClick={() => setSelectedPair(pair)}
              className={`px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedPair === pair
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600'
              }`}
            >
              {pair}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">{selectedPair} Chart</h3>
        <div className="h-96 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Trading chart akan ditampilkan di sini</span>
        </div>
      </div>

      {/* Trading Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Buy Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-success mb-4">Buy {selectedPair.split('/')[0]}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Order Type</label>
              <select className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
                <option>Limit Order</option>
                <option>Market Order</option>
                <option>Stop Limit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price (USDT)</label>
              <input type="number" placeholder="36,789.45" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount ({selectedPair.split('/')[0]})</label>
              <input type="number" placeholder="0.001" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total (USDT)</label>
              <input type="text" placeholder="36.79" readOnly className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-600 dark:text-white" />
            </div>
            <button className="w-full bg-success hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Buy {selectedPair.split('/')[0]}
            </button>
          </div>
        </div>

        {/* Sell Section */}
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-danger mb-4">Sell {selectedPair.split('/')[0]}</h3>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Order Type</label>
              <select className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white">
                <option>Limit Order</option>
                <option>Market Order</option>
                <option>Stop Limit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Price (USDT)</label>
              <input type="number" placeholder="36,789.45" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Amount ({selectedPair.split('/')[0]})</label>
              <input type="number" placeholder="0.001" className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent dark:bg-gray-700 dark:text-white" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">Total (USDT)</label>
              <input type="text" placeholder="36.79" readOnly className="w-full px-3 py-2 text-base border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-600 dark:text-white" />
            </div>
            <button className="w-full bg-danger hover:bg-red-700 text-white font-medium py-3 px-4 rounded-lg transition-colors">
              Sell {selectedPair.split('/')[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}