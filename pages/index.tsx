import { DataProps } from '../lib/data-fetcher';
import { ArticleList } from '../components/Article';
import { Header } from '../components/Header';
import { Title } from '../components/Title';
import { Footer } from '../components/Footer';
import { shuffleEntries } from '../lib/utilities';

export { getServerSideProps } from '../lib/data-fetcher';

const Home = ({ projects, works, articles }: DataProps) => {
  const entries = shuffleEntries([...articles, ...works, ...projects]);

  return (
    <div className="container mx-auto max-w-3xl px-9 pt-24">
      <Title funny />
      <Header />
      <ArticleList entries={entries} />
      <Footer />
    </div>
  );
};

export default Home;
