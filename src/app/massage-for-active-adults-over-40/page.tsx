import Link from "next/link";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Massage for Active Adults Over 40 | Sports Massage Cedar Rapids | Kimmi Kraus",
  description: "Specialized massage therapy for active adults over 40. Address age-related muscle tension, joint stiffness, and recovery needs. Stay active longer with professional sports massage.",
  keywords: ["massage for active adults", "massage over 40", "massage for aging athletes", "massage for joint stiffness", "sports massage seniors"],
};

const challenges = [
  { issue: "Slower Recovery", solution: "Regular massage accelerates muscle recovery, so you can stay active without extended downtime between workouts or activities." },
  { issue: "Joint Stiffness", solution: "Targeted work on muscles surrounding joints improves mobility and reduces the morning stiffness many experience after 40." },
  { issue: "Accumulated Tension", solution: "Years of activity, stress, and postural habits create deep tension patterns that massage can systematically release." },
  { issue: "Injury Prevention", solution: "Proactive massage identifies and addresses muscle imbalances before they become injuries that sideline you." },
  { issue: "Decreased Flexibility", solution: "Sports massage combined with stretching helps maintain and improve range of motion that naturally decreases with age." },
  { issue: "Chronic Pain Patterns", solution: "Many adults over 40 have accepted ongoing pain as 'normal.' Therapeutic massage can often resolve issues you've had for years." },
];

export default function MassageForActiveAdults() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      <Header currentPage="service" />

      {/* Hero */}
      <section className="relative px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Stay Active, Stay Strong</p>
          <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
            Massage Therapy for Active Adults Over 40
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Your body has changed, but your drive hasn&apos;t. Sports massage helps you keep doing what you love—with less pain, faster recovery, and better movement.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="/#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a href="tel:+13192140458" className="flex items-center gap-2 border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)]">
              <PhoneIcon className="h-5 w-5" />
              319-214-0458
            </a>
          </div>
        </div>
      </section>

      {/* Understanding the Change */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Your Body After 40—And Why Massage Matters More
          </h2>
          <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              After 40, your body starts to recover more slowly. Muscles take longer to bounce back from workouts. Flexibility decreases. Old injuries resurface. The morning stiffness that used to disappear after your first cup of coffee now lingers.
            </p>
            <p>
              This is completely normal—and it doesn&apos;t mean you have to slow down. It means you need to be smarter about recovery. Athletes at every level understand this: professional sports teams invest heavily in massage therapy for their players. The same principles apply to weekend golfers, recreational runners, and active professionals.
            </p>
            <p>
              Regular sports massage becomes not a luxury, but a tool for longevity. It keeps you doing the activities you love without the accumulating aches and limitations that sideline so many people as they age.
            </p>
          </div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Common Challenges—And How Massage Helps
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {challenges.map((item, i) => (
              <div key={i} className="border border-[var(--slate)] bg-[var(--charcoal)] p-6">
                <h3 className="text-lg font-semibold text-[var(--rose)]">{item.issue}</h3>
                <p className="mt-3 text-sm text-[var(--silver)]">{item.solution}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Slowing Down */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Getting Older Doesn&apos;t Mean Slowing Down
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)]">
            Many clients come to us having accepted limitations as &ldquo;just part of aging.&rdquo; Within a few sessions, they&apos;re surprised to find that chronic issues they&apos;ve had for years can actually be resolved. That golf swing can get better. That morning stiffness can disappear. That nagging shoulder pain can finally be gone.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Feel Stronger?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            Book your session and discover what your body is capable of with proper care and recovery support.
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
