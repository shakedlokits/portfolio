import { createLogger } from '@lib/utilities/logger';
import { titleCase } from '@lib/utilities/utilities';
import { FeedEntry, FeedType } from './types';

const logger = createLogger('sources');

const getReadmeContent = async (repositoryName: string): Promise<string> => {
  const response = await fetch(`https://api.github.com/repos/${process.env.GITHUB_USERNAME}/${repositoryName}/readme`, {
    next: { revalidate: Number(process.env.REQUEST_CACHE_EXPIRATION) },
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
    },
  });
  const json = await response.json();

  return Buffer.from(json['content'], 'base64').toString();
};

const getCover = (content: string, repo: string) => {
  const contentImage = content.match(/(http)?s?:?(\/\/[^"']*?\.(?:png|jpg|jpeg|gif|png))/)?.[0];

  if (contentImage) return contentImage;
  else return `https://opengraph.githubassets.com/master/shakedlokits/${repo}`;
};

export const getGithubProjects = async (): Promise<(FeedEntry & { type: FeedType.Github })[]> => {
  if (!process.env.GITHUB_USERNAME) return [];

  try {
    const response = await fetch(`https://api.github.com/users/${process.env.GITHUB_USERNAME}/repos`, {
      next: { revalidate: Number(process.env.REQUEST_CACHE_EXPIRATION) },
      headers: {
        Authorization: `Bearer ${process.env.GITHUB_TOKEN}`,
      },
    });

    if (!response.ok) {
      const error = await response.json();
      logger.error({ status: response.status, message: error.message }, 'GitHub API error');
      return [];
    }

    const json = await response.json();
    const repositories = json.filter(
      (repo: any) => repo.archived === false && repo.fork === false && repo.visibility === 'public'
    );

    return Promise.all(
      repositories.map(async (item: any) => {
        const repositoryName = item['name'];
        const content = await getReadmeContent(repositoryName);
        const cover = await getCover(content, repositoryName);

        return {
          title: titleCase(repositoryName),
          content,
          snippet: item['description'],
          date: item['created_at'],
          link: item['html_url'],
          cover,
          type: FeedType.Github,
        } as FeedEntry & { type: FeedType.Github };
      })
    );
  } catch (error) {
    logger.error(error, 'Failed to fetch projects from github');
    return [];
  }
};
