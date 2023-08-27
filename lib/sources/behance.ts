import { createLogger } from '../logger';
import { FeedType, FeedEntry } from './index';

const logger = createLogger('behance-source');

interface ProjectsListItem {
  id: number;
  name: string;
  published_on: number;
  created_on: number;
  modified_on: number;
  conceived_on: number;
  url: string;
  slug: string;
  privacy: string;
  fields: string[];
  covers: {
    [key: string]: string;
  };
}

interface Project {
  id: number;
  name: string;
  published_on: number;
  created_on: number;
  modified_on: number;
  conceived_on: number;
  url: string;
  slug: string;
  fields: string[];
  covers: {
    [key: string]: string;
  };
  tags: string[];
  description: string;
  modules: {
    id: number;
    project_id: number;
    type: string;
    alt_text?: string;
    text?: string;
    text_plain?: string;
    caption?: string;
    sort_type?: string;
    collection_type?: string;
  }[];
}

const getProjectsList = async () => {
  const url = `http://www.behance.net/v2/users/${process.env.BEHANCE_USERNAME}/projects?callback=%3F&per_page=12&api_key=${process.env.BEHANCE_API_KEY}`;
  const response = await fetch(url, { next: { revalidate: 1800 } });
  const raw = await response.text();

  logger.info('fetched behance projects list');

  // body is returned with anti-csrf measures, i.e /**/?( ... ); wrapper
  const sanitizedBody = JSON.parse(/\/\*\*\/\?\((?<content>.*)\)\;/.exec(raw)?.groups?.content ?? '{}');

  return (sanitizedBody as { projects?: ProjectsListItem[] })?.projects ?? [];
};

const getProjectData = async (projectId: number) => {
  const url = `http://www.behance.net/v2/projects/${projectId}?callback=%3F&api_key=${process.env.BEHANCE_API_KEY}`;
  const response = await fetch(url, { next: { revalidate: 1800 } });
  const raw = await response.text();

  logger.info('fetched behance project by id', projectId);

  // body is returned with anti-csrf measures, i.e /**/?( ... ); wrapper
  const sanitizedBody = JSON.parse(/\/\*\*\/\?\((?<content>.*)\)\;/.exec(raw)?.groups?.content ?? '{}');

  return (sanitizedBody as { project?: Project })?.project;
};

export const getBehanceWorks = async () => {
  if (!process.env.BEHANCE_USERNAME) return [];

  try {
    const projectsList = await getProjectsList();
    const works = await Promise.all(
      projectsList.map(async ({ id: projectId }) => {
        const project = await getProjectData(projectId);
        if (!project) return null;
  
        const { url, modules, name, published_on, covers } = project;
        const description = modules?.find((m) => m.type === 'text')?.text_plain ?? '';
  
        return {
          link: url,
          date: new Date(published_on).toISOString(),
          title: name,
          content: description,
          snippet: description,
          cover: covers['808'],
          type: FeedType.Behance
        } satisfies FeedEntry<FeedType.Behance>;
      })
    );
  
    return works.filter((w): w is FeedEntry<FeedType.Behance> => Boolean(w));
  } catch (error) {
    logger.error(error, 'Failed to fetch works from behance');
    return [];
  }
};
