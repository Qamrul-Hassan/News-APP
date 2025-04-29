'use client';  // This ensures that this store is used on the client-side
import { create } from 'zustand';
import { NewsApiResponse, NewsArticle } from '../types';


// Your actual API key from NewsAPI
const API_KEY = '4dd36a4de906441b9103c1b205d11073';  
const BASE_URL = 'https://newsapi.org/v2/top-headlines'; // Base URL for NewsAPI

interface NewsState {
  articles: NewsArticle[];
  isLoading: boolean;
  error: string | null;
  fetchNews: (category: string) => Promise<{ articles: NewsArticle[] }>;
}

export const useNewsStore = create<NewsState>((set) => ({
  articles: [],
  isLoading: false,
  error: null,

  fetchNews: async (category: string) => {
    try {
      set({ isLoading: true, error: null });

      // Fetch news data from NewsAPI
      const response = await fetch(`${BASE_URL}?category=${category}&apiKey=${API_KEY}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch news');
      }

      const data: NewsApiResponse = await response.json();
      const articles = data.articles || [];

      set({ articles, isLoading: false });
      return { articles }; // Return the fetched articles
    } catch (error: unknown) {
      if (error instanceof Error) {
        set({ error: error.message, isLoading: false });
      } else {
        set({ error: 'An unknown error occurred.', isLoading: false });
      }
      return { articles: [] }; // Return empty array if error occurs
    }
  }
}));
