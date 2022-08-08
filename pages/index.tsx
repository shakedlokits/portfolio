import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';
import { ArticleList } from '../components/Article';

export { getServerSideProps } from '../lib/data-fetcher';


const Home = ({ projects, works, articles }: DataProps) => {
  const entries = [...articles, ...works];
  return (
    <div className="container mx-auto max-w-3xl px-9">
      <ArticleList entries={entries} />
    </div>
  );
};

export default Home;
