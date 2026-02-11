# News App

Flash News is a Next.js application for browsing live headlines across world, business, technology, and specialty sections.

## Features

- Live article feeds using NewsAPI (`NEWS_API_KEY`)
- Fallback article set when API data is unavailable
- Category and topic pages with reusable `NewsPage` layout
- Mobile-friendly navigation with section dropdowns
- Auto-refresh support for near real-time updates

## Sections

- Home: `/`
- World: `/world`
- Business: `/business`
- Politics: `/politics`
- Sports: `/sports`
- Technology: `/technology/tech-news`
- AI and ML: `/technology/ai`
- Blockchain: `/technology/blockchain`
- Crypto: `/technology/crypto`
- Health: `/health`
- Science: `/science`
- Astronomy: `/astronomy`
- Media: `/media`
- Car Industry: `/car-industry`
- Share Market: `/share-market`
- About: `/about`

## Local Development

1. Install dependencies:
```bash
npm install
```
2. Add env values in `.env.local`:
```bash
NEWS_API_KEY=your_key_here
```
3. Run dev server:
```bash
npm run dev
```
4. Build for production:
```bash
npm run build
```

## Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Zustand
