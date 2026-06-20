import React from 'react';
import { motion, useMotionValue, useSpring, AnimatePresence, useTransform } from 'framer-motion';
import { Flame, ArrowUpRight, ArrowRight, Mail, Layout, Code, Server, Database, Brain, Home, Folder, Briefcase, Wrench, PenLine, MessageSquare, Plus } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './index.css';

const projects = [
  {
    num: '01',
    title: 'Winterthur Express',
    desc: 'High-load commercial delivery platform (B2B/B2C) built with DDD & CQRS architecture. Features dynamic price calculation, live tracking, and Stripe payments.',
    tags: ['Next.js', 'NestJS', 'Prisma', 'Stripe', 'Supabase'],
    image: '/Winterthur.png',
    link: 'https://github.com/artemkrokhinow/WinterthurExpress-delivery-service',
    deploy: 'https://winterthur-express-delivery-service-flax.vercel.app/'
  },
  {
    num: '02',
    title: 'Psychological Support',
    desc: 'Mental health platform with emergency resources, training simulators, and professional guidance.',
    tags: ['React', 'Node.js', 'REST API', 'MongoDB'],
    image: '/shelter.png',
    link: 'https://github.com/artemkrokhinow/Psychological-Support-Platform',
    deploy: 'https://shelter-1-rhi3.onrender.com/main'
  },
  {
    num: '03',
    title: 'Real-Time Messenger',
    desc: 'Instant messaging app with live chat rooms, online presence indicators, and persistent history.',
    tags: ['React', 'Socket.IO', 'Node.js', 'MongoDB'],
    image: '/messenger.png',
    link: 'https://github.com/artemkrokhinow/messenger',
    deploy: 'https://mymessenger-4jqz.onrender.com/login'
  },
  {
    num: '04',
    title: 'E-Commerce Platform',
    desc: 'Full-stack store with real-time catalog, cart system, and secure Stripe-style checkout flow.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express'],
    image: '/store.png',
    link: 'https://github.com/artemkrokhinow/Full-Stack-Developer-Test'
  },
  {
    num: '05',
    title: 'ElevenLabs Voice App',
    desc: 'Text-to-speech interface with real-time synthesis, voice profiles, and in-browser playback.',
    tags: ['React', 'ElevenLabs API', 'REST'],
    link: 'https://github.com/artemkrokhinow'
  }
];

const education = [
  {
    title: 'Computer Engineering',
    meta: 'College of Radio Electronics · Ukraine, Kharkiv',
    desc: 'Deep dive into computer architecture, low-level programming, algorithms, and system design.',
    date: '2022 - 2025'
  },
  {
    title: 'Vocational Preparation',
    meta: 'Profil. Berufsvorbereitung · Winterthur',
    desc: 'Integration and language preparation course. Enhancing German communication skills and adapting to the Swiss professional environment.',
    date: '2025 - 2026'
  }
];

const languages = [
  { name: 'Russian', level: 'Native', icon: '🇷🇺', percent: '100%' },
  { name: 'Ukrainian', level: 'Native', icon: '🇺🇦', percent: '100%' },
  { name: 'English', level: 'B2 (Upper Intermediate)', icon: '🇬🇧', percent: '75%' },
  { name: 'German', level: 'B1 (Intermediate)', icon: '🇩🇪', percent: '50%' }
];

const faqs = [
  {
    q: 'What is your main technology stack?',
    a: 'My core stack includes React, Node.js, TypeScript, and MongoDB. For complex, high-load commercial projects, I also actively use Next.js, NestJS, Prisma, and PostgreSQL, building clean and scalable architectures.'
  },
  {
    q: 'How fast do you learn new technologies?',
    a: 'I am a very fast learner. My approach is based on a strong foundation in data structures, algorithms, and design patterns. This allows me to not just memorize syntax, but to easily and quickly adapt to any new languages or frameworks when a project requires it.'
  },
  {
    q: 'Are you looking for remote work or an office position?',
    a: 'I am based in Winterthur, Switzerland. I am open to both hybrid roles and fully remote positions in product teams worldwide.'
  },
  {
    q: 'How do you approach writing code and solving complex tasks?',
    a: 'To me, programming is a competitive discipline. I always prioritize writing clean code, optimizing performance, and utilizing solid system design (for example, applying DDD and CQRS approaches).'
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 100, damping: 12 } }
};

const CustomCursor = () => {
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);
  const cursorXSpring = useSpring(cursorX, { damping: 25, stiffness: 300 });
  const cursorYSpring = useSpring(cursorY, { damping: 25, stiffness: 300 });
  const [isHovering, setIsHovering] = React.useState(false);

  React.useEffect(() => {
    const moveCursor = (e) => { cursorX.set(e.clientX); cursorY.set(e.clientY); };
    const handleMouseOver = (e) => {
      if (e.target.closest('a, button, .project-item, .lang-card, summary, .color-card, .nav-icon, .social-link')) {
        setIsHovering(true);
      } else { setIsHovering(false); }
    };
    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [cursorX, cursorY]);

  return (
    <>
      <motion.div className="cursor-dot" style={{ translateX: cursorX, translateY: cursorY }} animate={{ scale: isHovering ? 0 : 1 }} transition={{ duration: 0.2 }} />
      <motion.div className="cursor-outline" style={{ translateX: cursorXSpring, translateY: cursorYSpring }} animate={{ scale: isHovering ? 1.5 : 1, backgroundColor: isHovering ? 'rgba(255, 115, 0, 0.1)' : 'transparent', borderColor: isHovering ? 'rgba(255, 115, 0, 0.8)' : 'rgba(255, 115, 0, 0.5)' }} transition={{ duration: 0.2 }} />
    </>
  );
};

const FAQItem = ({ faq }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className={`faq-item ${isOpen ? 'open' : ''}`}>
      <div className="faq-question" onClick={() => setIsOpen(!isOpen)}>
        <span>{faq.q}</span>
        <div className="faq-icon"><Plus size={20} /></div>
      </div>
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            style={{ overflow: 'hidden' }}
          >
            <div className="faq-answer">
              <p>{faq.a}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const TiltCard = ({ children, className, style, onClick, variants }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { damping: 20, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);
  
  const rotateX = useTransform(springY, [-100, 100], [4, -4]);
  const rotateY = useTransform(springX, [-100, 100], [-4, 4]);

  function handleMouse(event) {
    const rect = event.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    const mouseX = event.clientX - rect.left - width / 2;
    const mouseY = event.clientY - rect.top - height / 2;
    
    x.set((mouseX / width) * 200);
    y.set((mouseY / height) * 200);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      variants={variants}
      className={className}
      style={{ ...style, rotateX, rotateY, transformPerspective: 1200 }}
      onMouseMove={handleMouse}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      whileHover={{ scale: 1.02, zIndex: 10 }}
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const [copied, setCopied] = React.useState(false);
  
  const handleCopyEmail = (e) => {
    e.preventDefault();
    navigator.clipboard.writeText('artkroh@gmail.com');
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <>
      <CustomCursor />
      {/* ─── FLOATING NAV ─── */}
      <motion.div 
        className="floating-nav"
        initial={{ y: -100, opacity: 0, x: "-50%" }}
        animate={{ y: 0, opacity: 1, x: "-50%" }}
        transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
      >
        <div className="nav-icon" title="Home" onClick={() => window.scrollTo({top: 0, behavior: 'smooth'})}><Home size={22} /></div>
        <div className="nav-icon" title="Skills" onClick={() => document.getElementById('skills')?.scrollIntoView({behavior: 'smooth', block: 'start'})}><Wrench size={22} /></div>
        <div className="nav-icon" title="Projects" onClick={() => document.getElementById('projects')?.scrollIntoView({behavior: 'smooth', block: 'start'})}><Folder size={22} /></div>
        <div className="nav-icon" title="Education" onClick={() => document.getElementById('education')?.scrollIntoView({behavior: 'smooth', block: 'start'})}><Briefcase size={22} /></div>
        <div className="nav-icon" title="Languages" onClick={() => document.getElementById('languages')?.scrollIntoView({behavior: 'smooth', block: 'start'})}><PenLine size={22} /></div>
        <div className="nav-icon" title="FAQ" onClick={() => document.getElementById('faq')?.scrollIntoView({behavior: 'smooth', block: 'start'})}><MessageSquare size={22} /></div>
      </motion.div>

      <div className="layout-wrapper">
      
      {/* LEFT SIDEBAR (STICKY) */}
      <div className="sidebar-wrapper">
        <div style={{ position: 'relative' }}>
          <motion.div 
          className="sticky-sidebar"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          style={{ overflow: 'hidden', zIndex: 2, position: 'relative' }}
        >
            {/* Top-left circle */}
            <svg style={{ position: 'absolute', top: '-60px', left: '-60px', width: '200px', height: '200px', zIndex: 0, pointerEvents: 'none' }} viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="45" stroke="rgba(255,255,255,0.2)" strokeWidth="1" strokeDasharray="2 4" strokeLinecap="round" fill="none" />
            </svg>

          <div className="sidebar-image-container" style={{ position: 'relative', zIndex: 1 }}>
            <img src="https://github.com/artemkrokhinow.png" alt="Artem Krokhinov" />
          </div>
          
          <div className="sidebar-content" style={{ position: 'relative', zIndex: 1 }}>
            <h2 style={{ position: 'relative', zIndex: 1, marginBottom: '24px' }}>Artem Krokhinov</h2>
            <p style={{ position: 'relative', zIndex: 1 }}>A Full-Stack Developer crafting fast, scalable applications with clean code.</p>
            
            <div className="social-links">
              <a href="https://github.com/artemkrokhinow" target="_blank" rel="noreferrer" className="social-link">
                <FaGithub size={18} />
              </a>
              <a href="https://www.linkedin.com/in/artem-krokhinov-a7971a303/" target="_blank" rel="noreferrer" className="social-link">
                <FaLinkedin size={18} />
              </a>
              <div style={{ width: '40px', height: '40px', position: 'relative', zIndex: 10 }}>
                <a href="#" className="social-link email-link" onClick={handleCopyEmail}>
                  <span className="email-text">{copied ? "Email copied!" : "artkroh@gmail.com"}</span>
                  <div className="icon-wrapper">
                    <Mail size={18} />
                  </div>
                </a>
              </div>
            </div>
          </div>
        </motion.div>
          
        {/* Cloud */}
        <motion.img 
          src="/cloud.png" 
          alt="Cloud" 
          style={{ position: 'absolute', bottom: '-210px', left: '-50px', width: '420px', zIndex: 10, pointerEvents: 'none', opacity: 0.9 }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 1 }}
        />
        </div>
      </div>

      {/* ─── RIGHT MAIN CONTENT ─── */}
      <div className="main-content">
        
        {/* Header */}
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }}>
          <h1>WEB<br/>DEVELOPER</h1>
          <div className="shadow-text" style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontWeight: 800, lineHeight: 1, letterSpacing: '-2px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.05)', marginTop: '-15px', marginBottom: '24px' }}>
            DEVELOPER
          </div>
          
          <p className="intro-text">
            I build things for the web. Crafting fast, scalable applications with clean code and interfaces people love to use. Based in Winterthur, Switzerland.
          </p>
        </motion.div>



        {/* Colored Skills Grid */}
        <motion.div id="skills" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <h2 style={{ fontSize: '24px', fontWeight: 800, marginBottom: '24px', textTransform: 'uppercase' }}>Tools & Technologies</h2>
          <div className="cards-grid">
            <TiltCard className="color-card orange">
              <img src="/blob-scene.svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.8, mixBlendMode: 'screen', pointerEvents: 'none' }} alt="Pattern" />
              <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 1 }}><Server size={32} /></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3>BACKEND</h3>
                <p>Node.js, Nest.js, Express.js, RESTful APIs, Socket.IO</p>
              </div>
            </TiltCard>
            
            <TiltCard className="color-card green">
              <img src="/peaks.svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.6, mixBlendMode: 'overlay', pointerEvents: 'none' }} alt="Pattern" />
              <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 1 }}><Layout size={32} /></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3>FRONTEND</h3>
                <p>React, Next.js, TypeScript, HTML5, CSS3, UI/UX</p>
              </div>
            </TiltCard>
            
            <TiltCard className="color-card purple">
              <img src="/circle.svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.6, mixBlendMode: 'screen', pointerEvents: 'none' }} alt="Pattern" />
              <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 1 }}><Database size={32} /></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3>DATABASES & DEVOPS</h3>
                <p>MongoDB, MySQL, NoSQL, Docker, Git</p>
              </div>
            </TiltCard>
            
            <TiltCard className="color-card blue" style={{ color: '#fff' }}>
              <img src="/wave.svg" style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0, opacity: 0.6, mixBlendMode: 'overlay', pointerEvents: 'none' }} alt="Pattern" />
              <div style={{ position: 'absolute', top: '24px', left: '24px', zIndex: 1 }}><Brain size={32} /></div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <h3>ML / AI</h3>
                <p>PyTorch (In progress), Machine Learning, Python</p>
              </div>
            </TiltCard>
          </div>
        </motion.div>

        {/* Projects List */}
        <motion.div id="projects" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div className="section-title">SELECTED</div>
          <div className="section-title-shadow">WORK</div>
          
          <motion.div className="project-list" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {projects.map((proj, idx) => (
              <TiltCard 
                key={idx} 
                className="project-item" 
                variants={itemVariants}
              >
                {/* Left Deploy Zone */}
                {proj.deploy && (
                  <a 
                    href={proj.deploy}
                    target="_blank"
                    rel="noreferrer"
                    className="project-action-zone zone-deploy" 
                  >
                    <div className="zone-bg"></div>
                    <span className="vertical-text">DEPLOY</span>
                  </a>
                )}
                
                {/* Right GitHub Zone */}
                <a 
                  href={proj.link}
                  target="_blank"
                  rel="noreferrer"
                  className="project-action-zone zone-github" 
                >
                  <div className="zone-bg"></div>
                  <span className="vertical-text">GITHUB</span>
                </a>

                <div className="project-content-wrapper">
                  {proj.image ? (
                    <img src={proj.image} className="project-image" alt={proj.title} />
                  ) : (
                    <div className="project-number">{proj.num}</div>
                  )}
                  <div className="project-info">
                    <h3>{proj.title}</h3>
                    <p>{proj.desc}</p>
                    <div className="project-tags">
                      {proj.tags.map(tag => <span key={tag} className="tag">{tag}</span>)}
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </motion.div>

        {/* Education Section */}
        <motion.div id="education" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div className="section-title">ACADEMIC</div>
          <div className="section-title-shadow">EDUCATION</div>
          
          <motion.div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '80px' }} variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {education.map((edu, idx) => (
              <motion.div key={idx} className="list-item" variants={itemVariants}>
                <h3>{edu.title} <span className="meta">{edu.date}</span></h3>
                <p style={{ color: 'var(--text-main)', marginBottom: '8px', fontWeight: 600 }}>{edu.meta}</p>
                <p className="desc">{edu.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Languages Section */}
        <motion.div id="languages" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div className="section-title">SPOKEN</div>
          <div className="section-title-shadow">LANGUAGES</div>
          
          <motion.div className="languages-grid" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {languages.map((lang, idx) => (
              <motion.div key={idx} className="lang-card" variants={itemVariants}>
                <div className="lang-icon">{lang.icon}</div>
                <div className="lang-info">
                  <h4>{lang.name}</h4>
                  <p>{lang.level}</p>
                  <div className="lang-bar">
                    <motion.div 
                      className="lang-progress" 
                      initial={{ width: 0 }} 
                      whileInView={{ width: lang.percent }} 
                      viewport={{ once: true }} 
                      transition={{ duration: 1, delay: 0.5 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* FAQ Section */}
        <motion.div id="faq" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-50px" }} transition={{ duration: 0.6 }}>
          <div className="section-title">FREQUENTLY ASKED</div>
          <div className="section-title-shadow">QUESTIONS</div>
          
          <motion.div className="faq-container" variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-50px" }}>
            {faqs.map((faq, idx) => (
              <motion.div key={idx} variants={itemVariants}>
                <FAQItem faq={faq} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

      </div>
      </div>
    </>
  );
}
