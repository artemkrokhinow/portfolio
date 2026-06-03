import React from 'react';
import BentoCard from './BentoCard';

const ProjectCard = ({ title, description, tags, link, github, image, comingSoon = false, spanClasses = 'span-1x1' }) => {
  const hasDemo = !comingSoon && link && link !== '#';

  return (
    <BentoCard spanClasses={spanClasses} style={{ padding: '1.25rem', opacity: comingSoon ? 0.8 : 1 }}>
      <div
        style={{
          width: '100%',
          flex: '1 0 100px',
          minHeight: '100px',
          backgroundColor: 'rgba(255,255,255,0.02)',
          borderRadius: '12px',
          marginBottom: '1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--text-secondary)',
          backgroundImage: image ? 'none' : 'linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.01) 75%, transparent 75%, transparent)',
          backgroundSize: '20px 20px',
          position: 'relative',
          overflow: 'hidden'
        }}
      >
        {image ? (
          <div style={{ width: '90%', height: '90%', display: 'flex', flexDirection: 'column', backgroundColor: '#0f172a', border: '1px solid rgba(255,255,255,0.08)', borderRadius: '6px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
            <div style={{ height: '18px', backgroundColor: 'rgba(255,255,255,0.03)', borderBottom: '1px solid rgba(255,255,255,0.05)', display: 'flex', alignItems: 'center', padding: '0 6px', gap: '4px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#ef4444' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#eab308' }} />
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', backgroundColor: '#22c55e' }} />
            </div>
            <div style={{ flex: 1, overflow: 'hidden' }}>
              <img 
                src={image} 
                alt={title} 
                loading="lazy"
                decoding="async"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'top left',
                  transition: 'transform 0.5s ease'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              />
            </div>
          </div>
        ) : comingSoon ? (
          <svg width="100%" height="100%" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ opacity: 0.4, color: 'var(--accent-color)' }}>
            <rect x="20" y="15" width="160" height="70" rx="4" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" />
            <rect x="25" y="20" width="30" height="60" rx="2" stroke="currentColor" strokeWidth="1" />
            <rect x="60" y="20" width="115" height="12" rx="2" stroke="currentColor" strokeWidth="1" />
            <rect x="60" y="38" width="60" height="42" rx="2" stroke="currentColor" strokeWidth="1" />
            <rect x="125" y="38" width="50" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
            <rect x="125" y="62" width="50" height="18" rx="2" stroke="currentColor" strokeWidth="1" />
            <path d="M 65 65 Q 80 45 95 65 T 115 50" stroke="currentColor" strokeWidth="1.5" fill="none" />
          </svg>
        ) : (
          <svg
            width="32"
            height="32"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ opacity: 0.3 }}
            aria-hidden
          >
            <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
            <circle cx="8.5" cy="8.5" r="1.5" />
            <polyline points="21 15 16 10 5 21" />
          </svg>
        )}
      </div>

      <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: '0 0 0.5rem 0', textShadow: comingSoon ? '0 0 10px rgba(59, 130, 246, 0.3)' : 'none' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', fontSize: '0.85rem', margin: '0 0 1rem 0', overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical' }}>
        {description}
      </p>

      <div style={{ display: 'flex', gap: '0.25rem', flexWrap: 'wrap', marginTop: 'auto', marginBottom: '1rem' }}>
        {tags && tags.map((tag, i) => (
          <span
            key={i}
            style={{
              fontSize: '0.7rem',
              padding: '2px 8px',
              backgroundColor: 'rgba(59, 130, 246, 0.1)',
              color: 'var(--accent-color)',
              borderRadius: '20px',
              fontWeight: 600,
            }}
          >
            {tag}
          </span>
        ))}
      </div>

      <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
        {hasDemo && (
          <a href={link} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 600, textDecoration: 'none' }}>
            Live Demo ↗
          </a>
        )}
        {github && (
          <a href={github} target="_blank" rel="noopener noreferrer" style={{ fontSize: '0.85rem', color: 'var(--text-secondary)', fontWeight: 600, textDecoration: 'none' }}>
            GitHub ↗
          </a>
        )}
        {comingSoon && (
          <span style={{ fontSize: '0.85rem', color: 'var(--accent-color)', fontWeight: 800, letterSpacing: '0.1em' }}>
            TBA
          </span>
        )}
      </div>
    </BentoCard>
  );
};

export default ProjectCard;
