// app/page.tsx
'use client';  // This ensures that this component is rendered on the client-side

import { NewsArticle } from './NewsArticle';  // Adjust the import path as needed
import { useEffect } from 'react';
import { useNewsStore } from './store/newsStore';
import Image from 'next/image';

export default function Home() {
  const { articles, fetchNews, isLoading, error } = useNewsStore();

  useEffect(() => {
    const fetchData = async () => {
      try {
        await fetchNews('general');  // Add a category or other argument if needed
      } catch (err) {
        console.error('Error fetching news:', err);
      }
    };

    fetchData();
  }, [fetchNews]);  // Dependency on fetchNews to ensure it's only called when that changes

  return (
    <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">📰 Stay Updated</h1>
        <p className="text-gray-600 text-lg">Your daily dose of the latest news</p>
      </header>

      {isLoading && (
        <p className="text-center text-gray-500 text-lg animate-pulse">Loading news...</p>
      )}

      {error && (
        <p className="text-center text-red-500 text-lg">
          {error || 'Failed to load news. Please try again later.'}
        </p>
      )}

      {!isLoading && articles.length === 0 && !error && (
        <p className="text-center text-gray-500 text-lg">No articles found.</p>
      )}

      <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
        {articles.map((article: NewsArticle, index: number) => (
          <article
            key={index}
            className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group"
          >
            <div className="relative w-full h-60">
              <Image
                src={article.urlToImage || '/news-app.jpg'}
                alt={article.title || 'News Image'}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                priority
                unoptimized
              />
            </div>

            <div className="p-6 flex flex-col flex-grow">
              <h2 className="text-2xl font-bold mb-3 line-clamp-2 text-gray-900">{article.title}</h2>
              <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{article.description}</p>
              <a
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block text-blue-600 font-semibold hover:underline mt-auto"
              >
                Read Full Story →
              </a>
            </div>
          </article>
        ))}
      </section>

      <footer className="mt-20 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} News App. All rights reserved.
      </footer>
    </main>
  );
}
