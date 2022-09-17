import Parser from 'rss-parser';
import { createLogger } from './logger';

export enum FeedType {
  Behance = 'behance',
  Github = 'github',
  Medium = 'medium',
}

export interface FeedEntry<T extends FeedType> {
  link: string;
  date: string;
  title: string;
  content: string;
  snippet: string;
  type: T;
}

const parser = new Parser();
const logger = createLogger('rss-service');

export const getMediumArticles = async (): Promise<FeedEntry<FeedType.Medium>[]> => {
  if (!process.env.MEDIUM_USERNAME) return [];

  try {
    const response = await fetch(`https://medium.com/feed/@${process.env.MEDIUM_USERNAME}`, {
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
          type: FeedType.Medium,
        } as FeedEntry<FeedType.Medium>)
    );
  } catch (error) {
    logger.error(error, 'Failed to fetch articles from medium');
    return [];
  }
};

export const getBahanceWorks = async (): Promise<FeedEntry<FeedType.Behance>[]> => {
  if (!process.env.BEHANCE_USERNAME) return [];

  try {
    const response = await fetch(`https://www.behance.net/feeds/user?username=${process.env.BEHANCE_USERNAME}`);
    const xml = await response.text();
    const feed = await parser.parseString(xml);

    return feed.items.map(
      (item) =>
        ({
          title: item['title'],
          content: item['content'],
          snippet: item['contentSnippet'],
          date: item['isoDate'],
          link: item['link'],
          type: FeedType.Behance,
        } as FeedEntry<FeedType.Behance>)
    );
  } catch (error) {
    logger.error(error, 'Failed to fetch works from behance');
    return [];
  }
};

const getReadmeContent = async (repositoryName: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repositoryName}/readme`);
  const json = await response.json();

  return Buffer.from(json['content'], 'base64').toString();
};

export const getGithubProjects = async (): Promise<FeedEntry<FeedType.Github>[]> => {
  if (!process.env.GITHUB_USERNAME) return [];

  try {
    const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`);
    const json = await response.json();
    const repositories = json.filter(
      (repo: any) => repo.archived === false && repo.fork === false && repo.visibility === 'public'
    );

    return Promise.all(
      repositories.map(
        async (item: any) =>
          ({
            title: item['name'],
            content: await getReadmeContent(item['name']),
            snippet: item['description'],
            date: item['created_at'],
            link: item['html_url'],
            type: FeedType.Github,
          } as FeedEntry<FeedType.Github>)
      )
    );
  } catch (error) {
    logger.error(error, 'Failed to fetch projects from github');
    return [];
  }
};
