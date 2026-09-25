'use client';

import { useId } from 'react';
import type { Locale } from '@/lib/locale';

export function FlagFr({ className = '' }: { className?: string }) {
  const clipId = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="8" height="24" fill="#002395" />
        <rect x="8" width="8" height="24" fill="#fff" />
        <rect x="16" width="8" height="24" fill="#ED2939" />
      </g>
      <circle cx="12" cy="12" r="11.5" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    </svg>
  );
}

export function FlagEn({ className = '' }: { className?: string }) {
  const clipId = useId();
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      <defs>
        <clipPath id={clipId}>
          <circle cx="12" cy="12" r="12" />
        </clipPath>
      </defs>
      <g clipPath={`url(#${clipId})`}>
        <rect width="24" height="24" fill="#012169" />
        <path d="M0 0 24 24M24 0 0 24" stroke="#fff" strokeWidth="4.8" />
        <path d="M0 0 24 24M24 0 0 24" stroke="#C8102E" strokeWidth="2.4" />
        <path d="M12 0v24M0 12h24" stroke="#fff" strokeWidth="8" />
        <path d="M12 0v24M0 12h24" stroke="#C8102E" strokeWidth="4.8" />
      </g>
      <circle cx="12" cy="12" r="11.5" fill="none" stroke="rgba(0,0,0,0.15)" strokeWidth="1" />
    </svg>
  );
}

/** Paire de boutons FR / EN avec drapeaux, état actif inclus. */
export function LocaleFlags({
  locale,
  onChange,
}: {
  locale: Locale;
  onChange: (next: Locale) => void;
}) {
  const base =
    'flex items-center gap-1.5 rounded-full px-2 py-1 font-mono text-[11px] transition-colors';
  const active = 'bg-ink text-white';
  const idle = 'text-ink/60 hover:text-ink';
  return (
    <div className="flex items-center gap-0.5 rounded-full border border-line p-1">
      <button
        type="button"
        onClick={() => onChange('fr')}
        aria-pressed={locale === 'fr'}
        aria-label="Français"
        className={`${base} ${locale === 'fr' ? active : idle}`}
      >
        <FlagFr className="size-4" />
        FR
      </button>
      <button
        type="button"
        onClick={() => onChange('en')}
        aria-pressed={locale === 'en'}
        aria-label="English"
        className={`${base} ${locale === 'en' ? active : idle}`}
      >
        <FlagEn className="size-4" />
        EN
      </button>
    </div>
  );
}
