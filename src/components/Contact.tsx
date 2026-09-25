'use client';

import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';
import { getUi, useLocale } from '@/lib/locale';

export function Contact() {
  useLocale();
  const ui = getUi();

  return (
    <section id="contact" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="mb-10 font-mono text-sm uppercase tracking-[0.2em] text-muted md:mb-16">/{ui.contact}</h2>
        </Reveal>

        <div className="frame relative overflow-hidden rounded-2xl bg-paper p-8 md:p-16 lg:p-20">
          <div className="pointer-events-none absolute -bottom-20 left-1/2 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.08),transparent_60%)]" />
          <div className="pointer-events-none absolute -top-20 right-1/4 h-[300px] w-[300px] rounded-full bg-[radial-gradient(circle,rgba(37,99,235,0.06),transparent_60%)]" />

          <Reveal delay={100}>
            <h3 className="relative mb-6 font-display text-4xl font-bold leading-tight md:text-6xl lg:text-7xl">
              {ui.contactLead}
            </h3>
          </Reveal>

          <Reveal delay={200}>
            <p className="relative mb-10 max-w-xl text-lg text-ink/70">{ui.contactBody}</p>
          </Reveal>

          <Reveal delay={300}>
            <div className="relative flex flex-wrap gap-3">
              <a href={`mailto:${profile.email}`} className="btn-dark text-base" data-cursor={ui.write}>
                {profile.email}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              <a href={profile.cvUrl} target="_blank" rel="noreferrer" className="pill text-sm" data-cursor="CV">
                {ui.seeCv} ↗
              </a>
              <a href={profile.cvUrl} download={profile.cvDownload} className="pill text-sm">
                {ui.downloadCv}
              </a>
              {profile.socials.map((social) => (
                <a key={social.label} href={social.href} target="_blank" rel="noreferrer" className="pill text-sm">
                  {social.label} ↗
                </a>
              ))}
            </div>
          </Reveal>

          <Reveal delay={400}>
            <div className="relative mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-line pt-8">
              <span className="status-dot" />
              <span className="font-mono text-xs uppercase tracking-wider text-muted">
                {ui.based} {profile.location} · {ui.openToWork}
              </span>
              <a
                href={`tel:${profile.phone.replaceAll(' ', '')}`}
                className="font-mono text-xs text-muted transition-colors hover:text-accent"
              >
                {profile.phone}
              </a>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
