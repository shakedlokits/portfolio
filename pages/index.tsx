import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';

export { getServerSideProps } from '../lib/data-fetcher';

const Home = ({ projects, works, articles }: DataProps) => {
  const logger = useLogger();
  logger.info({ projects, works, articles }, 'Loaded documents');

  return <h1 className="text-3xl font-bold underline">Hello world!</h1>;
};

export default Home;
