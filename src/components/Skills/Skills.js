import React from 'react';
import styles from './Skills.module.css';
import { FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt, FaHtml5 } from 'react-icons/fa';
import { SiJavascript, SiMongodb } from 'react-icons/si';
const skills = [
  { name: 'HTML', icon: <FaHtml5 /> },
  { name: 'JavaScript', icon: <SiJavascript /> },
  { name: 'React', icon: <FaReact /> },
  { name: 'Python', icon: <FaPython /> },
  { name: 'Java', icon: <FaJava /> },
  { name: 'Node.js', icon: <FaNodeJs /> },
  { name: 'MongoDB', icon: <SiMongodb /> },
  { name: 'Git', icon: <FaGitAlt /> },
  
];

const Skills = () => {
  return (
    <section id="skills">
      <h2>My Skills</h2>
      <div className={`${styles.container} ${styles.skillsContainer}`}>
        <div className={styles.skillsGrid}>
          {skills.map((skill) => (
            <article key={skill.name} className={styles.skill}>
              <div className={styles.skillIcon}>{skill.icon}</div>
              <h4>{skill.name}</h4>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;