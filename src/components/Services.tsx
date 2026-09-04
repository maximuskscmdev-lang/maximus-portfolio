import { Reveal } from './Reveal';
import { Globe, LayoutDashboard, Smartphone, BrainCircuit, ArrowRight } from 'lucide-react';

const SERVICES = [
  {
    icon: Globe,
    title: 'Custom websites',
    desc: 'Portfolios, business sites, landing pages — fast, modern, and built to convert visitors into customers.',
    points: ['Pixel-perfect design', 'Animations that impress', 'SEO & performance tuned'],
    color: 'lime',
  },
  {
    icon: LayoutDashboard,
    title: 'Web apps & tools',
    desc: 'Dashboards, platforms, utilities — real-time, data-driven software that solves actual problems.',
    points: ['Real-time features', 'Auth & databases', 'Complex workflows'],
    color: 'cyan',
  },
  {
    icon: Smartphone,
    title: 'Android apps',
    desc: 'React Native apps with native-grade performance — including background services most devs avoid.',
    points: ['React Native & native services', 'Play Store ready', 'Offline-first'],
    color: 'ember',
  },
  {
    icon: BrainCircuit,
    title: 'AI-powered tools',
    desc: 'Chatbots, smart automation, content pipelines — practical AI wired into your product, not gimmicks.',
    points: ['AI moderation & assistants', 'TTS / document pipelines', 'Data parsing at scale'],
    color: 'lime',
  },
];

const COLOR_MAP: Record<string, { text: string; soft: string; border: string }> = {
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

export function Services() {
  return (
    <section id="services" className="section" style={{ background: 'var(--bg-alt)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="container">
        <Reveal>
          <p className="micro-label" style={{ marginBottom: 20 }}>04 — for you</p>
          <h2
            className="section-title"
            style={{
              lineHeight: 1.1,
              marginBottom: 16,
            }}
          >
            Have an idea? <span className="text-accent">I&apos;ll build it.</span>
          </h2>
          <p style={{ color: 'var(--text-muted)', maxWidth: 560, fontSize: '1.05rem', marginBottom: 48 }}>
            You bring the idea, I bring the code. From a single landing page to a full
            platform with an Android companion app — here&apos;s what I can make for you.
          </p>
        </Reveal>

        <div className="grid-services">
          {SERVICES.map((service, i) => {
            const c = COLOR_MAP[service.color];
            const Icon = service.icon;
            return (
              <Reveal key={service.title} delay={i * 0.07}>
                <div
                  className="glass service-card"
                  style={{
                    padding: 32,
                    height: '100%',
                    border: '1px solid var(--border)',
                    transition: 'transform 0.25s ease, border-color 0.25s ease',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 16,
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 44,
                        height: 44,
                        borderRadius: 12,
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        background: c.soft,
                        border: `1px solid ${c.border}`,
                        color: c.text,
                      }}
                    >
                      <Icon size={20} />
                    </span>
                    <h3 style={{ fontFamily: 'var(--font-display)', fontSize: 20, fontWeight: 600 }}>{service.title}</h3>
                  </div>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.96rem', lineHeight: 1.7 }}>{service.desc}</p>
                  <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: 8 }}>
                    {service.points.map((point) => (
                      <li key={point} style={{ display: 'flex', gap: 10, alignItems: 'center', fontFamily: 'var(--font-mono)', fontSize: 12.5, color: 'var(--text)' }}>
                        <span style={{ color: c.text }} aria-hidden="true">✓</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={0.1}>
          <a
            href="#contact"
            className="btn btn-primary services-cta"
          >
            Start your project <ArrowRight size={18} aria-hidden="true" />
          </a>
        </Reveal>
      </div>
    </section>
  );
}
