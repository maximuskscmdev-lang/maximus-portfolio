import { useEffect, useRef } from 'react';
import { motion, AnimatePresence, useReducedMotion } from 'framer-motion';
import { X, ExternalLink, Smartphone, ArrowUpRight } from 'lucide-react';
import { GithubIcon } from './icons';
import { CATEGORY_COLORS, type Project } from '../data/projects';

const COLOR_MAP = {
  lime: { text: 'var(--accent-text)', soft: 'var(--accent-soft)', bar: 'var(--accent)' },
  ember: { text: 'var(--accent-2)', soft: 'var(--accent-2-soft)', bar: 'var(--accent-2)' },
  cyan: { text: 'var(--accent-3)', soft: 'var(--accent-3-soft)', bar: 'var(--accent-3)' },
};

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

export function ProjectModal({ project, onClose }: ProjectModalProps) {
  const reduce = useReducedMotion();
  const closeRef = useRef<HTMLButtonElement>(null);
  const color = COLOR_MAP[CATEGORY_COLORS[project.category]];

  useEffect(() => {
    const bodyPrev = document.body.style.overflow;
    const htmlPrev = document.documentElement.style.overflow;
    document.body.style.overflow = 'hidden';
    document.documentElement.style.overflow = 'hidden';
    closeRef.current?.focus();

    // Lenis hijacks wheel events even when body is overflow:hidden,
    // so it must be explicitly stopped or the background page keeps scrolling.
    const lenis = (window as unknown as { __lenis?: { stop: () => void; start: () => void } }).__lenis;
    lenis?.stop();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = bodyPrev;
      document.documentElement.style.overflow = htmlPrev;
      window.removeEventListener('keydown', onKey);
      lenis?.start();
    };
  }, [onClose]);

  return (
    <AnimatePresence>
      <motion.div
        role="dialog"
        aria-modal="true"
        aria-label={`${project.title} — project details`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.25 }}
        onClick={onClose}
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 200,
          background: 'var(--modal-scrim)',
          backdropFilter: 'blur(10px)',
          WebkitBackdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: 24,
        }}
      >
        <motion.div
          onClick={(e) => e.stopPropagation()}
          data-lenis-prevent
          initial={{ opacity: 0, y: reduce ? 0 : 40, scale: reduce ? 1 : 0.96 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: reduce ? 0 : 24, scale: reduce ? 1 : 0.97 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          role="document"
          style={{
            background: 'var(--bg)',
            border: '1px solid var(--border-strong)',
            borderRadius: 24,
            maxWidth: 680,
            width: '100%',
            maxHeight: '88vh',
            overflowY: 'auto',
            overscrollBehavior: 'contain',
            WebkitOverflowScrolling: 'touch',
            touchAction: 'pan-y',
            boxShadow: 'var(--shadow)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: 8,
              padding: '14px 20px',
              borderBottom: '1px solid var(--border)',
              background: 'var(--bg-alt)',
              position: 'sticky',
              top: 0,
              zIndex: 2,
            }}
          >
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
            <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
            <span
              style={{
                marginLeft: 'auto',
                fontFamily: 'var(--font-mono)',
                fontSize: 12,
                color: 'var(--text-muted)',
              }}
            >
              spec — {project.id}
            </span>
            <button
              ref={closeRef}
              onClick={onClose}
              aria-label="Close project details"
              style={{
                marginLeft: 12,
                width: 32,
                height: 32,
                borderRadius: 999,
                border: '1px solid var(--border-strong)',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'var(--text)',
                transition: 'border-color 0.2s ease, background 0.2s ease',
                flexShrink: 0,
              }}
              className="modal-close"
            >
              <X size={15} aria-hidden="true" />
            </button>
          </div>

          <div style={{ padding: '28px 28px 32px' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 11,
                letterSpacing: '0.12em',
                textTransform: 'uppercase',
                color: color.text,
                background: color.soft,
                border: '1px solid var(--border)',
                borderRadius: 999,
                padding: '5px 12px',
                display: 'inline-block',
                marginBottom: 16,
              }}
            >
              {project.category}
            </span>

            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.7rem, 4vw, 2.4rem)',
                fontWeight: 700,
                letterSpacing: '-0.02em',
                marginBottom: 8,
              }}
            >
              {project.title}
            </h3>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: 13, color: color.text, marginBottom: 20 }}>
              {project.tagline}
            </p>

            <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, marginBottom: 28, fontSize: '0.98rem' }}>
              {project.description}
            </p>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 12 }}>
                highlights
              </div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 10 }}>
                {project.highlights.map((h) => (
                  <li key={h} style={{ display: 'flex', gap: 12, alignItems: 'flex-start', fontSize: '0.95rem', color: 'var(--text)' }}>
                    <span style={{ color: color.text, fontFamily: 'var(--font-mono)', flexShrink: 0 }} aria-hidden="true">
                      ▹
                    </span>
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            <div style={{ marginBottom: 28 }}>
              <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 14 }}>
                stack
              </div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {project.stack.map((s) => (
                  <span
                    key={s}
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 12,
                      padding: '6px 12px',
                      borderRadius: 999,
                      background: 'var(--surface-2)',
                      border: '1px solid var(--border)',
                      color: 'var(--text-muted)',
                    }}
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
              {project.githubUrl && (
                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '11px 20px', fontSize: 14 }}>
                  <GithubIcon size={16} aria-hidden="true" /> Source code
                </a>
              )}
              {project.liveUrl && (
                <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '11px 20px', fontSize: 14 }}>
                  <ExternalLink size={16} aria-hidden="true" /> Live demo
                </a>
              )}
              {project.apkUrl && (
                <a href={project.apkUrl} target="_blank" rel="noopener noreferrer" className="btn btn-ghost" style={{ padding: '11px 20px', fontSize: 14 }}>
                  <Smartphone size={16} aria-hidden="true" /> Download APK
                </a>
              )}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}

interface ProjectCardProps {
  project: Project;
  large?: boolean;
  onOpen: (project: Project) => void;
}

export function ProjectCard({ project, large, onOpen }: ProjectCardProps) {
  const color = COLOR_MAP[CATEGORY_COLORS[project.category]];
  return (
    <button
      onClick={() => onOpen(project)}
      className="project-card"
      aria-label={`Open ${project.title} project details`}
      style={{
        textAlign: 'left',
        width: '100%',
        background: 'var(--surface)',
        border: '1px solid var(--border)',
        borderRadius: 'var(--radius-lg)',
        padding: large ? 32 : 24,
        display: 'flex',
        flexDirection: 'column',
        gap: 14,
        position: 'relative',
        overflow: 'hidden',
        transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
      }}
    >
      <span
        aria-hidden="true"
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, transparent, ${color.bar}, transparent)`,
          opacity: 0.6,
        }}
      />
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 12 }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 11,
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: color.text,
            background: color.soft,
            borderRadius: 999,
            padding: '4px 11px',
            border: '1px solid var(--border)',
          }}
        >
          {project.category}
        </span>
        <ArrowUpRight
          size={large ? 22 : 18}
          aria-hidden="true"
          style={{ color: 'var(--text-muted)', transition: 'color 0.25s ease, transform 0.25s ease' }}
          className="card-arrow"
        />
      </div>
      <h3
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: large ? 'clamp(1.5rem, 3vw, 2rem)' : '1.2rem',
          fontWeight: 700,
          letterSpacing: '-0.02em',
          marginTop: 4,
        }}
      >
        {project.title}
      </h3>
      <p style={{ color: 'var(--text-muted)', fontSize: large ? '1rem' : '0.92rem', lineHeight: 1.65 }}>
        {large ? project.description : project.tagline}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, marginTop: 'auto', paddingTop: 6 }}>
        {project.tags.map((tag) => (
          <span
            key={tag}
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 11,
              color: 'var(--text-muted)',
              background: 'var(--surface-2)',
              border: '1px solid var(--border)',
              borderRadius: 999,
              padding: '4px 10px',
            }}
          >
            {tag}
          </span>
        ))}
      </div>
    </button>
  );
}
