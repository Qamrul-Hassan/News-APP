// app/NewsArticle.ts
export interface NewsArticle {
    title: string;
    description: string;
    url: string;
    urlToImage?: string;
    publishedAt?: string;  // Make this optional
  }
  