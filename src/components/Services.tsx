'use client';

import { useRef } from 'react';
import { getServices } from '@/content/services';
import { Reveal } from '@/components/Reveal';
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

        gsap.utils.toArray<HTMLElement>('.offer-frame').forEach((frame) => {
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
      });

      return () => mm.revert();
    },
    { scope: rootRef, dependencies: [ui.servicesLead] }
  );

  return (
    <section id="services" ref={rootRef} className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="services-lead max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">
            {ui.servicesLead}
          </h2>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-3xl font-display text-2xl font-bold text-accent md:text-4xl">
            {ui.servicesAccent}
          </p>
        </Reveal>

        <div className="mt-12 space-y-6 md:mt-16">
          {items.map((item, i) => (
            <article key={item.id} className="grid grid-cols-1 items-stretch gap-4 md:grid-cols-12">
              <div className={`offer-frame overflow-hidden rounded-2xl border border-line md:col-span-6 ${i % 2 === 1 ? 'md:col-start-7' : ''}`}>
                <div className="img-zoom relative aspect-[16/10] md:aspect-[5/4]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={item.image} alt="" className="h-full w-full object-cover" loading="lazy" />
                </div>
              </div>
              <div
                className={`flex flex-col justify-center rounded-2xl border border-line bg-paper p-6 md:col-span-6 md:p-10 ${i % 2 === 1 ? 'md:col-start-1 md:row-start-1' : ''}`}
              >
                <h3 className="mb-3 font-display text-2xl font-bold md:text-3xl">{item.title}</h3>
                <p className="max-w-prose text-base leading-relaxed text-muted">{item.description}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
