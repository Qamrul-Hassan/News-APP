import Link from "next/link";

const principles = [
  "Reliable coverage from global sources",
  "Fast, mobile-first reading experience",
  "Accessible design with semantic structure",
  "Consistent, modern UI components",
];

export default function AboutPage() {
  return (
    <section className="mx-auto w-full max-w-4xl px-1 py-6 sm:py-10" aria-labelledby="about-title">
      <header className="rounded-3xl border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-[color:var(--muted-text)]">About Flash News</p>
        <h1 id="about-title" className="mt-3 text-3xl font-black tracking-tight text-[color:var(--heading-text)] sm:text-5xl">
          Modern news reading without clutter
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-[color:var(--muted-text)] sm:text-base">
          Flash News curates top headlines in business, technology, AI, blockchain, crypto, and sports so you can scan the day quickly and open full coverage from trusted publishers.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item} className="rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-soft)] px-4 py-3 text-sm font-medium text-[color:var(--foreground)]">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Explore headlines
          </Link>
          <Link
            href="/technology/ai"
            className="rounded-full border border-[color:var(--border-color)] px-5 py-2.5 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-blue-500 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Browse AI news
          </Link>
          <Link
            href="/technology/crypto"
            className="rounded-full border border-[color:var(--border-color)] px-5 py-2.5 text-sm font-semibold text-[color:var(--foreground)] transition hover:border-blue-500 hover:text-blue-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
          >
            Browse crypto news
          </Link>
        </div>
      </header>
    </section>
  );
}
