// app/world/page.tsx
'use client'; // This ensures the page uses client-side rendering

import { useEffect } from 'react';
import { useNewsStore } from '../store/newsStore';  // Adjust the path
import type { NewsArticle } from '../types';  // Adjust the path to where NewsArticle is defined
import NewsCard from '../components/NewsCard';  // Adjust the path

export default function WorldPage() {
  const { articles, fetchNews, isLoading, error } = useNewsStore();

  useEffect(() => {
    // Fetch general news on component mount
    const fetchData = async () => {
      try {
        await fetchNews('general');  // Fetch general news
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchData();
  }, [fetchNews]);  // Dependency on fetchNews

  return (
    <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">World News 🌍</h1>
        <p className="text-gray-600 text-lg">Your daily dose of the latest world news</p>
      </header>

      {isLoading && (
        <p className="text-center text-gray-500 text-lg animate-pulse">Loading world news...</p>
      )}

      {error && (
        <p className="text-center text-red-500 text-lg">{error || 'Failed to load world news. Please try again later.'}</p>
      )}

      {!isLoading && articles.length === 0 && !error && (
        <p className="text-center text-gray-500 text-lg">No world news found.</p>
      )}

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {articles.map((article: NewsArticle, index: number) => (
          <NewsCard key={index} article={article} />
        ))}
      </section>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} World News. All rights reserved.
      </footer>
    </main>
  );
}
