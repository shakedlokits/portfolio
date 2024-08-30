import { Article } from '@components/Article';
import { classy } from '@lib/utilities';

const getColumnClassname = ({ numberOfColumns, hasColumnRule }: {
  numberOfColumns: number,
  hasColumnRule: boolean
}) => classy({
  'columns-1 md:columns-2 print:!columns-2': numberOfColumns === 2,
  'columns-1 md:columns-2 xl:columns-3 print:!columns-3': numberOfColumns === 3,
  'columns-rule [column-rule-width:3px]': hasColumnRule,
  'w-full gap-12': true,
});

export const ArticleList = ({ articles, columnSettings }: {
  articles: Array<Parameters<typeof Article>[0]>,
  columnSettings: Parameters<typeof getColumnClassname>[0]
}) => {
  return (
    <div className={getColumnClassname(columnSettings)}>
      {articles.map((entry, index) => (
        // @ts-expect-error Server Component
        <Article key={index} {...entry} />
      ))}
    </div>
  );
};