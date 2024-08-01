import type { ArticleList } from '@components/ArticleList';
import type { FeedEntry, FeedType } from '@lib/sources';
import { format } from 'date-fns';
import { shuffleEntries } from '@lib/utilities';
import { getArticleFeeds } from '@lib/server/get-article-feeds';

const transformFeedEntryToArticle = (feedEntries: FeedEntry[]): Parameters<typeof ArticleList>[0]['articles'] => {
  return feedEntries.map((article) => ({
    title: article.title,
    byline: `${article.type}, ${format(new Date(article.date), 'MMM do, yyyy')}`,
    content: article.snippet,
    cover: article.cover,
    url: article.link,
  }));
};


export const getArticles = async (type?: FeedType): Promise<Parameters<typeof ArticleList>[0]['articles']> => {
  const { articles, works, projects, collaboration } = await getArticleFeeds();

  const shuffledFeeds = shuffleEntries([...articles, ...works, ...projects, ...collaboration]);
  const filteredFeeds = shuffledFeeds
    .filter((e) => !e.title.includes('portfolio'))
    .filter((e) => type ? e.type === type : true);

  return transformFeedEntryToArticle(filteredFeeds);
};