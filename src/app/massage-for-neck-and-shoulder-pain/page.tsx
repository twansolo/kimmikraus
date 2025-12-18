import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage for Neck & Shoulder Pain Cedar Rapids | Tension Relief | Kimmi Kraus",
  description: "Professional massage therapy for neck and shoulder pain in Cedar Rapids. Relief from chronic tension, desk-related pain, and stress-induced tightness. Mobile massage available.",
  keywords: ["massage for neck pain", "shoulder pain massage cedar rapids", "neck tension massage", "upper body massage therapy"],
};

export default function MassageForNeckPain() {
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
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Condition-Specific Treatment</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">Massage for Neck & Shoulder Pain</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">Chronic neck and shoulder tension is epidemic in our screen-focused world. Therapeutic massage releases the tight muscles causing your pain and helps prevent it from returning.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">
            Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Common Causes of Neck & Shoulder Pain</h2>
          <ul className="mt-8 space-y-4">
            {["Forward head posture from phone/computer use", "Desk work and prolonged sitting", "Stress-related muscle tension", "Sleeping position issues", "Repetitive arm movements", "Carrying heavy bags on one shoulder"].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[var(--rose)]" /><span className="text-[var(--silver)]">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">How Massage Provides Relief</h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)]">
            <p>The upper trapezius, levator scapulae, and scalene muscles are common culprits in neck and shoulder pain. These muscles become chronically tight from postural stress and often develop trigger points that refer pain throughout the upper body.</p>
            <p>Through targeted deep tissue work and trigger point therapy, we release these tight muscles, restore proper range of motion, and reduce the tension that causes headaches and restricted movement.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">When to Consult a Doctor</h2>
          <p className="mt-6 text-[var(--silver)]">Seek medical attention if you experience:</p>
          <ul className="mt-4 space-y-2">{["Neck pain after trauma or injury", "Numbness or tingling in arms", "Severe pain that doesn't improve with rest", "Difficulty swallowing or breathing"].map((item, i) => (<li key={i} className="flex items-start gap-3 text-[var(--silver)]"><span className="mt-1.5 h-2 w-2 rounded-full bg-[var(--rose)]" />{item}</li>))}</ul>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Get Relief Today</h2>
          <p className="mt-6 text-lg text-[var(--silver)]">Stop living with neck and shoulder tension. Book your therapeutic massage session.</p>
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

