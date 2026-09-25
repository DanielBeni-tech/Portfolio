'use client';

import { useState } from 'react';
import { getExperiences, getEducation } from '@/content/experience';
import {
  getCertifications,
  getCertificationsLoisirs,
  type CertificationItem,
} from '@/content/certifications';
import { CertificationModal } from '@/components/CertificationModal';
import { Reveal } from '@/components/Reveal';
import { formatStatus, getUi, useLocale } from '@/lib/locale';

export function Experience() {
  useLocale();
  const ui = getUi();
  const experiences = getExperiences();
  const education = getEducation();
  const certSkills = getCertifications();
  const certLoisirs = getCertificationsLoisirs();
  const [activeCert, setActiveCert] = useState<CertificationItem | null>(null);

  return (
    <section id="experience" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="flex items-baseline justify-between mb-10 md:mb-16">
            <h2 className="font-mono text-sm uppercase tracking-[0.2em] text-muted">
              /{ui.path}
            </h2>
            <span className="font-mono text-xs text-muted hidden md:block">
              {ui.pathMeta}
            </span>
          </div>
        </Reveal>

        <Reveal delay={80}>
          <p className="text-2xl md:text-4xl font-display font-bold max-w-3xl mb-10 md:mb-16 leading-tight">
            {ui.freelanceSince}
            <br />
            <span className="text-accent">{ui.thenAmd}</span>
          </p>
        </Reveal>

        {/* Experience */}
        {experiences.length > 0 && (
          <div className="mb-12">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
                {ui.experience}
              </h3>
            </Reveal>
            <div className="rounded-2xl overflow-hidden border border-line bg-paper">
              {experiences.map((exp, i) => (
                <Reveal key={exp.id} delay={i * 80}>
                  <div className="p-6 md:p-8 grid grid-cols-1 md:grid-cols-12 gap-4 group hover:bg-ink/[0.02] transition-colors duration-300">
                    <div className="md:col-span-4">
                      <span className="font-mono text-xs text-muted uppercase tracking-wider group-hover:text-accent transition-colors duration-300">
                        {exp.period}
                      </span>
                    </div>
                    <div className="md:col-span-8">
                      <h4 className="text-lg font-bold mb-1">{exp.role}</h4>
                      <p className="text-sm text-accent font-semibold mb-2">{exp.company}</p>
                      <p className="text-sm text-muted leading-relaxed max-w-2xl">{exp.description}</p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        )}

        {/* Education */}
        <div className="mb-12">
          <Reveal>
            <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
              {ui.education}
            </h3>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {education.map((edu, i) => (
              <Reveal key={edu.title} delay={i * 80}>
                <div className="border border-line rounded-2xl p-6 bg-paper card-lift hover:border-ink/20 h-full group">
                  <span className="font-mono text-xs text-muted uppercase tracking-wider block mb-3 group-hover:text-accent transition-colors">
                    {edu.period}
                  </span>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {edu.status && (
                      <span className="font-mono text-xs uppercase tracking-wider border border-line px-2 py-0.5 rounded">
                        {formatStatus(edu.status)}
                      </span>
                    )}
                    {edu.location && (
                      <span className="font-mono text-xs text-muted">{edu.location}</span>
                    )}
                  </div>
                  <h4 className="text-sm font-bold mb-2 leading-snug">{edu.title}</h4>
                  <p className="text-xs text-muted">{edu.institution}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {certSkills.length > 0 && (
          <div className="mb-12">
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
                {ui.certification} — {ui.certSkills}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certSkills.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} delay={i * 80} onOpen={setActiveCert} />
              ))}
            </div>
          </div>
        )}

        {certLoisirs.length > 0 && (
          <div>
            <Reveal>
              <h3 className="font-mono text-xs uppercase tracking-[0.2em] text-muted mb-4">
                {ui.certification} — {ui.certLoisirs}
              </h3>
            </Reveal>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {certLoisirs.map((cert, i) => (
                <CertCard key={cert.id} cert={cert} delay={i * 80} onOpen={setActiveCert} />
              ))}
            </div>
          </div>
        )}
      </div>

      <CertificationModal certification={activeCert} onClose={() => setActiveCert(null)} />
    </section>
  );
}

function CertCard({
  cert,
  delay,
  onOpen,
}: {
  cert: CertificationItem;
  delay: number;
  onOpen: (cert: CertificationItem) => void;
}) {
  const ui = getUi();
  return (
    <Reveal delay={delay}>
      <button
        type="button"
        onClick={() => onOpen(cert)}
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
            <span className="font-mono text-xs text-muted uppercase tracking-wider group-hover:text-accent transition-colors">
              {cert.period}
            </span>
            {cert.status ? (
              <span className="font-mono text-xs uppercase tracking-wider border border-line px-2 py-0.5 rounded">
                {formatStatus(cert.status)}
              </span>
            ) : null}
          </div>
          <h4 className="text-sm font-bold mb-2 leading-snug">{cert.title}</h4>
          <p className="text-xs text-accent font-semibold mb-2">{cert.institution}</p>
          <p className="text-xs text-muted leading-relaxed line-clamp-3">{cert.description}</p>
        </div>
      </button>
    </Reveal>
  );
}
