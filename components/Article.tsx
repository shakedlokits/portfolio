import { useLogger } from '../lib/logger';
import { FeedEntry } from '../lib/rss-service';
import { format } from 'date-fns';

const Article = ({ entry }: { entry: FeedEntry<any> }) => {
  const logger = useLogger();
  const imageUrl = entry.content.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)?.[0];
  const formattedDate = format(new Date(entry.date), 'MMMM do, yyyy');
  logger.info({ imageUrl, formattedDate });

  return (
    <div className="flex flex-col justify-center gap-3 break-inside-avoid-column mb-4">
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <h1 className="text-lg leading-tight font-bold text-center">{entry.title}</h1>
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <p className="text-base indent-3 leading-none sm:max-h-36 max-h-16 overflow-ellipsis overflow-hidden text-justify">
        {entry.snippet}
      </p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {imageUrl && <img className="w-full" src={imageUrl} alt={entry.title} />}
      <span className="text-xs font-bold text-right uppercase">{formattedDate}</span>
    </div>
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
