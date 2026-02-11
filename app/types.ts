export type NewsArticle = {
  title: string | null;
  description: string | null;
  url: string;
  urlToImage?: string | null;
  publishedAt?: string;
  source?: {
    name?: string;
  };
};

export type NewsApiResponse = {
  status?: string;
  message?: string;
  articles?: NewsArticle[];
};
