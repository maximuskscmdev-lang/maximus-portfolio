export type ProjectCategory =
  | 'Main Showcase'
  | 'Large Scale'
  | 'JEE Prep'
  | 'Big Tools'
  | 'Small Tools'
  | 'Specialized Android';

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  category: ProjectCategory;
  isMainShowcase: boolean;
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  apkUrl?: string;
  stack: string[];
  highlights: string[];
  year: string;
}

export const CATEGORY_COLORS: Record<ProjectCategory, 'lime' | 'ember' | 'cyan'> = {
  'Main Showcase': 'lime',
  'Large Scale': 'lime',
  'Specialized Android': 'ember',
  'JEE Prep': 'cyan',
  'Big Tools': 'ember',
  'Small Tools': 'cyan',
};

export const projects: Project[] = [
  {
    id: 'solstice',
    title: 'Solstice',
    tagline: 'A live online store that turns visitors into paying customers',
    description:
      'This is what I can build for your business: a fast, modern online store where customers browse your products, add to cart, and check out — on any device. It has limited-time drops with countdowns that create urgency and drive sales, plus lookbook and journal pages that tell your brand story and build trust. Live right now — click through and shop it like a real customer.',
    category: 'Large Scale',
    isMainShowcase: true,
    tags: ['Online Store', 'E-commerce', 'Live Demo', 'Checkout'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/solstice',
    liveUrl: 'https://solstice-kohl.vercel.app',
    stack: ['Next.js 16', 'React 19', 'TypeScript', 'Zustand', 'Tailwind CSS 4', 'Vercel'],
    highlights: [
      'Built to sell: browse → cart → checkout with zero friction',
      'Urgency that drives revenue: limited drops with live countdowns',
      'Shoppers never lose their cart — saved cart + wishlist bring them back',
      'Your brand, your story: lookbook & journal pages that win trust',
    ],
    year: '2026',
  },
  {
    id: 'Habit-Quest',
    title: 'HabitQuest',
    tagline: 'Android habit tracker with live Google Fit data',
    description:
      'A native Android habit tracking app rebuilt in 3 days. Bypasses OS limitations to extract Google Fit data and syncs through Firebase/Supabase real-time databases.',
    category: 'Large Scale',
    isMainShowcase: true,
    tags: ['React Native', 'Android', 'Firebase', 'Google Fit API'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/HabitQuestRN',
    stack: ['React Native', 'Firebase', 'Supabase', 'Google Fit API', 'Node.js'],
    highlights: [
      'Full rebuild in under 72 hours',
      'OS-limit bypass for Google Fit data extraction',
      'Real-time sync across two databases',
      'Native Android polish with animations',
    ],
    year: '2025',
  },
  {
    id: 'stugenz-final',
    title: 'Stugenz',
    tagline: 'Educational social media platform with AI moderation',
    description:
      'An educational social media platform featuring real-time messaging, AI moderation, and proprietary algorithms for quality-based personalized feeds.',
    category: 'Large Scale',
    isMainShowcase: true,
    tags: ['Web', 'Real-time', 'AI Moderation', 'Algorithms'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/stugenz-final',
    stack: ['React', 'TypeScript', 'WebSockets', 'AI APIs', 'Node.js'],
    highlights: [
      'Real-time messaging infrastructure',
      'AI-powered content moderation pipeline',
      'Proprietary feed-ranking algorithms',
      'Built for academic environments',
    ],
    year: '2025',
  },
  {
    id: 'video-editor',
    title: 'Video Editor',
    tagline: 'Node-based color grading with Rust/C++ power',
    description:
      'A highly sophisticated web-based video editor featuring a node-based workflow for color grading, integrated with high-performance C++/Rust backends.',
    category: 'Large Scale',
    isMainShowcase: true,
    tags: ['Video', 'Node-based', 'Rust', 'C++'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/video-editor',
    stack: ['TypeScript', 'Rust', 'C++', 'WebGL', 'Canvas'],
    highlights: [
      'Node-based color grading graph',
      'Rust/C++ native performance backends',
      'Real-time preview pipeline',
      'Professional-grade tooling in the browser',
    ],
    year: '2025',
  },
  {
    id: 'audiobook',
    title: 'Audiobook App',
    tagline: 'Any PDF, TXT or EPUB becomes a spoken audiobook',
    description:
      'Converts any PDF, TXT, or EPUB document into an audiobook using TTS, orchestrating web UIs with high-performance Python/Rust backends.',
    category: 'Large Scale',
    isMainShowcase: true,
    tags: ['Audiobook', 'TTS', 'Rust', 'Python'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/audiobook',
    stack: ['React', 'Python', 'Rust', 'TTS engines'],
    highlights: [
      'Multi-format document ingestion',
      'High-performance Rust/Python orchestration',
      'Natural speech synthesis pipeline',
      'Bookmark & resume playback',
    ],
    year: '2025',
  },
  {
    id: 'Listen',
    title: 'Listen',
    tagline: 'Background-audio lecture tracker with Excel export',
    description:
      'A React Native Android app that bypasses background security to continuously listen to lectures, allocate points, and export data to formatted Excel sheets.',
    category: 'Specialized Android',
    isMainShowcase: true,
    tags: ['Android', 'Background Service', 'Audio Processing', 'Excel'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/ClassPointsTracker',
    stack: ['React Native', 'Android Services', 'Audio Processing', 'Excel export'],
    highlights: [
      'Persistent background audio processing',
      'OS security bypass for continuous listening',
      'Point allocation engine',
      'Formatted Excel sheet export',
    ],
    year: '2025',
  },
  {
    id: 'projedu',
    title: 'Projedu',
    tagline: 'Stugenz rebuilt from strict client wireframes',
    description:
      'A complete iteration of Stugenz, built directly from strict client wireframes with advanced moderation controls for academic environments.',
    category: 'Large Scale',
    isMainShowcase: false,
    tags: ['Web', 'Platform', 'Moderation'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/projedu',
    stack: ['React', 'TypeScript', 'Node.js'],
    highlights: [
      'Pixel-faithful to client wireframes',
      'Advanced academic moderation controls',
      'Full platform iteration of Stugenz',
    ],
    year: '2025',
  },
  {
    id: 'Habits-jee',
    title: 'HabitsJEE',
    tagline: 'TWA web app for intense JEE prep',
    description:
      'A TWA web application personalized to optimize intense JEE preparation and track daily academic habits.',
    category: 'JEE Prep',
    isMainShowcase: false,
    tags: ['TWA', 'Web', 'PWA'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/Habits-jee',
    stack: ['Web', 'PWA', 'TWA'],
    highlights: ['Installable TWA experience', 'Daily habit tracking', 'JEE-optimized routines'],
    year: '2025',
  },
  {
    id: 'Titan-OS1',
    title: 'Titanos',
    tagline: 'Core productivity ecosystem, Dec 2025 phase',
    description:
      'A TWA web application engineered as part of my core productivity ecosystem during the Dec 2025 JEE prep phase.',
    category: 'JEE Prep',
    isMainShowcase: false,
    tags: ['TWA', 'Web', 'Routine'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/Titan-OS1',
    stack: ['Web', 'PWA', 'Routine engine'],
    highlights: ['Personal productivity OS', 'Structured daily routines'],
    year: '2025',
  },
  {
    id: 'War_room',
    title: 'War Room',
    tagline: 'Intensive focus sessions, zero distractions',
    description:
      'A robust productivity project designed for managing intensive, uninterrupted study and work sessions.',
    category: 'Large Scale',
    isMainShowcase: false,
    tags: ['Productivity', 'Focus'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/War_room',
    stack: ['React', 'TypeScript'],
    highlights: ['Deep-focus session manager', 'Distraction guardrails'],
    year: '2025',
  },
  {
    id: 'NET_prep',
    title: 'NET Prep',
    tagline: 'Book directories → summaries, quizzes, mind maps',
    description:
      'An advanced data parsing utility that processes massive directories of books to generate accurate summaries, quizzes, and mind maps.',
    category: 'JEE Prep',
    isMainShowcase: false,
    tags: ['Data Parsing', 'AI Analysis', 'Utility'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/NET_prep',
    stack: ['Python', 'AI Analysis', 'Parsers'],
    highlights: ['Massive directory parsing', 'AI summary generation', 'Quiz & mind-map export'],
    year: '2025',
  },
  {
    id: 'proj-jee',
    title: 'Proj JEE',
    tagline: 'Specialized exam-prep tooling',
    description:
      'A focused project developing specialized tools for exam preparation, managing browser memory persistence.',
    category: 'JEE Prep',
    isMainShowcase: false,
    tags: ['Web', 'Tool', 'Data Handling'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/proj-jee',
    stack: ['Web', 'Browser storage'],
    highlights: ['Exam prep utilities', 'Memory persistence layer'],
    year: '2025',
  },
  {
    id: 'Produc-scout',
    title: 'Product Scout',
    tagline: 'Rapid product research & analysis',
    description:
      'A comprehensive web tool for scouting and analyzing products rapidly.',
    category: 'Big Tools',
    isMainShowcase: false,
    tags: ['Tool', 'Analysis'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/Produc-scout',
    stack: ['React', 'Analysis engine'],
    highlights: ['Rapid product scouting', 'Structured analysis output'],
    year: '2025',
  },
  {
    id: 'RepoFinder',
    title: 'Repo Finder',
    tagline: 'GitHub Store clone pushing AI orchestration limits',
    description:
      'A robust clone of GitHub Store built from scratch to push the absolute limits of Google AI Studio orchestration.',
    category: 'Big Tools',
    isMainShowcase: false,
    tags: ['Tool', 'GitHub API', 'AI Orchestration'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/RepoFinder',
    stack: ['React', 'GitHub API', 'Google AI Studio'],
    highlights: ['Full GitHub Store clone', 'AI orchestration at scale'],
    year: '2025',
  },
  {
    id: 'Timer-tool',
    title: 'Timer Tool',
    tagline: 'Lightweight exam time management',
    description:
      'A lightweight and focused small utility for time management during exams.',
    category: 'Small Tools',
    isMainShowcase: false,
    tags: ['Tool', 'Utility'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/Timer-tool',
    stack: ['Web'],
    highlights: ['Zero-friction exam timer'],
    year: '2025',
  },
  {
    id: 'errtrack',
    title: 'Errtrack',
    tagline: 'Error tracking with persistent logs',
    description:
      'A custom utility engineered for tracking errors and handling persistent logs.',
    category: 'Small Tools',
    isMainShowcase: false,
    tags: ['Tool', 'Logging'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/errtrack',
    stack: ['Node.js', 'Logging'],
    highlights: ['Error capture pipeline', 'Persistent log storage'],
    year: '2025',
  },
  {
    id: 'portfolio',
    title: 'Portfolio v1',
    tagline: 'The original portfolio — where this all started',
    description:
      'The first personal portfolio website, built with React, Vite, and Framer Motion — the predecessor to the site you are looking at.',
    category: 'Small Tools',
    isMainShowcase: false,
    tags: ['React', 'Framer Motion', 'Web'],
    githubUrl: 'https://github.com/maximuskscmdev-lang/portfolio',
    stack: ['React', 'Vite', 'Framer Motion', 'Three.js'],
    highlights: ['Custom verlet-physics hero', 'Glassmorphism design system'],
    year: '2025',
  },
];

export const featuredProjects = projects.filter((p) => p.isMainShowcase);
export const otherProjects = projects.filter((p) => !p.isMainShowcase);
