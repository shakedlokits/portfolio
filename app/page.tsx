import { ArticleList } from './components/Article';
import { Header } from './components/Header';
import { getArticles } from './lib/server/get-articles';
import { shuffleEntries } from './lib/utilities/utilities';

export const revalidate = 3600;

const Home = async () => {
  const {articles, works, projects} = await getArticles();
  const entries = shuffleEntries([...articles, ...works, ...projects]).filter((e) => !e.title.includes('portfolio'));

  return (
    <>
      <Header />
      <ArticleList entries={entries} />
    </>
  );
};

export default Home;
