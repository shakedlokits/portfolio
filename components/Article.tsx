import { useLogger } from '../lib/logger';
import { FeedEntry } from '../lib/rss-service';
import { Link } from './Link';
import { format } from 'date-fns';

const Article = ({ entry }: { entry: FeedEntry<any> }) => {
  const logger = useLogger();
  const imageUrl = entry.content.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)?.[0];
  const formattedDate = format(new Date(entry.date), 'MMMM do, yyyy');
  logger.info({ imageUrl, formattedDate });

  return (
    <article className="flex flex-col justify-center gap-3 break-inside-avoid-column mb-4">
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <h2 className="text-lg leading-tight font-bold text-center">
        <Link href={entry.link}>{entry.title}</Link>
      </h2>
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <p className="text-base indent-3 leading-none line-clamp-4 text-justify">{entry.snippet}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {imageUrl && <img className="w-full" src={imageUrl} alt={entry.title} />}
      <span className="text-xs font-bold text-right uppercase">{formattedDate}</span>
    </article>
  );
};

export const ArticleList = ({ entries }: { entries: FeedEntry<any>[] }) => {
  return (
    <div className="sm:columns-4xs gap-6 columns-rule">
      {entries.map((entry, index) => (
        <Article key={index} entry={entry} />
      ))}
    </div>
  );
};
