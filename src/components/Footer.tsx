'use client';

import { profile } from '@/content/profile';
import { getUi, useLocale } from '@/lib/locale';

export function Footer() {
  useLocale();
  const ui = getUi();

  return (
    <footer className="px-3 pb-3 md:px-6 md:pb-6">
      <div className="mx-auto max-w-[1440px]">
        <div className="frame bg-paper rounded-2xl p-8 md:p-12">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full overflow-hidden border border-line">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/photos/daniel-2024.webp"
                  alt="Daniel Beni"
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <div>
                <span className="font-bold text-sm">{profile.name}</span>
                <p className="font-mono text-xs text-muted uppercase tracking-wider">
                  {profile.location}
                </p>
              </div>
            </div>

            <div className="flex flex-wrap gap-4">
              <a
                href={profile.cvUrl}
                target="_blank"
                rel="noreferrer"
                className="font-mono text-xs text-muted hover:text-ink transition-colors uppercase tracking-wider"
              >
                CV ↗
              </a>
              <a
                href={profile.cvUrl}
                download={profile.cvDownload}
                className="font-mono text-xs text-muted hover:text-ink transition-colors uppercase tracking-wider"
              >
                {ui.download}
              </a>
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="font-mono text-xs text-muted hover:text-ink transition-colors uppercase tracking-wider"
                >
                  {social.label} ↗
                </a>
              ))}
              <a
                href={`mailto:${profile.email}`}
                className="font-mono text-xs text-muted hover:text-ink transition-colors uppercase tracking-wider"
              >
                Email ↗
              </a>
            </div>
          </div>

          <div className="overflow-hidden border-t border-line pt-6">
            <div className="flex gap-8 animate-marquee whitespace-nowrap">
              {[...Array(2)].map((_, dup) => (
                <div key={dup} className="flex gap-8 shrink-0">
                  <span className="font-display text-3xl md:text-5xl font-bold text-ink">FULLSTACK</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-outline">LEAD DEV</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-ink">UX / UI</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-outline">IA ENGINEER</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-ink">FULLSTACK</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-outline">LEAD DEV</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-ink">UX / UI</span>
                  <span className="font-display text-3xl md:text-5xl font-bold text-outline">IA ENGINEER</span>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 mt-6">
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              © {new Date().getFullYear()} {profile.name} · {ui.rights}
            </span>
            <span className="font-mono text-xs text-muted uppercase tracking-wider">
              {ui.designedIn}
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
