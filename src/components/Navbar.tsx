'use client';

import { useEffect, useState } from 'react';
import { profile } from '@/content/profile';

const navItems = [
  { label: 'Work', href: '#work' },
  { label: 'Build', href: '#build' },
  { label: 'Experiments', href: '#experiments' },
  { label: 'Community', href: '#community' },
  { label: 'About', href: '#about' },
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
          scrolled
            ? 'bg-ink/80 backdrop-blur-md border-b border-line'
            : 'bg-transparent'
        }`}
      >
        <nav className="max-w-container mx-auto px-6 lg:px-10 h-16 flex items-center justify-between">
          <a
            href="#home"
            className="font-mono text-sm tracking-widest text-text uppercase"
            data-cursor=""
          >
            DANIEL<span className="text-muted">.</span>BENI
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="font-mono text-xs tracking-widest uppercase text-muted hover:text-text transition-colors duration-300"
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            className="md:hidden font-mono text-xs tracking-widest uppercase text-text"
            onClick={() => setMenuOpen(true)}
          >
            Menu
          </button>
        </nav>
      </header>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[200] bg-ink flex flex-col items-center justify-center gap-6">
          <button
            className="absolute top-6 right-6 font-mono text-sm text-muted"
            onClick={() => setMenuOpen(false)}
          >
            ✕
          </button>
          {navItems.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setMenuOpen(false)}
              className="text-3xl font-light text-text hover:text-blue transition-colors"
              style={{
                animation: `fadeUp 0.5s cubic-bezier(0.16,1,0.3,1) ${i * 0.06}s both`,
              }}
            >
              {item.label}
            </a>
          ))}
          <div className="mt-8 font-mono text-xs text-muted tracking-widest uppercase">
            {profile.location}
          </div>
        </div>
      )}
    </>
  );
}
