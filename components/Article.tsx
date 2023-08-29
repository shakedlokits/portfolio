import { FeedEntry, FeedType } from '../lib/sources';
import Image from 'next/image';
import { Link } from './Link';
import { format } from 'date-fns';
import { classy } from '../lib/utilities';
import { calculateGridOrientation, GridOrientation } from '../lib/grid-orientation';
import { P } from 'pino';

// const Article = ({ entry, orientation }: { entry: FeedEntry; orientation: GridOrientation }) => {

//   return (
//     <article
//       className={classy(
//         'w-full h-full flex justify-center gap-4 break-inside-avoid-column mb-4 p-2',
//         orientation === 'horizontal' ? 'flex-row' : 'flex-col'
//       )}
//     >
//       <section
//         className={classy({
//           'h-full w-full flex flex-col gap-4 max-h-72 max-w-20': true,
//           'flex-2': orientation === 'square',
//         })}
//       >
//         <header className="font-display">
//           <h2 className="text-2xl leading-tight mb-1">
//             <Link href={entry.link} redirect>
//               {entry.title}
//             </Link>
//           </h2>
//           <span className="text-xs hightlight font-header uppercase">
//             {entry.type}, {format(new Date(entry.date), 'MMM do, yyyy')}, {orientation}
//           </span>
//         </header>
//         <div className="h-[2px] bg-black block relative align-left w-2/3" />

//         <main className="text-base leading-[1.2rem] overflow-hidden text-justify break-word hyphens-auto">
//           {entry.snippet}
//         </main>
//       </section>
//       <section
//         className={classy({
//           'relative flex-1': true,
//           hidden: orientation === 'square' || !entry.cover,
//           'hidden sm:block flex-2 sm:flex-1': orientation === 'horizontal',
//         })}
//       >
//         <Image fill className="" src={entry.cover ?? ''} alt={entry.title} />
//       </section>
//     </article>
//   );
// };

const Article = ({ entry, orientation }: { entry: FeedEntry; orientation: GridOrientation }) => {
  return (
    <article
      className={classy({
        'h-full w-full flex place-content-between p-4': true,
        'flex-row': orientation === GridOrientation.Horizontal,
        'flex-col': orientation !== GridOrientation.Horizontal,
      })}
    >
      <div>
          <h2 className='font-display text-2xl leading-tight mb-1'>
            <Link href={entry.link} redirect>
              {entry.title}
            </Link>
          </h2>
          <span className='text-xs hightlight font-header uppercase'>
            {entry.type}, {format(new Date(entry.date), 'MMM do, yyyy')}, {orientation}
          </span>

        <div className="h-[2px] bg-black block relative align-left w-2/3 my-2" />

        <p
          className={classy({
            'text-base leading-[1.2rem] text-justify break-word hyphens-auto': true,
            'text-ellipsis overflow-hidden max-h-32 max-w-[16rem]': true,
            'mr-4': orientation === GridOrientation.Horizontal,
            'mb-4': orientation === GridOrientation.Vertical,
          })}
        >
          {entry.snippet}
        </p>
      </div>

      <div
        className={classy({
          'relative h-full w-full max-w-xs bg-red-300': true,
          hidden: orientation === 'square' || !entry.cover,
          'hidden sm:block': orientation === 'horizontal',
        })}
      >
        <Image fill className="object-cover object-center" src={entry.cover ?? ''} alt={entry.title} />
      </div>
    </article>
  );
};

const useArticleGridPlacements = ({ articles, getOrientationPreferences }: Parameters<typeof ArticleGrid>[0]) => {
  const orientations = articles.reduce((accumulator, _, index, array) => {
    const orientation = calculateGridOrientation(index + 1, array.length);
    accumulator[orientation] = orientation in accumulator ? [...accumulator[orientation], index] : [index];
    return accumulator;
  }, {} as { [key in GridOrientation]: number[] });

  const getPreferredIndex = (preferences: GridOrientation[]) => {
    const preferredOrientation = preferences.find((o) => orientations?.[o]?.length) as GridOrientation;
    return { index: orientations[preferredOrientation].pop() as number, orientation: preferredOrientation };
  };

  const placements = articles
    .map((entry) => ({ entry, placement: getPreferredIndex(getOrientationPreferences(entry)) }))
    .sort((a, b) => (a.placement?.index ?? 0) - (b.placement?.index ?? 0))
    .map(({ entry, placement: { orientation } }) => ({ entry, orientation }));

  return placements;
};

export const ArticleGrid = ({
  articles,
  getOrientationPreferences,
}: {
  articles: FeedEntry[];
  getOrientationPreferences: (a: FeedEntry) => GridOrientation[];
}) => {
  const placements = useArticleGridPlacements({ articles, getOrientationPreferences });

  return (
    <div className="grid grid-flow-dense xl:grid-cols-3 grid-cols-1 md:grid-cols-2 divide-x-3">
      {placements.map(({ entry, orientation }, index, array) => (
        <div
          key={index}
          className={classy({
            'border-black': true,
            'col-span-1 xl:col-span-2 border-y-3': orientation === 'horizontal',
            'row-span-1 sm:row-span-2': orientation === 'vertical',
          })}
        >
          <Article entry={entry} orientation={orientation} />
        </div>
      ))}
    </div>
  );
};
