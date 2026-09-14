'use client';

import { services } from '@/content/services';
import { Reveal } from '@/components/Reveal';

const icons: Record<string, string> = {
  ai: 'M12 2a3 3 0 0 1 3 3 3 3 0 0 1 3 3 3 3 0 0 1-3 3 3 3 0 0 1-3 3 3 3 0 0 1-3-3 3 3 0 0 1-3-3 3 3 0 0 1 3-3 3 3 0 0 1 3-3Z',
  code: 'M8 6 2 12l6 6M16 6l6 6-6 6',
  data: 'M4 7h16M4 12h16M4 17h10',
  community: 'M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2M9 11a4 4 0 1 0 0-8 4 4 0 0 0 0 8ZM23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75',
};

export function Services() {
  return (
    <section id="services" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /Services
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">
              Ce que je fais
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-2xl md:text-4xl font-display font-bold max-w-3xl mb-10 md:mb-16 leading-tight">
            Quatre domaines.
            <br />
            <span className="text-accent">Une seule approche : construire.</span>
          </p>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <div
                className="border border-line rounded-2xl p-6 bg-paper card-lift hover:border-ink/20 h-full group"
                data-cursor=""
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center group-hover:bg-accent/10 transition-colors duration-500">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={1.8}
                      className="size-6 text-ink group-hover:text-accent transition-colors duration-500"
                    >
                      <path d={icons[service.icon]} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span className="font-mono text-xs text-muted/50">0{i + 1}</span>
                </div>
                <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
                  {service.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
                <div className="mt-4 pt-4 border-t border-line">
                  <span className="font-mono text-[10px] text-muted uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                    En savoir plus →
                  </span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
