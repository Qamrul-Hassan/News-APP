import { NewsArticle } from "../types";

type FallbackArticle = NewsArticle & {
  tags: string[];
};

const fallbackArticles: FallbackArticle[] = [
  {
    title: "Global markets open higher as inflation cools",
    description: "Investors reacted to softer inflation data with gains across major indexes and lower bond yields.",
    url: "https://www.reuters.com/markets/",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-10T09:00:00Z",
    source: { name: "Reuters" },
    tags: ["general", "world", "business", "markets", "economy"],
  },
  {
    title: "Leaders meet for emergency talks on regional security",
    description: "Diplomats from multiple countries held closed-door meetings to reduce tensions and coordinate aid.",
    url: "https://www.bbc.com/news/world",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-10T15:00:00Z",
    source: { name: "BBC" },
    tags: ["world", "politics", "general"],
  },
  {
    title: "Startups shift focus from growth to profitability",
    description: "Early-stage founders are prioritizing operational efficiency as funding markets become more selective.",
    url: "https://techcrunch.com/startups/",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-09T13:00:00Z",
    source: { name: "TechCrunch" },
    tags: ["business", "technology", "startup"],
  },
  {
    title: "Cloud providers expand regional infrastructure",
    description: "New data center regions are being announced to meet enterprise demand and data-residency needs.",
    url: "https://www.theverge.com/tech",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-08T10:00:00Z",
    source: { name: "The Verge" },
    tags: ["technology", "cloud", "general"],
  },
  {
    title: "AI copilots move deeper into workplace tools",
    description: "Product teams are embedding AI assistants into docs, tickets, and communication workflows.",
    url: "https://openai.com/news",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-07T11:00:00Z",
    source: { name: "OpenAI" },
    tags: ["technology", "ai", "machine learning"],
  },
  {
    title: "New benchmark tracks real-world model reliability",
    description: "Researchers introduced an evaluation focused on consistency, latency, and safety under production loads.",
    url: "https://arxiv.org/list/cs.AI/recent",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-06T15:00:00Z",
    source: { name: "arXiv" },
    tags: ["ai", "machine learning", "research", "science"],
  },
  {
    title: "Public health agencies expand seasonal vaccination drive",
    description: "Authorities launched a coordinated campaign focused on high-risk populations and underserved areas.",
    url: "https://www.who.int/news-room",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-06T09:00:00Z",
    source: { name: "WHO" },
    tags: ["health", "world", "policy"],
  },
  {
    title: "Major blockchain networks report lower fees",
    description: "Protocol upgrades are improving transaction throughput and reducing average settlement costs.",
    url: "https://www.coindesk.com/",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-05T14:00:00Z",
    source: { name: "CoinDesk" },
    tags: ["blockchain", "technology", "crypto"],
  },
  {
    title: "Regulators propose clearer stablecoin framework",
    description: "Draft policy language aims to define reserve standards, audits, and consumer protections.",
    url: "https://www.ft.com/cryptocurrencies",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-04T12:00:00Z",
    source: { name: "Financial Times" },
    tags: ["blockchain", "business", "policy", "politics"],
  },
  {
    title: "Championship race tightens after weekend results",
    description: "Top teams traded points in a dramatic set of fixtures with title implications.",
    url: "https://www.espn.com/",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-03T08:00:00Z",
    source: { name: "ESPN" },
    tags: ["sports", "general"],
  },
  {
    title: "Sports analytics reshapes player recruitment",
    description: "Clubs continue investing in data science to improve scouting and reduce transfer risk.",
    url: "https://www.bbc.com/sport",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-02T10:00:00Z",
    source: { name: "BBC Sport" },
    tags: ["sports", "technology"],
  },
  {
    title: "Consumer spending remains resilient this quarter",
    description: "Retail and services data indicate stable demand despite tighter household budgets.",
    url: "https://www.wsj.com/news/business",
    urlToImage: "/logo.png",
    publishedAt: "2026-02-01T09:30:00Z",
    source: { name: "Wall Street Journal" },
    tags: ["business", "economy"],
  },
  {
    title: "Cybersecurity teams prioritize identity protection",
    description: "Security leaders are accelerating rollout of phishing-resistant authentication.",
    url: "https://www.wired.com/tag/security/",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-31T09:00:00Z",
    source: { name: "Wired" },
    tags: ["technology", "security", "general"],
  },
  {
    title: "Enterprise AI governance becomes board-level topic",
    description: "Companies are formalizing model review, risk controls, and policy ownership across teams.",
    url: "https://hbr.org/topic/artificial-intelligence",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-30T11:00:00Z",
    source: { name: "Harvard Business Review" },
    tags: ["ai", "business", "governance"],
  },
  {
    title: "Lawmakers debate cross-border data transfer standards",
    description: "A new bill aims to align privacy compliance with international trade and security requirements.",
    url: "https://www.politico.com/",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-30T07:00:00Z",
    source: { name: "Politico" },
    tags: ["politics", "technology", "world", "policy"],
  },
  {
    title: "Researchers announce progress in battery chemistry",
    description: "Lab results show improved energy density that could accelerate electric transport adoption.",
    url: "https://www.nature.com/news",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-29T10:00:00Z",
    source: { name: "Nature" },
    tags: ["science", "technology", "world"],
  },
  {
    title: "Global automakers increase EV platform investment",
    description: "Manufacturers announced multi-year plans to expand electric vehicle production and battery partnerships.",
    url: "https://www.autonews.com/",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-28T12:00:00Z",
    source: { name: "Automotive News" },
    tags: ["car industry", "automotive", "business", "technology", "ev"],
  },
  {
    title: "Stock indices rise as earnings season beats expectations",
    description: "Strong quarterly results from major firms lifted market sentiment across regional exchanges.",
    url: "https://www.marketwatch.com/",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-28T08:00:00Z",
    source: { name: "MarketWatch" },
    tags: ["share market", "stock market", "markets", "business", "economy"],
  },
  {
    title: "Major observatory publishes deep-space imaging update",
    description: "Astronomers released new high-resolution imagery improving analysis of distant galaxy clusters.",
    url: "https://www.nasa.gov/news/",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-27T09:00:00Z",
    source: { name: "NASA" },
    tags: ["astronomy", "science", "space", "research"],
  },
  {
    title: "Streaming platforms compete for global sports rights",
    description: "Media companies are reshaping content strategy as live sports become key to subscriber growth.",
    url: "https://www.hollywoodreporter.com/",
    urlToImage: "/logo.png",
    publishedAt: "2026-01-27T07:00:00Z",
    source: { name: "Hollywood Reporter" },
    tags: ["media", "streaming", "business", "sports"],
  },
];

type FallbackParams = {
  category?: string;
  query?: string;
  pageSize?: number;
};

const categoryToTag: Record<string, string> = {
  general: "world",
  business: "business",
  sports: "sports",
  health: "health",
  science: "science",
  technology: "technology",
};

export function getFallbackArticles({ category, query, pageSize = 12 }: FallbackParams): NewsArticle[] {
  const normalizedCategory = category?.toLowerCase().trim();
  const normalizedQuery = query?.toLowerCase().trim();
  const mappedCategory = normalizedCategory ? categoryToTag[normalizedCategory] ?? normalizedCategory : null;

  const filtered = fallbackArticles.filter((article) => {
    const haystack = `${article.title} ${article.description} ${article.tags.join(" ")}`.toLowerCase();

    if (normalizedQuery) {
      return haystack.includes(normalizedQuery) || article.tags.some((tag) => normalizedQuery.includes(tag));
    }

    if (mappedCategory) {
      return article.tags.includes(mappedCategory);
    }

    return true;
  });

  const selected = filtered.length > 0 ? filtered : fallbackArticles;

  return selected.slice(0, pageSize).map((article) => ({
    title: article.title,
    description: article.description,
    url: article.url,
    urlToImage: article.urlToImage,
    publishedAt: article.publishedAt,
    source: article.source,
  }));
}
