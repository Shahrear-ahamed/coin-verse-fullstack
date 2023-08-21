export interface Pagination {
  limit: number;
  page: number;
  pages: number;
  nextPage: boolean;
  previousPage: boolean;
}

export interface Stats {
  total: number;
  totalCoins: number;
  totalMarkets: number;
  totalExchanges: number;
  totalMarketCap: string;
  total24hVolume: string;
}

export interface Coin {
  uuid: string;
  symbol: string;
  name: string;
  color: string;
  iconUrl: string;
  marketCap: string;
  price: string;
  listedAt: number;
  tier: number;
  change: string;
  rank: number;
  sparkline: string[];
  lowVolume: boolean;
  coinrankingUrl: string;
  _24hVolume: string;
  btcPrice: string;
}

export interface Data {
  pagination: Pagination;
  stats: Stats;
  coins: Coin[];
}

export interface IUser {
  userId: string;
  email: string;
  role: string;
  password: string;
  wallet: {
    balance: number;
    walletName: string;
    email: string;
    password: string;
  };
}

export interface Response<T> {
  statusCode: number;
  status: boolean;
  message: string;
  data: T;
}
