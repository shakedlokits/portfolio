import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';
import { Article } from '../components/Article';

export { getServerSideProps } from '../lib/data-fetcher';

const Home = ({ projects, works, articles }: DataProps) => {
  return <Article entry={articles[0]} />;
};

export default Home;