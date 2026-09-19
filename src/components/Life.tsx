'use client';

import { hobbies } from '@/content/hobbies';
import { Reveal } from '@/components/Reveal';

export function Life() {
  return (
    <section id="life" className="px-3 pb-16 md:px-6 md:pb-28">
      <div className="mx-auto max-w-[1440px]">
        <Reveal>
          <div className="rounded-2xl bg-ink px-6 py-10 text-[#F4EFE4] md:px-12 md:py-14">
            <h2 className="font-display text-3xl font-bold md:text-4xl">Hors code</h2>
            <p className="mt-2 max-w-lg text-sm leading-relaxed text-white/60">
              Le même goût du jeu : calculer, courir, poser un mot, ou rester un soir sur un écran.
            </p>
            <ul className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
              {hobbies.map((hobby) => (
                <li key={hobby.id} className="border-t border-white/15 pt-4">
                  <p className="font-display text-xl font-bold">{hobby.title}</p>
                  <p className="mt-1 text-sm text-white/65">{hobby.detail}</p>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
