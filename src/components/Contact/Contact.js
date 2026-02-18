import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import styles from './Contact.module.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(
      'service_klbteya',
      'template_l84supv',
      form.current,
      'mBrZleT7sGmLjc94j'
    )
      .then((result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          e.target.reset();
      }, (error) => { 
          console.log(error.text);
          alert("Failed to send message, please try again.");
      });
  };

  return (
    <section id="contact">
      <h2 className={styles.title}>Contact Me</h2>

      <div className={`${styles.container} ${styles.contactContainer}`}>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="name" placeholder="Your Full Name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea name="message" rows="5" placeholder="Your Message" required></textarea>
          <button type="submit" className="btn btnPrimary">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;