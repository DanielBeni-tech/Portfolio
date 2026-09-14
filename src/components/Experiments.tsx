'use client';

import { experiments } from '@/content/experiments';
import { Reveal } from '@/components/Reveal';

const statusLabels: Record<string, string> = {
  shipped: 'Shipped',
  building: 'Building',
  experimental: 'Experimental',
  paused: 'Paused',
};

export function Experiments() {
  return (
    <section id="experiments" className="py-24 lg:py-40 border-t border-line overflow-hidden">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 lg:mb-24">
            <div className="font-mono text-xs text-muted tracking-widest uppercase">
              03 — Experiments
            </div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase hidden sm:block">
              Active Exploration
            </div>
          </div>
        </Reveal>

        <Reveal>
          <p className="text-xl lg:text-2xl text-muted max-w-2xl mb-16 leading-relaxed">
            Things I build to learn, not to ship. A live archive of what I am
            exploring right now.
          </p>
        </Reveal>

        {/* Experiment cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {experiments.map((exp, i) => (
            <Reveal key={exp.id} delay={i * 60}>
              <div
                className="group border border-line rounded-xl p-6 lg:p-8 hover:border-blue/40 transition-all duration-500 h-full hover:bg-elevated cursor-default"
                data-cursor=""
              >
                <div className="flex items-start justify-between mb-4">
                  <span className="font-mono text-xs text-muted tracking-widest">
                    0{i + 1}
                  </span>
                  <span className={`status-badge status-${exp.status}`}>
                    <span className="status-dot" />
                    {statusLabels[exp.status]}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-blue transition-colors duration-300">
                  {exp.title}
                </h3>
                <p className="text-sm text-muted leading-relaxed mb-4">
                  {exp.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] text-muted tracking-widest uppercase"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
