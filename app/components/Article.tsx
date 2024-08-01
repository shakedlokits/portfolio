'use server';
import { Link } from './Link';
import Image from 'next/image';
import { classy } from '@lib/utilities';

const isContentArray = (content: string | string[]): content is string[] => Array.isArray(content);

const ArticleContent = ({ content }: { content: string | string[] }) => {
  const concatenatedContent = isContentArray(content) ? content.join('\n') : content;
  const shouldTruncate = concatenatedContent.length > 250;

  const spreadContent = isContentArray(content) ? (
    <ul key={concatenatedContent} className="list-disc list-inside whitespace-pre-line leading-none print:list-none print:list-outside">
      {content.map((line, index) => (
        <li key={`${concatenatedContent}-${index}`} className="mt-2">{line}</li>
      ))}
    </ul>
  ) : (
    <p key={concatenatedContent} className="text-sm break-word hyphens-auto mb-3 whitespace-pre-line leading-none">
      {content}
    </p>
  );

  if (shouldTruncate) {
    return (
      <details className="group">
        <summary className="text-sm break-word hyphens-auto mb-3 first:list-none">
          <div
            className="group-open:line-clamp-none line-clamp-6 whitespace-pre-line print:line-clamp-none leading-none">
            {spreadContent}
          </div>
          <p className="underline font-bold float-right group-open:hidden inline print:hidden mt-2 ">
            read more
          </p>
        </summary>
      </details>
    );
  } else {
    return spreadContent;
  }
};

export const Article = ({ title, byline, content, cover, url, className }: {
  title: string;
  byline: string;
  content?: string | string[];
  cover?: string;
  url?: string;
  className?: string;
}) => {
  return (
    <article className={classy('flex flex-col gap-1 items-start relative break-inside-avoid-column', className)}>
      <h2 className="font-display text-xl leading-tight mb-1 whitespace-pre-line print:text-lg print:leading-tight">
        {url ? <Link href={url} redirect>{title}</Link> : title}
      </h2>
      <span className="text-xs highlight font-header uppercase">
        {byline}
      </span>
      {content && (
        <>
          <div className="block relative align-left w-2/3 my-2 border-black border-b-2" />
          <ArticleContent content={content} />
        </>
      )}
      {cover && <Image fill sizes="100%" className="!relative w-full" src={cover} alt={title} priority />}
      <div className="border-black border-b-3 block relative w-full mb-4 mt-2" />
    </article>
  );
};

