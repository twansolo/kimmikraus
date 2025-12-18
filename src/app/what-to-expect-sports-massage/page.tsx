import Link from "next/link";
import { ArrowRightIcon, PhoneIcon, CheckIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "What to Expect From a Sports Massage | First Time Guide | Kimmi Kraus",
  description: "New to sports massage? Learn what to expect during your first session, how to prepare, and what happens after. Complete guide for first-time clients.",
  keywords: ["what to expect sports massage", "first sports massage", "sports massage preparation", "before massage appointment"],
};

const steps = [
  { step: "1", title: "Initial Consultation", time: "5-10 min", desc: "We discuss your health history, current issues, activity level, and goals for the session." },
  { step: "2", title: "Assessment", time: "5 min", desc: "Brief evaluation of posture, range of motion, and areas of concern to guide the treatment." },
  { step: "3", title: "Treatment", time: "45-75 min", desc: "Hands-on massage focusing on your specific issues using appropriate techniques and pressure." },
  { step: "4", title: "Aftercare", time: "5 min", desc: "Recommendations for stretching, hydration, and activities to maximize your results." },
];

const tips = [
  "Hydrate well before your appointment",
  "Avoid heavy meals 1-2 hours before",
  "Wear comfortable, loose-fitting clothes",
  "Communicate about pressure—more or less is always okay",
  "Let your therapist know about any injuries or health conditions",
  "Plan to take it easy after your session if possible",
];

export default function WhatToExpect() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">First Time Guide</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            What to Expect From Your Sports Massage
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            First time getting a sports massage? Here&apos;s everything you need to know to feel prepared and get the most out of your session.
          </p>
        </div>
      </section>

      {/* Session Breakdown */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            What Happens During Your Session
          </h2>
          <div className="mt-12 space-y-6">
            {steps.map((item, i) => (
              <div key={i} className="flex gap-6 border-l-2 border-[var(--rose)] pl-6">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[var(--rose)] font-semibold text-[var(--background)]">
                  {item.step}
                </div>
                <div>
                  <div className="flex items-center gap-3">
                    <h3 className="text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                    <span className="text-sm text-[var(--steel)]">({item.time})</span>
                  </div>
                  <p className="mt-2 text-[var(--silver)]">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pressure & Communication */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            About Pressure & Communication
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              Sports massage often uses more pressure than a typical relaxation massage—but that doesn&apos;t mean it should be painful. Good sports massage works at the edge of your comfort zone: you should feel the work happening, but it shouldn&apos;t make you tense up or hold your breath.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Communication is key.</strong> I check in about pressure throughout the session, but please speak up anytime if you want more or less. Everyone&apos;s tolerance is different, and what works for you is what matters.
            </p>
            <p>
              You might experience some discomfort when working on problem areas—this is normal. But sharp pain or discomfort that makes you brace against the table means we need to back off. The goal is therapeutic work, not suffering.
            </p>
          </div>
        </div>
      </section>

      {/* Preparation Tips */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            How to Prepare for Your Session
          </h2>
          <ul className="mt-8 grid gap-4 sm:grid-cols-2">
            {tips.map((tip, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--rose)]" />
                <span className="text-[var(--silver)]">{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* After Your Session */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            After Your Session
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              After a sports massage session, most people feel immediate relief in their problem areas. You might also feel relaxed, slightly tired, or even energized—reactions vary.
            </p>
            <p>
              <strong className="text-[var(--foreground)]">Mild soreness is normal</strong>, especially after your first session or after working on particularly tight areas. This typically resolves within 24-48 hours and is similar to the feeling after a good workout.
            </p>
            <p>
              Drink plenty of water after your session, and if possible, avoid strenuous exercise for the rest of the day. Light stretching is encouraged—I&apos;ll provide specific recommendations based on your session.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Service Note */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            The Mobile Massage Advantage
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Since I come to you, there&apos;s no need to drive anywhere before or after your session. I bring a professional massage table and all supplies. You just need a space large enough for the table (about 8ft x 5ft) and you&apos;re set.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Book Your First Session?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            For first-time clients, I recommend a 90-minute session. This gives us time for a thorough assessment and comprehensive treatment.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+13192140458" className="flex items-center gap-2 border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)]">
              <PhoneIcon className="h-5 w-5" />
              Questions? Call me
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
