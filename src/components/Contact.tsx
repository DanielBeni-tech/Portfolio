'use client';

import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  return (
    <section id="contact" className="px-3 py-12 md:px-6 md:py-20">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted mb-8">
            /Contact
          </h2>
        </Reveal>

        <div className="frame bg-paper rounded-2xl p-8 md:p-16 lg:p-20 relative overflow-hidden">
          {/* Ambient glow */}
          <div className="absolute -bottom-20 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-[radial-gradient(circle,rgba(234,88,12,0.08),transparent_60%)] pointer-events-none" />

          <Reveal delay={100}>
            <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6 leading-tight relative">
              Un projet en tête ?
            </h3>
          </Reveal>

          <Reveal delay={200}>
            <p className="text-lg text-ink/70 max-w-xl mb-10 relative">
              Ensemble, on peut créer quelque chose de clair et d&apos;impactant.
              Écris-moi, on en parle.
            </p>
          </Reveal>

          <Reveal delay={300}>
            <div className="flex flex-wrap gap-3 relative">
              <a
                href={`mailto:${profile.email}`}
                className="btn-dark text-base"
              >
                {profile.email}
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="size-4">
                  <path d="M7 17 17 7M8 7h9v9" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
              {profile.socials.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noreferrer"
                  className="pill text-sm"
                >
                  {social.label} ↗
                </a>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
