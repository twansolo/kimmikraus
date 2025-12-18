import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage for Back Pain Cedar Rapids | Lower Back Pain Relief | Kimmi Kraus",
  description: "Professional massage therapy for back pain relief in Cedar Rapids. Targeted treatment for lower back pain, upper back tension, and chronic back issues. Mobile service available.",
  keywords: ["massage for back pain", "lower back pain massage cedar rapids", "back pain relief massage", "therapeutic massage back pain"],
};

export default function MassageForBackPain() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      {/* Hero */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Condition-Specific Treatment</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Massage Therapy for Back Pain Relief
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Back pain affects nearly everyone at some point. Whether it&apos;s chronic tension from desk work or acute pain from activity, therapeutic massage addresses the root cause—not just the symptoms.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Back Pain Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </section>

      {/* How Massage Helps */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">How Massage Helps Back Pain</h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>Most back pain stems from muscle tension, imbalances, and trigger points rather than structural damage. Prolonged sitting, poor posture, repetitive movements, and stress all contribute to chronic back tension.</p>
            <p>Therapeutic massage addresses back pain by releasing tight muscles, breaking up adhesions, and restoring proper muscle function. Techniques like deep tissue massage and trigger point therapy target the specific muscles causing your pain—often including the erector spinae, quadratus lumborum, and the muscles of the hip complex that refer pain to the back.</p>
          </div>
        </div>
      </section>

      {/* Types of Back Pain */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">Types of Back Pain We Treat</h2>
          <ul className="mt-8 space-y-4">
            {["Lower back pain from sitting or standing", "Upper back tension from desk work", "Muscle spasms and acute tightness", "Chronic pain patterns", "Post-workout soreness", "SI joint related discomfort"].map((item, i) => (
              <li key={i} className="flex items-start gap-3">
                <CheckIcon className="mt-1 h-5 w-5 flex-shrink-0 text-[var(--rose)]" />
                <span className="text-[var(--silver)]">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* When Not Appropriate */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">When to See a Doctor First</h2>
          <p className="mt-6 text-lg text-[var(--silver)]">While massage is effective for most back pain, some symptoms require medical evaluation first:</p>
          <ul className="mt-6 space-y-3">
            {["Back pain accompanied by numbness, tingling, or weakness in legs", "Pain following a fall or injury", "Back pain with fever", "Unexplained weight loss with back pain", "Loss of bladder or bowel control"].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--silver)]">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--rose)]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">Ready for Back Pain Relief?</h2>
          <p className="mt-6 text-lg text-[var(--silver)]">Don&apos;t let back pain limit your life. Book a session and start your path to relief.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
            Book Your Session
            <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
