'use client';

import { profile } from '@/content/profile';

export function Hero() {
  return (
    <section id="top" className="relative px-3 pt-3 md:px-6 md:pt-6">
      <div className="frame relative mx-auto flex min-h-[calc(100svh-24px)] max-w-[1440px] flex-col overflow-hidden bg-paper md:min-h-[calc(100svh-48px)]">
        {/* Portrait background */}
        <div className="absolute inset-0 z-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/daniel-portrait.jpeg"
            alt="Daniel Beni"
            className="h-full w-full object-cover object-[50%_25%] scale-105"
            style={{ animation: 'scaleIn 1.5s cubic-bezier(0.16,1,0.3,1) forwards' }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/20 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50" />
        </div>

        {/* Name */}
        <h1 className="relative z-10 pt-10 md:pt-14 select-none whitespace-nowrap text-center font-display text-[clamp(2.5rem,12vw,11rem)] font-bold leading-[0.9] tracking-[0.01em]">
          <span className="text-outline" style={{ animation: 'clipReveal 1s cubic-bezier(0.16,1,0.3,1) 0.2s both' }}>
            {profile.firstName}
          </span>
          <span className="inline-block w-[0.2em]" />
          <span className="text-ink" style={{ animation: 'clipReveal 1s cubic-bezier(0.16,1,0.3,1) 0.4s both' }}>
            {profile.lastName}
          </span>
        </h1>

        {/* Spinning badge */}
        <a
          href="#projects"
          className="absolute right-[6%] top-[36%] z-20 hidden md:block lg:right-[10%] lg:top-[32%]"
          aria-label="Voir mes projets"
          data-cursor="Voir"
        >
          <div
            className="group relative grid size-24 place-items-center md:size-28 animate-float"
            style={{ animation: 'scaleIn 0.8s cubic-bezier(0.16,1,0.3,1) 0.8s both, float 4s ease-in-out 1.5s infinite' }}
          >
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
              <defs>
                <path
                  id="hero-circle"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="fill-ink font-mono text-[8.5px] font-bold uppercase tracking-wider">
                <textPath href="#hero-circle" textLength="220" lengthAdjust="spacing">
                  AI ENGINEER · BUILDER ·
                </textPath>
              </text>
            </svg>
            <span className="grid size-10 place-items-center rounded-full bg-ink text-accent transition-transform duration-500 group-hover:rotate-[-18deg] group-hover:scale-110">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-5">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </div>
        </a>

        {/* Info bottom-left */}
        <div className="relative z-20 mt-auto px-5 pb-8 pt-24 md:absolute md:bottom-12 md:left-12 md:max-w-md md:bg-none md:px-0 md:pb-0 md:pt-0 lg:left-24">
          <p
            className="mb-2 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted md:block"
            style={{ animation: 'fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) 0.6s both' }}
          >
            {profile.alias}
          </p>
          <h2
            className="text-[1.7rem] font-bold leading-tight tracking-tight md:text-4xl"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.7s both' }}
          >
            {profile.title}
          </h2>
          <p
            className="mt-3 max-w-[22rem] text-[15px] leading-relaxed text-ink/70 max-md:hidden"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.8s both' }}
          >
            {profile.description}
          </p>
          <div
            className="mt-6 flex items-center gap-3"
            style={{ animation: 'fadeUp 0.7s cubic-bezier(0.16,1,0.3,1) 0.9s both' }}
          >
            <a href="#contact" className="btn-dark text-sm" data-cursor="Contact">
              Collaborons
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="pill text-sm md:hidden"
            >
              GitHub
            </a>
          </div>
        </div>

        {/* Social links bottom-right */}
        <div className="absolute bottom-12 right-12 z-20 hidden flex-col items-end gap-3 md:flex lg:right-24 lg:gap-4">
          {profile.socials.map((social, i) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="pill text-sm group"
              style={{ animation: `fadeUp 0.6s cubic-bezier(0.16,1,0.3,1) ${0.9 + i * 0.1}s both` }}
            >
              {social.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        {/* Scroll cue */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] text-muted uppercase tracking-wider">Scroll</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 text-muted scroll-cue">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
