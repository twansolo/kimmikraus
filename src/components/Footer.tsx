import Link from "next/link";
import Image from "next/image";

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

export function Footer() {
  return (
    <footer className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-12">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <Image src="/logo-transparent.png" alt="Kimmi Kraus Massage" width={150} height={40} className="h-10 w-auto" />
            <p className="mt-4 text-sm text-[var(--steel)]">Professional mobile massage therapy serving Cedar Rapids and Eastern Iowa.</p>
            <a href="tel:+13192140458" className="mt-4 inline-flex items-center gap-2 text-sm text-[var(--rose)] hover:text-[var(--rose-light)]">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
              </svg>
              319-214-0458
            </a>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Services</p>
            {services.map((item) => (
              <Link key={item.href} href={item.href} className="block py-1 text-sm text-[var(--silver)] hover:text-[var(--foreground)]">
                {item.name}
              </Link>
            ))}
            <div className="mt-4">
              <p className="mb-2 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Conditions</p>
              {conditions.map((item) => (
                <Link key={item.href} href={item.href} className="block py-1 text-sm text-[var(--silver)] hover:text-[var(--foreground)]">
                  {item.name}
                </Link>
              ))}
            </div>
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Resources</p>
            {resources.map((item) => (
              <Link key={item.href} href={item.href} className="block py-1 text-sm text-[var(--silver)] hover:text-[var(--foreground)]">
                {item.name}
              </Link>
            ))}
          </div>
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[var(--rose)]">Quick Links</p>
            <Link href="/#pricing" className="block py-1 text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Pricing</Link>
            <Link href="/about" className="block py-1 text-sm text-[var(--silver)] hover:text-[var(--foreground)]">About Kimmi</Link>
            <Link href="/#book" className="block py-1 text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Book Online</Link>
          </div>
        </div>
        <div className="mt-8 border-t border-[var(--slate)] pt-8 text-center text-xs text-[var(--steel)]">
          <p>© {new Date().getFullYear()} Kimmi Kraus Massage Therapy. All rights reserved.</p>
          <p className="mt-2">Licensed Massage Therapist serving Cedar Rapids, Marion, Hiawatha, and Eastern Iowa.</p>
        </div>
      </div>
    </footer>
  );
}

