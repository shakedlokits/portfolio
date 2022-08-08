import { DataProps } from '../lib/data-fetcher';
import { ArticleList } from '../components/Article';
import { Header } from '../components/Header';

export { getServerSideProps } from '../lib/data-fetcher';

const Home = ({ projects, works, articles }: DataProps) => {
  const entries = [...articles, ...works];

  return (
    <div className="container mx-auto max-w-3xl px-9 pt-24">
      <Header />
      <ArticleList entries={entries} />
    </div>
  );
};

export default Home;
