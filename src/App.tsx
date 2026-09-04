import { useEffect } from 'react';
import Lenis from 'lenis';
import { Nav } from './components/Nav';
import { Hero } from './components/Hero';
import { Marquee } from './components/Marquee';
import { About } from './components/About';
import { Stats } from './components/Stats';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Services } from './components/Services';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { Cursor } from './components/Cursor';

function App() {
  useEffect(() => {
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reduce) return;

    const lenis = new Lenis({
      duration: 1.1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });

    // Expose for modals / overlays so they can pause smooth-scroll
    // while an inner scroll container (marked with data-lenis-prevent) is active.
    (window as unknown as { __lenis?: Lenis }).__lenis = lenis;

    let raf = 0;
    const loop = (time: number) => {
      lenis.raf(time);
      raf = requestAnimationFrame(loop);
    };
    raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      lenis.destroy();
      if ((window as unknown as { __lenis?: Lenis }).__lenis === lenis) {
        delete (window as unknown as { __lenis?: Lenis }).__lenis;
      }
    };
  }, []);

  return (
    <>
      <div className="blobs" aria-hidden="true">
        <div className="blob blob-lime" />
        <div className="blob blob-ember" />
        <div className="blob blob-cyan" />
      </div>
      <div className="noise" aria-hidden="true" />

      <Cursor />
      <Nav />

      <main>
        <Hero />
        <Marquee />
        <About />
        <Stats />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>

      <Footer />
    </>
  );
}

export default App;
