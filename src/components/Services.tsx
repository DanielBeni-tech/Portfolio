'use client';

import { useRef } from 'react';
import { getServices } from '@/content/services';
import { Reveal } from '@/components/Reveal';
import { TechMarquee } from '@/components/TechMarquee';
import { getUi, useLocale } from '@/lib/locale';
import { gsap, registerGsap, SplitText, useGSAP } from '@/lib/gsap';

registerGsap();

export function Services() {
  useLocale();
  const ui = getUi();
  const items = getServices();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add('(prefers-reduced-motion: no-preference)', () => {
        const title = rootRef.current?.querySelector('.services-lead');
        if (title) {
          const split = SplitText.create(title, { type: 'words', mask: 'lines', aria: 'auto' });
          gsap.from(split.words, {
            yPercent: 110,
            stagger: 0.04,
            duration: 0.85,
            ease: 'power3.out',
            scrollTrigger: { trigger: title, start: 'top 82%' },
          });
        }

        // Cards are dealt in from the left, numbers land a beat later.
        const grid = rootRef.current?.querySelector('.skill-grid');
        if (grid) {
          gsap.from('.skill-card', {
            x: -40,
            opacity: 0,
            stagger: 0.1,
            duration: 0.8,
            ease: 'power3.out',
            scrollTrigger: { trigger: grid, start: 'top 80%' },
          });
          gsap.from('.skill-num', {
            yPercent: 60,
            opacity: 0,
            stagger: 0.1,
            duration: 0.7,
            delay: 0.15,
            ease: 'power3.out',
            scrollTrigger: { trigger: grid, start: 'top 80%' },
          });
        }
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [ui.servicesLead] }
  );

  return (
    <section id="services" ref={rootRef} className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">/{ui.skills}</h2>
            <span className="hidden font-mono text-xs text-muted md:block">{ui.stacks}</span>
          </div>
        </Reveal>

        <Reveal>
          <p className="services-lead max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">
            {ui.servicesLead}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-3xl font-display text-2xl font-bold text-accent md:text-4xl">
            {ui.servicesAccent}
          </p>
        </Reveal>

        <div className="mt-12 md:mt-16">
          <TechMarquee />
        </div>

        <div className="skill-grid mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <article
              key={item.id}
              className="skill-card group relative flex min-h-[380px] flex-col overflow-hidden rounded-2xl border border-line bg-paper p-6 md:p-8"
            >
              <span
                aria-hidden
                className="absolute inset-0 origin-bottom scale-y-0 bg-ink transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-y-100"
              />
              <div className="relative flex h-full flex-col">
                <span className="skill-num font-display text-7xl font-bold leading-none text-transparent [-webkit-text-stroke:1px_theme(colors.ink)] transition-colors duration-500 group-hover:[-webkit-text-stroke:1px_theme(colors.accent)] md:text-8xl">
                  0{i + 1}
                </span>
                <h3 className="mt-auto pt-10 font-display text-2xl font-bold transition-colors duration-500 group-hover:text-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted transition-colors duration-500 group-hover:text-white/70">
                  {item.description}
                </p>
                <ul className="mt-5 flex flex-wrap gap-1.5">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="rounded-full border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink/70 transition-colors duration-500 group-hover:border-white/20 group-hover:text-white/80"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
