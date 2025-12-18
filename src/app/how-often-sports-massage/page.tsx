import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "How Often Should You Get Sports Massage? | Kimmi Kraus",
  description: "Learn the ideal frequency for sports massage based on your activity level and goals. Find out if weekly, bi-weekly, or monthly sessions are right for you.",
  keywords: ["how often sports massage", "sports massage frequency", "weekly massage", "massage schedule for athletes"],
};

const frequencies = [
  { 
    level: "High-Intensity Athletes", 
    frequency: "Weekly", 
    desc: "Competitive athletes, those training daily, or anyone pushing their body hard benefits most from weekly sessions.",
    examples: "Marathon training, CrossFit athletes, competitive golfers, serious weightlifters"
  },
  { 
    level: "Regular Active Adults", 
    frequency: "Bi-Weekly (Every 2 Weeks)", 
    desc: "Active people who exercise 3-5 times per week and want to maintain performance and prevent issues.",
    examples: "Weekend athletes, recreational golfers, gym regulars, active professionals"
  },
  { 
    level: "Maintenance & Prevention", 
    frequency: "Monthly", 
    desc: "Those without acute issues who want ongoing maintenance and early detection of developing problems.",
    examples: "Desk workers, occasional exercisers, those who've recovered from injury"
  },
];

export default function HowOftenSportsMassage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Massage Frequency Guide</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            How Often Should You Get Sports Massage?
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            The optimal frequency depends on your activity level, goals, and current condition. Here&apos;s a guide to help you determine the right schedule.
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
              <strong className="text-[var(--foreground)]">Most active adults benefit from sports massage every 2-4 weeks.</strong> However, the ideal frequency varies based on how hard you train, whether you&apos;re dealing with specific issues, and your recovery goals.
            </p>
            <p>
              If you&apos;re experiencing acute pain or recovering from injury, you may need more frequent sessions initially (weekly) before transitioning to a maintenance schedule.
            </p>
          </div>
        </div>
      </section>

      {/* Frequency Guide */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Recommended Frequency by Activity Level
          </h2>
          <div className="mt-12 space-y-6">
            {frequencies.map((item, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--charcoal)] p-8">
                <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.level}</h3>
                    <p className="mt-1 text-sm text-[var(--steel)]">{item.examples}</p>
                  </div>
                  <span className="inline-block rounded-full bg-[var(--rose)]/10 px-4 py-2 text-sm font-semibold text-[var(--rose)]">
                    {item.frequency}
                  </span>
                </div>
                <p className="mt-4 text-[var(--silver)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Signs You Need More Frequent */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Signs You Might Need More Frequent Sessions
          </h2>
          <ul className="mt-8 space-y-4">
            {[
              "Chronic muscle tightness that returns within days of your massage",
              "Training for an event or increasing workout intensity",
              "Recovering from an injury or surgery",
              "Pain that affects your daily activities or sleep",
              "Noticeable decline in flexibility or range of motion",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--rose)]" />
                <span className="text-[var(--silver)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Package Mention */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Save with Session Packages
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            For clients committed to regular massage, we offer package options that make consistent care more affordable. Most clients see the best results with a treatment plan.
          </p>
          <Link href="/#pricing" className="mt-8 inline-flex items-center gap-2 text-[var(--rose)] hover:text-[var(--rose-light)]">
            View our packages
            <ArrowRightIcon className="h-4 w-4" />
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Book your first session and we&apos;ll help you determine the ideal frequency for your specific needs and goals.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
