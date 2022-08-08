import { useLogger } from '../lib/logger';
import { DataProps } from '../lib/data-fetcher';
import { Article } from '../components/Article';
import { FeedEntry } from '../lib/rss-service';

export { getServerSideProps } from '../lib/data-fetcher';

const Articles = ({ entries }: { entries: FeedEntry<any>[] }) => {
  return (
    <div className="sm:columns-4xs gap-6 columns-rule">
      {entries.map((entry, index) => (
        <Article key={index} entry={entry} />
      ))}
    </div>
  );
};

const Home = ({ projects, works, articles }: DataProps) => {
  const entries = [...works, ...articles];
  return (
    <div className="container mx-auto max-w-3xl px-9">
      <Articles entries={entries} />
    </div>
  );
};

export default Home;
