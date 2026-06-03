import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="container animate-fade-in delay-3" style={{ paddingBottom: '100px' }}>
      <div className="glass" style={{ padding: '4rem 2rem', textAlign: 'center' }}>
        <h2 className="section-title" style={{ marginBottom: '1.5rem' }}>Готовы к сотрудничеству?</h2>
        <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto 2.5rem' }}>
          Я всегда открыт для новых идей и интересных проектов. Давайте создадим что-то невероятное вместе!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
            <a href="mailto:example@email.com" className="btn btn-primary">Написать письмо</a>
            <a href="https://github.com/artemkrokhinow" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
