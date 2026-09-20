'use client';

const ICONS = [
  { name: 'Python', slug: 'python/python-original' },
  { name: 'JavaScript', slug: 'javascript/javascript-original' },
  { name: 'React', slug: 'react/react-original' },
  { name: 'Next.js', slug: 'nextjs/nextjs-original' },
  { name: 'Node.js', slug: 'nodejs/nodejs-original' },
  { name: 'Django', slug: 'django/django-plain' },
  { name: 'PostgreSQL', slug: 'postgresql/postgresql-original' },
  { name: 'Docker', slug: 'docker/docker-original' },
  { name: 'Figma', slug: 'figma/figma-original' },
  { name: 'C / C++', slug: 'cplusplus/cplusplus-original' },
  { name: 'Arduino', slug: 'arduino/arduino-original' },
];

function Strip({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul className="flex shrink-0 items-center gap-10 pr-10" aria-hidden={hidden || undefined}>
      {ICONS.map((icon) => (
        <li
          key={icon.slug}
          className="group flex shrink-0 flex-col items-center gap-2 opacity-70 transition-opacity duration-300 hover:opacity-100"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://cdn.jsdelivr.net/gh/devicons/devicon/icons/${icon.slug}.svg`}
            alt={hidden ? '' : icon.name}
            className="size-9 grayscale transition-[filter] duration-300 group-hover:grayscale-0"
            loading="lazy"
          />
          <span className="font-mono text-xs uppercase tracking-wider text-muted group-hover:text-accent">
            {icon.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function TechMarquee() {
  return (
    <div className="overflow-hidden border-y border-line bg-paper py-6 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
      <div className="flex w-max animate-marquee hover:[animation-play-state:paused] motion-reduce:animate-none [[data-modal]_&]:[animation-play-state:paused]">
        <Strip />
        <Strip hidden />
      </div>
    </div>
  );
}
