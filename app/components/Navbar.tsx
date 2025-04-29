'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const [mobileDropdownOpen, setMobileDropdownOpen] = useState(false);
  const desktopDropdownRef = useRef<HTMLDivElement>(null);
  const mobileDropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(prev => !prev);
    setMobileDropdownOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        desktopDropdownRef.current &&
        !desktopDropdownRef.current.contains(event.target as Node)
      ) {
        setDesktopDropdownOpen(false);
      }
      if (
        mobileDropdownRef.current &&
        !mobileDropdownRef.current.contains(event.target as Node)
      ) {
        setMobileDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-12 h-12 md:w-20 md:h-20">
              <Image src="/logo.png" alt="Flash News Logo" fill className="object-contain" priority />
            </div>
            <span className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Flash News
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-4">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/business">Business</NavLink>
            <div className="relative" ref={desktopDropdownRef}>
              <button
                onClick={() => setDesktopDropdownOpen(prev => !prev)}
                className="flex items-center px-4 py-2 text-lg text-neutral-700 dark:text-gray-200 hover:text-blue-600 transition-colors duration-200"
              >
                Technology
                <svg xmlns="http://www.w3.org/2000/svg" className={`ml-2 h-5 w-5 transition-transform ${desktopDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {desktopDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 bg-white dark:bg-neutral-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5">
                  <DropdownLink href="/technology/tech-news">Tech News</DropdownLink>
                  <DropdownLink href="/technology/ai">AI & Machine Learning</DropdownLink>
                  <DropdownLink href="/technology/blockchain">Blockchain</DropdownLink>
                </div>
              )}
            </div>
            <NavLink href="/sports">Sports</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={toggleMenu} className="md:hidden p-2 rounded-md text-neutral-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 focus:outline-none">
            {isOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-800 shadow-lg">
          <MobileLink href="/" onClick={toggleMenu}>Home</MobileLink>
          <MobileLink href="/business" onClick={toggleMenu}>Business</MobileLink>
          <div className="px-4 py-2" ref={mobileDropdownRef}>
            <button
              onClick={() => setMobileDropdownOpen(prev => !prev)}
              className="w-full flex justify-between items-center py-2 text-lg font-medium text-neutral-700 dark:text-gray-200"
            >
              Technology
              <svg xmlns="http://www.w3.org/2000/svg" className={`h-5 w-5 transition-transform ${mobileDropdownOpen ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {mobileDropdownOpen && (
              <div className="mt-2 space-y-1">
                <MobileLink href="/technology/tech-news" onClick={toggleMenu}>Tech News</MobileLink>
                <MobileLink href="/technology/ai" onClick={toggleMenu}>AI & Machine Learning</MobileLink>
                <MobileLink href="/technology/blockchain" onClick={toggleMenu}>Blockchain</MobileLink>
              </div>
            )}
          </div>
          <MobileLink href="/sports" onClick={toggleMenu}>Sports</MobileLink>
          <MobileLink href="/about" onClick={toggleMenu}>About</MobileLink>
        </div>
      )}
    </nav>
  );
}

function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="px-4 py-2 text-lg font-medium text-neutral-700 dark:text-gray-200 hover:text-blue-600 transition-colors duration-200">
      {children}
    </Link>
  );
}

function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link href={href} className="block px-4 py-2 text-neutral-700 dark:text-gray-200 hover:bg-gray-100 transition-colors duration-150">
      {children}
    </Link>
  );
}

function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link href={href} onClick={onClick} className="block px-4 py-2 text-lg font-medium text-neutral-700 dark:text-gray-200 hover:bg-gray-100 transition-colors duration-150">
      {children}
    </Link>
  );
}
