import Image from "next/image";
import { NewsArticle } from "../types";

type NewsCardProps = {
  article: NewsArticle;
  index: number;
  accent?: "blue" | "emerald" | "amber";
};

const accentStyles = {
  blue: "from-blue-600 to-cyan-500",
  emerald: "from-emerald-600 to-teal-500",
  amber: "from-amber-500 to-orange-500",
};

export default function NewsCard({ article, index, accent = "blue" }: NewsCardProps) {
  const publishedDate = article.publishedAt
    ? new Date(article.publishedAt).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      })
    : null;

  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface)] shadow-sm transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl motion-reduce:transition-none"
      style={{ animationDelay: `${Math.min(index, 8) * 60}ms` }}
    >
      <div className="relative h-56 w-full overflow-hidden bg-[color:var(--surface-soft)]">
        <Image
          src={article.urlToImage || "/logo.png"}
          alt={article.title || "News image"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transition-none"
          unoptimized
        />
      </div>

      <div className="flex flex-1 flex-col p-5">
        {publishedDate ? (
          <time dateTime={article.publishedAt} className="text-xs font-medium uppercase tracking-wide text-[color:var(--muted-text)]">
            {publishedDate}
          </time>
        ) : null}

        <h2 className="mt-2 text-lg font-bold leading-tight text-[color:var(--heading-text)] line-clamp-2">{article.title || "Untitled story"}</h2>

        <p className="mt-3 flex-1 text-sm leading-relaxed text-[color:var(--muted-text)] line-clamp-3">
          {article.description || "Read the full article for more details."}
        </p>

        <a
          href={article.url}
          target="_blank"
          rel="noopener noreferrer"
          className={`mt-5 inline-flex w-fit items-center gap-2 rounded-full bg-gradient-to-r ${accentStyles[accent]} px-4 py-2 text-sm font-semibold text-white shadow-md transition duration-300 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-300 focus-visible:ring-offset-[color:var(--surface-strong)] motion-reduce:transition-none`}
          aria-label={`Read full article: ${article.title || "news item"}`}
        >
          Read story
          <span aria-hidden="true">{"->"}</span>
        </a>
      </div>
    </article>
  );
}
