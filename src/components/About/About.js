import React from 'react';
import styles from './About.module.css';
import ProfilePic from '../../assets/profile-pic.jpeg';

const About = () => {
  return (
    <section id="about">
      <h2>About Me</h2>
      <div className={`${styles.container} ${styles.aboutContainer}`}>
        <div className={styles.aboutMe}>
          <div className={styles.aboutMeImage}>
            <img src={ProfilePic} alt="About" />
          </div>
        </div>
        <div className={styles.aboutContent}>
          <p>
            Hello! I'm a Computer Science Engineering student specializing in <strong>full-stack developer</strong>. I am passionate about creating intuitive, responsive, and visually appealing user interfaces that provide a great user experience. I have hands-on experience building dynamic web applications with modern tools like React.
            <br /><br />
            Alongside my front-end skills, I have an intermediate proficiency in <strong>Java programming</strong>. This background gives me a solid understanding of object-oriented principles and back-end logic, making me a well-rounded developer who can effectively collaborate on full-stack projects. I am actively looking for a role where I can contribute to meaningful projects and grow as a front-end developer.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;