import { useCallback, useEffect, useRef, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ArrowDownRight, Sparkles } from 'lucide-react';

const TERMINAL_LINES = [
  { prompt: 'maximus@dev:~$', cmd: 'whoami', out: '18-year-old self-taught developer' },
  { prompt: 'maximus@dev:~$', cmd: 'cat skills.txt', out: 'react · react-native · rust · python · ts' },
  { prompt: 'maximus@dev:~$', cmd: 'ls projects/', out: '17 projects · 6 flagship builds' },
  { prompt: 'maximus@dev:~$', cmd: 'uptime', out: 'shipping since 2025 · always learning' },
];

function TypingLine({
  line,
  index,
  onDone,
}: {
  line: (typeof TERMINAL_LINES)[number];
  index: number;
  onDone: () => void;
}) {
  const [cmd, setCmd] = useState('');
  const [phase, setPhase] = useState<'typing' | 'out' | 'done'>('typing');
  const onDoneRef = useRef(onDone);
  onDoneRef.current = onDone;

  useEffect(() => {
    let intervalId: number | undefined;
    let outTimerId: number | undefined;
    let cancelled = false;
    let i = 0;
    setCmd('');
    setPhase('typing');
    const startDelay = index * 1800;
    const startTimer = window.setTimeout(() => {
      if (cancelled) return;
      intervalId = window.setInterval(() => {
        i += 1;
        setCmd(line.cmd.slice(0, i));
        if (i >= line.cmd.length) {
          if (intervalId !== undefined) window.clearInterval(intervalId);
          intervalId = undefined;
          setPhase('out');
          outTimerId = window.setTimeout(() => {
            if (cancelled) return;
            setPhase('done');
            onDoneRef.current();
          }, 650);
        }
      }, 38);
    }, startDelay);
    return () => {
      cancelled = true;
      window.clearTimeout(startTimer);
      if (intervalId !== undefined) window.clearInterval(intervalId);
      if (outTimerId !== undefined) window.clearTimeout(outTimerId);
    };
  }, [index, line.cmd]);

  return (
    <div className="term-line">
      <div>
        <span className="term-prompt">{line.prompt}</span>{' '}
        <span className="term-cmd">{cmd}</span>
        {phase === 'typing' && <span className="term-cursor" aria-hidden="true" />}
      </div>
      {phase === 'done' && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className="term-out"
        >
          <span className="term-ok">✓</span> {line.out}
        </motion.div>
      )}
    </div>
  );
}

export function Hero() {
  const reduce = useReducedMotion();
  const [, setDoneCount] = useState(0);
  const handleLineDone = useCallback(() => setDoneCount((c) => c + 1), []);

  return (
    <section
      id="top"
      className="grid-bg"
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        padding: '120px 0 80px',
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <div className="container" style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: 64, alignItems: 'center' }}>
        <div>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            style={{ display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 13, color: 'var(--accent-text)', marginBottom: 24 }}
          >
            <Sparkles size={14} aria-hidden="true" />
            AVAILABLE FOR NEW PROJECTS
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-display)',
              fontWeight: 700,
              fontSize: 'clamp(3.2rem, 8vw, 6.5rem)',
              lineHeight: 0.98,
              letterSpacing: '-0.03em',
              marginBottom: 28,
            }}
          >
            I build <br />
            <span style={{ color: 'var(--accent-text)' }}>software</span> that
            <br />
            feels like the <span style={{ color: 'var(--accent-2)' }}>future</span>.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            style={{
              fontSize: 'clamp(1rem, 1.3vw, 1.15rem)',
              color: 'var(--text-muted)',
              maxWidth: 520,
              marginBottom: 36,
              lineHeight: 1.7,
            }}
          >
            I&apos;m <strong style={{ color: 'var(--text)' }}>Maximus</strong> — an 18-year-old
            self-taught developer shipping Android apps, web platforms and AI-powered
            tools. 17+ projects, zero formal training, all obsession.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}
          >
            <a href="#work" className="btn btn-primary">
              View my work <ArrowRight size={17} aria-hidden="true" />
            </a>
            <a href="#contact" className="btn btn-ghost">
              Let&apos;s build yours <ArrowDownRight size={17} aria-hidden="true" />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            style={{
              display: 'flex',
              gap: 40,
              marginTop: 56,
              fontFamily: 'var(--font-mono)',
              fontSize: 12,
              color: 'var(--text-muted)',
            }}
          >
            {[
              ['17+', 'PROJECTS'],
              ['10+', 'TECHNOLOGIES'],
              ['48-HR', 'FASTEST BUILD'],
              ['1–2 WK', 'AVG DELIVERY'],
              ['0', 'FORMAL DEGREES'],
            ].map(([num, label]) => (
              <div key={label}>
                <div style={{ fontFamily: 'var(--font-display)', fontSize: 28, fontWeight: 700, color: 'var(--text)' }}>
                  {num}
                </div>
                <div style={{ letterSpacing: '0.1em', marginTop: 4 }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          style={{ position: 'relative' }}
        >
          <div
            className="glass"
            style={{
              borderRadius: 20,
              overflow: 'hidden',
              border: '1px solid var(--border-strong)',
              background:
                'linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.015)), var(--surface)',
              boxShadow: '0 16px 40px rgba(0, 0, 0, 0.28), 0 0 60px var(--glow)',
              position: 'relative',
            }}
          >
            <div
              aria-hidden="true"
              style={{
                position: 'absolute',
                inset: 0,
                background:
                  'linear-gradient(180deg, rgba(255,255,255,0.07), transparent 32%)',
                pointerEvents: 'none',
              }}
            />
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: 8,
                padding: '14px 18px',
                borderBottom: '1px solid var(--border)',
                background: 'rgba(255, 255, 255, 0.03)',
                position: 'relative',
              }}
            >
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }} />
              <span style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }} />
              <span style={{ marginLeft: 'auto', fontFamily: 'var(--font-mono)', fontSize: 12, color: 'var(--text-muted)' }}>
                maximus — zsh
              </span>
            </div>
            <div
              style={{
                padding: '22px 22px 26px',
                fontFamily: 'var(--font-mono)',
                fontSize: 13.5,
                lineHeight: 1.9,
                minHeight: 260,
                position: 'relative',
                background: 'transparent',
              }}
            >
              {TERMINAL_LINES.map((line, i) => (
                <TypingLine
                  key={line.cmd}
                  line={line}
                  index={i}
                  onDone={handleLineDone}
                />
              ))}
              {!reduce && (
                <style>{`.term-cursor { display: inline-block; width: 8px; height: 15px; background: var(--accent); vertical-align: text-bottom; animation: blink 1s step-end infinite; } @keyframes blink { 50% { opacity: 0; } }`}</style>
              )}
            </div>
          </div>

          <div
            aria-hidden="true"
            style={{
              position: 'absolute',
              inset: 0,
              transform: 'translate(16px, 16px)',
              border: '1px solid var(--accent)',
              borderRadius: 20,
              zIndex: -1,
              opacity: 0.28,
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
