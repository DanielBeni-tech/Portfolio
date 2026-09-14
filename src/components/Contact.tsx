'use client';

import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';

export function Contact() {
  return (
    <section
      id="contact"
      className="py-24 lg:py-40 border-t border-line relative overflow-hidden"
    >
      {/* Ambient glow */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full opacity-[0.06] blur-[120px] pointer-events-none"
        style={{ background: 'var(--accent-blue)' }}
      />

      <div className="max-w-container mx-auto px-6 lg:px-10 relative z-10">
        <Reveal>
          <div className="font-mono text-xs text-muted tracking-widest uppercase mb-12">
            06 — Contact
          </div>
        </Reveal>

        <Reveal delay={100}>
          <h2 className="text-5xl sm:text-7xl lg:text-8xl xl:text-9rem font-semibold tracking-tight leading-[0.95] mb-12">
            Let&apos;s build
            <br />
            <span className="text-blue">something.</span>
          </h2>
        </Reveal>

        <Reveal delay={200}>
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-start sm:items-center">
            <a
              href={`mailto:${profile.email}`}
              data-cursor="Email"
              className="magnetic text-xl sm:text-2xl text-text hover:text-blue transition-colors duration-300 link-underline"
            >
              {profile.email}
            </a>
          </div>
        </Reveal>

        <Reveal delay={300}>
          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor="GitHub ↗"
              className="magnetic font-mono text-xs tracking-widest uppercase text-muted border border-line px-6 py-3 rounded-full hover:border-blue hover:text-blue transition-colors duration-300"
            >
              GitHub ↗
            </a>
            {profile.linkedin && (
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor="LinkedIn ↗"
                className="magnetic font-mono text-xs tracking-widest uppercase text-muted border border-line px-6 py-3 rounded-full hover:border-blue hover:text-blue transition-colors duration-300"
              >
                LinkedIn ↗
              </a>
            )}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
