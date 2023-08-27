import { getProjectsList } from '../lib/sources/behance';

describe('Behance Source', () => {
  it('fetches works list', async () => {
    console.log(getProjectsList);

    const projects = await getProjectsList();
  });
});
