"use client";

import { useState } from "react";
import Link from "next/link";

interface MobileNavProps {
  currentPage?: "home" | "about" | "service";
}

const services = [
  { name: "Sports Massage", href: "/sports-massage-cedar-rapids" },
  { name: "Mobile Massage", href: "/mobile-massage-cedar-rapids" },
  { name: "Therapeutic Massage", href: "/therapeutic-massage" },
];

const conditions = [
  { name: "Back Pain", href: "/massage-for-back-pain" },
  { name: "Neck & Shoulder Pain", href: "/massage-for-neck-and-shoulder-pain" },
  { name: "Hip Pain", href: "/massage-for-hip-pain" },
  { name: "Runner Injuries", href: "/massage-for-runner-injuries" },
  { name: "Golf Injuries", href: "/massage-for-golfers" },
];

const resources = [
  { name: "What to Expect", href: "/what-to-expect-sports-massage" },
  { name: "Sports vs Regular Massage", href: "/sports-massage-vs-regular-massage" },
  { name: "How Often to Get Massage", href: "/how-often-sports-massage" },
  { name: "Massage for Adults 40+", href: "/massage-for-active-adults-over-40" },
  { name: "Areas Served", href: "/areas-served" },
];

export function MobileNav({ currentPage = "home" }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [expandedSection, setExpandedSection] = useState<string | null>(null);

  const closeMenu = () => {
    setIsOpen(false);
    setExpandedSection(null);
  };
  
  const isHomePage = currentPage === "home";
  const pricingLink = isHomePage ? "#pricing" : "/#pricing";
  const bookLink = isHomePage ? "#book" : "/#book";

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  return (
    <div className="lg:hidden">
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
          className="fixed inset-0 z-[100] flex flex-col overflow-y-auto bg-[var(--background)]"
          style={{ top: 0, left: 0, right: 0, bottom: 0, height: '100vh', width: '100vw' }}
        >
          {/* Spacer for nav bar */}
          <div className="h-[70px] flex-shrink-0" />
          
          {/* Menu Content */}
          <nav className="flex flex-1 flex-col p-6">
            {/* Services Section */}
            <button
              onClick={() => toggleSection("services")}
              className="flex w-full items-center justify-between border-b border-[var(--charcoal-light)] py-4 text-lg text-[var(--foreground)]"
            >
              Services
              <svg 
                className={`h-5 w-5 transition-transform ${expandedSection === "services" ? "rotate-180" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === "services" && (
              <div className="bg-[var(--charcoal)] px-4 py-2">
                <p className="py-2 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Services</p>
                {services.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 text-sm text-[var(--silver)]"
                  >
                    {item.name}
                  </Link>
                ))}
                <p className="mt-3 py-2 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Conditions</p>
                {conditions.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 text-sm text-[var(--silver)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link 
              href={pricingLink} 
              onClick={closeMenu}
              className="border-b border-[var(--charcoal-light)] py-4 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--rose)]"
            >
              Pricing
            </Link>

            {/* Resources Section */}
            <button
              onClick={() => toggleSection("resources")}
              className="flex w-full items-center justify-between border-b border-[var(--charcoal-light)] py-4 text-lg text-[var(--foreground)]"
            >
              Resources
              <svg 
                className={`h-5 w-5 transition-transform ${expandedSection === "resources" ? "rotate-180" : ""}`} 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {expandedSection === "resources" && (
              <div className="bg-[var(--charcoal)] px-4 py-2">
                {resources.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="block py-2 text-sm text-[var(--silver)]"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            )}

            <Link 
              href="/about" 
              onClick={closeMenu}
              className={`border-b border-[var(--charcoal-light)] py-4 text-lg transition-colors hover:text-[var(--rose)] ${
                currentPage === "about" ? "text-[var(--rose)] font-medium" : "text-[var(--foreground)]"
              }`}
            >
              About
            </Link>

            <Link 
              href={bookLink} 
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

