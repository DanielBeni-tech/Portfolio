'use client';

import { useRef, type ReactNode } from 'react';
import { gsap, registerGsap, useGSAP } from '@/lib/gsap';

registerGsap();

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function inViewport(el: HTMLElement) {
  const r = el.getBoundingClientRect();
  return r.top < window.innerHeight && r.bottom > 0;
}

export function Reveal({ children, delay = 0, className = '' }: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el) return;

      const fallback = window.setTimeout(() => {
        if (getComputedStyle(el).opacity === '0') {
          gsap.set(el, { autoAlpha: 1, y: 0 });
        }
      }, 2000);

      const mm = gsap.matchMedia();
      mm.add(
        {
          reduce: '(prefers-reduced-motion: reduce)',
          motion: '(prefers-reduced-motion: no-preference)',
        },
        (context) => {
          const reduce = context.conditions?.reduce;
          if (reduce || inViewport(el)) {
            gsap.set(el, { autoAlpha: 1, y: 0 });
            return;
          }

          gsap.fromTo(
            el,
            { autoAlpha: 0, y: 36 },
            {
              autoAlpha: 1,
              y: 0,
              duration: 0.9,
              delay: delay / 1000,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 90%',
                once: true,
              },
            }
          );
        }
      );

      return () => {
        window.clearTimeout(fallback);
        mm.revert();
      };
    },
    { scope: ref, dependencies: [delay] }
  );

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
