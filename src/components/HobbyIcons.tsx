'use client';

import type { ReactNode } from 'react';

const ICONS: Record<string, ReactNode> = {
  chess: (
    <>
      <path d="M8 21h8" />
      <path d="M9.5 17.5h5" />
      <path d="M12 4.5a3.3 3.3 0 0 1 3.3 3.3c0 1.3-.6 2.1-1.1 3-.5.9-.9 1.9-.9 3.2v.5h-2.6v-.5c0-1.3-.4-2.3-.9-3.2-.5-.9-1.1-1.7-1.1-3A3.3 3.3 0 0 1 12 4.5Z" />
    </>
  ),
  football: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7.6l4.2 3-1.6 4.9H9.4l-1.6-4.9z" />
      <path d="M12 3.2v4.4M20.4 9l-4.2 1.6M17.6 19.6l-3-3.9M6.4 19.6l3-3.9M3.6 9l4.2 1.6" />
    </>
  ),
  scrabble: (
    <>
      <rect x="3.5" y="3.5" width="17" height="17" rx="3" />
      <path d="M15.6 8.6c-.7-.7-2.1-1.1-3.6-1.1-2 0-3.6 1-3.6 2.4 0 1.5 1.7 2 3.6 2.3 1.9.3 3.6.8 3.6 2.3 0 1.4-1.6 2.4-3.6 2.4-1.5 0-2.9-.4-3.6-1.1" />
    </>
  ),
  games: (
    <>
      <path d="M7.5 7.5h9a4.6 4.6 0 0 1 4.5 5.6l-.7 3.3a2.5 2.5 0 0 1-4.4 1.1l-1.5-1.9H9.6l-1.5 1.9a2.5 2.5 0 0 1-4.4-1.1l-.7-3.3A4.6 4.6 0 0 1 7.5 7.5Z" />
      <path d="M8.3 10.6v3M6.8 12.1h3" />
      <circle cx="15.6" cy="11.3" r=".6" fill="currentColor" stroke="none" />
      <circle cx="17.4" cy="13" r=".6" fill="currentColor" stroke="none" />
    </>
  ),
  cooking: (
    <>
      <path d="M5 11.5h14V17a3 3 0 0 1-3 3H8a3 3 0 0 1-3-3z" />
      <path d="M3 11.5h18" />
      <path d="M9.5 8c0-1.2.9-1.6.9-2.7M13.6 8c0-1.2.9-1.6.9-2.7" />
    </>
  ),
  events: (
    <>
      <rect x="9" y="3" width="6" height="10" rx="3" />
      <path d="M6 11a6 6 0 0 0 12 0" />
      <path d="M12 17v4M9 21h6" />
    </>
  ),
};

/** Icônes SVG des loisirs (hors code) — trait fin, couleur héritée. */
export function HobbyIcon({ id, className }: { id: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      {ICONS[id] ?? ICONS.chess}
    </svg>
  );
}
