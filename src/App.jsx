import React, { useState, Suspense, lazy } from 'react';

const Resume = lazy(() => import('./components/Resume'));

const projects = [
  {
    num: '01',
    title: 'E-Commerce Platform',
    desc: 'Full-stack store with real-time catalog, cart system, and secure Stripe-style checkout flow.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    demo: 'https://full-stack-developer-test-production.up.railway.app/',
    github: 'https://github.com/artemkrokhinow/Full-Stack-Developer-Test',
    image: '/store.png',
  },
  {
    num: '02',
    title: 'Real-Time Messenger',
    desc: 'Instant messaging app with live chat rooms, online presence indicators, and persistent history.',
    tags: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
    demo: 'https://mymessenger-4jqz.onrender.com',
    github: 'https://github.com/artemkrokhinow/messenger',
    image: '/messenger.png',
  },
  {
    num: '03',
    title: 'Psychological Support',
    desc: 'Mental health platform with emergency resources, training simulators, and professional guidance.',
    tags: ['React', 'Node.js', 'REST API', 'MongoDB'],
    demo: 'https://shelter-1-rhi3.onrender.com',
    github: 'https://github.com/artemkrokhinow/Psychological-Support-Platform',
    image: '/shelter.png',
  },
  {
    num: '04',
    title: 'ElevenLabs Voice App',
    desc: 'Text-to-speech interface with real-time synthesis, voice profiles, and in-browser playback.',
    tags: ['React', 'ElevenLabs API', 'REST'],
    github: 'https://github.com/artemkrokhinow/elevenlabs',
  },
];

const skillCategories = [
  { title: 'Languages', items: ['JavaScript', 'TypeScript', 'Python'] },
  { title: 'Frontend', items: ['React', 'Next.js', 'HTML5', 'CSS3', 'UI/UX Design'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'Nest.js', 'RESTful API', 'Socket.IO'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL', 'NoSQL'] },
  { title: 'DevOps & Tools', items: ['Docker', 'Git', 'GitHub', 'Render', 'Railway'] },
  { title: 'Currently Learning', items: ['PyTorch', 'Machine Learning', 'Redux'] },
];

/* ─── Nav ─── */
const Nav = ({ onResume }) => (
  <nav className="nav">
    <div className="nav-logo">AK.</div>
    <div className="nav-links">
      <a href="#work" className="nav-link">Work</a>
      <a href="#contact" className="nav-link">Contact</a>
      <button onClick={onResume} className="nav-btn">
        Resume
      </button>
      <div className="nav-dot" title="Open to work" />
    </div>
  </nav>
);

/* ─── Hero ─── */
const Hero = ({ onResume }) => (
  <section className="hero" id="hero">
    <span className="hero-eyebrow">Full-Stack Developer · Winterthur, CH</span>
    <h1 className="hero-title">
      I build things<br />
      for the <span className="hero-title-accent">web.</span>
    </h1>
    <p className="hero-subtitle">
      Crafting fast, scalable applications with clean code and interfaces people love to use.
    </p>
    <div className="hero-cta">
      <a href="#work" className="btn-solid">View Projects ↓</a>
      <button onClick={onResume} className="btn-ghost">View Resume</button>
      <a href="#contact" className="btn-ghost" style={{ border: 'none', background: 'transparent' }}>Contacts →</a>
    </div>
    <div className="hero-scroll-hint">
      <span className="scroll-line" />
      Scroll to explore
    </div>
  </section>
);

/* ─── Skills Section ─── */
const Skills = () => (
  <section className="section skills-section" id="skills">
    <span className="section-label">Expertise</span>
    <h2 className="section-heading">Tools & technologies I work with.</h2>
    <div className="skills-grid">
      {skillCategories.map((cat, i) => (
        <div className="skill-category" key={i}>
          <h4 className="skill-category-title">{cat.title}</h4>
          <div className="skill-items">
            {cat.items.map((item, j) => (
              <span className="skill-item" key={j}>{item}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  </section>
);

/* ─── Project Card ─── */
const ProjectCard = ({ num, title, desc, tags, demo, github, image }) => {
  const hasDemo = demo && demo !== '#';
  return (
    <article className="project-card">
      <div className="project-image">
        {image ? (
          <img src={image} alt={title} loading="lazy" decoding="async" />
        ) : (
          <div className="project-image-placeholder">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.25 }}>
              <path d="M13 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9z" />
              <polyline points="13 2 13 9 20 9" />
            </svg>
          </div>
        )}
      </div>
      <div className="project-info">
        <span className="project-number">{num}</span>
        <h3 className="project-title">{title}</h3>
        <p className="project-desc">{desc}</p>
        <div className="project-tags">
          {tags.map((t, i) => <span className="project-tag" key={i}>{t}</span>)}
        </div>
        <div className="project-links">
          {hasDemo && <a href={demo} target="_blank" rel="noreferrer" className="project-link">Live Demo →</a>}
          {github && <a href={github} target="_blank" rel="noreferrer" className="project-link">GitHub →</a>}
        </div>
      </div>
    </article>
  );
};

/* ─── Projects Section ─── */
const Projects = () => (
  <section className="section" id="work">
    <span className="section-label">Selected Work</span>
    <h2 className="section-heading">Projects I've built from scratch.</h2>
    <div className="projects-grid">
      {projects.map((p, i) => <ProjectCard key={i} {...p} />)}
    </div>
  </section>
);

/* ─── Contact ─── */
const Contact = () => (
  <section className="contact-section" id="contact">
    <span className="section-label">Get in Touch</span>
    <h2 className="contact-heading">Let's work<br />together.</h2>
    <p className="contact-sub">Currently open to new opportunities. Drop me a line or find me on GitHub.</p>
    <div className="contact-links">
      <a href="mailto:artkroh@gmail.com" className="contact-pill">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
        artkroh@gmail.com
      </a>
      <a href="tel:+41768234411" className="contact-pill">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
        +41 76 823 44 11
      </a>
      <a href="https://github.com/artemkrokhinow" target="_blank" rel="noreferrer" className="contact-pill">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
        GitHub
      </a>
      <a href="https://www.linkedin.com/in/artem-krokhinov-a7971a303/" target="_blank" rel="noreferrer" className="contact-pill">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
        LinkedIn
      </a>
    </div>
  </section>
);

/* ─── Footer ─── */
const Footer = () => (
  <footer className="footer">
    <span>© {new Date().getFullYear()} Artem Krokhinov</span>
    <span>Built with React</span>
  </footer>
);

/* ─── App ─── */
function App() {
  const [page, setPage] = useState('home');
  const [transitioning, setTransitioning] = useState(false);

  const navigate = (p) => {
    setTransitioning(true);
    setTimeout(() => { setPage(p); setTransitioning(false); window.scrollTo(0, 0); }, 500);
  };

  return (
    <div className={`app-root ${transitioning ? 'fade-out' : 'fade-in'}`}>
      {page === 'home' ? (
        <>
          <Nav onResume={() => navigate('resume')} />
          <Hero onResume={() => navigate('resume')} />
          <Skills />
          <Projects />
          <Contact />
          <Footer />
        </>
      ) : (
        <Suspense fallback={<div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh', color: 'var(--text-2)' }}>Loading…</div>}>
          <Resume onBack={() => navigate('home')} />
        </Suspense>
      )}
    </div>
  );
}

export default App;
