import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Reveal } from './Reveal';
import { ProjectCard, ProjectModal } from './ProjectModal';
import { featuredProjects, otherProjects, type Project } from '../data/projects';

export function Projects() {
  const [active, setActive] = useState<Project | null>(null);

  return (
    <section id="work" className="section">
      <div className="container">
        <Reveal>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 24, marginBottom: 48, flexWrap: 'wrap' }}>
            <div>
              <p className="micro-label" style={{ marginBottom: 20 }}>03 — selected work</p>
              <h2
                className="section-title"
                style={{
                  lineHeight: 1.1,
                }}
              >
                Things I&apos;ve <span className="text-accent">built</span>
                <br />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.45em', fontWeight: 400, color: 'var(--text-muted)' }}>
                  click any card to open the spec
                </span>
              </h2>
            </div>
          </div>
        </Reveal>

        <div className="grid-featured">
          {featuredProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <ProjectCard project={project} large onOpen={setActive} />
            </Reveal>
          ))}
        </div>

        <Reveal>
          <div style={{ marginBottom: 20, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--text-muted)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>
            + {otherProjects.length} more experiments &amp; utilities
          </div>
        </Reveal>

        <div className="grid-others">
          {otherProjects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.04}>
              <ProjectCard project={project} onOpen={setActive} />
            </Reveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {active && <ProjectModal project={active} onClose={() => setActive(null)} />}
      </AnimatePresence>
    </section>
  );
}
