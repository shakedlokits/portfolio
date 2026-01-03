import {
  FeedEntry,
  FeedType,
  getBehanceWorks,
  getGithubProjects,
  getCollaborationArticles,
  getMediumArticles,
  getSubstackPosts,
} from '@lib/sources';

export const getArticleFeeds = async (): Promise<{
  projects: (FeedEntry & { type: FeedType.Github })[];
  works: (FeedEntry & { type: FeedType.Behance })[];
  articles: (FeedEntry & { type: FeedType.Medium })[];
  collaboration: (FeedEntry & { type: FeedType.Collaboration })[];
  posts: (FeedEntry & { type: FeedType.Substack })[];
}> => {
  const projects = await getGithubProjects();
  const works = await getBehanceWorks();
  const articles = await getMediumArticles();
  const collaboration = await getCollaborationArticles();
  const posts = await getSubstackPosts();

  return {
    projects,
    works,
    articles,
    collaboration,
    posts,
  };
};
