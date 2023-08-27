import { getGithubProjects } from './github.source';

it('get github projects', async () => {
  const projects = await getGithubProjects();

  expect(projects.length).toBeGreaterThan(0);
});
