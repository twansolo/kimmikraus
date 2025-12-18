import Link from "next/link";
import Image from "next/image";
import { 
  CheckIcon, 
  ArrowRightIcon, 
  PhoneIcon, 
  LocationIcon, 
  TruckIcon, 
  ShieldIcon, 
  LockIcon,
  BoltIcon,
  SearchIcon,
  InstagramIcon,
  FacebookIcon
} from "@/components/Icons";

// Data extracted for cleaner JSX and better text-to-HTML ratio
const targetAudience = [
  { 
    title: "Active Men Over 40", 
    desc: "Stay in the game, recover faster, move without restriction. Whether you're playing recreational sports or staying fit at the gym, massage therapy helps you maintain peak performance as your body changes." 
  },
  { 
    title: "Golfers and Athletes", 
    desc: "Improve your swing, prevent injury, and extend your playing years. Regular sports massage enhances flexibility, reduces muscle tension, and speeds recovery between rounds or training sessions." 
  },
  { 
    title: "Professionals with Chronic Pain", 
    desc: "Eliminate the tension that's holding you back at work. Hours at a desk create muscle imbalances that lead to chronic neck, shoulder, and back pain. Therapeutic massage addresses the root cause." 
  },
  { 
    title: "Men Who Value Privacy", 
    desc: "Professional treatment in the comfort of your own home. No waiting rooms, no spa atmosphere. Just effective, results-driven massage therapy delivered on your schedule in your private space." 
  },
];

const issuesTreated = [
  { problem: "Back and Neck Pain", solution: "Targeted muscle release and postural correction to address the root cause of your pain, not just the symptoms." },
  { problem: "Shoulder and Hip Tightness", solution: "Deep tissue work focused on restricted areas to restore mobility and reduce discomfort during daily activities." },
  { problem: "Sciatic Discomfort", solution: "Specialized piriformis and lower back treatment to relieve nerve compression and radiating leg pain." },
  { problem: "Sports-Related Injuries", solution: "Accelerated recovery protocols designed to get you back to your sport faster and stronger." },
  { problem: "Limited Mobility", solution: "Comprehensive treatment to restore full range of motion in joints and muscle groups affected by tightness or injury." },
  { problem: "Chronic Tension", solution: "Systematic muscle release targeting areas where you hold stress, improving both physical comfort and mental wellbeing." },
];

const services = [
  {
    title: "Sports Massage",
    desc: "Optimized for athletes and active individuals. Sports massage improves performance by increasing blood flow, reducing muscle tension, and accelerating recovery between training sessions. Whether you're preparing for competition or recovering from intense activity, this treatment helps you perform at your best.",
    features: ["Pre and post activity preparation", "Injury prevention strategies", "Performance optimization techniques"]
  },
  {
    title: "Therapeutic Deep Tissue",
    desc: "Intensive work on chronic tension patterns that cause ongoing pain and restricted movement. Deep tissue massage breaks up adhesions, releases stubborn trigger points, and restores proper muscle function. This is not a relaxation massage—it's targeted therapy designed to create lasting change in your body.",
    features: ["Chronic pain relief", "Trigger point release", "Structural correction and realignment"]
  },
  {
    title: "Injury Recovery",
    desc: "Structured rehabilitation protocols for both acute and chronic injuries. Working alongside your medical team, massage therapy accelerates healing by improving circulation, reducing scar tissue formation, and restoring normal movement patterns. Get back to doing what you love faster.",
    features: ["Post-surgery rehabilitation support", "Strain and sprain recovery", "Return-to-activity planning"]
  },
  {
    title: "Maintenance Programs",
    desc: "Ongoing treatment plans designed for sustained results. Most clients see the best outcomes with consistent, scheduled sessions that prevent problems before they start. Regular maintenance massage keeps your body performing optimally and reduces the risk of future injury.",
    features: ["Weekly or bi-weekly session options", "Progress tracking and adjustment", "Preventive care strategies"]
  },
];

const differentiators = [
  { 
    title: "Licensed Sports Massage Therapist", 
    desc: "Fully certified and insured with specialized training in sports and therapeutic massage. You receive professional-grade treatment backed by education and experience."
  },
  { 
    title: "Anatomy-Based Treatment", 
    desc: "Every session is grounded in biomechanics and muscle function. No guesswork—just targeted treatment based on how your body actually works."
  },
  { 
    title: "No Spa Gimmicks", 
    desc: "No candles, no whale sounds, no fluffy robes. This is focused, effective treatment designed to produce measurable results you can feel."
  },
  { 
    title: "Mobile and Discreet Service", 
    desc: "Treatment comes directly to your home. Private, convenient, and scheduled around your life. No travel, no waiting rooms, no hassle."
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Mobile Floating Call Button */}
      <a
        href="tel:+13192140458"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--rose)] text-[var(--background)] shadow-lg shadow-black/30 transition-all active:scale-95 md:hidden"
        aria-label="Call Kimmi Kraus Massage at 319-214-0458"
      >
        <PhoneIcon className="h-6 w-6" />
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-light)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="block" aria-label="Kimmi Kraus Massage - Home">
            <Image 
              src="/logo-dark.png" 
              alt="Kimmi Kraus Massage - Mobile Sports Massage in Cedar Rapids" 
              width={180} 
              height={50}
              className="h-12 w-auto"
              priority
            />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#services" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">Services</Link>
            <Link href="#pricing" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">Pricing</Link>
            <Link href="#about" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">About</Link>
            <Link href="#book" className="bg-[var(--rose)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
            </Link>
          </div>
          <Link href="#book" className="bg-[var(--rose)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)] md:hidden">
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-[var(--rose)]/5 blur-[150px]" />
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] bg-[var(--brown)]/10 blur-[100px]" />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          <p className="animate-fade-in-up opacity-0 mb-8 inline-flex items-center gap-2 border border-[var(--slate)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[var(--silver)]">
            <LocationIcon className="h-4 w-4 text-[var(--rose)]" />
            Serving Cedar Rapids, Iowa and Surrounding Areas
          </p>

          <h1 className="animate-fade-in-up opacity-0 delay-100 font-[family-name:var(--font-dm-serif)] text-4xl leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
            Mobile Sports Massage for Men Who Refuse <span className="text-[var(--rose)]">to Slow Down</span>
          </h1>

          <p className="animate-fade-in-up opacity-0 delay-200 mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)] sm:text-xl md:text-2xl">
            Professional, results-driven sports and therapeutic massage delivered directly to your home in Cedar Rapids and the surrounding Eastern Iowa area. Relief from chronic pain, faster recovery, and better movement—without gimmicks or spa nonsense.
          </p>

          <div className="animate-fade-in-up opacity-0 delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link href="#book" className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
              Book Your Session
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="#services" className="border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)] hover:bg-[var(--charcoal)]">
              Learn About Our Services
            </Link>
          </div>

          <div className="animate-fade-in-up opacity-0 delay-400 mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-[var(--charcoal-light)] pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[var(--rose)]/30 text-[var(--rose)]">
                <TruckIcon />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[var(--foreground)]">Mobile Service</p>
                <p className="text-xs text-[var(--steel)]">We come directly to you</p>
              </div>
            </div>
            <div className="h-8 w-px bg-[var(--charcoal-light)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[var(--rose)]/30 text-[var(--rose)]">
                <ShieldIcon />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[var(--foreground)]">Licensed Therapist</p>
                <p className="text-xs text-[var(--steel)]">Certified and insured</p>
              </div>
            </div>
            <div className="h-8 w-px bg-[var(--charcoal-light)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[var(--rose)]/30 text-[var(--rose)]">
                <LockIcon />
              </div>
              <div className="text-left">
                <p className="text-sm font-medium text-[var(--foreground)]">Private Sessions</p>
                <p className="text-xs text-[var(--steel)]">Discreet and professional</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Who This Is For */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-24" aria-labelledby="audience-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Who This Is For</p>
            <h2 id="audience-heading" className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Professional Massage Therapy Built for Men Who Perform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--silver)]">
              Not every massage therapist understands the demands placed on active men. Whether you&apos;re an athlete, executive, or weekend warrior, our specialized approach addresses your specific needs.
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {targetAudience.map((item, i) => (
              <article key={i} className="group border border-[var(--slate)] bg-[var(--charcoal-light)] p-8 transition-all hover:border-[var(--rose)]/50">
                <h3 className="text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-[var(--silver)] leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Treated */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-24" aria-labelledby="issues-heading">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Common Issues We Treat</p>
              <h2 id="issues-heading" className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
                Real Problems Deserve Real Solutions
              </h2>
              <p className="mt-6 text-lg text-[var(--silver)] leading-relaxed">
                You&apos;ve tried stretching, foam rolling, and ignoring the pain. You&apos;ve pushed through discomfort hoping it would resolve on its own. If these problems persist, it&apos;s time for professional intervention that actually addresses the underlying cause—not just masks the symptoms.
              </p>
              <p className="mt-4 text-[var(--silver)] leading-relaxed">
                As a licensed massage therapist specializing in sports and therapeutic massage, I use evidence-based techniques to identify and treat the root cause of your pain. Every session is customized to your specific situation, activity level, and recovery goals.
              </p>
              <Link href="#book" className="mt-8 inline-flex items-center gap-2 text-[var(--rose)] transition-colors hover:text-[var(--rose-light)]">
                <span className="font-medium">Start Your Recovery Today</span>
                <ArrowRightIcon className="h-4 w-4" />
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {issuesTreated.map((item, i) => (
                <article key={i} className="border-l-2 border-[var(--rose)] bg-[var(--charcoal)] p-5">
                  <h3 className="font-semibold text-[var(--foreground)]">{item.problem}</h3>
                  <p className="mt-2 text-sm text-[var(--silver)] leading-relaxed">{item.solution}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section id="about" className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-24" aria-labelledby="different-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">What Makes This Different</p>
            <h2 id="different-heading" className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              This Is Not a Spa Experience
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--silver)]">
              Many massage services focus on relaxation and ambiance. That&apos;s fine if you want to unwind, but it won&apos;t fix your chronic back pain or help you recover from an injury. Our approach is different—focused entirely on producing measurable results.
            </p>
          </div>

          <div className="grid gap-12 lg:grid-cols-4">
            {differentiators.map((item, i) => (
              <article key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[var(--rose)] text-[var(--rose)]">
                  {i === 0 && <ShieldIcon className="h-8 w-8" />}
                  {i === 1 && <SearchIcon />}
                  {i === 2 && <BoltIcon />}
                  {i === 3 && <TruckIcon className="h-8 w-8" />}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-[var(--silver)] leading-relaxed">{item.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-[var(--charcoal-light)] px-6 py-24" aria-labelledby="services-heading">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Our Services</p>
            <h2 id="services-heading" className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Mobile Massage Therapy Services in Cedar Rapids
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--silver)]">
              Every session is tailored to your specific issues, activity level, and recovery goals. All services are delivered directly to your home anywhere in Cedar Rapids and the surrounding Eastern Iowa area.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {services.map((service, i) => (
              <article key={i} className="group border border-[var(--slate)] bg-[var(--charcoal)] p-8 transition-all hover:border-[var(--rose)]">
                <div className="flex items-start justify-between">
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">{service.title}</h3>
                  <div className="flex h-10 w-10 items-center justify-center border border-[var(--slate)] text-[var(--rose)] transition-all group-hover:border-[var(--rose)] group-hover:bg-[var(--rose)] group-hover:text-[var(--background)]">
                    <ArrowRightIcon />
                  </div>
                </div>
                <p className="mt-4 text-[var(--silver)] leading-relaxed">{service.desc}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[var(--steel)]">
                      <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-24" aria-labelledby="pricing-heading">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Investment in Your Health</p>
            <h2 id="pricing-heading" className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Massage Therapy Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--silver)]">
              Most clients achieve the best results with consistent, scheduled treatment. We offer package options for those committed to lasting improvement.
            </p>
          </div>

          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <article className="border border-[var(--slate)] bg-[var(--background)] p-8">
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--steel)]">Single Session</p>
              <h3 className="mt-2 font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">60 Minute Massage</h3>
              <p className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--rose)]">$120</p>
              <p className="mt-4 text-[var(--silver)]">Focused treatment for specific problem areas. Ideal for maintenance sessions or when you need targeted relief for a particular issue. Includes assessment, treatment, and aftercare recommendations.</p>
              <Link href="#book" className="mt-6 block border border-[var(--rose)] py-3 text-center font-medium text-[var(--rose)] transition-all hover:bg-[var(--rose)] hover:text-[var(--background)]">
                Book 60 Minute Session
              </Link>
            </article>

            <article className="relative border-2 border-[var(--rose)] bg-[var(--background)] p-8">
              <span className="absolute -top-3 right-6 bg-[var(--rose)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--background)]">
                Best Value
              </span>
              <p className="text-sm font-medium uppercase tracking-wider text-[var(--steel)]">Single Session</p>
              <h3 className="mt-2 font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">90 Minute Massage</h3>
              <p className="mt-4 font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--rose)]">$165</p>
              <p className="mt-4 text-[var(--silver)]">Comprehensive treatment for full-body work or intensive focus on multiple problem areas. Recommended for first-time clients and those dealing with complex or chronic issues. Allows time for thorough assessment and treatment.</p>
              <Link href="#book" className="mt-6 block bg-[var(--rose)] py-3 text-center font-medium text-[var(--background)] transition-all hover:bg-[var(--rose-light)]">
                Book 90 Minute Session
              </Link>
            </article>
          </div>

          <article className="border border-[var(--slate)] bg-[var(--background)] p-8 md:p-12">
            <div className="mb-8 text-center">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">Commitment Packages for Lasting Results</h3>
              <p className="mt-2 text-[var(--silver)]">For clients serious about recovery and long-term improvement. Prepaid packages offer savings and encourage the consistency needed for optimal results.</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-[var(--charcoal-light)] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)]">5-Session Recovery Plan</h4>
                    <p className="mt-1 text-sm text-[var(--silver)]">Intensive protocol designed for acute issues or new clients establishing a treatment baseline</p>
                  </div>
                  <div className="text-right">
                    <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--rose)]">$550</p>
                    <p className="text-xs text-[var(--steel)]">Save $50</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 border-t border-[var(--charcoal-light)] pt-4">
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                    Five 60-minute massage sessions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                    Progress assessment at each visit
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                    Valid for 60 days from purchase
                  </li>
                </ul>
              </div>

              <div className="border border-[var(--charcoal-light)] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)]">10-Session Maintenance Plan</h4>
                    <p className="mt-1 text-sm text-[var(--silver)]">Ongoing care for sustained performance and long-term injury prevention</p>
                  </div>
                  <div className="text-right">
                    <p className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--rose)]">$1,050</p>
                    <p className="text-xs text-[var(--steel)]">Save $150</p>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 border-t border-[var(--charcoal-light)] pt-4">
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                    Ten 60-minute massage sessions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                    Quarterly progress reviews included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <CheckIcon className="h-4 w-4 text-[var(--rose)]" />
                    Valid for 6 months from purchase
                  </li>
                </ul>
              </div>
            </div>
          </article>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="border-t border-[var(--charcoal-light)] px-6 py-24" aria-labelledby="cta-heading">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--rose)]">
            <LocationIcon />
            Serving Cedar Rapids, Marion, Hiawatha, and Surrounding Eastern Iowa Communities
          </p>
          <h2 id="cta-heading" className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Ready to Move Better and Live Without Pain?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--silver)]">
            Stop managing your pain and start fixing it. Book your first session today and experience the difference professional sports massage therapy can make. All sessions are conducted in the privacy and comfort of your own home.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a 
              href="mailto:hello@kimmikraus.com?subject=Massage%20Appointment%20Request"
              className="group flex items-center gap-3 bg-[var(--rose)] px-10 py-5 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
            >
              Book Your Session Now
              <ArrowRightIcon className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </a>
            <a 
              href="tel:+13192140458"
              className="flex items-center gap-2 border border-[var(--slate)] px-10 py-5 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)] hover:bg-[var(--charcoal)]"
            >
              <PhoneIcon />
              Call 319-214-0458
            </a>
          </div>

          <p className="mt-8 text-sm text-[var(--steel)]">
            Prefer email? Reach out directly at <a href="mailto:hello@kimmikraus.com" className="text-[var(--rose)] hover:text-[var(--rose-light)]">hello@kimmikraus.com</a>
          </p>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-12">
        <div className="mx-auto max-w-6xl">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-4">
              <Image 
                src="/logo-dark.png" 
                alt="Kimmi Kraus Massage" 
                width={150} 
                height={40}
                className="h-10 w-auto"
              />
              <p className="text-sm text-[var(--steel)]">Cedar Rapids, Iowa</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[var(--silver)] transition-colors hover:text-[var(--foreground)]" aria-label="Follow Kimmi Kraus Massage on Instagram">
                <InstagramIcon />
              </a>
              <a href="#" className="text-[var(--silver)] transition-colors hover:text-[var(--foreground)]" aria-label="Follow Kimmi Kraus Massage on Facebook">
                <FacebookIcon />
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--slate)] pt-8 text-center text-xs text-[var(--steel)]">
            <p>© {new Date().getFullYear()} Kimmi Kraus Massage Therapy. All rights reserved.</p>
            <p className="mt-2">Licensed Massage Therapist serving Cedar Rapids, Marion, Hiawatha, and Eastern Iowa.</p>
          </div>
        </div>
      </footer>

      {/* Structured Data for Local Business */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Kimmi Kraus Massage",
            "description": "Mobile sports and therapeutic massage therapy serving Cedar Rapids and Eastern Iowa. Professional, results-driven treatment delivered to your home.",
            "url": "https://kimmikraus.com",
            "telephone": "+1-319-214-0458",
            "email": "hello@kimmikraus.com",
            "areaServed": {
              "@type": "GeoCircle",
              "geoMidpoint": {
                "@type": "GeoCoordinates",
                "latitude": 41.9779,
                "longitude": -91.6656
              },
              "geoRadius": "30 mi"
            },
            "serviceType": ["Sports Massage", "Therapeutic Massage", "Deep Tissue Massage", "Mobile Massage"],
            "priceRange": "$$"
          })
        }}
      />
    </div>
  );
}
