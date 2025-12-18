import Link from "next/link";
import { ArrowRightIcon, CheckIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage for Runners Cedar Rapids | Running Injury Recovery | Kimmi Kraus",
  description: "Sports massage for runners in Cedar Rapids. Treatment for IT band syndrome, shin splints, plantar fasciitis, and running-related injuries. Mobile massage for the running community.",
  keywords: ["massage for runners", "running injury massage cedar rapids", "IT band massage", "runner recovery massage"],
};

const injuries = [
  { name: "IT Band Syndrome", desc: "The most common running injury. We release the TFL, glutes, and quad muscles that contribute to IT band tightness." },
  { name: "Shin Splints", desc: "Targeted work on the tibialis anterior and calf muscles to reduce pain and promote healing." },
  { name: "Plantar Fasciitis", desc: "Treatment of the calf, Achilles, and foot muscles that contribute to plantar fascia strain." },
  { name: "Runner's Knee", desc: "Address quad, hip flexor, and IT band tension that creates knee tracking issues." },
  { name: "Calf & Achilles Issues", desc: "Deep tissue work to release chronic calf tension and reduce Achilles tendon strain." },
  { name: "Hip Flexor Strain", desc: "Release tight hip flexors that limit stride length and contribute to other running injuries." },
];

export default function MassageForRunners() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">For the Running Community</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">Sports Massage for Runners</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">Running puts tremendous demands on your body. Sports massage keeps you on the road by preventing injuries, speeding recovery, and addressing the issues that sideline runners.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">
            Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" />
          </Link>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Why Runners Need Massage</h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)]">
            <p>Running is repetitive impact—thousands of steps that stress the same muscles in the same pattern. Without intervention, this leads to chronic tightness, imbalances, and eventually injury.</p>
            <p>Regular sports massage breaks this cycle by releasing accumulated tension, improving tissue quality, and identifying problems before they become serious injuries. Many runners find that consistent massage is what finally allows them to train without the nagging issues that have plagued them.</p>
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Running Injuries We Treat</h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {injuries.map((injury, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--charcoal)] p-6">
                <h3 className="text-lg font-semibold text-[var(--rose)]">{injury.name}</h3>
                <p className="mt-2 text-sm text-[var(--silver)]">{injury.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Timing Your Massage Around Training</h2>
          <ul className="mt-8 space-y-4">
            {["Pre-event (1-2 days before): Light work to prepare muscles without causing soreness", "Post-event (24-48 hours after): Flush work to speed recovery", "Maintenance (weekly/bi-weekly): Regular treatment to prevent issues", "Injury recovery: Targeted work during the healing process"].map((item, i) => (
              <li key={i} className="flex items-start gap-3"><CheckIcon className="mt-1 h-5 w-5 text-[var(--rose)]" /><span className="text-[var(--silver)]">{item}</span></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)]">Keep Running Strong</h2>
          <p className="mt-6 text-lg text-[var(--silver)]">Whether you&apos;re training for a marathon or just enjoy morning jogs, sports massage helps you run better and longer.</p>
          <Link href="/#book" className="group mt-10 inline-flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)]">Book Your Session <ArrowRightIcon className="h-5 w-5 group-hover:translate-x-1" /></Link>
        </div>
      </section>

      <Footer />
    </div>
  );
}
