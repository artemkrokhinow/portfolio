import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: 'E-Commerce Platform',
    description: 'Full-stack e-commerce platform with dynamic catalog, cart, and secure checkout.',
    tags: ['React', 'Node.js', 'MongoDB'],
    link: 'https://full-stack-developer-test-production.up.railway.app/',
    github: 'https://github.com/artemkrokhinow/Full-Stack-Developer-Test',
    image: '/store.png'
  },
  {
    title: 'ElevenLabs Voice App',
    description: 'Interactive text-to-speech app using ElevenLabs API for real-time voice synthesis and playback.',
    tags: ['React', 'ElevenLabs API', 'Render'],
    link: '#',
    github: 'https://github.com/artemkrokhinow/elevenlabs'
  },
  {
    title: 'Real-Time Messenger',
    description: 'Real-time communication app featuring live chat rooms, user presence, and message history.',
    tags: ['React', 'Node.js', 'Render'],
    link: 'https://mymessenger-4jqz.onrender.com',
    github: 'https://github.com/artemkrokhinow/messenger',
    image: '/messenger.png'
  },
  {
    title: 'Psychological Support',
    description: 'Accessible platform providing mental health resources, emergency guidance, and professional support.',
    tags: ['React', 'Node.js', 'REST API'],
    link: 'https://shelter-1-rhi3.onrender.com',
    github: 'https://github.com/artemkrokhinow/Psychological-Support-Platform',
    image: '/shelter.png'
  },
  {
    title: 'Upcoming Full-Stack App',
    description: 'Advanced full-stack application currently in development. Focused on scalable architecture and real-time data processing.',
    tags: ['Architecture', 'TBA'],
    comingSoon: true,
  }
];

const Projects = () => {
  return (
    <section id="projects" className="glass animate-fade-in" style={{ padding: '2rem', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <h2 style={{ fontSize: '2.5rem' }}>My <span className="text-gradient">Projects</span></h2>
      </div>
      
      <div className="projects-flex" style={{ flex: 1, overflowY: 'auto', paddingRight: '0.5rem' }}>
        {projectsData.map((project, index) => (
          <div className="project-wrapper" key={index}>
            <ProjectCard index={index} {...project} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
