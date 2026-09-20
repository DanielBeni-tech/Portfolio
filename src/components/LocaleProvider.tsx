'use client';

import { useEffect, type ReactNode } from 'react';
import { initLocale } from '@/lib/locale';

export function LocaleProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    initLocale();
  }, []);

  return children;
}
