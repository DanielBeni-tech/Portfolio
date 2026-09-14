'use client';

import { projects } from '@/content/projects';
import { Reveal } from '@/components/Reveal';

const statusLabels: Record<string, string> = {
  shipped: 'Shipped',
  building: 'Building',
  experimental: 'Experimental',
  paused: 'Paused',
};

export function SelectedWork() {
  return (
    <section id="work" className="py-24 lg:py-40 border-t border-line">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        {/* Section header */}
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 lg:mb-24">
            <div className="font-mono text-xs text-muted tracking-widest uppercase">
              01 — Selected Work
            </div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase hidden sm:block">
              {projects.length} Projects
            </div>
          </div>
        </Reveal>

        {/* Project list */}
        <div className="space-y-4 lg:space-y-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 100}>
              <a
                href="#"
                data-cursor="View"
                className="group block relative border-t border-line last:border-b py-8 lg:py-12 transition-colors duration-500 hover:border-blue/40"
              >
                <div className="grid grid-cols-12 gap-4 items-center">
                  {/* Number */}
                  <div className="col-span-2 lg:col-span-1">
                    <span className="font-mono text-xs text-muted tracking-widest">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Title block */}
                  <div className="col-span-10 lg:col-span-5">
                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-text group-hover:text-blue transition-colors duration-500">
                      {project.title}
                    </h3>
                    <p className="text-sm text-muted mt-1">{project.subtitle}</p>
                  </div>

                  {/* Categories */}
                  <div className="hidden lg:flex col-span-3 flex-wrap gap-2">
                    {project.categories.map((cat) => (
                      <span
                        key={cat}
                        className="font-mono text-[10px] text-muted tracking-widest uppercase border border-line px-2 py-1 rounded"
                      >
                        {cat}
                      </span>
                    ))}
                  </div>

                  {/* Status + year */}
                  <div className="col-span-12 lg:col-span-3 flex items-center justify-between lg:justify-end gap-4 mt-2 lg:mt-0">
                    <span
                      className={`status-badge status-${project.status}`}
                    >
                      <span className="status-dot" />
                      {statusLabels[project.status]}
                    </span>
                    <span className="font-mono text-xs text-muted tracking-widest">
                      {project.year}
                    </span>
                  </div>
                </div>

                {/* Hover preview */}
                <div
                  className={`absolute right-6 lg:right-10 top-1/2 -translate-y-1/2 w-32 h-20 lg:w-48 lg:h-32 rounded-lg cover-${project.cover.split('-')[1]} opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-500 pointer-events-none hidden lg:block`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-mono text-xs text-white/40 tracking-widest uppercase">
                      {project.title}
                    </span>
                  </div>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
