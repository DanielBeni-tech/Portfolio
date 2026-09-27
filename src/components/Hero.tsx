'use client';

import { useRef } from 'react';
import { profile } from '@/content/profile';
import { getUi, useLocale } from '@/lib/locale';
import { gsap, registerGsap, useGSAP } from '@/lib/gsap';

registerGsap();

function splitWords(text: string) {
  return text.split(' ').map((word, i) => (
    <span key={`${word}-${i}`} className="hero-word inline-block overflow-hidden align-bottom">
      <span className="hero-word-inner inline-block will-change-transform">{word}</span>
      {i < text.split(' ').length - 1 ? '\u00A0' : null}
    </span>
  ));
}

export function Hero() {
  useLocale();
  const ui = getUi();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const root = rootRef.current;
      if (!root) return;

      const mm = gsap.matchMedia();
      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          motion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const reduce = context.conditions?.reduce;
          const photo = root.querySelector('.hero-photo');
          const words = root.querySelectorAll('.hero-word-inner');
          const copy = root.querySelectorAll('.hero-copy');
          const badge = root.querySelector('.hero-badge');

          if (reduce) {
            gsap.set([photo, words, copy, badge], { clearProps: 'all', autoAlpha: 1 });
            return;
          }

          const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

          tl.from(photo, { scale: 1.12, autoAlpha: 0, duration: 1.4, ease: 'power2.out' }, 0)
            .from(
              words,
              { yPercent: 110, duration: 1, stagger: 0.08, ease: 'power4.out' },
              0.2
            )
            .from(copy, { y: 24, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.55)
            .from(badge, { scale: 0.7, autoAlpha: 0, duration: 0.8, ease: 'back.out(1.4)' }, 0.7);

          if (photo) {
            gsap.to(photo, {
              yPercent: 10,
              ease: 'none',
              scrollTrigger: {
                trigger: root,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            });
          }
        }
      );

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section ref={rootRef} id="top" className="relative px-3 pt-3 md:px-6 md:pt-6">
      <div className="frame relative mx-auto flex min-h-[calc(100svh-24px)] max-w-[1440px] flex-col overflow-hidden bg-paper md:min-h-[calc(100svh-48px)]">
        <div className="absolute inset-0 z-0 overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/photos/daniel-portrait.webp"
            alt="Daniel Beni Mpodol Welisan"
            className="hero-photo h-full w-full object-cover object-[50%_25%] scale-105"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/85 via-white/20 to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white/50 via-transparent to-white/50" />
        </div>

        <h1 className="relative z-10 px-4 pt-10 text-center font-display font-bold leading-[0.88] tracking-[0.01em] md:pt-14">
          <span className="block text-outline text-[clamp(2.4rem,8vw,6rem)]">
            {splitWords(profile.firstName)}
          </span>
          <span className="mt-1 block text-ink text-[clamp(2.1rem,7vw,6rem)]">
            {splitWords(profile.lastName)}
          </span>
        </h1>

        <a
          href="#projects"
          className="hero-badge absolute right-[6%] top-[36%] z-20 hidden md:block lg:right-[10%] lg:top-[32%]"
          aria-label={ui.projects}
          data-cursor={ui.seeWork}
        >
          <div className="group relative grid size-24 place-items-center md:size-28">
            <svg viewBox="0 0 100 100" className="absolute inset-0 animate-spin-slow">
              <defs>
                <path
                  id="hero-circle"
                  d="M50,50 m-38,0 a38,38 0 1,1 76,0 a38,38 0 1,1 -76,0"
                />
              </defs>
              <text className="fill-ink font-mono text-xs font-bold uppercase tracking-wider">
                <textPath href="#hero-circle" textLength="220" lengthAdjust="spacing">
                  TÉLÉCOM · FULLSTACK · UX · IA ·
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

        <div className="relative z-20 mt-auto px-5 pb-8 pt-24 md:absolute md:bottom-12 md:left-12 md:max-w-md md:bg-none md:px-0 md:pb-0 md:pt-0 lg:left-24">
          <p className="hero-copy mb-2 hidden font-mono text-xs uppercase tracking-[0.2em] text-muted md:block">
            {profile.alias}
          </p>
          <h2 className="hero-copy text-2xl font-bold leading-tight tracking-tight md:text-4xl">
            {profile.title}
          </h2>
          <p className="hero-copy mt-3 max-w-[22rem] text-base leading-relaxed text-ink/70 max-md:hidden">
            {profile.description}
          </p>
          <div className="hero-copy mt-6 flex flex-wrap items-center gap-3">
            <a href="#contact" className="btn-dark text-sm" data-cursor={ui.contact}>
              {ui.collaborate}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="pill text-sm"
              data-cursor="CV"
            >
              {ui.seeCv}
            </a>
            <a
              href={profile.cvUrl}
              download="CV-Daniel-Beni.pdf"
              className="pill text-sm"
            >
              {ui.download}
            </a>
          </div>
        </div>

        <div className="hero-copy absolute bottom-12 right-12 z-20 hidden flex-col items-end gap-3 md:flex lg:right-24 lg:gap-4">
          {profile.socials.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noreferrer"
              className="pill text-sm group"
            >
              {social.label}
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          ))}
        </div>

        <div className="hero-copy absolute bottom-4 left-1/2 -translate-x-1/2 z-20 hidden md:flex flex-col items-center gap-1">
          <span className="font-mono text-xs text-muted uppercase tracking-wider">{ui.scroll}</span>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="size-4 text-muted scroll-cue">
            <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
      </div>
    </section>
  );
}
