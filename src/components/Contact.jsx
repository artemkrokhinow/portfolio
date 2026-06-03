import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="glass animate-fade-in delay-3" style={{ padding: '2rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <h2 style={{ fontSize: '1.5rem', marginBottom: '0.75rem' }}>Ready to Collaborate?</h2>
      <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.9rem' }}>
        I'm always open to new ideas and exciting projects. Let's build something incredible together!
      </p>
      <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
          <a href="mailto:example@email.com" className="btn btn-primary">Send Email</a>
          <a href="https://github.com/artemkrokhinow" target="_blank" rel="noreferrer" className="btn btn-outline">GitHub</a>
      </div>
    </section>
  );
};

export default Contact;
