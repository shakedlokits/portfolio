import { FeedEntry } from '@lib/sources';
import { Link } from './Link';
import Image from 'next/image';
import { format } from 'date-fns';

const Article = ({ entry }: { entry: FeedEntry }) => {
  return (
    <article className="flex flex-col gap-1 break-inside-avoid-column items-start relative">
      <h2 className="font-display text-2xl leading-tight mb-1">
        <Link href={entry.link} redirect>
          {entry.title}
        </Link>
      </h2>
      <span className="text-xs highlight font-header uppercase">
        {entry.type}, {format(new Date(entry.date), 'MMM do, yyyy')}
      </span>
      <div className="h-[2px] bg-black block relative align-left w-2/3 my-2" />
      <p className="text-base leading-[1.2rem] line-clamp-6 text-justify break-word hyphens-auto mb-3">
        {entry.snippet}
      </p>
      <Image fill sizes="100vw" className="!relative w-full" src={entry.cover ?? ''} alt={entry.title} />
      <div className="border-black h-[3px] bg-black block relative w-full my-6" />
    </article>
  );
};

export const ArticleList = ({ entries }: { entries: FeedEntry[] }) => {
  return (
    <div className="xl:columns-3 columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px]">
      {entries.map((entry, index) => (
        <Article key={index} entry={entry} />
      ))}
    </div>
  );
};
