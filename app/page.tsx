import { ArticleList } from '@components/Article';
import { getArticles } from '@lib/server';
import { getStockData } from '@lib/server';
import { shuffleEntries } from '@lib/utilities';
import { Header } from '@components/Header';

const Home = async () => {
  const {articles, works, projects} = await getArticles();
  const stock = await getStockData('IVV');
  const entries = shuffleEntries([...articles, ...works, ...projects]).filter((e) => !e.title.includes('portfolio'));

  return (
    <>
      <Header stock={stock} menu />
      <ArticleList entries={entries} />
    </>
  );
};

export default Home;
