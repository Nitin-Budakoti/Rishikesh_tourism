"use client";

import styles from "./Footer.module.css";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        {/* Left Section - Logo */}
        <div className={styles.logo}>
          <b className={styles.heading}>Himalayan Bliss</b>
          <p className={styles.tagline}>Experience the beauty of Rishikesh!</p>
        </div>

        {/* Middle Section - Navigation Links */}
        <div className={styles.navLinks}>
          <a href="#" className={styles.link}>Home</a>
          <a href="#" className={styles.link}>Hotels</a>
          <a href="#" className={styles.link}>Homestays</a>
          <a href="#" className={styles.link}>Adventures</a>
          <a href="#" className={styles.link}>Ashrams</a>
        </div>

        {/* Right Section - Contact Info */}
        <div className={styles.contact}>
          <p>📍 Rishikesh, Uttarakhand, India</p>
          <p>📞 <a href="tel:+917983394755" className={styles.phone}>+91 7983394755</a></p>
          <p>✉ <a href="mailto:info@himalayanbliss.com" className={styles.email}>info@himalayanbliss.com</a></p>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className={styles.bottomBar}>
        <p>© {new Date().getFullYear()} Himalayan Bliss. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
