import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';
import { Article } from '../components/Article';

export { getServerSideProps } from '../lib/data-fetcher';

const Home = ({ projects, works, articles }: DataProps) => {
  const entries = [...works, ...articles];
  return (
    <div className="container mx-auto max-w-3xl">
      <div className="columns-4xs gap-6">
        {entries.map((entry, index) => (
            <Article key={index} entry={entry} />
        ))}
      </div>
    </div>
  );
};

export default Home;
