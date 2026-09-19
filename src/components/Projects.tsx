'use client';

import { useRef, useState } from 'react';
import { projects, type ProjectItem } from '@/content/projects';
import { Reveal } from '@/components/Reveal';
import { gsap, registerGsap, useGSAP } from '@/lib/gsap';

registerGsap();

const filters = [
  { label: 'Tous', value: 'all' },
  { label: 'Produits livrés', value: 'real' },
  { label: 'GitHub', value: 'github' },
];

function ProjectCard({ project }: { project: ProjectItem }) {
  const cardRef = useRef<HTMLDivElement>(null);

  useGSAP(
    (_, contextSafe) => {
      const card = cardRef.current;
      if (!card || !contextSafe) return;
      const image = card.querySelector('img');
      if (!image) return;

      const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
      if (reduce) return;

      const onEnter = contextSafe(() => {
        gsap.to(card, { y: -8, duration: 0.45, ease: 'power3.out' });
        gsap.to(image, { scale: 1.08, duration: 0.7, ease: 'power3.out' });
      });
      const onLeave = contextSafe(() => {
        gsap.to(card, { y: 0, duration: 0.45, ease: 'power3.out' });
        gsap.to(image, { scale: 1, duration: 0.7, ease: 'power3.out' });
      });

      card.addEventListener('mouseenter', onEnter);
      card.addEventListener('mouseleave', onLeave);
      return () => {
        card.removeEventListener('mouseenter', onEnter);
        card.removeEventListener('mouseleave', onLeave);
      };
    },
    { scope: cardRef }
  );

  return (
    <div
      ref={cardRef}
      className="group border border-line rounded-2xl overflow-hidden bg-paper hover:border-ink/20 h-full flex flex-col"
      data-cursor="Voir"
    >
      {/* Cover with real image */}
      <div className="aspect-[16/10] relative overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
        <div className="absolute top-3 left-3 z-10">
          <span className="bg-white/90 backdrop-blur-sm text-ink text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full">
            {project.category === 'real' ? 'Produit livré' : 'GitHub'}
          </span>
        </div>
        <div className="absolute top-3 right-3 z-10">
          <span className="bg-ink/80 backdrop-blur-sm text-white text-[10px] font-mono uppercase tracking-wider px-2 py-1 rounded-full">
            {project.year}
          </span>
        </div>
        <div className="absolute bottom-3 left-3 z-10">
          <span className="text-white font-display text-lg font-bold tracking-tight drop-shadow-lg">
            {project.title}
          </span>
          <p className="text-white/70 text-[10px] font-mono uppercase tracking-wider mt-0.5">
            {project.subtitle}
          </p>
        </div>
        <div className="absolute bottom-3 right-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <span className="grid size-8 place-items-center rounded-full bg-white/90 backdrop-blur-sm">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="size-4 text-ink">
              <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex flex-col flex-1">
        <h3 className="text-lg font-bold mb-2 group-hover:text-accent transition-colors duration-300">
          {project.title}
        </h3>
        <p className="text-sm text-muted leading-relaxed mb-4 flex-1">{project.description}</p>

        {/* Outcomes for real projects */}
        {project.outcomes && (
          <ul className="space-y-1.5 mb-4">
            {project.outcomes.map((outcome) => (
              <li key={outcome} className="flex items-start gap-2 text-xs text-ink/70">
                <span className="text-accent mt-0.5 text-[10px]">▸</span>
                {outcome}
              </li>
            ))}
          </ul>
        )}

        <div className="flex flex-wrap gap-1.5 pt-3 border-t border-line">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="font-mono text-[10px] text-muted uppercase tracking-wider"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Links */}
        <div className="flex gap-3 mt-4">
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-muted hover:text-ink transition-colors link-underline uppercase tracking-wider"
            >
              Code ↗
            </a>
          )}
          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noreferrer"
              className="text-xs font-mono text-accent hover:text-ink transition-colors link-underline uppercase tracking-wider"
            >
              Voir le projet ↗
            </a>
          )}
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
    <section id="projects" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /Projets choisis
            </h2>
            <span className="font-mono text-xs text-muted">
              {projects.length} projets · CV + GitHub
            </span>
          </div>
        </Reveal>

        {/* Intro text */}
        <Reveal delay={80}>
          <p className="text-2xl md:text-4xl font-display font-bold max-w-3xl mb-10 md:mb-16 leading-tight">
            Huit projets choisis.
            <br />
            <span className="text-accent">Lead fullstack sur chacun d&apos;eux.</span>
          </p>
        </Reveal>

        {/* Filters */}
        <Reveal delay={120}>
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
