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
      <header className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm sm:p-10">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-500">About Flash News</p>
        <h1 id="about-title" className="mt-3 text-3xl font-black tracking-tight text-slate-900 sm:text-5xl">
          Modern news reading without clutter
        </h1>
        <p className="mt-4 max-w-2xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Flash News curates top headlines in business, technology, AI, blockchain, and sports so you can scan the day quickly and open full coverage from trusted publishers.
        </p>

        <div className="mt-8 grid gap-3 sm:grid-cols-2">
          {principles.map((item) => (
            <div key={item} className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-medium text-slate-700">
              {item}
            </div>
          ))}
        </div>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/"
            className="rounded-full bg-slate-900 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-slate-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            Explore headlines
          </Link>
          <Link
            href="/technology/ai"
            className="rounded-full border border-slate-300 px-5 py-2.5 text-sm font-semibold text-slate-700 transition hover:border-slate-900 hover:text-slate-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-900"
          >
            Browse AI news
          </Link>
        </div>
      </header>
    </section>
  );
}
