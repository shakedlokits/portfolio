export interface StockData {
  uplift: number;
  price: number;
}

export const getStockData = async (ticker: string): Promise<StockData> => {
  const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/${ticker}`);
  const data = await res.json();

  const { regularMarketPrice: closePrice, previousClose: previousClosePrice } = data['chart']['result'][0]['meta'] as {
    currency: string;
    symbol: string;
    regularMarketPrice: number;
    previousClose: number;
  };

  return { uplift: ((closePrice - previousClosePrice) / previousClosePrice) * 100, price: closePrice };
};
