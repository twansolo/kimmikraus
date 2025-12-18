import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Therapeutic Massage for Pain Relief Cedar Rapids | Kimmi Kraus",
  description: "Professional therapeutic massage for chronic pain relief in Cedar Rapids. Deep tissue massage for back pain, neck pain, and injury recovery. Licensed massage therapist—mobile service available.",
  keywords: ["therapeutic massage cedar rapids", "massage for back pain cedar rapids", "massage for neck pain cedar rapids", "massage for chronic pain", "deep tissue massage iowa"],
};

const conditions = [
  { name: "Back Pain", desc: "Address muscle tension, spinal compression, and postural imbalances causing lower and upper back pain." },
  { name: "Neck & Shoulder Pain", desc: "Release chronic tension from desk work, driving, and stress-related muscle tightness." },
  { name: "Hip Pain & Tightness", desc: "Treat piriformis syndrome, hip flexor tension, and mobility restrictions." },
  { name: "Sciatic Discomfort", desc: "Relieve nerve compression and muscle tension contributing to radiating leg pain." },
  { name: "Headaches & Migraines", desc: "Address muscle tension in the neck and shoulders that triggers tension headaches." },
  { name: "Joint Stiffness", desc: "Improve range of motion and reduce stiffness in shoulders, hips, and other major joints." },
];

export default function TherapeuticMassage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Pain Relief & Recovery</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Therapeutic Massage for Chronic Pain Relief
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Stop managing your pain and start fixing it. Therapeutic massage addresses the root cause of your discomfort—not just the symptoms—so you can get back to living without limitation.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Pain Relief Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+13192140458" className="flex items-center gap-2 border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)]">
              <PhoneIcon className="h-5 w-5" />
              319-214-0458
            </a>
          </div>
        </div>
      </section>

      {/* What is Therapeutic Massage */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            What is Therapeutic Massage?
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              Therapeutic massage is focused, intentional bodywork designed to address specific pain and dysfunction—not just help you relax. While relaxation is a welcome side effect, the primary goal is to identify and treat the muscle tension, adhesions, and imbalances causing your pain.
            </p>
            <p>
              Using techniques like deep tissue massage, trigger point therapy, and myofascial release, therapeutic massage works on the deeper layers of muscle tissue to break up knots, release chronic tension, and restore proper muscle function.
            </p>
            <p>
              Whether you&apos;re dealing with chronic back pain from desk work, neck tension from stress, or lingering discomfort from an old injury—therapeutic massage can help you find lasting relief.
            </p>
          </div>
        </div>
      </section>

      {/* Conditions Treated */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Conditions We Treat with Therapeutic Massage
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {conditions.map((condition, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--charcoal)] p-6">
                <h3 className="text-lg font-semibold text-[var(--foreground)]">{condition.name}</h3>
                <p className="mt-3 text-sm text-[var(--silver)]">{condition.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* When Massage is Not Appropriate */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            When Massage May Not Be Appropriate
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            While therapeutic massage is effective for many types of pain, some conditions require medical attention first. We recommend consulting a healthcare provider before massage if you experience:
          </p>
          <ul className="mt-6 space-y-3">
            {[
              "Sudden, severe pain with no obvious cause",
              "Pain accompanied by fever, numbness, or loss of function",
              "Recent fractures or acute injuries (within 48-72 hours)",
              "Unexplained weight loss with chronic pain",
              "Pain that wakes you from sleep consistently",
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-3 text-[var(--silver)]">
                <span className="mt-1 h-2 w-2 flex-shrink-0 rounded-full bg-[var(--rose)]" />
                {item}
              </li>
            ))}
          </ul>
          <p className="mt-6 text-[var(--silver)]">
            For most chronic pain conditions, therapeutic massage is a safe and effective treatment that complements other care you may be receiving.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Find Relief?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Don&apos;t let chronic pain hold you back. Book a therapeutic massage session and start your journey toward lasting relief.
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
