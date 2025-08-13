import { MockData } from '@/types';

export const mockData: MockData = {
  dashboard: {
    balance: {
      totalUSDT: 12458.36,
      btc: { amount: 0.1846, value: 6791.25 },
      eth: { amount: 1.2532, value: 3052.24 },
      usdt: 2614.87
    },
    recentTrades: [
      { date: '2023-06-12 14:23', pair: 'BTC/USDT', type: 'Limit', side: 'Buy', price: 36450, amount: 0.12, status: 'Open' },
      { date: '2023-06-10 09:18', pair: 'ETH/USDT', type: 'Market', side: 'Buy', price: 2415.30, amount: 0.5, status: 'Filled' },
      { date: '2023-06-08 11:45', pair: 'SOL/USDT', type: 'Limit', side: 'Sell', price: 80.25, amount: 10, status: 'Partial' }
    ]
  },
  markets: [
    { symbol: 'BTC/USDT', price: 36789.45, change: 2.34, volume: '1.2B' },
    { symbol: 'ETH/USDT', price: 2435.12, change: 1.87, volume: '856M' },
    { symbol: 'BNB/USDT', price: 412.30, change: -0.95, volume: '234M' },
    { symbol: 'SOL/USDT', price: 78.95, change: 4.56, volume: '187M' },
    { symbol: 'ADA/USDT', price: 0.5432, change: -1.23, volume: '123M' }
  ],
  walletAssets: [
    { name: 'Bitcoin', symbol: 'BTC', balance: 0.1846, value: 6791.25, change: 2.34 },
    { name: 'Ethereum', symbol: 'ETH', balance: 1.2532, value: 3052.24, change: 1.87 },
    { name: 'Tether', symbol: 'USDT', balance: 2614.87, value: 2614.87, change: 0 },
    { name: 'Binance Coin', symbol: 'BNB', balance: 12.45, value: 5133.24, change: -0.95 }
  ],
  spotTrades: [
    { pair: 'BTC/USDT', side: 'Buy', amount: 0.05, price: 36500, total: 1825, time: '14:32:45' },
    { pair: 'ETH/USDT', side: 'Sell', amount: 0.25, price: 2440, total: 610, time: '14:31:22' },
    { pair: 'BNB/USDT', side: 'Buy', amount: 5, price: 412, total: 2060, time: '14:29:18' }
  ],
  futuresPositions: [
    { symbol: 'BTCUSDT', side: 'Long', size: 0.1, entryPrice: 36200, markPrice: 36789, pnl: 58.9, roe: 12.34 },
    { symbol: 'ETHUSDT', side: 'Short', size: 0.5, entryPrice: 2450, markPrice: 2435, pnl: 7.5, roe: 3.21 }
  ],
  earnings: [
    { product: 'BTC Savings', apy: '5.2%', amount: 0.045, earnings: 0.000234 },
    { product: 'ETH Staking', apy: '6.8%', amount: 2.5, earnings: 0.0046 },
    { product: 'USDT Flexible', apy: '3.5%', amount: 1000, earnings: 0.096 }
  ]
};