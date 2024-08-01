import { getCollaborationArticles } from './collaboration.source';

it('get collaboration articles', async () => {
  const articles = await getCollaborationArticles();

  expect(articles.length).toBeGreaterThan(0);
});
