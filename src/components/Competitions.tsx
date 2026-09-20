'use client';

import { getCompetitions } from '@/content/competitions';
import { Reveal } from '@/components/Reveal';
import { getUi, useLocale } from '@/lib/locale';

export function Competitions() {
  useLocale();
  const ui = getUi();
  const competitions = getCompetitions();
  return (
    <section id="competitions" className="px-3 py-16 md:px-6 md:py-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="mb-8 flex items-end justify-between gap-4 md:mb-12">
            <h2 className="max-w-xl font-display text-3xl font-bold leading-tight md:text-5xl">
              {ui.competitions}
            </h2>
            <p className="hidden max-w-xs text-right text-sm leading-relaxed text-muted md:block">
              {ui.competitionsNote}
            </p>
          </div>
        </Reveal>

        <div className="overflow-hidden rounded-2xl border border-line bg-paper">
          {competitions.map((event, i) => (
            <Reveal key={event.id} delay={i * 70}>
              <article className="grid grid-cols-1 border-b border-line last:border-b-0 md:grid-cols-12">
                <div className="relative aspect-[16/10] overflow-hidden bg-[#E8E2D6] md:col-span-5 md:aspect-auto md:min-h-[220px]">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={event.image}
                    alt={event.name}
                    className="h-full w-full object-cover"
                  />
                  {event.imageNote && (
                    <span className="absolute bottom-3 left-3 rounded bg-paper/90 px-2 py-1 text-xs text-ink/70">
                      {event.imageNote}
                    </span>
                  )}
                </div>
                <div className="flex flex-col justify-center px-6 py-8 md:col-span-7 md:px-10">
                  <p className="text-sm text-muted">{event.edition}</p>
                  <h3 className="mt-1 font-display text-2xl font-bold tracking-tight md:text-3xl">
                    {event.name}
                  </h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-ink/75">
                    {event.description}
                  </p>
                  <p className="mt-5 text-sm">
                    {ui.projectLabel}{' '}
                    {event.projectHref ? (
                      <a href={event.projectHref} className="font-semibold text-accent link-underline">
                        {event.project}
                      </a>
                    ) : (
                      <span className="font-semibold">{event.project}</span>
                    )}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
