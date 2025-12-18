import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sports Massage vs Regular Massage: What's the Difference? | Kimmi Kraus",
  description: "Learn the key differences between sports massage and regular relaxation massage. Find out which type of massage is right for your needs and goals.",
  keywords: ["sports massage vs regular massage", "difference between sports massage and swedish massage", "what is sports massage", "types of massage therapy"],
};

const comparisons = [
  { aspect: "Primary Goal", sports: "Improve performance, prevent injury, speed recovery", regular: "Relaxation and stress relief" },
  { aspect: "Pressure Level", sports: "Moderate to deep, focused on problem areas", regular: "Light to moderate, consistent throughout" },
  { aspect: "Techniques Used", sports: "Deep tissue, trigger point, myofascial release, stretching", regular: "Swedish massage, long flowing strokes" },
  { aspect: "Session Focus", sports: "Specific muscle groups used in your activity", regular: "Full body general relaxation" },
  { aspect: "Best For", sports: "Athletes, active adults, injury recovery", regular: "Stress relief, general wellness, pampering" },
  { aspect: "Atmosphere", sports: "Clinical, results-focused", regular: "Spa-like, calming ambiance" },
];

export default function SportsMassageVsRegular() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Massage Education</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Sports Massage vs Regular Massage: What&apos;s the Difference?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Not all massage is created equal. Understanding the difference between sports massage and regular relaxation massage helps you choose the right treatment for your needs.
          </p>
        </div>
      </section>

      {/* Quick Answer */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            The Short Answer
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              <strong className="text-[var(--foreground)]">Sports massage</strong> is designed to improve athletic performance, prevent injuries, and speed recovery. It uses targeted techniques on specific muscle groups and can be intense.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Regular massage</strong> (like Swedish massage) is designed primarily for relaxation and general stress relief. It uses lighter, flowing strokes across the whole body.
            </p>
            <p>
              If you&apos;re active, dealing with chronic pain, or want to address specific muscle issues—sports massage is likely what you need. If you want to unwind and de-stress without a specific therapeutic goal—regular massage is a great choice.
            </p>
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Side-by-Side Comparison
          </h2>
          <div className="mt-12 overflow-hidden border border-[var(--slate)]">
            <div className="grid grid-cols-3 bg-[var(--charcoal)] text-sm font-semibold">
              <div className="border-r border-[var(--slate)] p-4 text-[var(--silver)]">Aspect</div>
              <div className="border-r border-[var(--slate)] p-4 text-[var(--rose)]">Sports Massage</div>
              <div className="p-4 text-[var(--silver)]">Regular Massage</div>
            </div>
            {comparisons.map((row, i) => (
              <div key={i} className="grid grid-cols-3 border-t border-[var(--slate)] text-sm">
                <div className="border-r border-[var(--slate)] bg-[var(--charcoal)] p-4 font-medium text-[var(--foreground)]">{row.aspect}</div>
                <div className="border-r border-[var(--slate)] p-4 text-[var(--silver)]">{row.sports}</div>
                <div className="p-4 text-[var(--silver)]">{row.regular}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Who Should Choose Sports */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Who Should Choose Sports Massage?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Sports massage is ideal for you if:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "You're an athlete or regularly active person",
              "You have chronic pain in specific areas",
              "You're recovering from a sports injury",
              "You want to improve flexibility and range of motion",
              "You sit at a desk and have persistent neck/back issues",
              "You want measurable results, not just relaxation",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--rose)]" />
                <span className="text-[var(--silver)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Try Sports Massage?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Experience the difference professional sports massage can make for your performance and recovery.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Sports Massage
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/sports-massage-cedar-rapids" className="border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)]">
              Learn More
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
