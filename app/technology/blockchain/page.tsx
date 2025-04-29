import Image from 'next/image';
import { NewsArticle } from '../../types';

export const revalidate = 0;

export default async function BlockchainPage() {
  const API_KEY = '4dd36a4de906441b9103c1b205d11073';
  const query = 'blockchain';

  const res = await fetch(
    `https://newsapi.org/v2/everything?q=${encodeURIComponent(query)}&sortBy=publishedAt&apiKey=${API_KEY}`,
    { cache: 'no-store' }
  );
  if (!res.ok) throw new Error(`NewsAPI error: ${res.status}`);

  const data: { articles: NewsArticle[] } = await res.json();
  const articles = data.articles || [];

  return (
    <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-gray-100">
      <header className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-blue-700 mb-4">📰 Blockchain News</h1>
        <p className="text-gray-600 text-lg">Latest articles on blockchain technology</p>
      </header>
      {articles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No articles found.</p>
      ) : (
        <section className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 mt-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
              <div className="relative w-full h-60">
                <Image
                  src={article.urlToImage || '/news-app.jpg'}
                  alt={article.title || 'News Image'}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority unoptimized
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-2xl font-bold mb-3 line-clamp-2">{article.title}</h2>
                <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">{article.description}</p>
                <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-block text-blue-600 font-semibold hover:underline mt-auto">Read Full Story →</a>
              </div>
            </article>
          ))}
        </section>
      )}
      <footer className="mt-20 text-center text-gray-400 text-sm">&copy; {new Date().getFullYear()} Blockchain News. All rights reserved.</footer>
    </main>
  );
}
