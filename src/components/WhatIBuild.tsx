'use client';

import { Reveal } from '@/components/Reveal';

const capabilities = [
  {
    number: '01',
    title: 'AI Systems',
    description: 'LLM applications, RAG pipelines, agents, and local AI — building systems that reason and assist.',
    tags: ['LLM', 'RAG', 'Agents', 'Ollama'],
  },
  {
    number: '02',
    title: 'Software',
    description: 'Full-stack products from idea to deployment — APIs, mobile apps, and web platforms.',
    tags: ['Python', 'FastAPI', 'Flutter', 'Next.js'],
  },
  {
    number: '03',
    title: 'Data Products',
    description: 'Turning raw data into automated pipelines, analytics, and revenue assurance systems.',
    tags: ['PostgreSQL', 'Data Analysis', 'Automation'],
  },
  {
    number: '04',
    title: 'Communities',
    description: 'Building technical communities in Cameroon — workshops, mentorship, and AI literacy.',
    tags: ['SUP\u2019PTIC', 'Claude Cameroon', 'Workshops'],
  },
];

export function WhatIBuild() {
  return (
    <section id="build" className="py-24 lg:py-40 border-t border-line bg-surface">
      <div className="max-w-container mx-auto px-6 lg:px-10">
        <Reveal>
          <div className="flex items-baseline justify-between mb-16 lg:mb-24">
            <div className="font-mono text-xs text-muted tracking-widest uppercase">
              02 — What I Build
            </div>
            <div className="font-mono text-xs text-muted tracking-widest uppercase hidden sm:block">
              Capabilities
            </div>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-line">
          {capabilities.map((cap, i) => (
            <Reveal key={cap.number} delay={i * 80}>
              <div className="bg-surface p-8 lg:p-12 group hover:bg-elevated transition-colors duration-500 h-full">
                <div className="flex items-start gap-6">
                  <span className="font-mono text-sm text-blue tracking-widest mt-1">
                    {cap.number}
                  </span>
                  <div className="flex-1">
                    <h3 className="text-2xl lg:text-3xl font-semibold tracking-tight mb-3 group-hover:text-blue transition-colors duration-300">
                      {cap.title}
                    </h3>
                    <p className="text-muted leading-relaxed mb-5 max-w-md">
                      {cap.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {cap.tags.map((tag) => (
                        <span
                          key={tag}
                          className="font-mono text-[10px] text-muted tracking-widest uppercase border border-line px-2 py-1 rounded group-hover:border-blue/30 transition-colors"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
