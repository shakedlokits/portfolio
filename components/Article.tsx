import { useLogger } from '../lib/logger';
import { FeedEntry } from '../lib/rss-service';
import { format } from 'date-fns';

export const Article = ({ entry }: { entry: FeedEntry<any> }) => {
    const logger = useLogger();
    const imageUrl = entry.content.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)?.[0];
    const formattedDate = format(new Date(entry.date), 'MMMM do, yyyy');
    logger.info({imageUrl, formattedDate});
    
  return (
    <div className="flex flex-col justify-center gap-3 break-inside-avoid-column mb-4">
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <h1 className="text-lg leading-tight font-bold text-center">{entry.title}</h1>
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <p className="text-base leading-none max-h-36 text-ellipsis overflow-hidden text-justify">{entry.snippet}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {imageUrl && <img className="w-full" src={imageUrl} alt={entry.title} />}
      <span className="text-xs font-bold text-right uppercase">{formattedDate}</span>
    </div>
  );
};
