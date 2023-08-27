import { GetServerSidePropsContext } from 'next';
import { FeedEntry, FeedType, getBahanceWorks, getGithubProjects, getMediumArticles } from './rss-service';

export const getServerSideProps = async ({ res }: GetServerSidePropsContext): Promise<{ props: DataProps }> => {
  res.setHeader('Cache-Control', 'public, s-maxage=60, stale-while-revalidate=600');

  const projects = await getGithubProjects();
  const works = await getBahanceWorks();
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
  const projects = [] as any;
  // const projects = await getGithubProjects();
  // console.log('Refetching props');
  const works = await getBahanceWorks();
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
  projects: FeedEntry<FeedType.Github>[];
  works: FeedEntry<FeedType.Behance>[];
  articles: FeedEntry<FeedType.Medium>[];
}
