'use client';

import { mockData } from '@/lib/mockData';

function getStatusClass(status: string) {
  switch(status) {
    case 'Open':
      return 'bg-cta-secondary/20 text-text-secondary dark:text-text-primary';
    case 'Filled':
      return 'bg-success/20 text-success dark:text-success';
    case 'Partial':
      return 'bg-cta-primary/20 text-text-secondary dark:text-text-primary';
    default:
      return 'bg-bg-secondary/50 text-text-secondary dark:text-text-primary';
  }
}

export default function DashboardContent() {
  const { balance, recentTrades } = mockData.dashboard;

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-text-secondary dark:text-text-primary mb-6">Dashboard</h1>
      </div>
      
      {/* Balance Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-bg-secondary dark:bg-bg-primary rounded-lg p-6 shadow-sm border border-bg-secondary dark:border-bg-secondary/20">
          <div className="text-sm text-text-secondary/60 dark:text-text-primary/60">Total Balance</div>
          <div className="text-2xl font-bold text-text-secondary dark:text-text-primary">${balance.totalUSDT.toLocaleString()}</div>
        </div>
        <div className="bg-bg-secondary dark:bg-bg-primary rounded-lg p-6 shadow-sm border border-bg-secondary dark:border-bg-secondary/20">
          <div className="text-sm text-text-secondary/60 dark:text-text-primary/60">Bitcoin</div>
          <div className="text-xl font-bold text-text-secondary dark:text-text-primary">{balance.btc.amount} BTC</div>
          <div className="text-sm text-text-secondary/60 dark:text-text-primary/60">≈ ${balance.btc.value.toLocaleString()}</div>
        </div>
        <div className="bg-bg-secondary dark:bg-bg-primary rounded-lg p-6 shadow-sm border border-bg-secondary dark:border-bg-secondary/20">
          <div className="text-sm text-text-secondary/60 dark:text-text-primary/60">Ethereum</div>
          <div className="text-xl font-bold text-text-secondary dark:text-text-primary">{balance.eth.amount} ETH</div>
          <div className="text-sm text-text-secondary/60 dark:text-text-primary/60">≈ ${balance.eth.value.toLocaleString()}</div>
        </div>
        <div className="bg-bg-secondary dark:bg-bg-primary rounded-lg p-6 shadow-sm border border-bg-secondary dark:border-bg-secondary/20">
          <div className="text-sm text-text-secondary/60 dark:text-text-primary/60">USDT</div>
          <div className="text-xl font-bold text-text-secondary dark:text-text-primary">{balance.usdt} USDT</div>
        </div>
      </div>

      {/* Chart Placeholder */}
      <div className="bg-bg-secondary dark:bg-bg-primary rounded-lg p-6 shadow-sm border border-bg-secondary dark:border-bg-secondary/20">
        <h3 className="text-lg font-semibold text-text-secondary dark:text-text-primary mb-4">Portfolio Performance</h3>
        <div className="h-64 bg-bg-secondary/50 dark:bg-bg-secondary/10 rounded-lg flex items-center justify-center">
          <span className="text-text-secondary/60 dark:text-text-primary/60">Chart akan ditampilkan di sini</span>
        </div>
      </div>

      {/* Recent Trades */}
      <div className="bg-bg-secondary dark:bg-bg-primary rounded-lg shadow-sm border border-bg-secondary dark:border-bg-secondary/20">
        <div className="p-6 border-b border-bg-secondary dark:border-bg-secondary/20">
          <h3 className="text-lg font-semibold text-text-secondary dark:text-text-primary">Recent Trades</h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-bg-secondary/50 dark:bg-bg-secondary/10">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Date</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Pair</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Type</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Side</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Price</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Amount</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-text-secondary/60 dark:text-text-primary/60 uppercase tracking-wider">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-bg-secondary dark:divide-bg-secondary/20">
              {recentTrades.map((trade, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary dark:text-text-primary">{trade.date}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary dark:text-text-primary">{trade.pair}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary dark:text-text-primary">{trade.type}</td>
                  <td className={`px-6 py-4 whitespace-nowrap text-sm ${trade.side === 'Buy' ? 'text-success' : 'text-danger'}`}>
                    {trade.side}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary dark:text-text-primary">${trade.price.toLocaleString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-text-secondary dark:text-text-primary">{trade.amount}</td>
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