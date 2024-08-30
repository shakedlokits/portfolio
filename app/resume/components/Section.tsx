import { classy } from '@lib/utilities';
import { ArticleList } from '@components/ArticleList';

// TODO: Add collapsing button to sections
export const Section = ({ title, className, articles, columnSettings }: {
  title: string,
  className?: string
} & Parameters<typeof ArticleList>[0]) => {
  return (
    <div className={classy('flex flex-col gap-1 w-full mb-3 break-before-avoid-page', className)}
         id={title.toLowerCase().replaceAll(' ', '-')}>
      <h1
        className="highlight text-3xl italic font-bold leading-tight uppercase text-stroke pb-3 underline">{title}</h1>
      <ArticleList articles={articles} columnSettings={columnSettings} />
    </div>
  );
};