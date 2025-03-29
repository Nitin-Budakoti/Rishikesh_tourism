"use client";

import { useState, ChangeEvent } from "react";
import { Search, User } from "lucide-react";
import styles from "./NavBar.module.css";

const Navbar: React.FC = () => {
  const [search, setSearch] = useState<string>("");

  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <nav className={styles.navbar}>
      {/* Left: Navigation Links */}
      <div className={styles.navLinks}>
        <a href="#" className={styles.link}>Home</a>
        <a href="#" className={styles.link}>About Us</a>
        <a href="#" className={styles.link}>Explore</a>
        <a href="#" className={styles.link}>Services</a>
      </div>

      {/* Center: Search Bar */}
      <div className={styles.searchContainer}>
        <input
          type="text"
          placeholder="Search.."
          value={search}
          onChange={handleSearchChange}
          className={styles.searchInput}
        />
        <button className={styles.searchIcon} aria-label="Search">
          <Search size={20} />
        </button>
      </div>

      {/* Right: Login */}
      <div className={styles.loginSection}>
        <User size={24} className={styles.userIcon} />
        <button className={styles.loginButton}>LOG IN</button>
      </div>
    </nav>
  );
};

export default Navbar;
