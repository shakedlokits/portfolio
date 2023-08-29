import {DataProps} from '../lib/data-fetcher';
import {ArticleGrid} from '../components/Article';
import {Header} from '../components/Header';
import {Title} from '../components/Title';
import {Footer} from '../components/Footer';
import {shuffleEntries} from '../lib/utilities';
import { GridOrientation } from '../lib/grid-orientation';
import { FeedEntry, FeedType } from '../lib/sources';

export {getStaticProps} from '../lib/data-fetcher';

const Home = ({projects, works, articles}: DataProps) => {
    const entries = shuffleEntries([...articles, ...works, ...projects]).filter((e) => !e.title.includes('portfolio'));
    const getFeedEntryPreferences = (entry: FeedEntry) => {
        return {
          [FeedType.Behance]: [GridOrientation.Horizontal, GridOrientation.Vertical, GridOrientation.Square],
          [FeedType.Medium]: [GridOrientation.Vertical, GridOrientation.Horizontal, GridOrientation.Square],
          [FeedType.Github]: [GridOrientation.Square, GridOrientation.Horizontal, GridOrientation.Vertical],
        }[entry.type];
      };

    return (
        <div className="container mx-auto max-w-3xl px-9 pt-20 font-body">
            <Title funny/>
            <Header/>
            <ArticleGrid articles={entries} getOrientationPreferences={getFeedEntryPreferences}/>
            <Footer/>
        </div>
    );
};

export default Home;
