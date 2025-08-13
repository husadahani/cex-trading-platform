'use client';

import { useState } from 'react';

export default function TradeContent() {
  const [selectedPair, setSelectedPair] = useState('BTC/USDT');

  const tradingPairs = ['BTC/USDT', 'ETH/USDT', 'SOL/USDT', 'BNB/USDT'];

  return (
    <div className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4 sm:mb-6">Trade</h1>
      </div>
      
      {/* Trading Pair Selector */}
      <div className="bg-bg-secondary-light dark:bg-bg-secondary-dark rounded-lg p-4 shadow-sm border border-border-primary hover:shadow-lg transition-shadow">
        <div className="flex flex-wrap gap-2">
          {tradingPairs.map((pair) => (
            <button
              key={pair}
              onClick={() => setSelectedPair(pair)}
              className={`px-3 sm:px-4 py-2 rounded-lg text-sm transition-colors ${
                selectedPair === pair
                  ? 'bg-cta-primary text-text-secondary'
                  : 'bg-bg-primary dark:bg-bg-secondary-dark text-text-secondary hover:bg-bg-tertiary dark:hover:bg-bg-primary'
              }`}
            >
              {pair}
            </button>
          ))}
        </div>
      </div>

      {/* Chart */}
      <div className="bg-bg-secondary-light dark:bg-bg-secondary-dark rounded-lg p-4 sm:p-6 shadow-sm border border-border-primary hover:shadow-lg transition-shadow">
        <h3 className="text-base sm:text-lg font-semibold text-text-primary mb-4">{selectedPair} Chart</h3>
        <div className="h-64 sm:h-96 bg-bg-primary dark:bg-bg-secondary-dark rounded-lg flex items-center justify-center">
          <span className="text-text-tertiary text-sm sm:text-base">Trading chart akan ditampilkan di sini</span>
        </div>
      </div>

      {/* Trading Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
        {/* Buy Section */}
        <div className="bg-bg-secondary-light dark:bg-bg-secondary-dark rounded-lg p-4 sm:p-6 shadow-sm border border-border-primary hover:shadow-lg transition-shadow">
          <h3 className="text-base sm:text-lg font-semibold text-success mb-4">Buy {selectedPair.split('/')[0]}</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Order Type</label>
              <select className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary bg-bg-primary dark:bg-bg-secondary-dark text-text-primary">
                <option>Limit Order</option>
                <option>Market Order</option>
                <option>Stop Limit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Price (USDT)</label>
              <input type="number" placeholder="36,789.45" className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary bg-bg-primary dark:bg-bg-secondary-dark text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Amount ({selectedPair.split('/')[0]})</label>
              <input type="number" placeholder="0.001" className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary bg-bg-primary dark:bg-bg-secondary-dark text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Total (USDT)</label>
              <input type="text" placeholder="36.79" readOnly className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg bg-bg-tertiary dark:bg-bg-primary text-text-primary" />
            </div>
            <button className="w-full bg-success hover:bg-success/80 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm sm:text-base">
              Buy {selectedPair.split('/')[0]}
            </button>
          </div>
        </div>

        {/* Sell Section */}
        <div className="bg-bg-secondary-light dark:bg-bg-secondary-dark rounded-lg p-4 sm:p-6 shadow-sm border border-border-primary hover:shadow-lg transition-shadow">
          <h3 className="text-base sm:text-lg font-semibold text-danger mb-4">Sell {selectedPair.split('/')[0]}</h3>
          <div className="space-y-3 sm:space-y-4">
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Order Type</label>
              <select className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary bg-bg-primary dark:bg-bg-secondary-dark text-text-primary">
                <option>Limit Order</option>
                <option>Market Order</option>
                <option>Stop Limit</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Price (USDT)</label>
              <input type="number" placeholder="36,789.45" className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary bg-bg-primary dark:bg-bg-secondary-dark text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Amount ({selectedPair.split('/')[0]})</label>
              <input type="number" placeholder="0.001" className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg focus:ring-2 focus:ring-cta-primary/20 focus:border-cta-primary bg-bg-primary dark:bg-bg-secondary-dark text-text-primary" />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-2">Total (USDT)</label>
              <input type="text" placeholder="36.79" readOnly className="w-full px-3 py-2 text-sm sm:text-base border border-border-primary rounded-lg bg-bg-tertiary dark:bg-bg-primary text-text-primary" />
            </div>
            <button className="w-full bg-danger hover:bg-danger/80 text-white font-medium py-3 px-4 rounded-lg transition-colors text-sm sm:text-base">
              Sell {selectedPair.split('/')[0]}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}