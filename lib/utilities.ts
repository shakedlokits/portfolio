import { FeedEntry } from './rss-service';

export const titleCase = (s: string) =>
  s.replace(/^[-_]*(.)/, (_, c) => c.toUpperCase()).replace(/[-_]+(.)/g, (_, c) => ' ' + c.toUpperCase());

const hashString = (s: string) => {
  var hash = 0,
    i,
    chr;
  if (s.length === 0) return hash;
  for (i = 0; i < s.length; i++) {
    chr = s.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
};

export const shuffleEntries = (entries: FeedEntry<any>[]) =>
  entries.sort((a, b) => hashString(a.title) - hashString(b.title));
