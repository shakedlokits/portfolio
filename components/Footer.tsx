import { Link } from './Link';

const GiftIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
    <path
      fillRule="evenodd"
      d="M5 5a3 3 0 015-2.236A3 3 0 0114.83 6H16a2 2 0 110 4h-5V9a1 1 0 10-2 0v1H4a2 2 0 110-4h1.17C5.06 5.687 5 5.35 5 5zm4 1V5a1 1 0 10-1 1h1zm3 0a1 1 0 10-1-1v1h1z"
      clipRule="evenodd"
    />
    <path d="M9 11H3v5a2 2 0 002 2h4v-7zM11 18h4a2 2 0 002-2v-5h-6v7z" />
  </svg>
);

export const Footer = () => (
  <footer className="flex flex-row justify-between border-black border-t-2 mt-8 mb-4 py-2">
    <p className="text-base">
      Built using{' '}
      <span className="font-bold">
        <Link href="https://github.com/shakedlokits/yet-another-portfolio-boilerplate">
          yet another portfolio boilerplate.
        </Link>
      </span>
    </p>
    <Link href="https://www.youtube.com/watch?v=dQw4w9WgXcQ">
      <GiftIcon />
    </Link>
  </footer>
);
