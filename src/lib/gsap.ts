'use client';

import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { SplitText } from 'gsap/SplitText';

let registered = false;

export function registerGsap() {
  if (registered || typeof window === 'undefined') return;
  gsap.registerPlugin(useGSAP, ScrollTrigger, SplitText);
  registered = true;
}

export { gsap, useGSAP, ScrollTrigger, SplitText };
