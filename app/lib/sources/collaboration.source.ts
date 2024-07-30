import { createLogger } from '@lib/utilities/logger';
import { FeedEntry, FeedType } from './types';

const logger = createLogger('sources');

// TODO: Move this content to local hosting using MDX
// TODO: Also allow links with OpenGraph
const LINKS = [
  {
    link: 'https://www.ophirsheriff.com/stanistan',
    title: 'Welcome to Stanistan',
    snippet: 'In "Welcome to Stanistan" you play as the manager of Stanistan’s social media department, trying to increase the tourism in the imaginary failing country, using promotions on Instagram and choosing very carefully what to include in the picture or what filters or hashtags to use. \nSince the country itself is in constant distress there is no way to win but to play that fake game we all play on social media, using that cold, plastic happiness to hide the warmth and humidity of tears that are ruining our make-up.',
    content: 'In "Welcome to Stanistan" you play as the manager of Stanistan’s social media department, trying to increase the tourism in the imaginary failing country, using promotions on Instagram and choosing very carefully what to include in the picture or what filters or hashtags to use. \nSince the country itself is in constant distress there is no way to win but to play that fake game we all play on social media, using that cold, plastic happiness to hide the warmth and humidity of tears that are ruining our make-up.',
    cover: 'https://static.wixstatic.com/media/667630_d9cf50c46d8f47e0a521150b8fd523e0~mv2_d_2800_1750_s_2.png',
    date: '2018-01-01',
    type: FeedType.Collaboration,
  },
  {
    link: 'https://www.ophirsheriff.com/updog-city',
    title: 'UpDog City',
    snippet: 'What\'s Updog? Nothing much, what about you?\nUpdog City is an casual indie rhythm game in which you explore Updog City and befriend its residents by high-fiving them to the beat.',
    content: 'What\'s Updog? Nothing much, what about you?\nUpdog City is an casual indie rhythm game in which you explore Updog City and befriend its residents by high-fiving them to the beat.',
    cover: 'https://static.wixstatic.com/media/667630_ba583bad1847404383c39f3a4c7ffa61~mv2.png',
    date: '2019-01-01',
    type: FeedType.Collaboration,
  },
  {
    link: 'https://www.ophirsheriff.com/thenowhere',
    title: 'The Nowhere',
    snippet: 'The Nowhere is a comic story, created especially for mobile reading. The project intends to examine how the mobile phone’s affordances can enable a unique reading experience, available only in this medium. It tells the story of a monk\'s past lives through bits of his memories stored in his belongings. Each memory tells a short story from his life, and each offers a unique reading capability enabled only in this format.',
    content: 'The Nowhere is a comic story, created especially for mobile reading. The project intends to examine how the mobile phone’s affordances can enable a unique reading experience, available only in this medium. It tells the story of a monk\'s past lives through bits of his memories stored in his belongings. Each memory tells a short story from his life, and each offers a unique reading capability enabled only in this format.',
    cover: 'https://static.wixstatic.com/media/667630_040d720d27f14a409daa510010a6f17e~mv2.png',
    date: '2019-01-01',
    type: FeedType.Collaboration,
  }
] satisfies (FeedEntry & { type: FeedType.Collaboration })[];

export const getCollaborationArticles = async (): Promise<(FeedEntry & { type: FeedType.Collaboration })[]> => {
  try {
    return LINKS;
  } catch (error) {
    logger.error(error, 'Failed to fetch collaboration articles');
    return [];
  }
};
