import { useSyncExternalStore } from 'react';
import { uiEn, uiFr } from '@/content/en';

export type Locale = 'fr' | 'en';

let locale: Locale = 'en';
const listeners = new Set<() => void>();

export function getLocale(): Locale {
  return locale;
}

export function setLocale(next: Locale) {
  locale = next;
  if (typeof document !== 'undefined') {
    document.documentElement.lang = next;
    localStorage.setItem('locale-v2', next);
  }
  listeners.forEach((fn) => fn());
}

export function subscribeLocale(fn: () => void) {
  listeners.add(fn);
  return () => {
    listeners.delete(fn);
  };
}

export function initLocale() {
  if (typeof window === 'undefined') return;
  const saved = localStorage.getItem('locale-v2');
  locale = saved === 'fr' ? 'fr' : 'en';
  document.documentElement.lang = locale;
  listeners.forEach((fn) => fn());
}

export function pick<T>(fr: T, en: T): T {
  return locale === 'en' ? en : fr;
}

export function getUi() {
  return locale === 'en' ? uiEn : uiFr;
}

export function useLocale() {
  return useSyncExternalStore(subscribeLocale, getLocale, () => 'en' as Locale);
}
