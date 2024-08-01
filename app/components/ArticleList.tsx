import { Article } from '@components/Article';

export const ArticleList = ({ articles }: { articles: Array<Parameters<typeof Article>[0]> }) => {
  return (
    <div className="xl:columns-3 columns-1 md:columns-2 gap-12 columns-rule [column-rule-width:3px]">
      {articles.map((entry, index) => (
        // @ts-expect-error Server Component
        <Article key={index} {...entry} />
      ))}
    </div>
  );
};