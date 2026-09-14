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
    <section id="services" className="px-3 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted mb-8">
            /Services
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((service, i) => (
            <Reveal key={service.id} delay={i * 80}>
              <div className="border border-line rounded-2xl p-6 bg-paper hover:border-ink/20 hover:shadow-lg transition-all duration-500 h-full group">
                <div className="w-12 h-12 rounded-xl bg-ink/5 flex items-center justify-center mb-4 group-hover:bg-accent/10 transition-colors">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth={1.8}
                    className="size-6 text-ink group-hover:text-accent transition-colors"
                  >
                    <path d={icons[service.icon]} strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold mb-2">{service.title}</h3>
                <p className="text-sm text-muted leading-relaxed">
                  {service.description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
