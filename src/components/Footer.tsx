import { useState } from 'react';
import { Mail, ArrowUp, Check } from 'lucide-react';
import { GithubIcon, DiscordIcon } from './icons';

const DISCORD_USERNAME = 'devil_of_godly_heaven';

export function Footer() {
  const [discordCopied, setDiscordCopied] = useState(false);

  const copyDiscord = async () => {
    try {
      await navigator.clipboard.writeText(DISCORD_USERNAME);
    } catch {
      const ta = document.createElement('textarea');
      ta.value = DISCORD_USERNAME;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand('copy');
      document.body.removeChild(ta);
    }
    setDiscordCopied(true);
    window.setTimeout(() => setDiscordCopied(false), 2000);
  };

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
          <a
            href="https://github.com/maximuskscmdev-lang"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
            className="social-btn"
          >
            <GithubIcon size={17} aria-hidden="true" />
          </a>
          <button
            type="button"
            onClick={copyDiscord}
            aria-label={discordCopied ? 'Discord username copied!' : `Copy Discord username ${DISCORD_USERNAME}`}
            title={`Discord: ${DISCORD_USERNAME} (click to copy)`}
            style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
            className="social-btn"
          >
            {discordCopied ? <Check size={16} aria-hidden="true" /> : <DiscordIcon size={17} aria-hidden="true" />}
          </button>
          <a
            href="mailto:maximuskscm.dev@gmail.com"
            aria-label="Email"
            style={{ width: 42, height: 42, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
            className="social-btn"
          >
            <Mail size={17} aria-hidden="true" />
          </a>
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
