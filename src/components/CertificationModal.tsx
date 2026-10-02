'use client';

import { useEffect, useState } from 'react';
import type { CertificationItem } from '@/content/certifications';
import { formatStatus, getUi } from '@/lib/locale';

type Props = {
  certification: CertificationItem | null;
  onClose: () => void;
};

export function CertificationModal({ certification, onClose }: Props) {
  const ui = getUi();
  const [zoom, setZoom] = useState(false);

  // Nouvelle carte : on repart sans zoom.
  useEffect(() => {
    setZoom(false);
  }, [certification]);

  useEffect(() => {
    if (!certification) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        // Échap ferme d'abord le plein écran, puis la modale.
        if (zoom) setZoom(false);
        else onClose();
      }
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
  }, [certification, onClose, zoom]);

  if (!certification) return null;

  const titleId = `cert-${certification.id}-title`;
  const statusLabel = formatStatus(certification.status);

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
        className="relative grid max-h-[92vh] w-full max-w-6xl grid-cols-1 overflow-y-auto rounded-2xl border border-line bg-paper md:grid-cols-12"
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
          <button
            type="button"
            onClick={() => setZoom(true)}
            aria-label={ui.zoomCert}
            className="group relative block w-full cursor-zoom-in overflow-hidden bg-ink/5 md:col-span-6"
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={certification.image}
              alt={certification.title}
              className="h-full w-full object-contain"
              decoding="async"
            />
            <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-[11px] uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
              {ui.zoomCert}
            </span>
          </button>
        ) : null}

        <div
          className={`flex flex-col p-6 md:p-10 ${certification.image ? 'md:col-span-6' : 'md:col-span-12'}`}
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

          {certification.url ? (
            <a
              href={certification.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-4 py-2 font-mono text-xs uppercase tracking-wider text-white transition-opacity hover:opacity-80"
            >
              {ui.viewCert} · PDF ↗
            </a>
          ) : null}
        </div>
      </div>

      {/* Plein écran — clic ou Échap pour revenir à la modale. */}
      {zoom && certification.image ? (
        <div
          className="fixed inset-0 z-[400] flex flex-col items-center justify-center gap-3 bg-ink/95 p-4 md:p-8"
          style={{ animation: 'fadeIn 0.2s ease-out both' }}
          onClick={() => setZoom(false)}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={certification.image}
            alt={certification.title}
            className="max-h-[90vh] max-w-full object-contain"
          />
          <span className="font-mono text-[11px] uppercase tracking-wider text-white/60">
            {ui.close} · Échap
          </span>
        </div>
      ) : null}
    </div>
  );
}
