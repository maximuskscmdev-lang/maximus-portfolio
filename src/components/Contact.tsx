import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, Loader2, CheckCircle2, AlertTriangle, Copy, Check } from 'lucide-react';
import { GithubIcon, DiscordIcon } from './icons';
import { Reveal } from './Reveal';
import { isSupabaseConfigured, submitContact, type ContactPayload } from '../lib/supabase';

const PROJECT_TYPES = [
  'Custom website',
  'Web app / tool',
  'Android app',
  'AI-powered tool',
  'Something else',
];

const BUDGETS = ['Under $100', '$100 – $500', '$500 – $2k', '$2k+', 'Not sure yet'];

type Status = 'idle' | 'sending' | 'success' | 'error';

const DISCORD_USERNAME = 'devil_of_godly_heaven';

export function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [discordCopied, setDiscordCopied] = useState(false);
  const [form, setForm] = useState<ContactPayload>({
    name: '',
    email: '',
    projectType: PROJECT_TYPES[0],
    budget: BUDGETS[0],
    message: '',
  });

  const update = (key: keyof ContactPayload, value: string) =>
    setForm((f) => ({ ...f, [key]: value }));

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

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await submitContact(form);
      setStatus('success');
      setForm({ name: '', email: '', projectType: PROJECT_TYPES[0], budget: BUDGETS[0], message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle = {
    width: '100%',
    padding: '14px 16px',
    borderRadius: 12,
    background: 'var(--surface)',
    border: '1px solid var(--border-strong)',
    color: 'var(--text)',
    fontFamily: 'var(--font-body)',
    fontSize: 16,
    transition: 'border-color 0.2s ease, box-shadow 0.2s ease',
  } as const;

  return (
    <section id="contact" className="section">
      <div className="container">
        <Reveal>
          <p className="micro-label" style={{ marginBottom: 20 }}>05 — contact</p>
          <h2
            className="section-title"
            style={{
              lineHeight: 1.08,
              marginBottom: 16,
            }}
          >
            Let&apos;s build your <span className="text-accent">next thing</span>.
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 520, fontSize: '1.05rem', marginBottom: 48 }}>
            Tell me what you want to make. I reply fast, I quote honestly, and I ship
            even faster.
          </p>
        </Reveal>

        <div className="grid-contact">
          <Reveal>
            <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: 20, minWidth: 0 }}>
              <div className="grid-form-2">
                <div>
                  <label htmlFor="name" style={{ display: 'block', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Your name
                  </label>
                  <input
                    id="name"
                    required
                    value={form.name}
                    onChange={(e) => update('name', e.target.value)}
                    placeholder="Jane Doe"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label htmlFor="email" style={{ display: 'block', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                    placeholder="jane@company.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid-form-2">
                <div>
                  <label htmlFor="projectType" style={{ display: 'block', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Project type
                  </label>
                  <select
                    id="projectType"
                    value={form.projectType}
                    onChange={(e) => update('projectType', e.target.value)}
                    style={{ ...inputStyle, appearance: 'auto' }}
                  >
                    {PROJECT_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label htmlFor="budget" style={{ display: 'block', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                    Budget range
                  </label>
                  <select
                    id="budget"
                    value={form.budget}
                    onChange={(e) => update('budget', e.target.value)}
                    style={{ ...inputStyle, appearance: 'auto' }}
                  >
                    {BUDGETS.map((b) => (
                      <option key={b} value={b}>{b}</option>
                    ))}
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" style={{ display: 'block', marginBottom: 8, fontFamily: 'var(--font-mono)', fontSize: 12, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>
                  About your project
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                  placeholder="I need a website/app that..."
                  style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }}
                />
              </div>

              {status === 'error' && (
                <div
                  role="alert"
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'var(--accent-2-soft)',
                    border: '1px solid rgba(255,138,61,0.4)',
                    color: 'var(--accent-2)',
                    fontSize: 14,
                  }}
                >
                  <AlertTriangle size={16} aria-hidden="true" />
                  {isSupabaseConfigured
                    ? 'Something went wrong sending your message. Please try again, or email me directly.'
                    : 'Form backend is not connected yet — reach me directly at the email on the right.'}
                </div>
              )}

              {status === 'success' && (
                <div
                  role="status"
                  style={{
                    display: 'flex',
                    gap: 10,
                    alignItems: 'center',
                    padding: '12px 16px',
                    borderRadius: 12,
                    background: 'var(--accent-soft)',
                    border: '1px solid rgba(198,255,63,0.4)',
                    color: 'var(--accent-text)',
                    fontSize: 14,
                  }}
                >
                  <CheckCircle2 size={16} aria-hidden="true" />
                  Message sent! I&apos;ll get back to you soon.
                </div>
              )}

              <motion.button
                type="submit"
                disabled={status === 'sending'}
                className="btn btn-primary contact-submit"
                whileTap={{ scale: 0.97 }}
                style={{ alignSelf: 'flex-start', opacity: status === 'sending' ? 0.7 : 1 }}
              >
                {status === 'sending' ? (
                  <>
                    <Loader2 size={17} className="spin" aria-hidden="true" /> Sending...
                  </>
                ) : (
                  <>
                    Send message <Send size={16} aria-hidden="true" />
                  </>
                )}
              </motion.button>
            </form>
          </Reveal>

          <Reveal delay={0.15}>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <a
                href="mailto:maximuskscm.dev@gmail.com"
                className="glass contact-card"
                style={{ padding: 28, display: 'flex', gap: 16, alignItems: 'flex-start', border: '1px solid var(--border)', transition: 'transform 0.25s ease, border-color 0.25s ease' }}
              >
                <span aria-hidden="true" style={{ width: 44, height: 44, borderRadius: 12, background: 'var(--accent-soft)', border: '1px solid rgba(198,255,63,0.35)', color: 'var(--accent-text)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Mail size={20} />
                </span>
                <span>
                  <span style={{ display: 'block', fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 6 }}>
                    Email me directly
                  </span>
                  <span className="wrap-anywhere" style={{ fontFamily: 'var(--font-mono)', fontSize: 14, color: 'var(--text)' }}>maximuskscm.dev@gmail.com</span>
                </span>
              </a>

              <div
                className="glass"
                style={{ padding: 28, border: '1px solid var(--border)' }}
              >
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--text-muted)', marginBottom: 16 }}>
                  Elsewhere
                </div>
                <div style={{ display: 'flex', gap: 12 }}>
                  <a
                    href="https://github.com/maximuskscmdev-lang"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="GitHub profile"
                    style={{ width: 46, height: 46, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
                    className="social-btn"
                  >
                    <GithubIcon size={19} aria-hidden="true" />
                  </a>
                  <button
                    type="button"
                    onClick={copyDiscord}
                    aria-label={discordCopied ? 'Discord username copied!' : `Copy Discord username ${DISCORD_USERNAME}`}
                    title={`Discord: ${DISCORD_USERNAME} (click to copy)`}
                    style={{ width: 46, height: 46, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
                    className="social-btn"
                  >
                    {discordCopied ? <Check size={17} aria-hidden="true" /> : <DiscordIcon size={19} aria-hidden="true" />}
                  </button>
                  <a
                    href="mailto:maximuskscm.dev@gmail.com"
                    aria-label="Send an email"
                    style={{ width: 46, height: 46, borderRadius: 12, border: '1px solid var(--border-strong)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', transition: 'border-color 0.2s ease, background 0.2s ease, transform 0.2s ease' }}
                    className="social-btn"
                  >
                    <Mail size={19} aria-hidden="true" />
                  </a>
                </div>
                <button
                  type="button"
                  onClick={copyDiscord}
                  className="wrap-anywhere"
                  style={{ marginTop: 14, display: 'inline-flex', alignItems: 'center', gap: 8, fontFamily: 'var(--font-mono)', fontSize: 12.5, color: discordCopied ? 'var(--accent-text)' : 'var(--text-muted)', transition: 'color 0.2s ease' }}
                  aria-live="polite"
                >
                  {discordCopied ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}
                  {discordCopied ? 'copied!' : `discord: ${DISCORD_USERNAME}`}
                </button>
              </div>

              <div
                style={{
                  padding: 24,
                  borderRadius: 'var(--radius-lg)',
                  border: '1px dashed var(--border-strong)',
                  background: 'var(--surface)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: 12.5,
                  lineHeight: 1.9,
                  color: 'var(--text-muted)',
                }}
              >
                <div style={{ color: 'var(--accent-text)', marginBottom: 8 }}>// what happens next</div>
                <div>01 · I read every message myself</div>
                <div>02 · free consultation on your idea</div>
                <div>03 · honest quote within 24h</div>
                <div>04 · you watch it get built</div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
