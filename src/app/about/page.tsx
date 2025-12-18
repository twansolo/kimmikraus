import Link from "next/link";
import Image from "next/image";
import { ArrowRightIcon, PhoneIcon } from "@/components/Icons";
import { Header } from "@/components/Header";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Kimmi Kraus | Mobile Massage Therapist Cedar Rapids",
  description: "Meet Kimmi Kraus, your licensed mobile massage therapist serving Cedar Rapids and Eastern Iowa. Passionate about helping active adults move better and feel amazing.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Navigation */}
      <Header currentPage="about" />

      {/* Hero Section */}
      <section className="relative px-6 pt-32 pb-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Image */}
            <div className="relative order-1 lg:order-2">
              <div className="relative mx-auto max-w-md overflow-hidden rounded-2xl border border-[var(--slate)] shadow-2xl shadow-black/20">
                <Image
                  src="/headshot.jpeg"
                  alt="Kimmi Kraus - Licensed Massage Therapist"
                  width={600}
                  height={600}
                  className="h-auto w-full object-cover"
                  priority
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -left-4 hidden h-32 w-32 border-2 border-[var(--rose)] lg:block" />
              <div className="absolute -right-4 -top-4 hidden h-32 w-32 border-2 border-[var(--rose)]/30 lg:block" />
            </div>

            {/* Content */}
            <div className="order-2 lg:order-1">
              <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Meet Your Therapist</p>
              <h1 className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--foreground)] sm:text-5xl lg:text-6xl">
                Hi, I&apos;m Kimmi!
              </h1>
              <p className="mt-6 text-xl text-[var(--rose)] font-medium">
                Your friendly neighborhood muscle whisperer. 💪
              </p>
              <div className="mt-8 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
                <p>
                  Some people collect stamps. Others collect vintage vinyl. Me? I collect knowledge about muscles, fascia, and all the wonderfully weird ways the human body decides to tie itself in knots. (Spoiler: sitting at a desk for 8 hours is basically a knot factory.)
                </p>
                <p>
                  I became a licensed massage therapist because I genuinely believe everyone deserves to feel good in their body—not just &ldquo;spa day&rdquo; good, but <em>&ldquo;wow, I didn&apos;t know my shoulder could do that anymore&rdquo;</em> good.
                </p>
                <p>
                  When I&apos;m not helping people rediscover muscles they forgot they had, you can probably find me drinking way too much coffee or perfecting my extensive knowledge of 90s pop culture. (Seriously, test me on Friends trivia. I dare you.)
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why I Do This */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Why I Started This
          </h2>
          <div className="mt-10 space-y-6 text-lg text-[var(--silver)] leading-relaxed">
            <p>
              Here&apos;s the thing: life is too short to spend it wincing every time you reach for something on the top shelf. I&apos;ve seen too many amazing, active people slowly give up the things they love because &ldquo;that&apos;s just part of getting older.&rdquo;
            </p>
            <p>
              Spoiler alert: <span className="text-[var(--foreground)] font-medium">it doesn&apos;t have to be.</span>
            </p>
            <p>
              I started Kimmi Kraus Massage because I wanted to bring real, results-focused bodywork directly to the people who need it most—without the awkward spa music, the weird whale sounds, or having to put on pants and drive somewhere after you finally feel relaxed.
            </p>
            <p>
              I show up at your door. I fix the thing. You get on with your life feeling better than you did an hour ago. It&apos;s that simple.
            </p>
          </div>
        </div>
      </section>

      {/* Fun Facts */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-center font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            A Few Fun Facts
          </h2>
          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <div className="border border-[var(--slate)] bg-[var(--charcoal)] p-6 text-center">
              <p className="text-4xl">☕</p>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">Coffee Enthusiast</h3>
              <p className="mt-2 text-sm text-[var(--silver)]">I run on caffeine and enthusiasm. Mostly caffeine.</p>
            </div>
            <div className="border border-[var(--slate)] bg-[var(--charcoal)] p-6 text-center">
              <p className="text-4xl">🧘</p>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">Always Learning</h3>
              <p className="mt-2 text-sm text-[var(--silver)]">Constantly expanding my skills and techniques.</p>
            </div>
            <div className="border border-[var(--slate)] bg-[var(--charcoal)] p-6 text-center">
              <p className="text-4xl">📺</p>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">90s Pop Culture Expert</h3>
              <p className="mt-2 text-sm text-[var(--silver)]">Could we BE any more nostalgic?</p>
            </div>
            <div className="border border-[var(--slate)] bg-[var(--charcoal)] p-6 text-center">
              <p className="text-4xl">🎓</p>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">Licensed & Certified</h3>
              <p className="mt-2 text-sm text-[var(--silver)]">Fully trained, insured, and obsessed with continuing education.</p>
            </div>
            <div className="border border-[var(--slate)] bg-[var(--charcoal)] p-6 text-center">
              <p className="text-4xl">🏠</p>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">Iowa Born & Raised</h3>
              <p className="mt-2 text-sm text-[var(--silver)]">Cedar Rapids is home. This community is my people.</p>
            </div>
            <div className="border border-[var(--slate)] bg-[var(--charcoal)] p-6 text-center">
              <p className="text-4xl">💪</p>
              <h3 className="mt-4 font-semibold text-[var(--foreground)]">Results Obsessed</h3>
              <p className="mt-2 text-sm text-[var(--silver)]">If you don&apos;t feel better after, I haven&apos;t done my job.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl">
            Ready to Feel Better?
          </h2>
          <p className="mt-6 text-lg text-[var(--silver)]">
            I&apos;d love to help you move better, feel stronger, and actually enjoy being in your body again. Let&apos;s make it happen.
          </p>
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="/#book" 
              className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
            >
              Book Your Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <a 
              href="tel:+13192140458"
              className="flex items-center gap-2 border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)] hover:bg-[var(--charcoal-light)]"
            >
              <PhoneIcon className="h-5 w-5" />
              Call 319-214-0458
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--charcoal-light)] bg-[var(--background)] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo-transparent.png" 
                alt="Kimmi Kraus Massage" 
                width={150} 
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-sm text-[var(--steel)]">Cedar Rapids, Iowa</p>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Home</Link>
              <Link href="/#services" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Services</Link>
              <Link href="/#pricing" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Pricing</Link>
              <Link href="/#book" className="text-sm text-[var(--silver)] hover:text-[var(--foreground)]">Book</Link>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--slate)] pt-8 text-center text-xs text-[var(--steel)]">
            <p>© {new Date().getFullYear()} Kimmi Kraus Massage Therapy. All rights reserved.</p>
            <p className="mt-2">Licensed Massage Therapist serving Cedar Rapids, Marion, Hiawatha, and Eastern Iowa.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

