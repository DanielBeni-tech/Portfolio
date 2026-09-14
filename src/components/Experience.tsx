'use client';

import { experiences } from '@/content/experience';
import { Reveal } from '@/components/Reveal';

export function Experience() {
  return (
    <section id="experience" className="px-3 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /Expérience
            </h2>
            <span className="font-mono text-xs text-muted">
              {experiences.length}+ expériences
            </span>
          </div>
        </Reveal>

        <div className="rounded-2xl overflow-hidden border border-line bg-paper">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 80}>
              <div
                className={`p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 ${
                  i > 0 ? 'border-t border-line' : ''
                } hover:bg-ink/[0.02] transition-colors duration-300`}
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <h3 className="text-lg font-bold mb-1">{exp.role}</h3>
                  <p className="text-sm text-accent font-semibold mb-2">
                    {exp.company}
                  </p>
                  <p className="text-sm text-muted leading-relaxed max-w-2xl">
                    {exp.description}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
