'use client';

import { useRef } from 'react';
import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';
import { getUi, useLocale } from '@/lib/locale';
import { gsap, registerGsap, useGSAP } from '@/lib/gsap';

registerGsap();

const stacks = [
  { name: 'Python', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'JavaScript', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
  { name: 'React', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'PostgreSQL', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'Docker', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Figma', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg' },
  { name: 'C++', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg' },
  { name: 'Arduino', src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/arduino/arduino-original.svg' },
];

export function About() {
  useLocale();
  const ui = getUi();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.utils.toArray<HTMLElement>('.path-frame').forEach((frame) => {
          gsap.fromTo(
            frame,
            { clipPath: 'inset(0 88% 0 0)' },
            {
              clipPath: 'inset(0 0% 0 0)',
              duration: 1.15,
              ease: 'power3.out',
              scrollTrigger: { trigger: frame, start: 'top 84%' },
            }
          );
        });

        gsap.from('.soft-panel', {
          clipPath: 'inset(12% 12% 12% 12%)',
          duration: 1,
          ease: 'power3.out',
          stagger: 0.12,
          scrollTrigger: { trigger: '.about-soft', start: 'top 80%' },
        });

        gsap.from('.stack-tile', {
          y: 18,
          filter: 'blur(6px)',
          stagger: { each: 0.04, from: 'start' },
          duration: 0.65,
          ease: 'power3.out',
          scrollTrigger: { trigger: '.about-stacks', start: 'top 82%' },
        });
      });

      return () => mm.revert();
    },
    { scope: rootRef }
  );

  return (
    <section id="about" ref={rootRef} className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">/{ui.about}</h2>
            <span className="hidden font-mono text-xs text-muted md:block">{profile.location}</span>
          </div>
        </Reveal>

        <div className="mb-16 grid grid-cols-1 gap-8 lg:mb-24 lg:grid-cols-12 lg:gap-10">
          <div className="lg:col-span-5">
            <Reveal>
              <div className="img-zoom frame aspect-[4/5] overflow-hidden rounded-2xl border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/daniel-portrait.jpeg"
                  alt="Daniel Beni Mpodol Welisan"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </Reveal>
          </div>

          <div className="flex flex-col justify-center lg:col-span-6 lg:col-start-7">
            <Reveal delay={80}>
              <h3 className="mb-6 font-display text-2xl font-bold leading-tight md:text-4xl">{profile.summary}</h3>
            </Reveal>
            <Reveal delay={140}>
              <p className="mb-8 max-w-lg text-base leading-relaxed text-muted">{profile.bio}</p>
            </Reveal>
            <Reveal delay={200}>
              <div className="max-w-lg rounded-2xl bg-ink p-6 text-white">
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-white/50">{ui.offer}</p>
                <p className="text-base font-medium leading-relaxed">{profile.whatIOffer}</p>
              </div>
            </Reveal>
          </div>
        </div>

        <div className="mb-16 space-y-6 md:mb-24">
          <Reveal>
            <h3 className="font-display text-3xl font-bold md:text-5xl">{ui.path}</h3>
          </Reveal>
          {profile.aboutStory.map((item, i) => (
            <article key={item.year} className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12">
              <div className={`path-frame overflow-hidden rounded-2xl border border-line md:col-span-6 ${i % 2 === 1 ? 'md:col-start-7' : ''}`}>
                <div className="img-zoom relative aspect-[16/10] md:aspect-[5/4]">
                  {item.image ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                  ) : (
                    <div className="h-full w-full bg-ink" />
                  )}
                  <span className="absolute left-4 top-4 rounded-full bg-ink/75 px-3 py-1 font-mono text-xs uppercase tracking-[0.18em] text-white">
                    {item.year}
                  </span>
                </div>
              </div>
              <div className={`flex flex-col justify-center rounded-2xl border border-line bg-paper p-6 md:col-span-6 md:p-10 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}>
                <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-accent">{item.year}</p>
                <h4 className="mb-3 font-display text-2xl font-bold md:text-3xl">{item.title}</h4>
                <p className="max-w-prose text-base leading-relaxed text-muted">{item.text}</p>
              </div>
            </article>
          ))}
        </div>

        <div className="mb-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 md:mb-24">
          {profile.stats.map((stat) => (
            <div key={stat.label} className="relative min-h-[220px] overflow-hidden rounded-2xl border border-line bg-ink text-white">
              {stat.image ? (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={stat.image} alt="" className="absolute inset-0 h-full w-full object-cover opacity-45" loading="lazy" />
              ) : null}
              <div className="relative flex h-full flex-col justify-end p-5">
                <p className="font-display text-5xl font-bold">{stat.value}</p>
                <p className="mt-2 text-sm text-white/85">{stat.label}</p>
                <p className="mt-1 font-mono text-xs text-white/60">{stat.project}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="about-soft mb-16 md:mb-24">
          <Reveal>
            <h3 className="mb-6 font-display text-3xl font-bold md:text-5xl">{ui.softSkills}</h3>
          </Reveal>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <div className="soft-panel relative min-h-[280px] overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/community/president-2026.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <p className="font-display text-2xl font-bold">{profile.softSkills[3]}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-white/70">{profile.softSkills[0]}</p>
              </div>
            </div>
            <div className="soft-panel relative min-h-[280px] overflow-hidden rounded-2xl border border-line">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src="/community/collab-club.jpg" alt="" className="absolute inset-0 h-full w-full object-cover" loading="lazy" />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
              <div className="relative flex h-full flex-col justify-end p-6 text-white">
                <p className="font-display text-2xl font-bold">{profile.softSkills[1]}</p>
                <p className="mt-1 font-mono text-xs uppercase tracking-[0.16em] text-white/70">{profile.softSkills[2]}</p>
              </div>
            </div>
          </div>
        </div>

        <div className="about-stacks mb-16 md:mb-24">
          <Reveal>
            <h3 className="mb-6 font-display text-3xl font-bold md:text-5xl">{ui.stacks}</h3>
          </Reveal>
          <div className="grid grid-cols-3 gap-3 sm:grid-cols-3 md:grid-cols-9">
            {stacks.map((tech) => (
              <div
                key={tech.name}
                className="stack-tile flex flex-col items-center gap-3 rounded-2xl border border-line bg-paper px-3 py-5"
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={tech.src} alt="" className="size-10" />
                <span className="text-center font-mono text-xs text-ink/80">{tech.name}</span>
              </div>
            ))}
          </div>
        </div>

        <Reveal>
          <div className="rounded-2xl border border-line bg-paper p-6 md:p-10">
            <h3 className="mb-4 font-display text-2xl font-bold md:text-3xl">{ui.focus}</h3>
            <ul className="space-y-3">
              {profile.currentFocus.map((focus) => (
                <li key={focus} className="flex items-center gap-3 text-sm text-ink/80 md:text-base">
                  <span className="size-1.5 shrink-0 rounded-full bg-accent" />
                  {focus}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="btn-dark text-sm" data-cursor="CV">
                {ui.readCv}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={profile.cvUrl} download="CV-Daniel-Beni.pdf" className="pill text-sm">
                {ui.downloadPdf}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
