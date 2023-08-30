import { FeedEntry, FeedType, getBehanceWorks, getGithubProjects, getMediumArticles } from '@lib/sources';

export const getArticles = async (): Promise<{
  projects: (FeedEntry & { type: FeedType.Github })[];
  works: (FeedEntry & { type: FeedType.Behance })[];
  articles: (FeedEntry & { type: FeedType.Medium })[];
}> => {
  const projects = await getGithubProjects();
  const works = await getBehanceWorks();
  const articles = await getMediumArticles();

  return {
    projects,
    works,
    articles,
  };
};
