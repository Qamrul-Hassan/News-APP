import NewsCard from "./NewsCard";
import AutoRefresh from "./AutoRefresh";
import { NewsArticle } from "../types";

type NewsPageProps = {
  title: string;
  subtitle: string;
  articles: NewsArticle[];
  icon?: string;
  accent?: "blue" | "emerald" | "amber";
  emptyMessage: string;
  sectionTags?: string[];
};

const accentText = {
  blue: "text-blue-300",
  emerald: "text-emerald-300",
  amber: "text-amber-300",
};

export default function NewsPage({
  title,
  subtitle,
  articles,
  icon,
  accent = "blue",
  emptyMessage,
  sectionTags = [],
}: NewsPageProps) {
  return (
    <section className="min-h-full w-full px-1 py-5 sm:px-2 sm:py-8" aria-labelledby="page-title">
      <AutoRefresh intervalMs={60_000} />

      <header className="mx-auto mb-8 max-w-5xl rounded-3xl border border-slate-700 bg-slate-900/75 px-5 py-7 text-center shadow-sm backdrop-blur-sm sm:px-10 sm:py-10">
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] font-semibold uppercase tracking-[0.2em] text-slate-400">
          <span>Flash News Global Desk</span>
          <span aria-hidden="true">|</span>
          <span>Verified Sources</span>
          <span aria-hidden="true">|</span>
          <span>Live Refresh 60s</span>
        </div>

        <h1 id="page-title" className={`mt-4 text-3xl font-black tracking-tight sm:text-5xl ${accentText[accent]}`}>
          {icon ? `${icon} ` : ""}
          {title}
        </h1>

        <p className="mx-auto mt-4 max-w-3xl text-sm leading-relaxed text-slate-300 sm:text-base">{subtitle}</p>

        {sectionTags.length > 0 ? (
          <ul className="mt-6 flex flex-wrap items-center justify-center gap-2" aria-label="Section topics">
            {sectionTags.map((tag) => (
              <li key={tag} className="rounded-full border border-slate-700 bg-slate-800/70 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-slate-300">
                {tag}
              </li>
            ))}
          </ul>
        ) : null}
      </header>

      {articles.length === 0 ? (
        <p className="rounded-2xl border border-slate-700 bg-slate-900/75 p-10 text-center text-base text-slate-300">{emptyMessage}</p>
      ) : (
        <section className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label={`${title} article list`}>
          {articles.map((article, index) => (
            <NewsCard key={`${article.url}-${index}`} article={article} index={index} accent={accent} />
          ))}
        </section>
      )}
    </section>
  );
}

