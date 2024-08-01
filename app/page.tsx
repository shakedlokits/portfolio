import { getArticles } from '@lib/server';
import { getStockData } from '@lib/server';
import { Header } from '@components/Header';
import { ArticleList } from '@components/ArticleList';

const Home = async () => {
  const stock = await getStockData('IVV');
  const entries = await getArticles();

  return (
    <>
      <Header stock={stock} menu />
      <ArticleList articles={entries} />
    </>
  );
};

export default Home;
