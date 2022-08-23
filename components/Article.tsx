import { FeedEntry, FeedType } from '../lib/rss-service';
import { Link } from './Link';
import { format } from 'date-fns';

const titleCase = (s: string) => s.replace (/^[-_]*(.)/, (_, c) => c.toUpperCase()).replace (/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase())

const formatDate = (entry: FeedEntry<any>) => format(new Date(entry.date), 'MMMM do, yyyy');

const formatImageUrl = (entry: FeedEntry<any>) => {
  if (entry.type === FeedType.Github) {
    return `https://opengraph.githubassets.com/master/shakedlokits/${entry.title}`;
  }

  return entry.content.match(/(http)?s?:?(\/\/[^"']*\.(?:png|jpg|jpeg|gif|png|svg))/)?.[0];
}

const formatTitle = (entry: FeedEntry<any>) => entry.type === FeedType.Github ? titleCase(entry.title) : entry.title;

const Article = ({ entry }: { entry: FeedEntry<any> }) => {
  const image = formatImageUrl(entry);
  const date = formatDate(entry);
  const title = formatTitle(entry);

  return (
    <article className="flex flex-col justify-center gap-3 break-inside-avoid-column mb-4">
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <h2 className="text-lg leading-tight font-bold text-center">
        <Link href={entry.link}>{title}</Link>
      </h2>
      <div className="h-[1px] bg-black block relative align-middle mx-auto w-20" />
      <p className="text-base indent-3 leading-none line-clamp-4 text-justify">{entry.snippet}</p>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      {image && <img className="w-full" src={image} alt={entry.title} />}
      <span className="text-xs font-bold text-right uppercase">{date}</span>
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
