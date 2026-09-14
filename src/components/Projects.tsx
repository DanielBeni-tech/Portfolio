'use client';

import { useState } from 'react';
import { projects, type ProjectItem } from '@/content/projects';
import { Reveal } from '@/components/Reveal';

const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Projets réels', value: 'real' },
  { label: 'Explorations', value: 'experiment' },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  return (
    <div className="group border border-line rounded-2xl overflow-hidden bg-paper hover:border-ink/20 transition-all duration-500 h-full">
      {/* Cover */}
      <div className={`aspect-[16/10] ${project.cover} flex items-center justify-center relative overflow-hidden`}>
        <span className="font-display text-2xl font-bold text-white/80 tracking-tight">
          {project.title}
        </span>
        <div className="absolute top-3 left-3">
          <span className="bg-white/90 backdrop-blur-sm text-ink text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full">
            {project.category === 'real' ? 'Projet réel' : 'Exploration'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState('all');
  const filtered =
    filter === 'all' ? projects : projects.filter((p) => p.category === filter);

  return (
    <section id="projects" className="px-3 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-8">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /Projets choisis
            </h2>
            <span className="font-mono text-xs text-muted">
              Voir tout ({projects.length})
            </span>
          </div>
        </Reveal>

        {/* Filters */}
        <Reveal>
          <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((f) => (
              <button
                key={f.value}
                onClick={() => setFilter(f.value)}
                className={`pill text-sm transition-all ${
                  filter === f.value
                    ? 'bg-ink text-white border-ink'
                    : 'hover:border-ink/30'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </Reveal>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((project, i) => (
            <Reveal key={project.id} delay={i * 60}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
