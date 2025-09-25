'use client';

import Image from 'next/image';
import { Article } from '../types'; // make sure this path is correct

type NewsCardProps = {
  article: Article;
};

export default function NewsCard({ article }: NewsCardProps) {
  return (
    <article className="bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col group">
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
          className="inline-block text-green-600 font-semibold hover:underline mt-auto"
        >
          Read Full Story →
        </a>
      </div>
    </article>
  );
}
