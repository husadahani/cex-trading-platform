'use client';

import { mockData } from '@/lib/mockData';

export default function MarketsContent() {
  return (
    <div className="space-y-4 sm:space-y-6 px-4 sm:px-6 lg:px-8">
      <div>
        <h1 className="text-xl sm:text-2xl lg:text-3xl font-bold text-text-primary mb-4 sm:mb-6">Markets</h1>
      </div>
      
      <div className="bg-bg-secondary dark:bg-bg-tertiary rounded-lg shadow-sm border border-border-primary hover:shadow-lg transition-shadow">
        <div className="p-4 sm:p-6 border-b border-border-primary">
          <h3 className="text-base sm:text-lg font-semibold text-text-primary">Cryptocurrency Markets</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-bg-primary dark:bg-bg-secondary">
              <tr>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Symbol</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Price</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">24h Change</th>
                <th className="hidden sm:table-cell px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Volume</th>
                <th className="px-3 sm:px-6 py-3 text-left text-xs font-medium text-text-tertiary uppercase tracking-wider">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border-primary">
              {mockData.markets.map((market, index) => (
                <tr key={index} className="hover:bg-bg-primary dark:hover:bg-bg-secondary transition-colors">
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap">
                    <div className="text-sm font-medium text-text-primary">{market.symbol}</div>
                  </td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm text-text-primary">${market.price.toLocaleString()}</td>
                  <td className={`px-3 sm:px-6 py-4 whitespace-nowrap text-sm font-medium ${market.change >= 0 ? 'text-success' : 'text-danger'}`}>
                    {market.change >= 0 ? '+' : ''}{market.change}%
                  </td>
                  <td className="hidden sm:table-cell px-6 py-4 whitespace-nowrap text-sm text-text-primary">{market.volume}</td>
                  <td className="px-3 sm:px-6 py-4 whitespace-nowrap text-sm">
                    <button className="bg-cta-primary hover:bg-cta-hover text-text-secondary px-3 py-1 rounded text-xs font-medium transition-colors">Trade</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}