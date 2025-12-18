import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon, LocationIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Areas Served | Mobile Massage Cedar Rapids, Marion, Hiawatha | Kimmi Kraus",
  description: "Mobile massage therapy serving Cedar Rapids, Marion, Hiawatha, Robins, Mount Vernon, and Eastern Iowa. In-home sports and therapeutic massage throughout Linn County.",
  keywords: ["massage cedar rapids", "massage marion iowa", "massage hiawatha iowa", "mobile massage linn county", "massage therapist eastern iowa"],
};

const areas = [
  { name: "Cedar Rapids", desc: "Full coverage throughout Cedar Rapids, from downtown to all surrounding neighborhoods." },
  { name: "Marion", desc: "Complete service to Marion and the Uptown District area." },
  { name: "Hiawatha", desc: "Mobile massage available throughout Hiawatha." },
  { name: "Robins", desc: "Serving the Robins community with in-home massage therapy." },
  { name: "Mount Vernon", desc: "Available for appointments in Mount Vernon and the Cornell College area." },
  { name: "Ely", desc: "Mobile massage services available in Ely." },
  { name: "Fairfax", desc: "Serving Fairfax and surrounding rural areas." },
  { name: "Swisher", desc: "In-home massage available in Swisher." },
];

export default function AreasServed() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-light)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="block">
            <Image src="/logo-transparent.png" alt="Kimmi Kraus Massage" width={180} height={50} className="h-12 w-auto" />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/#services" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">Services</Link>
            <Link href="/#pricing" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">Pricing</Link>
            <Link href="/about" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">About</Link>
            <Link href="/#book" className="bg-[var(--rose)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
            </Link>
          </div>
          <Link href="/#book" className="bg-[var(--rose)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)] md:hidden">
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 text-[var(--rose)]">
            <LocationIcon className="h-5 w-5" />
            <span className="text-xs font-medium uppercase tracking-[0.2em]">Service Area</span>
          </div>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Mobile Massage Service Areas
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Kimmi Kraus Massage provides professional in-home massage therapy throughout Cedar Rapids and the surrounding Eastern Iowa communities. We bring the treatment to you.
          </p>
        </div>
      </section>

      {/* Areas Grid */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Communities We Serve
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map((area, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--background)] p-6">
                <h3 className="flex items-center gap-2 text-lg font-semibold text-[var(--foreground)]">
                  <LocationIcon className="h-4 w-4 text-[var(--rose)]" />
                  {area.name}
                </h3>
                <p className="mt-3 text-sm text-[var(--silver)]">{area.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Outside Area */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Don&apos;t See Your Area?
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            We serve communities within approximately 30 miles of Cedar Rapids. If you&apos;re located outside our listed areas, please contact us—we may still be able to accommodate your appointment.
          </p>
          <a href="tel:+13192140458" className="mt-8 inline-flex items-center gap-2 text-[var(--rose)] hover:text-[var(--rose-light)]">
            <PhoneIcon className="h-5 w-5" />
            Call 319-214-0458 to inquire
          </a>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Book?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Schedule your in-home massage session today. We&apos;ll come to you with everything needed for a professional treatment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--charcoal-light)] px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <Image src="/logo-transparent.png" alt="Kimmi Kraus Massage" width={150} height={40} className="mx-auto h-10 w-auto" />
          <p className="mt-4 text-sm text-[var(--steel)]">© {new Date().getFullYear()} Kimmi Kraus Massage. Licensed Massage Therapist serving Cedar Rapids and Eastern Iowa.</p>
        </div>
      </footer>
    </div>
  );
}

