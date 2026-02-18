import React from 'react';
import styles from './Projects.module.css';
import IMG1 from '../../assets/project-image.png';
import IMG2 from '../../assets/project-1.png';
import IMG3 from '../../assets/project-2.png';

const projectData = [
  {
    id: 1, image: IMG2, title: 'Simple Product Listing Page',
    description: 'A clean and straightforward web page displaying a single product, the "Nike Back Running Shoes,"',
    tags: ['HTML', 'CSS'], github: 'https://github.com/thirumalaisiddhan/First-Project', demo: 'https://demo-online-shopping.vercel.app/'
  },
  {
    id: 2, image: IMG3, title: 'Calculator',
    description: 'My current work involves implementing a complete UI/UX redesign to boost user engagement',
    tags: ['Python', 'Django', 'PostgreSQL'], github: 'https://github.com/thirumalaisiddhan/Calculator', demo: 'https://calculator-two-chi-92.vercel.app/'
  },
  {
    id: 3, image: IMG1, title: 'Currently working',
    description: 'My current work involves implementing a complete UI/UX redesign to boost user engagement.',
    tags: ['React Native', 'Firebase'], github: 'https://github.com', demo: 'https://github.com'
  },
  {
    id: 4, image: IMG1, title: 'Currently working',
    description: 'My current work involves implementing a complete UI/UX redesign to boost user engagement.',
    tags: ['Next.js', 'TailwindCSS'], github: 'https://github.com', demo: 'https://github.com'
  },
  {
    id: 5, image: IMG1, title: 'Currently working',
    description: 'My current work involves implementing a complete UI/UX redesign to boost user engagement.',
    tags: ['JavaScript', 'HTML', 'CSS'], github: 'https://github.com', demo: 'https://github.com'
  },
  {
    id: 6, image: IMG1, title: 'Currently working',
    description: 'My current work involves implementing a complete UI/UX redesign to boost user engagement.',
    tags: ['Java', 'Spring Boot', 'AWS'], github: 'https://github.com', demo: 'https://github.com'
  }
];

const Projects = () => {
  return (
    <section id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={`${styles.container} ${styles.projectsContainer}`}>
        {projectData.map(({ id, image, title, description, tags, github, demo }) => (
          <article key={id} className={styles.projectItem}>
            <div className={styles.projectItemImage}>
              <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{description}</p>
            <div className={styles.projectItemTags}>
              {tags.map(tag => <span key={tag}>{tag}</span>)}
            </div>
            <div className={styles.projectItemCta}>
              <a href={github} className="btn" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href={demo} className="btn btnPrimary" target="_blank" rel="noopener noreferrer">Live Demo</a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Projects;