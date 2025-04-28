import { create } from 'zustand';

interface Article {
  category: string | null;
  source: {
    id: string | null;
    name: string;
  };
  author: string | null;
  title: string;
  description: string;
  url: string;
  urlToImage: string | null;
  publishedAt: string;
  content: string;
}

interface NewsState {
  articles: Article[];
  isLoading: boolean;
  error: string | null;
  fetchNews: () => Promise<void>;
}

export const useNewsStore = create<NewsState>((set) => ({
  articles: [],
  isLoading: false,
  error: null,

  fetchNews: async () => {
    set({ isLoading: true, error: null });
    try {
      const res = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=4dd36a4de906441b9103c1b205d11073`
      );
      const data = await res.json();

      if (data.status !== 'ok') {
        throw new Error(data.message || 'Failed to fetch news');
      }

      set({ articles: data.articles, isLoading: false });
    } catch (error: unknown) {
      const errorMessage = error instanceof Error ? error.message : 'An unknown error occurred';
      set({ error: errorMessage, isLoading: false });
    }
  },
}));
