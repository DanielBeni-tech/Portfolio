import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Projects } from '@/components/Projects';
import { Competitions } from '@/components/Competitions';
import { Community } from '@/components/Community';
import { Life } from '@/components/Life';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Services />
      <Experience />
      <Projects />
      <Competitions />
      <Community />
      <Life />
      <Contact />
    </main>
  );
}
