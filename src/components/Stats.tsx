import { useEffect, useRef, useState } from 'react';
import { useInView, useReducedMotion } from 'framer-motion';
import { Reveal } from './Reveal';

const STATS: { value: number; suffix: string; label: string; prefix?: string }[] = [
  { value: 17, suffix: '+', label: 'Projects shipped' },
  { value: 10, suffix: '+', label: 'Technologies' },
  { value: 48, suffix: 'h', label: 'Fastest full build' },
  { value: 6, suffix: '', label: 'Flagship products' },
];

function Counter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const reduce = useReducedMotion();
  const [display, setDisplay] = useState(() => (reduce ? value : 0));

  useEffect(() => {
    if (!inView) return;
    if (reduce) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 4);
      setDisplay(Math.round(eased * value));
      if (t < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, reduce]);

  return (
    <span ref={ref}>
      {display}
      {suffix}
    </span>
  );
}

export function Stats() {
  return (
    <section aria-label="Quick stats" style={{ padding: '0 0 var(--space-6)' }}>
      <div className="container">
        <Reveal>
          <div
            className="glass"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, 1fr)',
              gap: 8,
              padding: '32px 24px',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid var(--border)',
            }}
          >
            {STATS.map((stat) => (
              <div
                key={stat.label}
                style={{
                  textAlign: 'center',
                  padding: '8px 0',
                  borderRight: '1px solid var(--border)',
                }}
                className="stat-cell"
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 4vw, 3rem)',
                    fontWeight: 700,
                    color: 'var(--accent-text)',
                    lineHeight: 1,
                  }}
                >
                  <Counter value={stat.value} suffix={stat.suffix} />
                </div>
                <div
                  style={{
                    marginTop: 10,
                    fontFamily: 'var(--font-mono)',
                    fontSize: 11,
                    letterSpacing: '0.12em',
                    textTransform: 'uppercase',
                    color: 'var(--text-muted)',
                  }}
                >
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
