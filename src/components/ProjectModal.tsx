'use client';

import { useEffect } from 'react';
import type { ProjectItem } from '@/content/projects';
import { getUi } from '@/lib/locale';

type Props = {
  project: ProjectItem | null;
  onClose: () => void;
};

export function ProjectModal({ project, onClose }: Props) {
  const ui = getUi();

  useEffect(() => {
    if (!project) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    // Pause background CSS animations (marquee) while the dialog is open.
    document.documentElement.dataset.modal = 'open';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      delete document.documentElement.dataset.modal;
      document.removeEventListener('keydown', onKey);
    };
  }, [project, onClose]);

  if (!project) return null;

  const titleId = `project-${project.id}-title`;

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-ink/80 p-3 md:p-6"
      style={{ animation: 'fadeIn 0.25s ease-out both' }}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby={titleId}
        className="relative grid max-h-[90vh] w-full max-w-5xl grid-cols-1 overflow-y-auto rounded-2xl border border-line bg-paper md:grid-cols-12"
        style={{ animation: 'fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <button
          type="button"
          onClick={onClose}
          aria-label={ui.close}
          autoFocus
          className="absolute right-4 top-4 z-10 grid size-10 place-items-center rounded-full border border-line bg-paper text-lg transition-colors hover:bg-ink hover:text-white"
        >
          ✕
        </button>

        <div className="relative aspect-[16/10] overflow-hidden bg-ink md:col-span-6 md:aspect-auto md:min-h-[520px]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src={project.image} alt={project.title} className="h-full w-full object-cover" decoding="async" />
          <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-black/50 to-transparent md:hidden" />
        </div>

        <div className="flex flex-col p-6 md:col-span-6 md:p-10">
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-white">
              {project.category === 'real' ? ui.real : ui.github}
            </span>
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted">
              {project.year}
            </span>
          </div>

          <h2 id={titleId} className="font-display text-3xl font-bold leading-tight md:text-4xl">
            {project.title}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">{project.subtitle}</p>

          <p className="mt-6 text-base leading-relaxed text-ink/80">{project.longDescription}</p>

          {project.outcomes && (
            <div className="mt-6">
              <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">{ui.outcomes}</h3>
              <ul className="space-y-2">
                {project.outcomes.map((o) => (
                  <li key={o} className="flex items-start gap-2 text-sm text-ink/80">
                    <span className="mt-0.5 text-xs text-accent">▸</span>
                    {o}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-6">
            <h3 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-muted">{ui.stack}</h3>
            <ul className="flex flex-wrap gap-1.5">
              {project.tags.map((tag) => (
                <li key={tag} className="rounded-full border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink/70">
                  {tag}
                </li>
              ))}
            </ul>
          </div>

          {(project.link || project.github) && (
            <div className="mt-auto flex flex-wrap gap-3 pt-8">
              {project.link && (
                <a href={project.link} target="_blank" rel="noreferrer" className="btn-dark text-sm">
                  {ui.openProject} ↗
                </a>
              )}
              {project.github && (
                <a href={project.github} target="_blank" rel="noreferrer" className="pill text-sm">
                  {ui.code} ↗
                </a>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
