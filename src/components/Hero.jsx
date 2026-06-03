import React from 'react';

const Hero = () => {
  return (
    <section className="container" style={{ minHeight: '90vh', display: 'flex', alignItems: 'center' }}>
      <div className="animate-fade-in" style={{ maxWidth: '800px' }}>
        <h2 style={{ fontSize: '1.5rem', color: 'var(--text-secondary)', marginBottom: '1rem' }}>
          Привет, добро пожаловать в мое
        </h2>
        <h1 style={{ fontSize: 'clamp(3rem, 8vw, 5rem)', marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
          <span className="text-gradient">Портфолио.</span><br />
          Создаю цифровые шедевры.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', maxWidth: '600px' }}>
          Я разрабатываю современные, быстрые и потрясающе красивые веб-приложения с вниманием к каждой детали.
        </p>
        <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
          <a href="#projects" className="btn btn-primary">Смотреть проекты</a>
          <a href="#contact" className="btn btn-outline">Связаться со мной</a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
