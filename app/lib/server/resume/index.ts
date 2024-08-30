import { ResumeFilter } from './types';
import { RESUME_ARTICLE_MAPS } from './consts';

export { ResumeFilter } from './types';

export const getResumeArticles = (key: keyof typeof RESUME_ARTICLE_MAPS, filter: ResumeFilter) => RESUME_ARTICLE_MAPS[key]({ filter });