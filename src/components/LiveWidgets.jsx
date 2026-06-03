import React, { useState, useEffect } from 'react';
import BentoCard from './BentoCard';

export const TimeWidget = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const timeString = time.toLocaleTimeString('en-US', { timeZone: 'Europe/Zurich', hour: '2-digit', minute: '2-digit', second: '2-digit' });

  return (
    <BentoCard spanClasses="span-1x1" style={{ justifyContent: 'center', alignItems: 'center', padding: '1.5rem', background: 'var(--glass-bg)' }}>
      <div style={{ textAlign: 'center' }}>
        <h3 style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '0.5rem' }}>
          Local Time
        </h3>
        <p style={{ fontSize: '1.8rem', fontWeight: '800', color: 'var(--text-primary)', marginBottom: '0.25rem', fontVariantNumeric: 'tabular-nums' }}>
          {timeString}
        </p>
        <p style={{ fontSize: '0.9rem', color: 'var(--accent-color)', fontWeight: '600' }}>
          Winterthur, CH
        </p>
      </div>
    </BentoCard>
  );
};

export const StatusWidget = () => {
  return (
    <BentoCard spanClasses="span-1x1" style={{ justifyContent: 'center', alignItems: 'center', padding: '1.5rem', background: 'rgba(34, 197, 94, 0.05)' }}>
      <div style={{ textAlign: 'center', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
        <div style={{ position: 'relative', width: '24px', height: '24px' }}>
          <div style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#22c55e', borderRadius: '50%', opacity: 0.4, animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite' }} />
          <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '12px', height: '12px', backgroundColor: '#22c55e', borderRadius: '50%', boxShadow: '0 0 10px #22c55e' }} />
        </div>
        <div>
          <h3 style={{ fontSize: '1.1rem', color: 'var(--text-primary)', fontWeight: '800', marginBottom: '0.25rem' }}>
            Open to Work
          </h3>
          <p style={{ fontSize: '0.8rem', color: 'var(--text-secondary)' }}>
            Available for new opportunities
          </p>
        </div>
      </div>
    </BentoCard>
  );
};

export const SocialWidget = ({ spanClasses = "span-1x1" }) => {
  return (
    <BentoCard spanClasses={spanClasses} style={{ justifyContent: 'center', alignItems: 'center', padding: '1.5rem' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', width: '100%', height: '100%' }}>
        <a href="https://github.com/artemkrokhinow" target="_blank" rel="noreferrer" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.03)', transition: 'background 0.3s' }} className="social-btn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
          <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>GitHub</span>
        </a>
        <a href="mailto:artkroh@gmail.com" style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', borderRadius: '12px', backgroundColor: 'rgba(255,255,255,0.03)', transition: 'background 0.3s' }} className="social-btn">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
          <span style={{ fontSize: '0.8rem', fontWeight: '600' }}>Email</span>
        </a>
      </div>
    </BentoCard>
  );
};
