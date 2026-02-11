import Link from "next/link";

const quickLinks = [
  { href: "/world", label: "World" },
  { href: "/business", label: "Business" },
  { href: "/politics", label: "Politics" },
  { href: "/sports", label: "Sports" },
  { href: "/technology/tech-news", label: "Technology" },
  { href: "/health", label: "Health" },
  { href: "/science", label: "Science" },
  { href: "/astronomy", label: "Astronomy" },
  { href: "/media", label: "Media" },
  { href: "/car-industry", label: "Car Industry" },
  { href: "/share-market", label: "Share Market" },
];

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-[#050816]">
      <div className="mx-auto w-full max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-slate-100">Flash News Global Desk</p>
            <p className="mt-2 max-w-md text-sm text-slate-300">
              Professional, fast, and mobile-first international news coverage with accessibility-first design.
            </p>
          </div>

          <nav aria-label="Footer quick links" className="max-w-md">
            <p className="text-xs font-semibold uppercase tracking-wide text-slate-400">Sections</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="rounded-full border border-slate-700 px-3 py-1 text-xs font-semibold text-slate-200 transition hover:border-blue-400 hover:bg-slate-900 hover:text-blue-200"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </nav>
        </div>

        <div className="mt-6 flex flex-col items-start justify-between gap-2 border-t border-slate-800 pt-4 text-sm text-slate-300 sm:flex-row sm:items-center">
          <p>Copyright {new Date().getFullYear()} Flash News. All rights reserved.</p>
          <p>Built with Next.js and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  );
}
