import type { Article } from '@components/Article';
import resume from '@assets/resume.json';

export enum ResumeFilter {
  All = 'All',
  SoftwareEngineering = 'Software Engineering',
  ProductManagement = 'Product Management',
  Design = 'Design',
  Education = 'Education',
}

type ArticleParameters = Partial<Parameters<typeof Article>[0]>[];
type ResumeSectionKeys = keyof typeof resume;
type ResumeMap = (parameters: { filter: ResumeFilter }) => ArticleParameters;
export type ResumeArticleMaps = Partial<{ [K in ResumeSectionKeys]: ResumeMap }>;