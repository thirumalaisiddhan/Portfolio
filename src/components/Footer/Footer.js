import React from 'react';
import styles from './Footer.module.css';
import { FaLinkedin, FaGithub, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerSocials}>
        <a href="https://www.linkedin.com/in/thirumalai-siddhan-r-679118293/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn"><FaLinkedin /></a>
        <a href="https://github.com/thirumalaisiddhan" target="_blank" rel="noopener noreferrer" aria-label="GitHub"><FaGithub /></a>
        <a href="https://instagram.com/thirumalaisiddhan" target="_blank" rel="noopener noreferrer" aria-label="Instagram"><FaInstagram /></a>
      </div>
      <div className={styles.footerCopyright}>
        <small>&copy; 2025 Thirumalai Siddhan. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;