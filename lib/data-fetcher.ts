import { GetServerSidePropsContext } from 'next';
import { FeedEntry, FeedType, getBehanceWorks, getGithubProjects, getMediumArticles } from './sources';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext): Promise<{ props: DataProps }> => {
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=600');

  const projects = await getGithubProjects();
  const works = await getBehanceWorks();
  const articles = await getMediumArticles();

  return {
    props: {
      projects,
      works,
      articles,
    },
  };
};

export const getStaticProps = async (): Promise<{ props: DataProps; revalidate: number }> => {
  const projects = await getGithubProjects();
  const works = await getBehanceWorks();
  const articles = await getMediumArticles();

  return {
    props: {
      projects,
      works,
      articles,
    },
    revalidate: 3600,
  };
};

export interface DataProps {
  projects: (FeedEntry & { type: FeedType.Github })[];
  works: (FeedEntry & { type: FeedType.Behance })[];
  articles: (FeedEntry & { type: FeedType.Medium })[];
}
