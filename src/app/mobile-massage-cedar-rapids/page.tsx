import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon, CheckIcon, TruckIcon, LockIcon, ShieldIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Mobile Massage Cedar Rapids | In-Home Massage Therapy | Kimmi Kraus",
  description: "Professional mobile massage therapy in Cedar Rapids, IA. In-home sports and therapeutic massage delivered to your door. Licensed traveling massage therapist serving Eastern Iowa.",
  keywords: ["mobile massage cedar rapids", "in-home massage cedar rapids", "traveling massage therapist cedar rapids", "house call massage iowa"],
};

const benefits = [
  { icon: "truck", title: "No Travel Required", desc: "Skip the commute. We bring professional massage equipment directly to your home." },
  { icon: "lock", title: "Complete Privacy", desc: "Enjoy your session in the comfort and privacy of your own space." },
  { icon: "shield", title: "Licensed Professional", desc: "Fully licensed, insured, and trained massage therapist." },
  { icon: "clock", title: "Flexible Scheduling", desc: "Book times that work for your schedule, including evenings." },
];

const howItWorks = [
  { step: "1", title: "Book Online", desc: "Choose your session length and preferred time through our easy online booking." },
  { step: "2", title: "We Come to You", desc: "On your appointment day, we arrive with everything needed for your session." },
  { step: "3", title: "Relax & Recover", desc: "Enjoy professional massage therapy, then continue relaxing—no driving required." },
];

export default function MobileMassageCedarRapids() {
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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">In-Home Massage Therapy</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Mobile Massage in Cedar Rapids—We Come to You
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Professional sports and therapeutic massage delivered directly to your home. No travel, no waiting rooms—just quality care in the comfort of your own space.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Mobile Massage
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+13192140458" className="flex items-center gap-2 border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)]">
              <PhoneIcon className="h-5 w-5" />
              319-214-0458
            </a>
          </div>
        </div>
      </section>

      {/* Why Mobile */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Why Choose Mobile Massage?
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              Traditional massage requires you to drive to an appointment, find parking, wait in a lobby, and then drive home afterwards—often undoing the relaxation you just achieved. Mobile massage eliminates all of that.
            </p>
            <p>
              With in-home massage in Cedar Rapids from Kimmi Kraus Massage, a licensed massage therapist comes directly to your home with professional-grade equipment. You get the same quality treatment you&apos;d receive at a clinic, but in the privacy and convenience of your own space.
            </p>
            <p>
              After your session, you can continue relaxing, take a warm shower, or simply rest—without having to get back in your car. It&apos;s massage therapy designed around your life.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Benefits of In-Home Massage
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="flex gap-4 border border-[var(--slate)] bg-[var(--charcoal)] p-6">
                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[var(--rose)]/10 text-[var(--rose)]">
                  {benefit.icon === "truck" && <TruckIcon className="h-6 w-6" />}
                  {benefit.icon === "lock" && <LockIcon className="h-6 w-6" />}
                  {benefit.icon === "shield" && <ShieldIcon className="h-6 w-6" />}
                  {benefit.icon === "clock" && (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  )}
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-[var(--foreground)]">{benefit.title}</h3>
                  <p className="mt-2 text-[var(--silver)]">{benefit.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            How Mobile Massage Works
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {howItWorks.map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full border-2 border-[var(--rose)] font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--rose)]">
                  {item.step}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-[var(--silver)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Area */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Mobile Massage Service Area
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            We provide traveling massage therapy throughout Cedar Rapids and the surrounding Eastern Iowa area, including Marion, Hiawatha, Robins, and Mount Vernon.
          </p>
          <Link href="/areas-served" className="mt-8 inline-flex items-center gap-2 text-[var(--rose)] hover:text-[var(--rose-light)]">
            View all areas served
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Experience the Convenience of Mobile Massage
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Book your in-home massage session today and discover why more Cedar Rapids residents are choosing mobile massage therapy.
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

