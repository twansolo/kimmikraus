import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage for Hip Pain Cedar Rapids | Hip Flexor Relief | Kimmi Kraus",
  description: "Professional massage therapy for hip pain in Cedar Rapids. Relief from hip flexor tightness, piriformis syndrome, and hip mobility issues. Mobile massage available.",
  keywords: ["massage for hip pain", "hip flexor massage cedar rapids", "piriformis massage", "hip pain relief massage"],
};

export default function MassageForHipPain() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Condition-Specific Treatment</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">Massage Therapy for Hip Pain</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">Hip pain and tightness affect everything—walking, sitting, sleeping, and athletic performance. Therapeutic massage addresses the muscles causing your hip dysfunction.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">
            Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Common Causes of Hip Pain</h2>
          <ul className="mt-8 space-y-4">
            {["Prolonged sitting (hip flexor shortening)", "Piriformis syndrome and sciatic irritation", "IT band tightness", "Muscle imbalances from exercise", "Gluteal weakness and compensation", "Post-activity soreness and stiffness"].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[var(--rose)]" /><span className="text-[var(--silver)]">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">How We Address Hip Pain</h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)]">
            <p>The hip complex involves numerous muscles including the hip flexors, glutes, piriformis, TFL, and the muscles of the inner thigh. Tightness or dysfunction in any of these can cause pain felt in the hip, groin, lower back, or down the leg.</p>
            <p>Through careful assessment and targeted treatment, we identify which muscles are contributing to your pain and use appropriate techniques—deep tissue, trigger point therapy, and stretching—to restore balance and reduce discomfort.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">When to See a Doctor</h2>
          <p className="mt-6 text-[var(--silver)]">Consult a physician if you experience:</p>
          <ul className="mt-4 space-y-2">{["Sudden severe hip pain", "Inability to bear weight", "Hip pain after a fall", "Visible deformity", "Signs of infection (fever, redness, warmth)"].map((item, i) => (<li key={i} className="flex items-start gap-3 text-[var(--silver)]"><span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--rose)]" />{item}</li>))}</ul>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Move Freely Again</h2>
          <p className="mt-6 text-lg text-[var(--silver)]">Don&apos;t let hip pain limit your mobility. Book a therapeutic massage session.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
