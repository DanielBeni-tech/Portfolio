'use client';

import { communityActivities } from '@/content/community';
import { Reveal } from '@/components/Reveal';

export function Community() {
  return (
    <section id="community" className="py-24 lg:py-40 border-t border-line bg-surface">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 lg:mb-24">
            <div className="font-mono text-xs text-muted tracking-widest uppercase">
              04 — Community
            </div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase hidden sm:block">
              Ecosystem Building
            </div>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight max-w-3xl mb-16 lg:mb-24 leading-tight">
            I don&apos;t only build software.
            <br />
            <span className="text-blue">I build people around technology.</span>
          </h2>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {communityActivities.map((act, i) => (
            <Reveal key={act.id} delay={i * 100}>
              <div className="border border-line rounded-xl p-8 lg:p-10 h-full hover:border-blue/30 transition-colors duration-500">
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-xl lg:text-2xl font-semibold mb-1">
                      {act.organization}
                    </h3>
                    <p className="font-mono text-xs text-blue tracking-widest uppercase">
                      {act.role}
                    </p>
                  </div>
                  <span className="font-mono text-xs text-muted tracking-widest">
                    {act.year}
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-6">
                  {act.description}
                </p>
                <ul className="space-y-2">
                  {act.activities.map((activity) => (
                    <li
                      key={activity}
                      className="flex items-start gap-3 text-sm text-text/80"
                    >
                      <span className="text-blue mt-1.5 text-xs">▸</span>
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
