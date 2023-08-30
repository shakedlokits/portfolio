interface StockDetails {
  uplift: number;
  price: number;
}

export const getStockData = async (ticker: string): Promise<StockDetails> => {
  const res = await fetch(`https://query1.finance.yahoo.com/v8/finance/chart/IVV`);
  const data = await res.json();
  console.log(data);

  return { uplift: 0, price: 0 };
};
