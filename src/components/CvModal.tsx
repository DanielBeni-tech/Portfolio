'use client';

import { createContext, useCallback, useContext, useEffect, useState } from 'react';
import { getUi, useLocale } from '@/lib/locale';
import { LocaleFlags } from '@/components/Flags';

type CvLang = 'fr' | 'en';

const CV_FILES: Record<CvLang, { url: string; download: string }> = {
  fr: { url: '/CV-Daniel-Beni.pdf', download: 'CV-Daniel-Beni.pdf' },
  en: { url: '/CV-Daniel-Beni-EN.pdf', download: 'CV-Daniel-Beni-EN.pdf' },
};

const CvOpenContext = createContext<(lang?: CvLang) => void>(() => {});

/** Ouvre la modale CV, optionnellement directement dans une langue donnée. */
export function useCvModal() {
  return useContext(CvOpenContext);
}

export function CvProvider({ children }: { children: React.ReactNode }) {
  const [state, setState] = useState<{ open: boolean; lang: CvLang }>({ open: false, lang: 'en' });

  const openCv = useCallback((lang: CvLang = 'en') => setState({ open: true, lang }), []);
  const close = useCallback(() => setState((s) => ({ ...s, open: false })), []);
  const setLang = useCallback((lang: CvLang) => setState((s) => ({ ...s, lang })), []);

  return (
    <CvOpenContext.Provider value={openCv}>
      {children}
      {state.open && <CvModal lang={state.lang} onLang={setLang} onClose={close} />}
    </CvOpenContext.Provider>
  );
}

function CvModal({
  lang,
  onLang,
  onClose,
}: {
  lang: CvLang;
  onLang: (next: CvLang) => void;
  onClose: () => void;
}) {
  useLocale(); // subscribe: labels follow the site language
  const ui = getUi();
  const cv = CV_FILES[lang];

  useEffect(() => {
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
  }, [onClose]);

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
        aria-label={ui.cvTitle}
        className="flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-line bg-paper"
        style={{ animation: 'fadeUp 0.45s cubic-bezier(0.16,1,0.3,1) both' }}
      >
        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-3 md:px-6">
          <h2 className="font-display text-lg font-bold md:text-xl">{ui.cvTitle}</h2>
          <div className="flex items-center gap-2">
            <LocaleFlags locale={lang} onChange={onLang} />
            <button
              type="button"
              onClick={onClose}
              aria-label={ui.close}
              autoFocus
              className="grid size-9 place-items-center rounded-full border border-line bg-paper text-lg transition-colors hover:bg-ink hover:text-white"
            >
              ✕
            </button>
          </div>
        </div>

        <iframe src={cv.url} title={ui.cvTitle} className="h-[70vh] w-full flex-1 bg-white" />

        <div className="flex flex-wrap items-center justify-between gap-3 border-t border-line px-4 py-3 md:px-6">
          <a
            href={cv.url}
            target="_blank"
            rel="noreferrer"
            className="font-mono text-xs uppercase tracking-wider text-muted transition-colors hover:text-ink"
          >
            {ui.cvOpenTab} ↗
          </a>
          <a href={cv.url} download={cv.download} className="btn-dark text-sm">
            {ui.download} · {lang === 'en' ? 'EN' : 'FR'}
          </a>
        </div>
      </div>
    </div>
  );
}
