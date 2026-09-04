import { Mail, ArrowUp } from 'lucide-react';
import { GithubIcon, XIcon } from './icons';

export function Footer() {
  return (
    <footer style={{ borderTop: '1px solid var(--border)', padding: '48px 0 56px', background: 'var(--bg-alt)' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap' }}>
        <div>
          <div style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: 20, letterSpacing: '0.02em', display: 'flex', alignItems: 'center', gap: 10 }}>
            <span aria-hidden="true" style={{ width: 10, height: 10, borderRadius: 4, background: 'var(--accent)', display: 'inline-block', boxShadow: '0 0 14px var(--glow)' }} />
            MAXIMUS
          </div>
          <p style={{ marginTop: 10, color: 'var(--text-muted)', fontSize: 13.5, fontFamily: 'var(--font-mono)' }}>
            © {new Date().getFullYear()} · built by hand, shipped with obsession
          </p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          {[
            { href: 'https://github.com/maximuskscmdev-lang', label: 'GitHub', icon: <GithubIcon size={17} aria-hidden="true" /> },
            { href: 'https://x.com/maximuskscmdev', label: 'X / Twitter', icon: <XIcon size={15} aria-hidden="true" /> },
            { href: 'mailto:maximuskscm.dev@gmail.com', label: 'Email', icon: <Mail size={17} aria-hidden="true" /> },
          ].map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith('http') ? '_blank' : undefined}
              rel={s.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              aria-label={s.label}
              style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
              className="social-btn"
            >
              {s.icon}
            </a>
          ))}
          <a
            href="#top"
            aria-label="Back to top"
            style={{ width: 42, height: 42, borderRadius: 12, background: 'var(--accent)', color: '#0a0b0d', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'transform 0.2s ease, box-shadow 0.2s ease', boxShadow: '0 6px 20px var(--glow)' }}
            className="to-top"
          >
            <ArrowUp size={18} aria-hidden="true" />
          </a>
        </div>
      </div>
    </footer>
  );
}
