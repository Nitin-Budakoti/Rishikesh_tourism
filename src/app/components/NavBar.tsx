"use client";

import { User } from "lucide-react";
import styles from "./NavBar.module.css";

const Navbar: React.FC = () => {
  return (
    <nav className={styles.navbar}>
      {/* Logo of the website */}
      <div className={styles.logo}>
        <b className={styles.heading}>Himalayan Bliss</b>
      </div>

      {/* Navigation Links */}
      <div className={styles.navLinks}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>Hotel</a>
        <a href="#" className={styles.link}>Homestay</a>
        <a href="#" className={styles.link}>Holiday Packages</a>
        <a href="#" className={styles.link}>Adventure Activities</a>
        <a href="#" className={styles.link}>Ashrams</a>
      </div>

      {/* Right Section: Contact & Login */}
      <div className={styles.rightSection}>
        {/* Contact Us Button with "tel:" link */}
        <a href="tel:+917983394755" className={styles.contactButton}>
          Contact Us
        </a>
        
        <div className={styles.loginSection}>
          <User size={24} className={styles.userIcon} />
          <button className={styles.loginButton}>LOG IN</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
