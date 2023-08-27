import { getBehanceWorks } from './behance.source';

it('get behance works', async () => {
  const works = await getBehanceWorks();

  expect(works.length).toBeGreaterThan(0);
});
