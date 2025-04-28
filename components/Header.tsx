'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  return (
    <header className="bg-background border-b border-gray-200 dark:border-gray-700 sticky top-0 z-50 shadow-md">
      <div className="container flex justify-between items-center py-4">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-primary hover:text-secondary transition-colors">
          NewsFlash
        </Link>

        {/* Hamburger */}
        <button
          className="md:hidden p-2 text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle Menu"
        >
          <svg
            className="w-8 h-8 transform transition-all duration-300 ease-in-out"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Menu */}
        <nav
          className={`md:flex md:flex-row md:items-center md:space-x-8 absolute md:static top-16 right-4 bg-background md:bg-transparent p-4 md:p-0 rounded-md shadow-md md:shadow-none ${
            isOpen ? 'flex' : 'hidden'
          } transition-all duration-300 ease-in-out`}
        >
          <Link href="/" className="block py-2 md:py-0 text-foreground hover:text-primary transition-colors">
            Home
          </Link>
          <Link href="/world" className="block py-2 md:py-0 text-foreground hover:text-primary transition-colors">
            World
          </Link>

          {/* Dropdown Menu */}
          <div
            className="relative"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <button
              className="block py-2 md:py-0 text-foreground hover:text-primary transition-colors"
              aria-haspopup="true"
            >
              Technology
            </button>
            <div
              className={`absolute left-0 bg-white shadow-lg rounded-lg w-48 opacity-0 transform transition-all duration-300 ease-in-out ${
                dropdownOpen ? 'opacity-100 translate-y-0' : 'translate-y-4'
              }`}
              style={{ top: '100%' }}
            >
              <Link
                href="/technology/web"
                className="block px-6 py-3 text-foreground hover:bg-gray-100 hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Web Development
              </Link>
              <Link
                href="/technology/ai"
                className="block px-6 py-3 text-foreground hover:bg-gray-100 hover:text-primary transition-colors duration-300 ease-in-out"
              >
                AI & Machine Learning
              </Link>
              <Link
                href="/technology/blockchain"
                className="block px-6 py-3 text-foreground hover:bg-gray-100 hover:text-primary transition-colors duration-300 ease-in-out"
              >
                Blockchain
              </Link>
            </div>
          </div>

          <Link href="/sports" className="block py-2 md:py-0 text-foreground hover:text-primary transition-colors">
            Sports
          </Link>
          <Link href="/about" className="block py-2 md:py-0 text-foreground hover:text-primary transition-colors">
            About
          </Link>
        </nav>
      </div>
    </header>
  );
}
