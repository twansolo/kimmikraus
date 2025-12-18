export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-[var(--background)]">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Soft gradient orbs */}
        <div className="animate-breathe absolute -top-40 -right-40 h-[500px] w-[500px] rounded-full bg-[var(--sage)]/10 blur-3xl" />
        <div className="animate-breathe absolute -bottom-40 -left-40 h-[600px] w-[600px] rounded-full bg-[var(--sage-light)]/15 blur-3xl delay-300" />
        <div className="animate-breathe absolute top-1/2 left-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[var(--cream-dark)]/30 blur-3xl delay-500" />
        
        {/* Botanical decorative elements */}
        <svg
          className="animate-float absolute top-20 right-[15%] h-32 w-32 text-[var(--sage)]/20"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <ellipse cx="50" cy="30" rx="8" ry="25" transform="rotate(-30 50 30)" />
          <ellipse cx="50" cy="30" rx="8" ry="25" transform="rotate(30 50 30)" />
          <ellipse cx="50" cy="35" rx="6" ry="20" />
          <rect x="48" y="50" width="4" height="30" rx="2" />
        </svg>
        
        <svg
          className="animate-float absolute bottom-32 left-[10%] h-24 w-24 text-[var(--sage-light)]/25 delay-200"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <ellipse cx="50" cy="30" rx="8" ry="25" transform="rotate(-30 50 30)" />
          <ellipse cx="50" cy="30" rx="8" ry="25" transform="rotate(30 50 30)" />
          <ellipse cx="50" cy="35" rx="6" ry="20" />
          <rect x="48" y="50" width="4" height="30" rx="2" />
        </svg>

        <svg
          className="animate-float absolute top-1/3 left-[5%] h-20 w-20 text-[var(--stone)]/15 delay-500"
          viewBox="0 0 100 100"
          fill="currentColor"
        >
          <circle cx="50" cy="50" r="20" />
          <ellipse cx="30" cy="40" rx="12" ry="8" />
          <ellipse cx="70" cy="40" rx="12" ry="8" />
          <ellipse cx="50" cy="25" rx="10" ry="8" />
        </svg>
      </div>

      {/* Main content */}
      <main className="relative z-10 flex min-h-screen flex-col items-center justify-center px-6 py-16">
        <div className="w-full max-w-2xl text-center">
          {/* Logo/Brand mark */}
          <div className="animate-fade-in-up opacity-0 mb-8">
            <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--sage)]/10 backdrop-blur-sm">
              <svg
                className="h-10 w-10 text-[var(--sage-dark)]"
                viewBox="0 0 50 50"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
              >
                {/* Hands icon representing massage */}
                <path d="M15 35 C10 30, 8 20, 15 12 C20 6, 30 6, 35 12 C42 20, 40 30, 35 35" strokeLinecap="round" />
                <path d="M20 25 Q25 20, 30 25" strokeLinecap="round" />
                <path d="M18 30 Q25 24, 32 30" strokeLinecap="round" />
              </svg>
            </div>
          </div>

          {/* Brand name */}
          <h1 
            className="animate-fade-in-up opacity-0 delay-100 font-[family-name:var(--font-cormorant)] text-5xl font-light tracking-wide text-[var(--foreground)] sm:text-6xl md:text-7xl"
          >
            Kimmi Kraus
          </h1>
          
          {/* Tagline */}
          <p 
            className="animate-fade-in-up opacity-0 delay-200 mt-4 font-[family-name:var(--font-cormorant)] text-xl font-light italic tracking-widest text-[var(--sage-dark)] sm:text-2xl"
          >
            Massage Therapy
          </p>

          {/* Decorative divider */}
          <div className="animate-fade-in-up opacity-0 delay-300 my-10 flex items-center justify-center gap-4">
            <div className="h-px w-16 bg-gradient-to-r from-transparent to-[var(--sage)]/50" />
            <div className="h-2 w-2 rotate-45 border border-[var(--sage)]/50" />
            <div className="h-px w-16 bg-gradient-to-l from-transparent to-[var(--sage)]/50" />
          </div>

          {/* Coming soon message */}
          <div className="animate-fade-in-up opacity-0 delay-400">
            <span className="inline-block rounded-full bg-[var(--sage)]/10 px-6 py-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--sage-dark)]">
              Coming Soon
            </span>
          </div>

          {/* Description */}
          <p className="animate-fade-in-up opacity-0 delay-500 mx-auto mt-8 max-w-md text-base leading-relaxed text-[var(--stone)] sm:text-lg">
            A sanctuary for renewal and relaxation. Professional massage therapy 
            designed to restore balance to your body and peace to your mind.
          </p>

          {/* Contact info */}
          <div className="animate-fade-in-up opacity-0 delay-600 mt-12 space-y-4">
            <p className="text-sm uppercase tracking-widest text-[var(--sage-dark)]">
              Get in touch
            </p>
            <a 
              href="mailto:hello@kimmikraus.com"
              className="group inline-flex items-center gap-2 text-lg text-[var(--foreground)] transition-colors hover:text-[var(--sage-dark)]"
            >
              <svg 
                className="h-5 w-5 transition-transform group-hover:scale-110" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor" 
                strokeWidth="1.5"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="font-[family-name:var(--font-quicksand)]">hello@kimmikraus.com</span>
            </a>
          </div>

          {/* Social links placeholder */}
          <div className="animate-fade-in-up opacity-0 delay-700 mt-12 flex items-center justify-center gap-6">
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sage)]/20 text-[var(--stone)] transition-all hover:border-[var(--sage)] hover:bg-[var(--sage)]/10 hover:text-[var(--sage-dark)]"
              aria-label="Instagram"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#" 
              className="flex h-12 w-12 items-center justify-center rounded-full border border-[var(--sage)]/20 text-[var(--stone)] transition-all hover:border-[var(--sage)] hover:bg-[var(--sage)]/10 hover:text-[var(--sage-dark)]"
              aria-label="Facebook"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="absolute bottom-0 left-0 right-0 p-6 text-center">
        <p className="text-xs tracking-wider text-[var(--stone)]/60">
          © {new Date().getFullYear()} Kimmi Kraus. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
