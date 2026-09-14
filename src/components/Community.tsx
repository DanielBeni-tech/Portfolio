'use client';

import { communityActivities } from '@/content/community';
import { Reveal } from '@/components/Reveal';

export function Community() {
  return (
    <section id="community" className="px-3 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted mb-8">
            /Communauté
          </h2>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-2xl md:text-4xl font-display font-bold max-w-3xl mb-12 leading-tight">
            Je ne construis pas seulement du logiciel.
            <br />
            <span className="text-accent">
              Je construis des gens autour de la technologie.
            </span>
          </p>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {communityActivities.map((act, i) => (
            <Reveal key={act.id} delay={i * 100}>
              <div className="border border-line rounded-2xl p-6 md:p-8 bg-paper hover:border-ink/20 hover:shadow-lg transition-all duration-500 h-full">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{act.organization}</h3>
                    <p className="font-mono text-xs text-accent uppercase tracking-wider">
                      {act.role}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted">{act.period}</span>
                </div>
                <p className="text-muted leading-relaxed mb-4 text-sm">
                  {act.description}
                </p>
                <ul className="space-y-2">
                  {act.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-2 text-sm text-ink/80"
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
