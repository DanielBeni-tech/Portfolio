'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/content/profile';
import { getProjects } from '@/content/projects';
import { getLocale, getUi, setLocale, useLocale } from '@/lib/locale';

function navItems() {
  const ui = getUi();
  return [
    { label: ui.about, href: '#about' },
    { label: ui.skills, href: '#services' },
    { label: ui.path, href: '#experience' },
    { label: ui.projects, href: '#projects', count: getProjects().length },
    { label: ui.competitions, href: '#competitions' },
    { label: ui.engagement, href: '#community' },
    { label: ui.life, href: '#life' },
    { label: ui.contact, href: '#contact' },
  ];
}

export function Navbar() {
  useLocale();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const ui = getUi();
  const items = navItems();
  const locale = getLocale();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ${
          scrolled ? 'bg-white/80 backdrop-blur-md border-b border-line' : ''
        }`}
      >
        <nav className="max-w-container mx-auto px-4 md:px-6 h-14 md:h-16 flex items-center justify-between">
          <a href="#top" className="pill text-xs">
            <span className="status-dot" />
            <span className="hidden sm:inline">{ui.available}</span>
            <span className="sm:hidden">{ui.availableShort}</span>
          </a>

          <div className="hidden lg:flex items-center gap-4 overflow-x-auto">
            {items.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs text-ink/70 hover:text-ink transition-colors"
              >
                {item.label}
                {item.count && <span className="text-muted"> [{item.count}]</span>}
              </a>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-3">
            <button
              type="button"
              className="pill text-xs"
              onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
              aria-label="FR / EN"
            >
              {locale === 'fr' ? 'EN' : 'FR'}
            </button>
            <a
              href={profile.cvUrl}
              target="_blank"
              rel="noreferrer"
              className="pill text-xs"
              data-cursor="CV"
            >
              CV
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="btn-dark text-xs md:text-sm"
              data-cursor={ui.write}
            >
              {ui.talk}
            </a>
          </div>

          <button
            className="md:hidden font-mono text-sm font-semibold"
            onClick={() => setMenuOpen(true)}
          >
            {ui.menu}
          </button>
        </nav>
      </header>

      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-white flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-6 right-6 text-2xl"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          <button
            type="button"
            className="pill text-sm"
            onClick={() => setLocale(locale === 'fr' ? 'en' : 'fr')}
          >
            {locale === 'fr' ? 'EN' : 'FR'}
          </button>
          {items.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-2xl font-bold"
              style={{ animation: `fadeUp 0.4s cubic-bezier(0.16,1,0.3,1) ${i * 0.05}s both` }}
            >
              {item.label}
            </a>
          ))}
          <a
            href={profile.cvUrl}
            target="_blank"
            rel="noreferrer"
            className="pill mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {ui.seeCv}
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-dark mt-2"
            onClick={() => setMenuOpen(false)}
          >
            {ui.talk}
          </a>
        </div>
      )}
    </>
  );
}
