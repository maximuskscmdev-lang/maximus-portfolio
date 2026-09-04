import { Reveal } from './Reveal';

const SKILL_GROUPS: { title: string; color: 'lime' | 'ember' | 'cyan'; items: string[] }[] = [
  {
    title: 'Languages',
    color: 'lime',
    items: ['TypeScript', 'JavaScript', 'Python', 'Rust', 'C++', 'SQL'],
  },
  {
    title: 'Frontend',
    color: 'cyan',
    items: ['React', 'Vite', 'Framer Motion', 'Tailwind', 'WebGL', 'PWA / TWA'],
  },
  {
    title: 'Mobile',
    color: 'ember',
    items: ['React Native', 'Android Services', 'Firebase', 'Google Fit API', 'App Distribution'],
  },
  {
    title: 'Backend & Data',
    color: 'cyan',
    items: ['Node.js', 'Supabase', 'Firestore', 'WebSockets', 'REST APIs', 'Excel Export'],
  },
  {
    title: 'AI & Automation',
    color: 'lime',
    items: ['AI Moderation', 'TTS Pipelines', 'Google AI Studio', 'Data Parsing', 'Orchestration'],
  },
  {
    title: 'Tooling',
    color: 'ember',
    items: ['Git / GitHub', 'Vite', 'ESLint', 'CI Basics', 'Linux', 'Bash'],
  },
];

const COLOR_MAP = {
  lime: {
    text: 'var(--accent-text)',
    soft: 'var(--accent-soft)',
    border: 'rgba(198,255,63,0.35)',
  },
  ember: {
    text: 'var(--accent-2)',
    soft: 'var(--accent-2-soft)',
    border: 'rgba(255,138,61,0.35)',
  },
  cyan: {
    text: 'var(--accent-3)',
    soft: 'var(--accent-3-soft)',
    border: 'rgba(63,214,255,0.35)',
  },
};

export function Skills() {
  return (
    <section id="skills" className="section" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <p className="micro-label" style={{ marginBottom: 20 }}>02 — arsenal</p>
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 3.2rem)',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              marginBottom: 48,
            }}
          >
            Tech I <span className="text-accent">actually ship with</span>
          </h2>
        </Reveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: 20 }}>
          {SKILL_GROUPS.map((group, i) => {
            const c = COLOR_MAP[group.color];
            return (
              <Reveal key={group.title} delay={i * 0.06}>
                <div
                  className="glass skill-card"
                  style={{
                    padding: 28,
                    height: '100%',
                    transition: 'transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease',
                    border: '1px solid var(--border)',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20 }}>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 18, fontWeight: 600 }}>{group.title}</h3>
                    <span
                      aria-hidden="true"
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 11,
                        color: c.text,
                        background: c.soft,
                        border: `1px solid ${c.border}`,
                        borderRadius: 8,
                        padding: '3px 8px',
                      }}
                    >
                      {String(i + 1).padStart(2, '0')}
                    </span>
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                    {group.items.map((item) => (
                      <span
                        key={item}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: 12,
                          padding: '7px 12px',
                          borderRadius: 999,
                          background: 'var(--surface-2)',
                          border: '1px solid var(--border)',
                          color: 'var(--text-muted)',
                          transition: 'color 0.2s ease, border-color 0.2s ease',
                        }}
                        className="skill-chip"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
