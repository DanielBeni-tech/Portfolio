'use client';

import { profile } from '@/content/profile';

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full opacity-[0.07] blur-[120px] pointer-events-none animate-fade-in"
        style={{ background: 'var(--accent-blue)', animationDelay: '0.2s' }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-10 w-full relative z-10">
        {/* Top metadata row */}
        <div className="flex items-center justify-between mb-12 lg:mb-20">
          <div
            className="font-mono text-xs text-muted tracking-widest uppercase animate-fade-up"
            style={{ animationDelay: '0.3s' }}
          >
            {profile.location}
          </div>
          <div
            className="font-mono text-xs text-muted tracking-widest uppercase animate-fade-up hidden sm:block"
            style={{ animationDelay: '0.4s' }}
          >
            Portfolio / 2026
          </div>
        </div>

        {/* Main headline */}
        <div className="space-y-1 sm:space-y-2">
          <div
            className="font-mono text-xs sm:text-sm text-muted tracking-widest uppercase animate-fade-up"
            style={{ animationDelay: '0.5s' }}
          >
            I BUILD
          </div>
          <h1 className="font-sans font-semibold leading-[0.95] tracking-tight">
            <span
              className="block text-[14vw] sm:text-[12vw] lg:text-[10vw] xl:text-[9rem] animate-fade-up"
              style={{ animationDelay: '0.6s' }}
            >
              INTELLIGENT
            </span>
            <span
              className="block text-[14vw] sm:text-[12vw] lg:text-[10vw] xl:text-[9rem] animate-fade-up"
              style={{ animationDelay: '0.75s' }}
            >
              SOFTWARE<span className="text-blue">.</span>
            </span>
          </h1>
        </div>

        {/* Subtitle + CTA row */}
        <div className="mt-10 lg:mt-16 flex flex-col lg:flex-row lg:items-end justify-between gap-8">
          <p
            className="text-lg sm:text-xl text-muted max-w-md animate-fade-up leading-relaxed"
            style={{ animationDelay: '0.9s' }}
          >
            AI systems · software products · technical communities
          </p>

          <div
            className="flex items-center gap-6 animate-fade-up"
            style={{ animationDelay: '1.05s' }}
          >
            <a
              href="#work"
              data-cursor=""
              className="magnetic font-mono text-xs tracking-widest uppercase text-text border border-line px-6 py-3 rounded-full hover:border-blue hover:text-blue transition-colors duration-300"
            >
              View Work →
            </a>
            <a
              href="#contact"
              data-cursor=""
              className="font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors duration-300 link-underline"
            >
              Get in touch
            </a>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="font-mono text-[10px] text-muted tracking-widest uppercase">
          Scroll
        </span>
        <div className="w-px h-8 bg-gradient-to-b from-muted to-transparent scroll-cue" />
      </div>
    </section>
  );
}
