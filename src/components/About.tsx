'use client';

import { useRef } from 'react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';
import { gsap, registerGsap, useGSAP } from '@/lib/gsap';

registerGsap();

export function About() {
  const photosRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const photos = photosRef.current?.querySelectorAll('.about-photo');
      if (!photos?.length) return;

      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        photos.forEach((photo, i) => {
          gsap.fromTo(
            photo,
            { y: i === 0 ? 40 : 24 },
            {
              y: i === 0 ? -24 : -12,
              ease: 'none',
              scrollTrigger: {
                trigger: photosRef.current,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: photosRef }
  );

  return (
    <section id="about" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        {/* Section header */}
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /À propos
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">
              Yaoundé · Cameroun
            </span>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10">
          {/* Photos */}
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal>
              <div ref={photosRef} className="relative">
                <div className="img-zoom rounded-2xl overflow-hidden border border-line mb-4 aspect-[4/5] frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/daniel-portrait.jpeg"
                    alt="Daniel Beni Mpodol Welisan"
                    className="about-photo w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="img-zoom rounded-2xl overflow-hidden border border-line aspect-[16/10] frame">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/daniel-desk.jpeg"
                    alt="Daniel Beni au travail"
                    className="about-photo w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Narrative + Story + Stats + Skills */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <Reveal delay={80}>
              <h3 className="text-2xl md:text-4xl font-display font-bold mb-6 leading-tight">
                {profile.summary}
              </h3>
            </Reveal>

            <Reveal delay={160}>
              <p className="text-base text-muted leading-relaxed mb-8 max-w-lg">
                {profile.bio}
              </p>
            </Reveal>

            {/* What I offer */}
            <Reveal delay={220}>
              <div className="bg-ink text-white rounded-2xl p-6 mb-8 max-w-lg">
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/50 mb-3">
                  Ce que je propose
                </p>
                <p className="text-base leading-relaxed font-medium">
                  {profile.whatIOffer}
                </p>
              </div>
            </Reveal>

            {/* Timeline / Story */}
            <div className="space-y-4 mb-8">
              {profile.aboutStory.map((item, i) => (
                <Reveal key={item.year} delay={280 + i * 80}>
                  <div className="flex gap-4 group">
                    <div className="flex flex-col items-center pt-1">
                      <span className="font-mono text-xs font-bold text-accent whitespace-nowrap">
                        {item.year}
                      </span>
                      <div className="w-px h-full bg-line mt-2 group-hover:bg-accent/30 transition-colors duration-500" />
                    </div>
                    <div className="pb-4">
                      <h4 className="text-sm font-bold mb-1">{item.title}</h4>
                      <p className="text-sm text-muted leading-relaxed">{item.text}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>

            {/* Stats */}
            <Reveal delay={520}>
              <div className="border-t border-line pt-6">
                <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
                  En bref
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {profile.stats.map((stat) => (
                    <div key={stat.label} className="group">
                      <div className="text-2xl md:text-3xl font-display font-bold text-ink group-hover:text-accent transition-colors duration-300">
                        {stat.value}
                      </div>
                      <div className="text-xs text-muted mt-1">{stat.label}</div>
                      <div className="text-[10px] font-mono text-muted/60 mt-0.5">{stat.project}</div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Skills */}
            <Reveal delay={600}>
              <div className="border-t border-line pt-6 mt-2">
                <div className="font-mono text-[10px] text-muted tracking-widest uppercase mb-4">
                  Compétences clés
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {profile.skills.map((skill) => (
                    <div key={skill.label}>
                      <p className="font-mono text-[10px] text-accent uppercase tracking-wider mb-2">
                        {skill.label}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {skill.items.map((item) => (
                          <span
                            key={item}
                            className="font-mono text-[10px] text-ink/80 uppercase tracking-wider border border-line px-2 py-1 rounded"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            {/* Current focus */}
            <Reveal delay={680}>
              <div className="border-t border-line pt-6 mt-2">
                <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                  Focus actuel
                </div>
                <ul className="space-y-2">
                  {profile.currentFocus.map((focus) => (
                    <li
                      key={focus}
                      className="flex items-center gap-3 text-sm text-ink/80"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
                      {focus}
                    </li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-3">
                  <a
                    href={profile.cvUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="btn-dark text-sm"
                    data-cursor="CV"
                  >
                    Consulter le CV
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                      <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </a>
                  <a
                    href={profile.cvUrl}
                    download="CV-Daniel-Beni.pdf"
                    className="pill text-sm"
                  >
                    Télécharger le PDF
                  </a>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
