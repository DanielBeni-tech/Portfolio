'use client';

import { useRef, useState } from 'react';
import { gsap, registerGsap, useGSAP } from '@/lib/gsap';

registerGsap();

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');

  useGSAP(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    gsap.set(dot, { xPercent: -50, yPercent: -50 });
    gsap.set(ring, { xPercent: -50, yPercent: -50 });

    const dotX = gsap.quickTo(dot, 'x', { duration: 0.12, ease: 'power3.out' });
    const dotY = gsap.quickTo(dot, 'y', { duration: 0.12, ease: 'power3.out' });
    const ringX = gsap.quickTo(ring, 'x', { duration: 0.35, ease: 'power3.out' });
    const ringY = gsap.quickTo(ring, 'y', { duration: 0.35, ease: 'power3.out' });

    const onMove = (e: MouseEvent) => {
      dotX(e.clientX);
      dotY(e.clientY);
      ringX(e.clientX);
      ringY(e.clientY);
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor]');
      if (interactive) {
        setHovering(true);
        setLabel(interactive.getAttribute('data-cursor') || '');
        gsap.to(ring, { scale: 1.45, duration: 0.3, ease: 'power3.out' });
      } else {
        setHovering(false);
        setLabel('');
        gsap.to(ring, { scale: 1, duration: 0.3, ease: 'power3.out' });
      }
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
    };
  });

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`}>
        {label && <span>{label}</span>}
      </div>
    </>
  );
}
