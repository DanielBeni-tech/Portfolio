'use client';

import { useEffect, useRef, useState } from 'react';

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);
  const [hovering, setHovering] = useState(false);
  const [label, setLabel] = useState('');

  useEffect(() => {
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;

    let mouseX = 0, mouseY = 0, ringX = 0, ringY = 0;
    let raf = 0;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      dot.style.transform = `translate(${mouseX - 3}px, ${mouseY - 3}px)`;
    };

    const onOver = (e: MouseEvent) => {
      const t = e.target as HTMLElement;
      const interactive = t.closest('a, button, [data-cursor]');
      if (interactive) {
        setHovering(true);
        const cl = interactive.getAttribute('data-cursor');
        setLabel(cl || '');
      } else {
        setHovering(false);
        setLabel('');
      }
    };

    const animate = () => {
      ringX += (mouseX - ringX) * 0.15;
      ringY += (mouseY - ringY) * 0.15;
      ring.style.transform = `translate(${ringX - 18}px, ${ringY - 18}px)`;
      raf = requestAnimationFrame(animate);
    };

    window.addEventListener('mousemove', onMove);
    document.addEventListener('mouseover', onOver);
    raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener('mousemove', onMove);
      document.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className={`cursor-ring ${hovering ? 'hovering' : ''}`}>
        {label && <span>{label}</span>}
      </div>
    </>
  );
}
