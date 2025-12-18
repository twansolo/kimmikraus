"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { MobileNav } from "./MobileNav";

interface HeaderProps {
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

export { services, conditions, resources };

export function Header({ currentPage = "home" }: HeaderProps) {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  
  const isHomePage = currentPage === "home";
  const pricingLink = isHomePage ? "#pricing" : "/#pricing";
  const bookLink = isHomePage ? "#book" : "/#book";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-light)] bg-[var(--background)]/95 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
        <Link href="/" className="block" aria-label="Kimmi Kraus Massage - Home">
          <Image 
            src="/logo-transparent.png" 
            alt="Kimmi Kraus Massage - Mobile Sports Massage in Cedar Rapids" 
            width={180} 
            height={50}
            className="h-12 w-auto"
            priority
          />
        </Link>
        
        {/* Desktop Navigation */}
        <div className="hidden items-center gap-6 lg:flex">
          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("services")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">
              Services
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "services" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[220px] border border-[var(--slate)] bg-[var(--background)] p-2 shadow-xl">
                  <p className="px-4 py-1 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Services</p>
                  {services.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[var(--silver)] transition-colors hover:bg-[var(--charcoal)] hover:text-[var(--foreground)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                  <div className="my-2 border-t border-[var(--slate)]" />
                  <p className="px-4 py-1 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Conditions</p>
                  {conditions.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[var(--silver)] transition-colors hover:bg-[var(--charcoal)] hover:text-[var(--foreground)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link href={pricingLink} className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">
            Pricing
          </Link>

          {/* Resources Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown("resources")}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">
              Resources
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
              </svg>
            </button>
            {activeDropdown === "resources" && (
              <div className="absolute left-0 top-full pt-2">
                <div className="min-w-[220px] border border-[var(--slate)] bg-[var(--background)] p-2 shadow-xl">
                  {resources.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-sm text-[var(--silver)] transition-colors hover:bg-[var(--charcoal)] hover:text-[var(--foreground)]"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>

          <Link 
            href="/about" 
            className={`text-sm transition-colors ${
              currentPage === "about" 
                ? "text-[var(--foreground)] font-medium" 
                : "text-[var(--silver)] hover:text-[var(--foreground)]"
            }`}
          >
            About
          </Link>

          <Link href={bookLink} className="bg-[var(--rose)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
            Book Your Session
          </Link>
        </div>

        <MobileNav currentPage={currentPage} />
      </div>
    </nav>
  );
}

