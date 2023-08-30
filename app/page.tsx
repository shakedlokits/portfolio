import { ArticleList } from './components/Article';
import { Header } from './components/Header';
import { getArticles } from './lib/server/get-articles';
import { getStockData } from './lib/server/get-stock-data';
import { shuffleEntries } from './lib/utilities/utilities';

export const revalidate = 3600;

const Home = async () => {
  const {articles, works, projects} = await getArticles();
  const stock = await getStockData('IVV');
  const entries = shuffleEntries([...articles, ...works, ...projects]).filter((e) => !e.title.includes('portfolio'));

  return (
    <>
      <Header stock={stock} />
      <ArticleList entries={entries} />
    </>
  );
};

export default Home;
