export enum FeedType {
  Behance = 'behance',
  Github = 'github',
  Medium = 'medium',
  Collaboration = 'collaboration',
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
