'use client';

import { useState } from 'react';
import { getCertificationsLoisirs, type CertificationItem } from '@/content/certifications';
import { getHobbies } from '@/content/hobbies';
import { CertificationModal } from '@/components/CertificationModal';
import { HobbyIcon } from '@/components/HobbyIcons';
import { Reveal } from '@/components/Reveal';
import { formatStatus, getUi, useLocale } from '@/lib/locale';

export function OffCode() {
  useLocale();
  const ui = getUi();
  const certLoisirs = getCertificationsLoisirs();
  const hobbies = getHobbies();
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="offcode" className="px-3 pb-16 md:px-6 md:pb-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-10 flex items-baseline justify-between md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">/{ui.life}</h2>
            <span className="hidden font-mono text-xs text-muted md:block">{ui.lifeBody}</span>
          </div>
        </Reveal>

        <Reveal>
          <p className="max-w-4xl font-display text-3xl font-bold leading-tight md:text-5xl">
            {ui.life}
          </p>
        </Reveal>
        <Reveal delay={80}>
          <p className="mt-4 max-w-3xl font-display text-2xl font-bold text-accent md:text-4xl">
            {ui.lifeBody}
          </p>
        </Reveal>

        {/* Certifications loisir — Scrabble etc. */}
        {certLoisirs.length > 0 && (
          <div className="mt-12 md:mt-16">
            <Reveal>
              <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                {ui.certification} — {ui.certLoisirs}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {certLoisirs.map((cert, i) => (
                <Reveal key={cert.id} delay={i * 80}>
                  <button
                    type="button"
                    onClick={() => setActiveCert(cert)}
                    className="group w-full overflow-hidden rounded-2xl border border-line bg-paper text-left card-lift hover:border-ink/20 transition-colors"
                    data-cursor={ui.viewCert}
                  >
                    {cert.image ? (
                      <div className="relative aspect-[16/10] overflow-hidden border-b border-line bg-ink/[0.03]">
                        {/* eslint-disable-next-line @next/next/no-img-element */}
                        <img
                          src={cert.image}
                          alt=""
                          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.02]"
                          loading="lazy"
                          decoding="async"
                        />
                        <span className="absolute bottom-3 right-3 rounded-full bg-ink/80 px-2.5 py-1 font-mono text-xs uppercase tracking-wider text-white opacity-0 transition-opacity group-hover:opacity-100">
                          {ui.viewCert}
                        </span>
                      </div>
                    ) : null}
                    <div className="p-6">
                      <div className="mb-3 flex flex-wrap items-center gap-2">
                        <span className="font-mono text-xs uppercase tracking-wider text-muted group-hover:text-accent transition-colors">
                          {cert.period}
                        </span>
                        {cert.status ? (
                          <span className="rounded border border-line px-2 py-0.5 font-mono text-xs uppercase tracking-wider">
                            {formatStatus(cert.status)}
                          </span>
                        ) : null}
                      </div>
                      <h4 className="mb-2 text-sm font-bold leading-snug">{cert.title}</h4>
                      <p className="mb-2 text-xs font-semibold text-accent">{cert.institution}</p>
                      <p className="text-xs leading-relaxed text-muted line-clamp-3">
                        {cert.description}
                      </p>
                    </div>
                  </button>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Loisirs — échecs, football, scrabble, jeux vidéo, cuisine, animation d'événements */}
        <div className="mt-12 md:mt-16">
          <Reveal>
            <h3 className="mb-4 font-mono text-xs uppercase tracking-[0.2em] text-muted">
              {ui.hobbies}
            </h3>
          </Reveal>
          <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {hobbies.map((hobby, i) => (
              <li key={hobby.id}>
                <Reveal delay={i * 60}>
                  <div className="card-lift flex h-full items-start gap-4 rounded-2xl border border-line bg-paper p-5 transition-colors hover:border-ink/20">
                    <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-ink text-[#F4EFE4]">
                      <HobbyIcon id={hobby.id} className="size-5" />
                    </span>
                    <span>
                      <span className="block font-display text-lg font-bold leading-snug">
                        {hobby.title}
                      </span>
                      <span className="mt-1 block text-sm text-muted">{hobby.detail}</span>
                    </span>
                  </div>
                </Reveal>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <CertificationModal certification={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}
