export interface Balance {
  totalUSDT: number;
  btc: { amount: number; value: number };
  eth: { amount: number; value: number };
  usdt: number;
}

export interface Trade {
  date: string;
  pair: string;
  type: string;
  side: 'Buy' | 'Sell';
  price: number;
  amount: number;
  status: 'Open' | 'Filled' | 'Partial';
}

export interface Market {
  symbol: string;
  price: number;
  change: number;
  volume: string;
}

export interface WalletAsset {
  name: string;
  symbol: string;
  balance: number;
  value: number;
  change: number;
}

export interface SpotTrade {
  pair: string;
  side: 'Buy' | 'Sell';
  amount: number;
  price: number;
  total: number;
  time: string;
}

export interface FuturesPosition {
  symbol: string;
  side: 'Long' | 'Short';
  size: number;
  entryPrice: number;
  markPrice: number;
  pnl: number;
  roe: number;
}

export interface Earning {
  product: string;
  apy: string;
  amount: number;
  earnings: number;
}

export interface DashboardData {
  balance: Balance;
  recentTrades: Trade[];
}

export interface MockData {
  dashboard: DashboardData;
  markets: Market[];
  walletAssets: WalletAsset[];
  spotTrades: SpotTrade[];
  futuresPositions: FuturesPosition[];
  earnings: Earning[];
}