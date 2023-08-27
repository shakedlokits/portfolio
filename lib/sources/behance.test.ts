import { getBehanceWorks } from './behance';

it('get behance works', async () => {
  const works = await getBehanceWorks();

  expect(works.length).toBeGreaterThan(0);
});
