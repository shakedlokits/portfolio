export enum FeedType {
  Behance = 'behance',
  Github = 'github',
  Medium = 'medium',
  Collaboration = 'collaboration',
  Substack = 'substack',
}

export interface FeedEntry {
  link: string;
  date: string;
  title: string;
  content: string;
  snippet: string;
  cover?: string;
  type: FeedType;
}
