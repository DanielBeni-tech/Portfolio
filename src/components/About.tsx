'use client';

import { profile } from '@/content/profile';
import { Reveal } from '@/components/Reveal';

export function About() {
  return (
    <section id="about" className="py-24 lg:py-40 border-t border-line">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 lg:mb-24">
            <div className="font-mono text-xs text-muted tracking-widest uppercase">
              05 — About
            </div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase hidden sm:block">
              Profile
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          {/* Photos */}
          <div className="lg:col-span-5 lg:col-start-1">
            <Reveal>
              <div className="relative">
                <div className="rounded-xl overflow-hidden border border-line mb-4 aspect-[4/5]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/daniel-portrait.jpeg"
                    alt="Daniel Beni portrait"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div className="rounded-xl overflow-hidden border border-line aspect-[16/10]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="/photos/daniel-desk.jpeg"
                    alt="Daniel Beni at work"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Narrative */}
          <div className="lg:col-span-6 lg:col-start-7 flex flex-col justify-center">
            <Reveal delay={100}>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-8 leading-tight">
                {profile.summary}
              </h2>
            </Reveal>

            <Reveal delay={200}>
              <p className="text-lg text-muted leading-relaxed mb-8 max-w-lg">
                {profile.bio}
              </p>
            </Reveal>

            <Reveal delay={300}>
              <div className="border-t border-line pt-6">
                <div className="font-mono text-xs text-muted tracking-widest uppercase mb-4">
                  Current Focus
                </div>
                <ul className="space-y-2">
                  {profile.currentFocus.map((focus) => (
                    <li
                      key={focus}
                      className="flex items-center gap-3 text-text/90"
                    >
                      <span className="w-1.5 h-1.5 rounded-full bg-blue" />
                      {focus}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
