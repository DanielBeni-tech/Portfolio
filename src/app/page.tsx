import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Competitions } from '@/components/Competitions';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Life } from '@/components/Life';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Competitions />
      <Services />
      <Experience />
      <Life />
      <Contact />
    </main>
  );
}
