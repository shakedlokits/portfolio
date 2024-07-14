'use server';
import { Link } from './Link';
import Image from 'next/image';

export const Article = ({ title, byline, content, cover, url }: {
  title: string;
  byline: string;
  content?: string;
  cover?: string;
  url?: string;
}) => {
  const shouldTruncate = content && content.length > 250;

  return (
    <article className="flex flex-col gap-1 break-inside-avoid-column items-start relative">
      <h2 className="font-display text-2xl leading-tight mb-1">
        {url ? <Link href={url} redirect>{title}</Link> : title}
      </h2>
      <span className="text-xs highlight font-header uppercase">
        {byline}
      </span>
      {content && (
        <>
          <div className="h-[2px] bg-black block relative align-left w-2/3 my-2" />
          {shouldTruncate ? (
            <details className="group">
              <summary className="text-sm leading-[1.2rem] break-word hyphens-auto mb-3 first:list-none">
                <p className="group-open:line-clamp-none line-clamp-6 whitespace-pre-line">
                  {content}
                </p>
                <p className="underline font-bold float-right group-open:hidden inline">
                  read more
                </p>
              </summary>
            </details>
          ) : (
            <p className="text-sm leading-[1.2rem] break-word hyphens-auto mb-3 whitespace-pre-line">
              {content}
            </p>
          )}
        </>
      )}
      { cover && <Image fill sizes="100vw" className="!relative w-full" src={cover} alt={title} /> }
      <div className="border-black h-[3px] bg-black block relative w-full my-4" />
    </article>
  );
};

