import React from 'react';

const Resume = ({ onBack }) => (
  <div className="resume-page">
    <button onClick={onBack} className="resume-back">
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
      Back to Portfolio
    </button>

    <header className="resume-header">
      <h1 className="resume-name">Artem Krokhinov</h1>
      <p className="resume-role">Full-Stack Developer</p>
      <div className="resume-contact-row">
        <span>📞 +41 76 823 44 11</span>
        <span>✉️ artkroh@gmail.com</span>
        <span>📍 Winterthur, Switzerland</span>
        <a href="https://github.com/artemkrokhinow" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>GitHub ↗</a>
        <a href="https://www.linkedin.com/in/artem-krokhinov-a7971a303/" target="_blank" rel="noreferrer" style={{ color: 'var(--accent)' }}>LinkedIn ↗</a>
      </div>
    </header>

    <div className="resume-grid">
      {/* Left Column */}
      <div>
        <h3 className="resume-section-title">Education</h3>
        <div className="resume-item">
          <p className="resume-item-title">College of Radio Electronics</p>
          <p className="resume-item-sub">Ukraine, Kharkiv · 2022–2025</p>
          <p className="resume-item-accent">Computer Engineering</p>
        </div>
        <div className="resume-item">
          <p className="resume-item-title">Profil. Berufsvorbereitung</p>
          <p className="resume-item-sub">Winterthur · 2025–2026</p>
          <p className="resume-item-accent">Vocational Preparation</p>
        </div>

        <h3 className="resume-section-title" style={{ marginTop: '32px' }}>Languages</h3>
        <div className="resume-lang-item"><span>German</span><span className="resume-lang-level">B1</span></div>
        <div className="resume-lang-item"><span>English</span><span className="resume-lang-level">B2</span></div>
        <div className="resume-lang-item"><span>Russian</span><span className="resume-lang-level">Native</span></div>
        <div className="resume-lang-item"><span>Ukrainian</span><span className="resume-lang-level">Native</span></div>
      </div>

      {/* Right Column */}
      <div>
        <h3 className="resume-section-title">Skills</h3>

        <p className="resume-skill-category">Programming Languages</p>
        <div className="resume-skill-pills">
          <span className="resume-skill-pill">JavaScript</span>
          <span className="resume-skill-pill">Python</span>
          <span className="resume-skill-pill">TypeScript</span>
        </div>

        <p className="resume-skill-category">Frontend</p>
        <div className="resume-skill-pills">
          <span className="resume-skill-pill">React</span>
          <span className="resume-skill-pill">Next.js</span>
          <span className="resume-skill-pill">HTML</span>
          <span className="resume-skill-pill">CSS</span>
          <span className="resume-skill-pill">UI/UX</span>
        </div>

        <p className="resume-skill-category">Backend</p>
        <div className="resume-skill-pills">
          <span className="resume-skill-pill">Node.js</span>
          <span className="resume-skill-pill">Nest.js</span>
          <span className="resume-skill-pill">Express.js</span>
          <span className="resume-skill-pill">RESTful API</span>
        </div>

        <p className="resume-skill-category">Database</p>
        <div className="resume-skill-pills">
          <span className="resume-skill-pill">MongoDB</span>
          <span className="resume-skill-pill">MySQL</span>
          <span className="resume-skill-pill">NoSQL</span>
        </div>

        <p className="resume-skill-category">DevOps</p>
        <div className="resume-skill-pills">
          <span className="resume-skill-pill">Docker</span>
          <span className="resume-skill-pill">Git</span>
        </div>

        <p className="resume-skill-category">ML / AI</p>
        <div className="resume-skill-pills">
          <span className="resume-skill-pill">PyTorch (In progress)</span>
        </div>
      </div>
    </div>
  </div>
);

export default Resume;
