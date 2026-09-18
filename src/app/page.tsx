import { Hero } from '@/components/Hero';
import { About } from '@/components/About';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Projects />
      <Services />
      <Experience />
      <Contact />
    </main>
  );
}
