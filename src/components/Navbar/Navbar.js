import React, { useState } from 'react';
import styles from './Navbar.module.css';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  // --- CHANGE: Added "Education" to the list ---
  const navLinks = [
    { to: 'home', label: 'Home' },
    { to: 'about', label: 'About' },
    { to: 'education', label: 'Education' },
    { to: 'skills', label: 'Skills' },
    { to: 'projects', label: 'Projects' },
    { to: 'contact', label: 'Contact' },
  ];

  return (
    <div className={styles.header}>
      <nav className={styles.navbar}>
        <a href="/" className={styles.logo}>
          TMS
        </a>
        <div className={styles.hamburger} onClick={handleClick}>
          {nav ? <FaTimes size={30} style={{ color: '#ffffff' }} /> : <FaBars size={30} style={{ color: '#ffffff' }} />}
        </div>
        <ul className={nav ? `${styles.navMenu} ${styles.active}` : styles.navMenu}>
          {navLinks.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                spy={true}
                smooth={true}
                offset={-80}
                duration={400}
                activeClass={styles.activeLink}
                onClick={() => setNav(false)}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;