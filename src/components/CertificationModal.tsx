'use client';

import { useEffect } from 'react';
import type { CertificationItem } from '@/content/certifications';
import { getLocale, getUi } from '@/lib/locale';
import { levelEn } from '@/content/en';

type Props = {
  certification: CertificationItem | null;
  onClose: () => void;
};

export function CertificationModal({ certification, onClose }: Props) {
  const ui = getUi();
  const locale = getLocale();

  useEffect(() => {
    if (!certification) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.dataset.modal = 'open';
    document.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = previous;
      delete document.documentElement.dataset.modal;
      document.removeEventListener('keydown', onKey);
    };
  }, [certification, onClose]);

  if (!certification) return null;

  const titleId = `cert-${certification.id}-title`;
  const statusLabel = certification.status
    ? locale === 'en'
      ? levelEn[certification.status] ?? certification.status
      : certification.status
    : undefined;

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
        className="relative grid max-h-[90vh] w-full max-w-4xl grid-cols-1 overflow-y-auto rounded-2xl border border-line bg-paper md:grid-cols-12"
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

        {certification.image ? (
          <div className="relative overflow-hidden bg-ink/5 md:col-span-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certification.image}
              alt={certification.title}
              className="h-full w-full object-contain"
              decoding="async"
            />
          </div>
        ) : null}

        <div
          className={`flex flex-col p-6 md:p-10 ${certification.image ? 'md:col-span-7' : 'md:col-span-12'}`}
        >
          <div className="mb-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-muted">
              {certification.period}
            </span>
            {statusLabel ? (
              <span className="rounded-full bg-ink px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-white">
                {statusLabel}
              </span>
            ) : null}
          </div>

          <h2 id={titleId} className="font-display text-2xl font-bold leading-tight md:text-3xl">
            {certification.title}
          </h2>
          <p className="mt-2 font-mono text-xs uppercase tracking-wider text-accent">
            {certification.institution}
          </p>

          <p className="mt-6 text-base leading-relaxed text-ink/80">{certification.description}</p>

          {certification.tags && certification.tags.length > 0 ? (
            <ul className="mt-6 flex flex-wrap gap-1.5">
              {certification.tags.map((tag) => (
                <li
                  key={tag}
                  className="rounded-full border border-line px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-ink/70"
                >
                  {tag}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}
