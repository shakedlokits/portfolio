import { getCollaborationArticles } from './manual.source';

it('get manual articles', async () => {
  const articles = await getCollaborationArticles();

  expect(articles.length).toBeGreaterThan(0);
});
