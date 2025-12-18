"use client";

import { useState } from "react";
import Link from "next/link";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="md:hidden">
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-[110] flex h-10 w-10 items-center justify-center text-[var(--foreground)]"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
      >
        {isOpen ? (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        )}
      </button>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-[100] flex flex-col bg-[var(--background)]"
          style={{ top: 0, left: 0, right: 0, bottom: 0, height: '100vh', width: '100vw' }}
        >
          {/* Spacer for nav bar */}
          <div className="h-[70px] flex-shrink-0" />
          
          {/* Menu Content */}
          <nav className="flex flex-1 flex-col p-6">
            <Link 
              href="#services" 
              onClick={closeMenu}
              className="border-b border-[var(--charcoal-light)] py-4 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--rose)]"
            >
              Services
            </Link>
            <Link 
              href="#pricing" 
              onClick={closeMenu}
              className="border-b border-[var(--charcoal-light)] py-4 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--rose)]"
            >
              Pricing
            </Link>
            <Link 
              href="/about" 
              onClick={closeMenu}
              className="border-b border-[var(--charcoal-light)] py-4 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--rose)]"
            >
              About
            </Link>
            <Link 
              href="#book" 
              onClick={closeMenu}
              className="mt-6 bg-[var(--rose)] px-6 py-4 text-center text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
            >
              Book Your Session
            </Link>
            <a 
              href="tel:+13192140458"
              className="mt-4 flex items-center justify-center gap-2 border border-[var(--slate)] py-4 text-lg text-[var(--foreground)] transition-all hover:border-[var(--silver)]"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              Call 319-214-0458
            </a>
          </nav>
        </div>
      )}
    </div>
  );
}
