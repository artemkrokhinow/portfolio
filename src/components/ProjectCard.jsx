import React from 'react';

const ProjectCard = ({ title, description, tags, link, index }) => {
  return (
    <div 
      className={`glass animate-fade-in`} 
      style={{ 
        padding: '1.5rem', 
        display: 'flex', 
        flexDirection: 'column', 
        gap: '1rem',
        animationDelay: `${0.1 + index * 0.1}s`,
        transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
        cursor: 'pointer',
        position: 'relative',
        overflow: 'hidden'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-12px) scale(1.02)';
        e.currentTarget.style.borderColor = 'rgba(139, 92, 246, 0.4)';
        e.currentTarget.style.boxShadow = '0 20px 40px rgba(139, 92, 246, 0.15)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = 'translateY(0) scale(1)';
        e.currentTarget.style.borderColor = 'var(--glass-border)';
        e.currentTarget.style.boxShadow = 'none';
      }}
    >
      <div style={{ 
        width: '100%', 
        height: '220px', 
        backgroundColor: 'rgba(255,255,255,0.02)', 
        borderRadius: '12px',
        marginBottom: '0.5rem',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'var(--text-secondary)',
        backgroundImage: 'linear-gradient(45deg, rgba(255,255,255,0.01) 25%, transparent 25%, transparent 50%, rgba(255,255,255,0.01) 50%, rgba(255,255,255,0.01) 75%, transparent 75%, transparent)',
        backgroundSize: '20px 20px'
      }}>
        {/* Placeholder */}
        <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" style={{ opacity: 0.3 }}>
          <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
          <circle cx="8.5" cy="8.5" r="1.5"></circle>
          <polyline points="21 15 16 10 5 21"></polyline>
        </svg>
      </div>
      
      <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)' }}>{title}</h3>
      <p style={{ color: 'var(--text-secondary)', flexGrow: 1, fontSize: '0.95rem' }}>{description}</p>
      
      <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginTop: 'auto', paddingTop: '1rem' }}>
        {tags.map((tag, i) => (
          <span key={i} style={{ 
            fontSize: '0.75rem', 
            padding: '4px 12px', 
            backgroundColor: 'rgba(139, 92, 246, 0.1)', 
            color: 'var(--accent-color)',
            borderRadius: '20px',
            fontWeight: 600
          }}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;
