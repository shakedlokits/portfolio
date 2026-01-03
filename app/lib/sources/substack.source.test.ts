import { getSubstackPosts } from './substack.source';

it('get substack posts', async () => {
  const posts = await getSubstackPosts();

  expect(posts.length).toBeGreaterThan(0);
});
