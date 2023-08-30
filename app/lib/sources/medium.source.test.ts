import { getMediumArticles } from './medium.source';

it('get medium articles', async () => {
  const articles = await getMediumArticles();

  expect(articles.length).toBeGreaterThan(0);
});
