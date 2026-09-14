import { Hero } from '@/components/Hero';
import { SelectedWork } from '@/components/SelectedWork';
import { WhatIBuild } from '@/components/WhatIBuild';
import { Experiments } from '@/components/Experiments';
import { Community } from '@/components/Community';
import { About } from '@/components/About';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <SelectedWork />
      <WhatIBuild />
      <Experiments />
      <Community />
      <About />
      <Contact />
    </main>
  );
}
