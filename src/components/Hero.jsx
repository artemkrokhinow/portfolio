import React from 'react';

const Hero = ({ onNavigate }) => {
  return (
    <section className="glass animate-fade-in" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', flex: 1 }}>
      <div>
        <h2 style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '0.5rem' }}>
          Hi, welcome to my
        </h2>
        <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
          <span className="text-gradient">Portfolio.</span><br />
          Crafting digital masterpieces.
        </h1>
        <p style={{ fontSize: '1rem', color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>
          I build modern, fast, and stunning web applications with meticulous attention to detail.
        </p>
        <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">View Projects</a>
          <button onClick={onNavigate} className="btn btn-outline">View Resume</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
