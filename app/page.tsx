import Image from 'next/image';
import { NewsArticle } from './types';

export const revalidate = 0; // always fetch fresh data (no cache)

export default async function HomePage() {
  const API_KEY = '4dd36a4de906441b9103c1b205d11073';

  const res = await fetch(
    `https://newsapi.org/v2/top-headlines?language=en&pageSize=9&apiKey=${API_KEY}`,
    { cache: 'no-store' }
  );

  if (!res.ok) {
    throw new Error(`NewsAPI fetch failed: ${res.status}`);
  }

  const data = await res.json();
  const articles: NewsArticle[] = data.articles || [];

<<<<<<< HEAD
  const darkMode = false; // Replace with actual logic to determine dark mode

  return (
    <main className={`min-h-screen py-12 px-6 ${darkMode ? 'bg-neutral-900 text-white' : 'bg-gradient-to-b from-white to-gray-100'}`}>
      <header className="text-center mb-12">
        <div className="flex items-center justify-center gap-4 mb-4">
          <span className="text-4xl">🌐</span>
          <h1 className="text-5xl font-extrabold text-blue-700">Latest News</h1>
        </div>
        <p className="text-gray-600 text-lg">Stay updated with the latest top headlines worldwide</p>
      </header>
=======
  return (
    <main className="min-h-screen py-12 px-6 bg-gradient-to-b from-white to-gray-100">
     <header className="text-center mb-12">
  <div className="flex items-center justify-center gap-4 mb-4">
    <span className="text-4xl">🌐</span>
    <h1 className="text-5xl font-extrabold text-blue-700">Latest News</h1>
  </div>
  <p className="text-gray-600 text-lg">Stay updated with the latest top headlines worldwide</p>
</header>

>>>>>>> b568c11251e33e376fd5f0e978044ff5a53bca2b

      {articles.length === 0 ? (
        <p className="text-center text-gray-500 text-lg">No news articles found.</p>
      ) : (
        <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article, idx) => (
<<<<<<< HEAD
            <article key={idx} className={`bg-white ${darkMode ? 'bg-neutral-800' : ''} rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col group`}>
=======
            <article key={idx} className="bg-white rounded-xl shadow-md hover:shadow-lg overflow-hidden flex flex-col group">
>>>>>>> b568c11251e33e376fd5f0e978044ff5a53bca2b
              <div className="relative w-full h-60">
                <Image
                  src={article.urlToImage || '/news-app.jpg'}
                  alt={article.title || 'News Image'}
                  fill
                  className="object-cover group-hover:scale-105 transition duration-300"
                  unoptimized
                  priority
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h2 className="text-xl font-semibold mb-2 line-clamp-2">{article.title}</h2>
<<<<<<< HEAD
                <p className={`text-gray-600 text-sm mb-4 line-clamp-3 flex-grow ${darkMode ? 'text-gray-400' : ''}`}>{article.description}</p>
=======
                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{article.description}</p>
>>>>>>> b568c11251e33e376fd5f0e978044ff5a53bca2b
                <a
                  href={article.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 font-medium hover:underline mt-auto"
                >
                  Read more →
                </a>
              </div>
            </article>
          ))}
        </section>
      )}

      
    </main>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> b568c11251e33e376fd5f0e978044ff5a53bca2b
