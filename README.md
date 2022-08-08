# Yet Another Portfolio Boilerplate

This is yet another portfolio boilerplate which aggregates content from multiple data sources like Behance, Github, Medium, etc. and provides it as a backend to the frontend. It uses Vercel's edge functions and CDN to cache the data source responses to provide with a highly SEO optimized portfolio website.

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fshakedlokits%2Fyet-another-portfolio-boilerplate%2Ftree%2Fmaster)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

> Note: You should provide your user names for the different data providers in the `.env.local` file.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx` which recieves the different data sources as props.