import { Hero } from '@/components/Hero';
import { Projects } from '@/components/Projects';
import { Services } from '@/components/Services';
import { Experience } from '@/components/Experience';
import { Community } from '@/components/Community';
import { Contact } from '@/components/Contact';

export default function Home() {
  return (
    <main>
      <Hero />
      <Projects />
      <Services />
      <Experience />
      <Community />
      <Contact />
    </main>
  );
}
