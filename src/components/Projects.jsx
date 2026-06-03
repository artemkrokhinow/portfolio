import React from 'react';
import ProjectCard from './ProjectCard';

const projectsData = [
  {
    title: "E-Commerce Платформа",
    description: "Современный интернет-магазин с корзиной, оплатой и личным кабинетом. Построен с фокусом на производительность и конверсию.",
    tags: ["React", "Node.js", "MongoDB"],
    link: "#"
  },
  {
    title: "SaaS Дашборд",
    description: "Аналитическая панель для B2B сегмента. Графики реального времени, управление пользователями и сложные фильтры.",
    tags: ["Vue", "Tailwind", "Firebase"],
    link: "#"
  },
  {
    title: "AI Генератор Изображений",
    description: "Интеграция с нейросетями для создания изображений по текстовому описанию. Удобный интерфейс и галерея генераций.",
    tags: ["Next.js", "OpenAI API", "PostgreSQL"],
    link: "#"
  },
  {
    title: "Мобильное Приложение",
    description: "Приложение для фитнеса с оффлайн-режимом, пуш-уведомлениями и синхронизацией тренировок (PWA).",
    tags: ["React", "PWA", "Service Workers"],
    link: "#"
  },
  {
    title: "Корпоративный Сайт",
    description: "Премиальный сайт для крупного бренда. Сложные 3D-анимации, оптимизация SEO и CMS для управления контентом.",
    tags: ["Three.js", "GSAP", "Sanity CMS"],
    link: "#"
  },
  {
    title: "Web3 NFT Маркетплейс",
    description: "Децентрализованная платформа для обмена NFT. Смарт-контракты, интеграция криптокошельков и аукционы.",
    tags: ["Solidity", "Ethers.js", "React"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="container" style={{ paddingTop: '50px', paddingBottom: '100px' }}>
      <div className="animate-fade-in">
        <h2 className="section-title">Мои <span className="text-gradient">Проекты</span></h2>
      </div>
      
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', 
        gap: '2rem' 
      }}>
        {projectsData.map((project, index) => (
          <ProjectCard key={index} index={index} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
