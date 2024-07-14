import { getArticles } from '@lib/server';
import { getStockData } from '@lib/server';
import { shuffleEntries } from '@lib/utilities';
import { Header } from '@components/Header';
import { FeedEntry } from '@lib/sources';
import { format } from 'date-fns';
import { ArticleList } from '@components/ArticleList';

const transformFeedEntryToArticle = (feedEntries: FeedEntry[]): Parameters<typeof ArticleList>[0]['articles'] => {
  return feedEntries.map((article) => ({
    title: article.title,
    byline: `${article.type}, ${format(new Date(article.date), 'MMM do, yyyy')}`,
    content: article.snippet,
    cover: article.cover,
    url: article.link,
  }));
};

const Home = async () => {
  const { articles, works, projects } = await getArticles();
  const stock = await getStockData('IVV');
  const entries = transformFeedEntryToArticle(shuffleEntries([...articles, ...works, ...projects]).filter((e) => !e.title.includes('portfolio')));

  return (
    <>
      <Header stock={stock} menu />
      <ArticleList articles={entries} />
    </>
  );
};

export default Home;
