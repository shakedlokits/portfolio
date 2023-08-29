import { kv } from '@vercel/kv';
import { FeedEntry } from './sources';
import classNames from 'classnames';
import { twMerge } from 'tailwind-merge';

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

export const shuffleEntries = (entries: FeedEntry[]) =>
  entries.sort((a, b) => hashString(a.title) - hashString(b.title));

export const cacheOperation = async <T extends (...args: any[]) => Promise<string>, U extends Parameters<T>>({
  identifier,
  operation,
  parameters,
}: {
  identifier: string;
  operation: T;
  parameters: U;
}) => {
  let cachedResult = await kv.get<string>(identifier);
  if (cachedResult) return cachedResult;

  const newResult = await operation(parameters);
  await kv.set<string>(identifier, newResult, { ex: 1800 });

  return newResult;
};

export const classy: typeof classNames = (...args) => twMerge(classNames(args));
