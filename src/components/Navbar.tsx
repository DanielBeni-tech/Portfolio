'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/content/profile';
import { projects } from '@/content/projects';
import { services } from '@/content/services';

const navItems = [
  { label: 'À propos', href: '#about' },
  { label: 'Projets', href: '#projects', count: projects.length },
  { label: 'Compétences', href: '#services', count: services.length },
  { label: 'Parcours', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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
            <span className="hidden sm:inline">Disponible pour de nouveaux projets</span>
            <span className="sm:hidden">Disponible</span>
          </a>

          <div className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
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
              data-cursor="Écrire"
            >
              Parlons-en →
            </a>
          </div>

          <button
            className="md:hidden font-mono text-sm font-semibold"
            onClick={() => setMenuOpen(true)}
          >
            Menu
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
          {navItems.map((item, i) => (
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
            Voir le CV
          </a>
          <a
            href={`mailto:${profile.email}`}
            className="btn-dark mt-2"
            onClick={() => setMenuOpen(false)}
          >
            Parlons-en →
          </a>
        </div>
      )}
    </>
  );
}
