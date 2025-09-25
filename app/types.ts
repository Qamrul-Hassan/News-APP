// types.ts
export type Article = {
    title: string;
    description: string;
    url: string;
    urlToImage?: string; // ✅ allow optional
  };
  
  
  export type NewsArticle = {
    title: string;
    description: string;
    url: string;
    urlToImage?: string; // can be undefined
  };
  
  export type NewsApiResponse = {
    articles: NewsArticle[];
  };
  