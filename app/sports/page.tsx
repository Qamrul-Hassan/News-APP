import { NewsArticle } from '../types';  // Ensure the path is correct for your types
import Image from 'next/image';

export default async function SportsPage() {
  // Fetch data directly on the server side
  const res = await fetch(
    'https://newsapi.org/v2/top-headlines?category=sports&apiKey=4dd36a4de906441b9103c1b205d11073' // Replace with your API key
  );

  // Ensure the response is okay
  if (!res.ok) {
    return (
      <p className="text-center text-red-500 text-lg">
        Failed to load sports news. Please try again later.
      </p>
    );
  }

  const data = await res.json();

  // Ensure that the articles exist
  const articles: NewsArticle[] = data.articles || [];

  return (
    <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-gray-100">
      <header className="text-center mb-12">
  <div className="flex items-center justify-center gap-4 mb-4">
    <span className="text-4xl">🏆</span>
    <h1 className="text-5xl font-extrabold text-blue-700">Sports News</h1>
  </div>
  <p className="text-gray-600 text-lg">Latest updates from the world of sports</p>
</header>

      {articles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No sports news found.</p>
      ) : (
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {articles.map((article, index) => (
            <article key={index} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative w-full h-60">
                <Image
                  src={article.urlToImage || '/sports.jpg'}
                  alt={article.title || 'Sports Image'}
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
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 font-semibold hover:underline mt-auto">
                  Read Full Story →
                </a>
              </div>
            </article>
          ))}
        </section>
      )}

      <footer className="mt-20 text-center text-gray-400 text-sm">
        &copy; {new Date().getFullYear()} Sports News. All rights reserved.
      </footer>
    </main>
  );
}
