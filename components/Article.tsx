import { FeedEntry, FeedType } from '../lib/sources';
import { Link } from './Link';
import { format } from 'date-fns';

const formatDate = (entry: FeedEntry) => format(new Date(entry.date), 'MMMM do, yyyy');

const formatImageUrl = (entry: FeedEntry) => {
  if (entry.cover) return entry.cover;

  const contentImage = entry.content.match(/(http)?s?:?(\/\/[^"']*?\.(?:png|jpg|jpeg|gif|png))/)?.[0];

  if (entry.type === FeedType.Github && !contentImage) {    
    return `https://opengraph.githubassets.com/master/shakedlokits/${entry.title}`;
  }

  return contentImage;
}

const formatSource = (entry: FeedEntry) => Object.keys(FeedType)[Object.values(FeedType).indexOf(entry.type)]

const Article = ({ entry }: { entry: FeedEntry }) => {
  const image = formatImageUrl(entry);
  const date = formatDate(entry);
  const type = formatSource(entry);

  return (
    <article className="flex flex-col justify-center gap-3 break-inside-avoid-column mb-4">
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <h2 className="text-lg leading-tight font-bold text-center">
        <Link href={entry.link} redirect>{entry.title}</Link>
      </h2>
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <p className="text-base indent-3 leading-[1.2rem] line-clamp-5 text-justify break-word hyphens-auto">{entry.snippet}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image && <img className="w-full" src={image} alt={entry.title} />}
      <div className='flex justify-between text-xs font-bold uppercase'>
      <span className='font-bold'>from {type}</span>
      <span>{date}</span>
      </div>
      
    </article>
  );
};

export const ArticleList = ({ entries }: { entries: FeedEntry[] }) => {
  return (
    <div className="xl:columns-3 columns-1 md:columns-2 gap-6 columns-rule">
      {entries.map((entry, index) => (
        <Article key={index} entry={entry} />
      ))}
    </div>
  );
};
