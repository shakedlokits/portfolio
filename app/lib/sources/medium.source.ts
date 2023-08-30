import { createLogger } from '@lib/utilities/logger';
import { FeedEntry, FeedType } from './types';
import Parser from 'rss-parser';

const logger = createLogger('sources');
const parser = new Parser();

export const getMediumArticles = async (): Promise<(FeedEntry & { type: FeedType.Medium })[]> => {
  if (!process.env.MEDIUM_USERNAME) return [];

  try {
    const response = await fetch(`https://medium.com/feed/@${process.env.MEDIUM_USERNAME}`, {
      next: { revalidate: Number(process.env.REQUEST_CACHE_EXPIRATION) },
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/103.0.0.0 Safari/537.36',
      },
    });
    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.map(
      (item) =>
        ({
          title: item['title'],
          content: item['content:encoded'],
          snippet: item['content:encodedSnippet'],
          date: item['isoDate'],
          link: item['link'],
          cover: item['content:encoded'].match(/(http)?s?:?(\/\/[^"']*?\.(?:png|jpg|jpeg|gif|png))/)?.[0],
          type: FeedType.Medium,
        } as FeedEntry & { type: FeedType.Medium })
    );
  } catch (error) {
    logger.error(error, 'Failed to fetch articles from medium');
    return [];
  }
};
