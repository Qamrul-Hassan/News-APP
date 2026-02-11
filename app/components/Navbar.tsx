"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

type NavItem = {
  href: string;
  label: string;
};

const primaryItems: NavItem[] = [
  { href: "/", label: "Home" },
  { href: "/world", label: "World" },
  { href: "/business", label: "Business" },
  { href: "/politics", label: "Politics" },
  { href: "/sports", label: "Sports" },
];

const technologyLinks: NavItem[] = [
  { href: "/technology/tech-news", label: "Tech News" },
  { href: "/technology/ai", label: "AI & ML" },
  { href: "/technology/blockchain", label: "Blockchain" },
  { href: "/technology/crypto", label: "Crypto" },
];

const moreLinks: NavItem[] = [
  { href: "/health", label: "Health" },
  { href: "/science", label: "Science" },
  { href: "/astronomy", label: "Astronomy" },
  { href: "/media", label: "Media" },
  { href: "/car-industry", label: "Car Industry" },
  { href: "/share-market", label: "Share Market" },
  { href: "/about", label: "About" },
];

export default function Navbar() {
  const pathname = usePathname();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [desktopTechOpen, setDesktopTechOpen] = useState(false);
  const [desktopMoreOpen, setDesktopMoreOpen] = useState(false);
  const [mobileTechOpen, setMobileTechOpen] = useState(false);
  const [mobileMoreOpen, setMobileMoreOpen] = useState(false);

  const desktopTechRef = useRef<HTMLDivElement>(null);
  const desktopMoreRef = useRef<HTMLDivElement>(null);
  const mobileTechRef = useRef<HTMLDivElement>(null);
  const mobileMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setMobileOpen(false);
    setDesktopTechOpen(false);
    setDesktopMoreOpen(false);
    setMobileTechOpen(false);
    setMobileMoreOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onMouseDown = (event: MouseEvent) => {
      const target = event.target as Node;

      if (desktopTechRef.current && !desktopTechRef.current.contains(target)) {
        setDesktopTechOpen(false);
      }

      if (desktopMoreRef.current && !desktopMoreRef.current.contains(target)) {
        setDesktopMoreOpen(false);
      }

      if (mobileTechRef.current && !mobileTechRef.current.contains(target)) {
        setMobileTechOpen(false);
      }

      if (mobileMoreRef.current && !mobileMoreRef.current.contains(target)) {
        setMobileMoreOpen(false);
      }
    };

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setDesktopTechOpen(false);
        setDesktopMoreOpen(false);
        setMobileTechOpen(false);
        setMobileMoreOpen(false);
      }
    };

    document.addEventListener("mousedown", onMouseDown);
    document.addEventListener("keydown", onKeyDown);

    return () => {
      document.removeEventListener("mousedown", onMouseDown);
      document.removeEventListener("keydown", onKeyDown);
    };
  }, []);

  const isActive = (href: string) => pathname === href;
  const isTechActive = pathname.startsWith("/technology");
  const isMoreActive = ["/health", "/science", "/astronomy", "/media", "/car-industry", "/share-market", "/about"].some((href) =>
    pathname.startsWith(href)
  );

  const navClass = (active: boolean) => `btn-nav inline-flex items-center ${active ? "btn-nav-active" : ""}`;
  const dropdownClass = (active: boolean) => `btn-nav inline-flex items-center cursor-pointer ${active ? "btn-nav-active" : ""}`;
  const dropdownItemClass = (active: boolean) =>
    `block rounded-xl px-3 py-2 text-sm font-semibold transition ${
      active ? "bg-blue-600 text-white" : "text-[color:var(--foreground)] hover:bg-[color:var(--surface-soft)]"
    }`;

  return (
    <nav className="sticky top-0 z-50 border-b border-[color:var(--border-color)] bg-[color:var(--surface)]/95 backdrop-blur-md" aria-label="Main navigation">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <Link href="/" className="group flex items-center gap-3 rounded-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500">
          <div className="relative h-10 w-10 overflow-hidden rounded-xl border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] sm:h-11 sm:w-11">
            <Image src="/logo.png" alt="Flash News logo" fill className="object-contain p-1" />
          </div>
          <span className="bg-gradient-to-r from-slate-900 via-blue-700 to-cyan-500 bg-clip-text text-xl font-black tracking-tight text-transparent sm:text-2xl">
            Flash News
          </span>
        </Link>

        <div className="hidden items-center gap-1 md:flex lg:gap-2">
          {primaryItems.map((item) => (
            <Link key={item.href} href={item.href} className={navClass(isActive(item.href))}>
              {item.label}
            </Link>
          ))}

          <div className="relative" ref={desktopTechRef}>
            <button
              type="button"
              className={dropdownClass(isTechActive)}
              onClick={() => {
                setDesktopTechOpen((prev) => !prev);
                setDesktopMoreOpen(false);
              }}
              aria-expanded={desktopTechOpen}
              aria-controls="desktop-tech-menu"
            >
              Technology
              <span className={`text-xs transition-transform ${desktopTechOpen ? "rotate-180" : ""}`} aria-hidden="true">
                v
              </span>
            </button>
            {desktopTechOpen ? (
              <div id="desktop-tech-menu" className="absolute right-0 mt-3 w-56 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-2 shadow-xl motion-safe:animate-pop-in">
                {technologyLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={dropdownItemClass(isActive(link.href))}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>

          <div className="relative" ref={desktopMoreRef}>
            <button
              type="button"
              className={dropdownClass(isMoreActive)}
              onClick={() => {
                setDesktopMoreOpen((prev) => !prev);
                setDesktopTechOpen(false);
              }}
              aria-expanded={desktopMoreOpen}
              aria-controls="desktop-more-menu"
            >
              More
              <span className={`text-xs transition-transform ${desktopMoreOpen ? "rotate-180" : ""}`} aria-hidden="true">
                v
              </span>
            </button>
            {desktopMoreOpen ? (
              <div id="desktop-more-menu" className="absolute right-0 mt-3 w-56 rounded-2xl border border-[color:var(--border-color)] bg-[color:var(--surface-strong)] p-2 shadow-xl motion-safe:animate-pop-in">
                {moreLinks.map((link) => (
                  <Link key={link.href} href={link.href} className={dropdownItemClass(isActive(link.href))}>
                    {link.label}
                  </Link>
                ))}
              </div>
            ) : null}
          </div>
        </div>

        <button
          type="button"
          className="btn-nav inline-flex items-center cursor-pointer md:hidden"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-expanded={mobileOpen}
          aria-controls="mobile-menu"
        >
          Menu
        </button>

        {mobileOpen ? (
          <div id="mobile-menu" className="absolute left-0 right-0 top-20 border-t border-[color:var(--border-color)] bg-[color:var(--surface-strong)] px-4 py-4 shadow-md md:hidden">
            <div className="flex flex-col gap-2">
              {primaryItems.map((item) => (
                <Link key={item.href} href={item.href} className={`${navClass(isActive(item.href))} w-full justify-start`}>
                  {item.label}
                </Link>
              ))}

              <div className="rounded-xl border border-[color:var(--border-color)] p-2" ref={mobileTechRef}>
                <button
                  type="button"
                  className={`${dropdownClass(isTechActive)} w-full justify-between`}
                  onClick={() => {
                    setMobileTechOpen((prev) => !prev);
                    setMobileMoreOpen(false);
                  }}
                  aria-expanded={mobileTechOpen}
                  aria-controls="mobile-tech-menu"
                >
                  Technology
                  <span className={`text-xs transition-transform ${mobileTechOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    v
                  </span>
                </button>
                {mobileTechOpen ? (
                  <div id="mobile-tech-menu" className="mt-2 space-y-2">
                    {technologyLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={`${navClass(isActive(link.href))} w-full justify-start`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>

              <div className="rounded-xl border border-[color:var(--border-color)] p-2" ref={mobileMoreRef}>
                <button
                  type="button"
                  className={`${dropdownClass(isMoreActive)} w-full justify-between`}
                  onClick={() => {
                    setMobileMoreOpen((prev) => !prev);
                    setMobileTechOpen(false);
                  }}
                  aria-expanded={mobileMoreOpen}
                  aria-controls="mobile-more-menu"
                >
                  More
                  <span className={`text-xs transition-transform ${mobileMoreOpen ? "rotate-180" : ""}`} aria-hidden="true">
                    v
                  </span>
                </button>
                {mobileMoreOpen ? (
                  <div id="mobile-more-menu" className="mt-2 space-y-2">
                    {moreLinks.map((link) => (
                      <Link key={link.href} href={link.href} className={`${navClass(isActive(link.href))} w-full justify-start`}>
                        {link.label}
                      </Link>
                    ))}
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </nav>
  );
}
