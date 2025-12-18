import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon, CheckIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Massage Cedar Rapids | Athletic Massage Therapy | Kimmi Kraus",
  description: "Professional sports massage therapy in Cedar Rapids, IA. Specialized athletic massage for injury prevention, faster recovery, and peak performance. Licensed therapist—mobile service available.",
  keywords: ["sports massage cedar rapids", "athletic massage cedar rapids", "massage for athletes cedar rapids", "sports massage therapy iowa"],
};

const benefits = [
  { title: "Faster Recovery", desc: "Reduce muscle soreness and speed up recovery between training sessions and competitions." },
  { title: "Injury Prevention", desc: "Address muscle imbalances and tension before they become serious injuries." },
  { title: "Improved Performance", desc: "Enhance flexibility, range of motion, and muscle function for better athletic output." },
  { title: "Pain Relief", desc: "Target chronic pain points and tension patterns that limit your performance." },
];

const athleteTypes = [
  "Golfers seeking improved swing mechanics",
  "Runners dealing with IT band or calf tightness",
  "Weightlifters with shoulder or back tension",
  "CrossFit athletes needing recovery support",
  "Recreational athletes staying active over 40",
  "Weekend warriors pushing through pain",
];

export default function SportsMassageCedarRapids() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-light)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="block" aria-label="Kimmi Kraus Massage - Home">
            <Image 
              src="/logo-transparent.png" 
              alt="Kimmi Kraus Massage" 
              width={180} 
              height={50}
              className="h-12 w-auto"
            />
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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Cedar Rapids, Iowa</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Sports Massage Therapy in Cedar Rapids, IA
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Professional athletic massage designed to help you train harder, recover faster, and perform at your best. Whether you&apos;re a competitive athlete or a weekend warrior, sports massage keeps your body in peak condition.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Sports Massage
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+13192140458" className="flex items-center gap-2 border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)]">
              <PhoneIcon className="h-5 w-5" />
              319-214-0458
            </a>
          </div>
        </div>
      </section>

      {/* What is Sports Massage */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            What is Sports Massage?
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              Sports massage is a specialized form of massage therapy designed specifically for athletes and active individuals. Unlike relaxation massage, sports massage focuses on the muscle groups you use most during physical activity, addressing tension, adhesions, and imbalances that can limit performance or lead to injury.
            </p>
            <p>
              Using techniques like deep tissue work, trigger point therapy, and myofascial release, sports massage helps your muscles recover faster, move more efficiently, and perform at their highest level. It&apos;s an essential tool for anyone serious about their athletic pursuits.
            </p>
            <p>
              Whether you need pre-event preparation to optimize performance, post-event recovery to speed healing, or maintenance work to prevent injuries—sports massage in Cedar Rapids with Kimmi Kraus Massage delivers results you can feel.
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Benefits of Sports Massage for Athletes
          </h2>
          <div className="mt-12 grid gap-8 sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--charcoal)] p-8">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{benefit.title}</h3>
                <p className="mt-3 text-[var(--silver)]">{benefit.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Athletes Who Benefit from Sports Massage
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Sports massage in Cedar Rapids isn&apos;t just for professional athletes. If you&apos;re active and want to stay that way, regular sports massage can help:
          </p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {athleteTypes.map((type, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--rose)]" />
                <span className="text-[var(--silver)]">{type}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Mobile Service */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Mobile Sports Massage—We Come to You
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Skip the drive to a clinic. Kimmi Kraus Massage brings professional sports massage therapy directly to your home in Cedar Rapids and surrounding areas. Recover in comfort, on your schedule.
          </p>
          <Link href="/mobile-massage-cedar-rapids" className="mt-8 inline-flex items-center gap-2 text-[var(--rose)] hover:text-[var(--rose-light)]">
            Learn more about mobile massage
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Improve Your Performance?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Book your sports massage session today and experience the difference professional athletic massage can make for your training and recovery.
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

