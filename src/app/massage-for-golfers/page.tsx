import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage for Golfers Cedar Rapids | Golf Sports Massage | Kimmi Kraus",
  description: "Specialized massage therapy for golfers in Cedar Rapids. Improve your swing, prevent golf injuries, and recover faster. Mobile sports massage for the golf community.",
  keywords: ["massage for golfers", "golf massage cedar rapids", "sports massage golf", "golfer recovery massage"],
};

const benefits = [
  { title: "Improved Flexibility", desc: "Better rotation in hips and thoracic spine for a more powerful, consistent swing." },
  { title: "Injury Prevention", desc: "Address muscle imbalances before they become golfer's elbow, back pain, or shoulder issues." },
  { title: "Faster Recovery", desc: "Recover between rounds so you can play more frequently without accumulated fatigue." },
  { title: "Reduced Pain", desc: "Eliminate the chronic aches that develop from the repetitive, one-sided nature of golf." },
];

export default function MassageForGolfers() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-light)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/"><Image src="/logo-transparent.png" alt="Kimmi Kraus Massage" width={180} height={50} className="h-12 w-auto" /></Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="/#services" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Services</Link>
            <Link href="/#pricing" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Pricing</Link>
            <Link href="/about" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">About</Link>
            <Link href="/#book" className="bg-[var(--rose)] px-5 py-2.5 text-sm font-semibold text-[var(--background)]">Book Your Session</Link>
          </div>
          <Link href="/#book" className="bg-[var(--rose)] px-4 py-2 text-sm font-semibold text-[var(--background)] md:hidden">Book Now</Link>
        </div>
      </nav>

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">For the Golf Community</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">Sports Massage for Golfers</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">Golf demands flexibility, rotation, and repeated explosive movements. Sports massage helps you play better, longer, and with less pain.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">
            Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Why Golfers Need Massage</h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)]">
            <p>The golf swing is one of the most complex movements in sports, requiring coordinated rotation through the hips, spine, and shoulders. This repetitive, one-sided motion creates muscle imbalances and tension patterns that accumulate over time.</p>
            <p>Regular sports massage maintains the flexibility and muscle balance needed for a consistent swing while addressing the common problem areas golfers develop—lower back, hips, shoulders, and forearms.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Benefits for Your Game</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {benefits.map((b, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--charcoal)] p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{b.title}</h3>
                <p className="mt-2 text-[var(--silver)]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Common Golf-Related Issues We Address</h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {["Lower back pain and stiffness", "Golfer's elbow (medial epicondylitis)", "Shoulder tension and restricted rotation", "Hip tightness limiting rotation", "Forearm and wrist tension", "Upper back pain from the swing"].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[var(--rose)]" /><span className="text-[var(--silver)]">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Play Better, Play Longer</h2>
          <p className="mt-6 text-lg text-[var(--silver)]">Invest in your game with regular sports massage. Your body—and your scorecard—will thank you.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <footer className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-12">
        <div className="mx-auto max-w-6xl text-center">
          <Image src="/logo-transparent.png" alt="Kimmi Kraus Massage" width={150} height={40} className="mx-auto h-10 w-auto" />
          <p className="mt-4 text-sm text-[var(--steel)]">© {new Date().getFullYear()} Kimmi Kraus Massage. Cedar Rapids and Eastern Iowa.</p>
        </div>
      </footer>
    </div>
  );
}

