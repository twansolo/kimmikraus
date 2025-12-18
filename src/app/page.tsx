import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--background)]">
      {/* Mobile Floating Call Button */}
      <a
        href="tel:+13192140458"
        className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[var(--rose)] text-[var(--background)] shadow-lg shadow-black/30 transition-all active:scale-95 md:hidden"
        aria-label="Call now"
      >
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
        </svg>
      </a>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-[var(--charcoal-light)] bg-[var(--background)]/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-3">
          <Link href="/" className="block">
        <Image
              src="/logo-dark.png" 
              alt="Kimmi Kraus Massage" 
              width={180} 
              height={50}
              className="h-12 w-auto"
          priority
        />
          </Link>
          <div className="hidden items-center gap-8 md:flex">
            <Link href="#services" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">
              Services
            </Link>
            <Link href="#pricing" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">
              Pricing
            </Link>
            <Link href="#about" className="text-sm text-[var(--silver)] transition-colors hover:text-[var(--foreground)]">
              What&apos;s Different
            </Link>
            <Link 
              href="#book" 
              className="bg-[var(--rose)] px-5 py-2.5 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
            >
              Book Your Session
            </Link>
          </div>
          <Link 
            href="#book" 
            className="bg-[var(--rose)] px-4 py-2 text-sm font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)] md:hidden"
          >
            Book Now
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute right-0 top-0 h-[600px] w-[600px] bg-[var(--rose)]/5 blur-[150px]" />
          <div className="absolute -bottom-20 -left-20 h-[400px] w-[400px] bg-[var(--brown)]/10 blur-[100px]" />
          {/* Grid pattern */}
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `linear-gradient(var(--steel) 1px, transparent 1px), linear-gradient(90deg, var(--steel) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>

        <div className="relative z-10 mx-auto max-w-4xl text-center">
          {/* Location Badge */}
          <div className="animate-fade-in-up opacity-0 mb-8">
            <span className="inline-flex items-center gap-2 border border-[var(--slate)] px-4 py-1.5 text-xs font-medium uppercase tracking-[0.15em] text-[var(--silver)]">
              <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
              </svg>
              Cedar Rapids & Surrounding Areas
            </span>
          </div>

          {/* Main headline */}
          <h1 className="animate-fade-in-up opacity-0 delay-100 font-[family-name:var(--font-dm-serif)] text-4xl leading-tight text-[var(--foreground)] sm:text-5xl md:text-6xl lg:text-7xl">
            Mobile Sports Massage for Men Who Refuse{" "}
            <span className="text-[var(--rose)]">to Slow Down</span>
          </h1>

          {/* Subheadline */}
          <p className="animate-fade-in-up opacity-0 delay-200 mx-auto mt-6 max-w-2xl text-lg text-[var(--silver)] sm:text-xl md:text-2xl">
            Serving Cedar Rapids and surrounding areas with professional, results-driven sports massage—delivered directly to your home.
          </p>

          {/* CTA buttons */}
          <div className="animate-fade-in-up opacity-0 delay-300 mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <Link 
              href="#book" 
              className="group flex items-center gap-2 bg-[var(--rose)] px-8 py-4 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
            >
              Book Your Session
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link 
              href="#services" 
              className="border border-[var(--slate)] px-8 py-4 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)] hover:bg-[var(--charcoal)]"
            >
              View Services
            </Link>
          </div>

          {/* Trust indicators */}
          <div className="animate-fade-in-up opacity-0 delay-400 mt-16 flex flex-wrap items-center justify-center gap-8 border-t border-[var(--charcoal-light)] pt-8">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[var(--rose)]/30 text-[var(--rose)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-[var(--foreground)]">Mobile Service</div>
                <div className="text-xs text-[var(--steel)]">We come to you</div>
              </div>
            </div>
            <div className="h-8 w-px bg-[var(--charcoal-light)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[var(--rose)]/30 text-[var(--rose)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-[var(--foreground)]">Licensed</div>
                <div className="text-xs text-[var(--steel)]">Certified therapist</div>
              </div>
            </div>
            <div className="h-8 w-px bg-[var(--charcoal-light)]" />
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center border border-[var(--rose)]/30 text-[var(--rose)]">
                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 002.25-2.25v-6.75a2.25 2.25 0 00-2.25-2.25H6.75a2.25 2.25 0 00-2.25 2.25v6.75a2.25 2.25 0 002.25 2.25z" />
                </svg>
              </div>
              <div className="text-left">
                <div className="text-sm font-medium text-[var(--foreground)]">Private</div>
                <div className="text-xs text-[var(--steel)]">Discreet & professional</div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2">
          <div className="flex flex-col items-center gap-2 text-[var(--steel)]">
            <span className="text-xs uppercase tracking-widest">Scroll</span>
            <div className="h-12 w-px bg-gradient-to-b from-[var(--steel)] to-transparent" />
          </div>
        </div>
      </section>

      {/* Who This Is For */}
      <section className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Who This Is For</span>
            <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Built for Men Who Perform
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {[
              { 
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z" />
                  </svg>
                ),
                title: "Active Men Over 40", 
                desc: "Stay in the game, recover faster, move without restriction" 
              },
              { 
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5" />
                  </svg>
                ),
                title: "Golfers & Athletes", 
                desc: "Improve performance, prevent injury, extend your playing years" 
              },
              { 
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 14.15v4.25c0 1.094-.787 2.036-1.872 2.18-2.087.277-4.216.42-6.378.42s-4.291-.143-6.378-.42c-1.085-.144-1.872-1.086-1.872-2.18v-4.25m16.5 0a2.18 2.18 0 00.75-1.661V8.706c0-1.081-.768-2.015-1.837-2.175a48.114 48.114 0 00-3.413-.387m4.5 8.006c-.194.165-.42.295-.673.38A23.978 23.978 0 0112 15.75c-2.648 0-5.195-.429-7.577-1.22a2.016 2.016 0 01-.673-.38m0 0A2.18 2.18 0 013 12.489V8.706c0-1.081.768-2.015 1.837-2.175a48.111 48.111 0 013.413-.387m7.5 0V5.25A2.25 2.25 0 0013.5 3h-3a2.25 2.25 0 00-2.25 2.25v.894m7.5 0a48.667 48.667 0 00-7.5 0M12 12.75h.008v.008H12v-.008z" />
                  </svg>
                ),
                title: "Professionals with Chronic Pain", 
                desc: "Eliminate the tension that's holding you back at work" 
              },
              { 
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                ),
                title: "Men Who Value Privacy", 
                desc: "Professional treatment in the comfort of your own home" 
              },
            ].map((item, i) => (
              <div 
                key={i} 
                className="group border border-[var(--slate)] bg-[var(--charcoal-light)] p-8 transition-all hover:border-[var(--rose)]/50"
              >
                <div className="text-[var(--rose)]">{item.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-2 text-[var(--silver)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Common Issues Treated */}
      <section className="border-t border-[var(--charcoal-light)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
            <div>
              <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Common Issues Treated</span>
              <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
                Real Problems.<br />Real Solutions.
              </h2>
              <p className="mt-6 text-lg text-[var(--silver)]">
                You&apos;ve tried stretching. You&apos;ve tried foam rolling. You&apos;ve tried ignoring it. 
                If the problem persists, it&apos;s time for professional intervention that actually works.
              </p>
              <Link 
                href="#book" 
                className="mt-8 inline-flex items-center gap-2 text-[var(--rose)] transition-colors hover:text-[var(--rose-light)]"
              >
                <span className="font-medium">Get Started</span>
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </Link>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { problem: "Back & Neck Pain", solution: "Targeted release and postural correction" },
                { problem: "Shoulder & Hip Tightness", solution: "Deep tissue work on restricted areas" },
                { problem: "Sciatic Discomfort", solution: "Piriformis and lower back treatment" },
                { problem: "Sports-Related Injuries", solution: "Accelerated recovery protocols" },
                { problem: "Limited Mobility", solution: "Restore full range of motion" },
                { problem: "Chronic Tension", solution: "Systematic muscle release" },
              ].map((item, i) => (
                <div key={i} className="border-l-2 border-[var(--rose)] bg-[var(--charcoal)] p-5">
                  <h3 className="font-semibold text-[var(--foreground)]">{item.problem}</h3>
                  <p className="mt-1 text-sm text-[var(--silver)]">{item.solution}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Makes This Different */}
      <section id="about" className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">What Makes This Different</span>
            <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              This Isn&apos;t a Spa
            </h2>
          </div>

          <div className="grid gap-12 lg:grid-cols-4">
            {[
              { 
                title: "Licensed Sports Massage Therapist", 
                desc: "Fully certified and insured. Professional standards, professional results.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                )
              },
              { 
                title: "Anatomy-Based Treatment", 
                desc: "Every treatment is based on biomechanics and muscle function, not guesswork.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                  </svg>
                )
              },
              { 
                title: "No Spa Gimmicks", 
                desc: "No candles. No whale sounds. Just effective treatment that gets results.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                )
              },
              { 
                title: "Mobile, Discreet, Professional", 
                desc: "Treatment comes to you. Private, convenient, on your schedule.",
                icon: (
                  <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                  </svg>
                )
              },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="mx-auto flex h-16 w-16 items-center justify-center border border-[var(--rose)] text-[var(--rose)]">
                  {item.icon}
                </div>
                <h3 className="mt-6 text-lg font-semibold text-[var(--foreground)]">{item.title}</h3>
                <p className="mt-3 text-[var(--silver)]">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="border-t border-[var(--charcoal-light)] px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Services</span>
            <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Mobile Treatment Options
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-[var(--silver)]">
              Every session is tailored to your specific issues, activity level, and recovery goals—delivered to your home in Cedar Rapids and surrounding areas.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: "Sports Massage",
                desc: "Optimized for athletes and active individuals. Improves performance, prevents injury, and accelerates recovery between training sessions.",
                features: ["Pre/post activity prep", "Injury prevention", "Performance optimization"]
              },
              {
                title: "Therapeutic Deep Tissue",
                desc: "Intensive work on chronic tension patterns. Breaks up adhesions, releases trigger points, and restores proper muscle function.",
                features: ["Chronic pain relief", "Trigger point release", "Structural correction"]
              },
              {
                title: "Injury Recovery",
                desc: "Structured rehabilitation protocols for acute and chronic injuries. Work alongside your medical team for faster, complete recovery.",
                features: ["Post-surgery support", "Strain/sprain recovery", "Return-to-activity plans"]
              },
              {
                title: "Maintenance Programs",
                desc: "Ongoing treatment plans for sustained results. Most clients see best outcomes with consistent, scheduled sessions.",
                features: ["Weekly/bi-weekly options", "Progress tracking", "Preventive care"]
              },
            ].map((service, i) => (
              <div key={i} className="group border border-[var(--slate)] bg-[var(--charcoal)] p-8 transition-all hover:border-[var(--rose)]">
                <div className="flex items-start justify-between">
                  <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">{service.title}</h3>
                  <div className="flex h-10 w-10 items-center justify-center border border-[var(--slate)] text-[var(--rose)] transition-all group-hover:border-[var(--rose)] group-hover:bg-[var(--rose)] group-hover:text-[var(--background)]">
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                <p className="mt-4 text-[var(--silver)]">{service.desc}</p>
                <ul className="mt-6 space-y-2">
                  {service.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-2 text-sm text-[var(--steel)]">
                      <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing */}
      <section id="pricing" className="border-t border-[var(--charcoal-light)] bg-[var(--charcoal)] px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="mb-16 text-center">
            <span className="text-xs font-medium uppercase tracking-[0.2em] text-[var(--rose)]">Investment</span>
            <h2 className="mt-4 font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
              Pricing
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-[var(--silver)]">
              Most clients see best results with consistent treatment. Packages available for committed recovery.
            </p>
          </div>

          {/* Single Sessions */}
          <div className="mb-12 grid gap-6 md:grid-cols-2">
            <div className="border border-[var(--slate)] bg-[var(--background)] p-8">
              <div className="text-sm font-medium uppercase tracking-wider text-[var(--steel)]">Single Session</div>
              <h3 className="mt-2 font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">60 Minutes</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--rose)]">$120</span>
              </div>
              <p className="mt-4 text-[var(--silver)]">Focused treatment for specific issues. Ideal for maintenance or targeted relief.</p>
              <Link 
                href="#book" 
                className="mt-6 block border border-[var(--rose)] py-3 text-center font-medium text-[var(--rose)] transition-all hover:bg-[var(--rose)] hover:text-[var(--background)]"
              >
                Book 60 Min
              </Link>
            </div>

            <div className="relative border-2 border-[var(--rose)] bg-[var(--background)] p-8">
              <div className="absolute -top-3 right-6 bg-[var(--rose)] px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[var(--background)]">
                Best Value
              </div>
              <div className="text-sm font-medium uppercase tracking-wider text-[var(--steel)]">Single Session</div>
              <h3 className="mt-2 font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">90 Minutes</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-[family-name:var(--font-dm-serif)] text-4xl text-[var(--rose)]">$165</span>
              </div>
              <p className="mt-4 text-[var(--silver)]">Comprehensive treatment. Full-body work or intensive focus on problem areas.</p>
              <Link 
                href="#book" 
                className="mt-6 block bg-[var(--rose)] py-3 text-center font-medium text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
              >
                Book 90 Min
              </Link>
            </div>
          </div>

          {/* Packages */}
          <div className="border border-[var(--slate)] bg-[var(--background)] p-8 md:p-12">
            <div className="mb-8 text-center">
              <h3 className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--foreground)]">Commitment Packages</h3>
              <p className="mt-2 text-[var(--silver)]">For serious recovery and lasting results</p>
            </div>

            <div className="grid gap-8 md:grid-cols-2">
              <div className="border border-[var(--charcoal-light)] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)]">5-Session Recovery Plan</h4>
                    <p className="mt-1 text-sm text-[var(--silver)]">Intensive protocol for acute issues</p>
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--rose)]">$550</div>
                    <div className="text-xs text-[var(--steel)]">Save $50</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 border-t border-[var(--charcoal-light)] pt-4">
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    5 x 60-minute sessions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Progress assessment included
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Valid 60 days
                  </li>
                </ul>
              </div>

              <div className="border border-[var(--charcoal-light)] p-6">
                <div className="flex items-start justify-between">
                  <div>
                    <h4 className="text-lg font-semibold text-[var(--foreground)]">10-Session Maintenance Plan</h4>
                    <p className="mt-1 text-sm text-[var(--silver)]">Ongoing care for sustained performance</p>
                  </div>
                  <div className="text-right">
                    <div className="font-[family-name:var(--font-dm-serif)] text-2xl text-[var(--rose)]">$1,050</div>
                    <div className="text-xs text-[var(--steel)]">Save $150</div>
                  </div>
                </div>
                <ul className="mt-4 space-y-2 border-t border-[var(--charcoal-light)] pt-4">
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    10 x 60-minute sessions
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Quarterly progress reviews
                  </li>
                  <li className="flex items-center gap-2 text-sm text-[var(--silver)]">
                    <svg className="h-4 w-4 text-[var(--rose)]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                    Valid 6 months
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="book" className="border-t border-[var(--charcoal-light)] px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 text-sm text-[var(--rose)]">
            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
            Serving Cedar Rapids & Surrounding Areas
          </div>
          <h2 className="font-[family-name:var(--font-dm-serif)] text-3xl text-[var(--foreground)] sm:text-4xl md:text-5xl">
            Ready to Move Better?
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-[var(--silver)]">
            Stop managing pain. Start fixing it. Book your first session and experience professional treatment in the comfort of your own home.
          </p>
          
          <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
            <a 
              href="mailto:hello@kimmikraus.com?subject=Booking%20Request"
              className="group flex items-center gap-3 bg-[var(--rose)] px-10 py-5 text-lg font-semibold text-[var(--background)] transition-all hover:bg-[var(--rose-light)]"
            >
              Book Your Session
              <svg className="h-5 w-5 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a 
              href="tel:+13192140458"
              className="flex items-center gap-2 border border-[var(--slate)] px-10 py-5 text-lg font-medium text-[var(--foreground)] transition-all hover:border-[var(--silver)] hover:bg-[var(--charcoal)]"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              Call Now
            </a>
          </div>

          <p className="mt-8 text-sm text-[var(--steel)]">
            Or email directly: <a href="mailto:hello@kimmikraus.com" className="text-[var(--rose)] hover:text-[var(--rose-light)]">hello@kimmikraus.com</a>
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
              <p className="text-sm text-[var(--steel)]">Cedar Rapids, IA</p>
            </div>
            <div className="flex items-center gap-6">
              <a href="#" className="text-[var(--silver)] transition-colors hover:text-[var(--foreground)]" aria-label="Instagram">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a href="#" className="text-[var(--silver)] transition-colors hover:text-[var(--foreground)]" aria-label="Facebook">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </a>
            </div>
          </div>
          <div className="mt-8 border-t border-[var(--slate)] pt-8 text-center text-xs text-[var(--steel)]">
            © {new Date().getFullYear()} Kimmi Kraus. All rights reserved. Licensed Massage Therapist.
          </div>
        </div>
      </footer>
    </div>
  );
}
