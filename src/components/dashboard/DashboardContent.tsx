'use client';

import { mockData } from '@/lib/mockData';

function getStatusClass(status: string) {
  switch(status) {
    case 'Open':
      return 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200';
    case 'Filled':
      return 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200';
    case 'Partial':
      return 'bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200';
    default:
      return 'bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200';
  }
}

export default function DashboardContent() {
  const { balance, recentTrades } = mockData.dashboard;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Dashboard</h1>
      </div>
      
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">Total Balance</div>
          <div className="text-2xl font-bold text-gray-900 dark:text-white">${balance.totalUSDT.toLocaleString()}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">Bitcoin</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{balance.btc.amount} BTC</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">≈ ${balance.btc.value.toLocaleString()}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">Ethereum</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{balance.eth.amount} ETH</div>
          <div className="text-sm text-gray-500 dark:text-gray-400">≈ ${balance.eth.value.toLocaleString()}</div>
        </div>
        <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
          <div className="text-sm text-gray-500 dark:text-gray-400">USDT</div>
          <div className="text-xl font-bold text-gray-900 dark:text-white">{balance.usdt} USDT</div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-sm border border-gray-200 dark:border-gray-700">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">Portfolio Performance</h3>
        <div className="h-64 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center">
          <span className="text-gray-500 dark:text-gray-400">Chart akan ditampilkan di sini</span>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700">
        <div className="p-6 border-b border-gray-200 dark:border-gray-700">
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Trades</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-gray-50 dark:bg-gray-700">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Pair</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Side</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
              {recentTrades.map((trade, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{trade.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{trade.pair}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{trade.type}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${trade.side === 'Buy' ? 'text-success' : 'text-danger'}`}>
                    {trade.side}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">${trade.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900 dark:text-white">{trade.amount}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${getStatusClass(trade.status)}`}>
                      {trade.status}
                    </span>
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