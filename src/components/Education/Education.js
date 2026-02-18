import React from 'react';
import styles from './Education.module.css';
import { FaUniversity, FaSchool } from 'react-icons/fa';

const educationData = [
  {
    icon: <FaUniversity />,
    institution: 'K S R Institute for Engineering and Technology',
    degree: 'Bachelor of Engineering - Computer Science',
    years: '2023 - 2027'
  },
  {
    icon: <FaSchool />,
    institution: 'Acharya Higher Secondary School',
    degree: 'Maths Computer',
    years: '2022 - 2023'
  }
];

const Education = () => {
  return (
    <section id="education">
      <h2>My Education</h2>
      <div className={styles.educationContainer}>
        {educationData.map((edu, index) => (
          <article key={index} className={styles.educationItem}>
            <div className={styles.icon}>{edu.icon}</div>
            <div className={styles.details}>
              <h3>{edu.institution}</h3>
              <h5>{edu.degree}</h5>
              <p>{edu.years}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Education;