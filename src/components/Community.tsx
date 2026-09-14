'use client';

import { communityActivities } from '@/content/community';
import { Reveal } from '@/components/Reveal';

export function Community() {
  return (
    <section id="community" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /Communauté
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">
              Construire ensemble
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-2xl md:text-4xl font-display font-bold max-w-3xl mb-10 md:mb-16 leading-tight">
            Je ne construis pas seulement du logiciel.
            <br />
            <span className="text-accent">Je construis des gens autour de la technologie.</span>
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {communityActivities.map((act, i) => (
            <Reveal key={act.id} delay={i * 100}>
              <div
                className="border border-line rounded-2xl p-6 md:p-8 bg-paper card-lift hover:border-ink/20 h-full group"
                data-cursor=""
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1 group-hover:text-accent transition-colors duration-300">
                      {act.organization}
                    </h3>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider">
                      {act.role}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted whitespace-nowrap">{act.period}</span>
                </div>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  {act.description}
                </p>
                <ul className="space-y-2">
                  {act.activities.map((activity, j) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm text-ink/80"
                      style={{
                        animation: `fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) ${j * 0.08}s both`,
                      }}
                    >
                      <span className="text-accent mt-0.5 text-xs">▸</span>
                      {activity}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
