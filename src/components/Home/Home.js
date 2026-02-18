import React from 'react';
import styles from './Home.module.css';
import ResumePDF from '../../assets/ThirumalaiSiddhan.docx';
import { Link } from 'react-scroll';

const Home = () => {
  return (
    <section id="home" className={styles.homeContainer}>
      <div className={styles.content}>
        <h3 className={styles.greeting}>Hello, I'm</h3>
        
        <h1 className={styles.name}>Thirumalai Siddhan R</h1>

        <h2 className={styles.subtitle}>Full-stack developer</h2>
        
        <p className={styles.tagline}>
          A computer science student focused on building clean, efficient, and user-friendly web applications.
        </p>
        
        <div className={styles.cta}>
          <a href={ResumePDF} download className="btn">Download Resume</a>
          <Link to="projects" smooth={true} duration={400} offset={-80} className="btn btnPrimary">View My Work</Link>
        </div>
      </div>
    </section>
  );
};

export default Home;