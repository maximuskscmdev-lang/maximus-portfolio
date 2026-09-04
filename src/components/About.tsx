import { Reveal } from './Reveal';

const STORY_POINTS = [
  'Started coding as a hobby — no bootcamp, no degree, no waiting for permission.',
  'Rebuilt a full Android habit tracker in 3 days, including an OS-level workaround to pull Google Fit data.',
  'Designed an educational social platform with real-time messaging and AI moderation from scratch.',
  'Built a browser video editor backed by Rust/C++ — because &ldquo;web&rdquo; should never mean &ldquo;slow&rdquo;.',
  'Currently working on transforming the infrastructure of the university I study at — upgrading campus systems from the inside out.',
];

export function About() {
  return (
    <section id="about" className="section">
      <div className="container grid-about">
        <Reveal>
          <p className="micro-label" style={{ marginBottom: 20 }}>01 — the story</p>
          <h2
            className="section-title"
            style={{
              lineHeight: 1.08,
            }}
          >
            Self-taught, <br />
            <span className="text-accent">self-driven</span>, <br />
            shipping since <span className="text-ember">2025</span>.
          </h2>

          <div
            style={{
              marginTop: 32,
              padding: 24,
              borderRadius: 'var(--radius-md)',
              background: 'var(--surface)',
              border: '1px solid var(--border)',
              fontFamily: 'var(--font-mono)',
              fontSize: 13,
              lineHeight: 2,
              color: 'var(--text-muted)',
            }}
          >
            <div>
              <span style={{ color: 'var(--accent-text)' }}>//</span> the pitch, in one block
            </div>
            <div style={{ color: 'var(--text)' }}>
              <span style={{ color: 'var(--accent-text)' }}>const</span>{' '}
              <span style={{ color: 'var(--accent-3)' }}>maximus</span> = {'{'}
              <br />
              &nbsp;&nbsp;age: <span style={{ color: 'var(--accent-2)' }}>18</span>,
              <br />
              &nbsp;&nbsp;degree: <span style={{ color: 'var(--accent-2)' }}>null</span>,
              <br />
              &nbsp;&nbsp;shipRate: <span style={{ color: 'var(--accent-2)' }}>'very high'</span>,
              <br />
              &nbsp;&nbsp;quit: <span style={{ color: 'var(--accent-2)' }}>false</span>,
              <br />
              {'};'}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15}>
          <p style={{ color: 'var(--text-muted)', fontSize: '1.05rem', lineHeight: 1.8, marginBottom: 28 }}>
            No GitHub streak filler. Every project in my portfolio is a real problem I
            hit, a limit I refused to accept, and a solution I shipped on my own terms.
          </p>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 16 }}>
            {STORY_POINTS.map((point, i) => (
              <li
                key={i}
                style={{
                  display: 'flex',
                  gap: 16,
                  alignItems: 'flex-start',
                  background: 'var(--surface)',
                  border: '1px solid var(--border)',
                  borderRadius: 'var(--radius-md)',
                  padding: '18px 20px',
                  transition: 'border-color 0.25s ease, transform 0.25s ease',
                }}
                className="story-item"
              >
                <span
                  aria-hidden="true"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 12,
                    color: 'var(--accent-text)',
                    background: 'var(--accent-soft)',
                    borderRadius: 8,
                    padding: '4px 8px',
                    flexShrink: 0,
                    marginTop: 2,
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span style={{ color: 'var(--text)', fontSize: '0.98rem', lineHeight: 1.65 }} dangerouslySetInnerHTML={{ __html: point }} />
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
