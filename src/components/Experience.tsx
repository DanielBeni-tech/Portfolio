'use client';

import { experiences } from '@/content/experience';
import { Reveal } from '@/components/Reveal';

export function Experience() {
  return (
    <section id="experience" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /Expérience
            </h2>
            <span className="font-mono text-xs text-muted">
              {experiences.length}+ expériences
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-2xl md:text-4xl font-display font-bold max-w-3xl mb-10 md:mb-16 leading-tight">
            Mon parcours, du premier produit
            <br />
            <span className="text-accent">aux systèmes IA en production.</span>
          </p>
        </Reveal>

        <div className="rounded-2xl overflow-hidden border border-line bg-paper">
          {experiences.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 80}>
              <div
                className={`p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 group hover:bg-ink/[0.02] transition-colors duration-300 ${
                  i > 0 ? 'border-t border-line' : ''
                }`}
              >
                <div className="md:col-span-3">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                    {exp.period}
                  </span>
                </div>
                <div className="md:col-span-9">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-bold">{exp.role}</h3>
                    <span className="font-mono text-[10px] text-muted/40">0{i + 1}</span>
                  </div>
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
