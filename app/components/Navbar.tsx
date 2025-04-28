'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (isOpen) {
      setDropdownOpen(false);
    }
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <nav className="bg-white dark:bg-neutral-900 shadow-lg sticky top-0 z-50 border-b border-gray-200 dark:border-neutral-700">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20"> {/* Increased height */}
          {/* Logo and Brand - Larger on desktop */}
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center">
              <div className="relative w-12 h-12 md:w-25 md:h-25"> {/* Larger logo */}
                <Image
                  src="/Flash(2).png"
                  alt="Flash News Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
              <span className="ml-3 text-2xl md:text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Flash News
              </span>
            </Link>
          </div>

          {/* Desktop Navigation - Larger text */}
          <div className="hidden md:flex items-center space-x-2">
            <NavLink href="/">Home</NavLink>
            <NavLink href="/world">World</NavLink>
            
            {/* Technology Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="flex items-center px-4 py-3 text-lg text-neutral-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
              >
                Technology
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-2 h-5 w-5 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="absolute left-0 mt-2 w-64 origin-top-right bg-white dark:bg-neutral-800 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50">
                  <div className="py-1">
                    <DropdownLink href="/technology/web">Web Development</DropdownLink>
                    <DropdownLink href="/technology/ai">AI & Machine Learning</DropdownLink>
                    <DropdownLink href="/technology/blockchain">Blockchain</DropdownLink>
                  </div>
                </div>
              )}
            </div>

            <NavLink href="/sports">Sports</NavLink>
            <NavLink href="/about">About</NavLink>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-neutral-700 dark:text-gray-200 hover:text-blue-600 hover:bg-gray-100 dark:hover:bg-neutral-700 focus:outline-none transition duration-150 ease-in-out"
              aria-label="Main menu"
            >
              {isOpen ? (
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-neutral-800 shadow-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <MobileLink href="/" onClick={toggleMenu}>Home</MobileLink>
            <MobileLink href="/world" onClick={toggleMenu}>World</MobileLink>
            
            {/* Mobile Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={toggleDropdown}
                className="w-full flex justify-between items-center px-3 py-3 rounded-md text-lg font-medium text-neutral-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700"
              >
                Technology
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className={`ml-1 h-5 w-5 transform transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              {dropdownOpen && (
                <div className="pl-4 space-y-1">
                  <MobileLink href="/technology/web" onClick={toggleMenu}>Web Development</MobileLink>
                  <MobileLink href="/technology/ai" onClick={toggleMenu}>AI & Machine Learning</MobileLink>
                  <MobileLink href="/technology/blockchain" onClick={toggleMenu}>Blockchain</MobileLink>
                </div>
              )}
            </div>

            <MobileLink href="/sports" onClick={toggleMenu}>Sports</MobileLink>
            <MobileLink href="/about" onClick={toggleMenu}>About</MobileLink>
          </div>
        </div>
      )}
    </nav>
  );
}

// Desktop NavLink Component - Larger text
function NavLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="px-4 py-3 rounded-md text-lg font-medium text-neutral-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-200 relative group"
    >
      {children}
      <span className="absolute bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-1 bg-blue-600 group-hover:w-3/4 transition-all duration-300"></span>
    </Link>
  );
}

// Dropdown Link Component - Larger text
function DropdownLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className="block px-4 py-3 text-base text-neutral-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-150"
    >
      {children}
    </Link>
  );
}

// Mobile NavLink Component - Slightly larger text
function MobileLink({ href, children, onClick }: { href: string; children: React.ReactNode; onClick?: () => void }) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className="block px-3 py-3 rounded-md text-lg font-medium text-neutral-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-neutral-700 transition-colors duration-150"
    >
      {children}
    </Link>
  );
}