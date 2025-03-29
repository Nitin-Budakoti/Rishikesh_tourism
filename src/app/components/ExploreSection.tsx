"use client";

import React, { useState } from "react";
import Link from "next/link";
import styles from "./ExploreSection.module.css";
import { FaLandmark, FaWater, FaPrayingHands } from "react-icons/fa";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface AttractionSlide {
  id: number;
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ExploreSection: React.FC = () => {
  const attractions: AttractionSlide[] = [
    {
      id: 1,
      title: "LAXMAN JHULA",
      description: "Laxman Jhula is a famous suspension bridge in Rishikesh, Uttarakhand, spanning the Ganges River.",
      icon: <FaLandmark size={60} className={styles.icon} />,
    },
    {
      id: 2,
      title: "RIVER RAFTING",
      description: "Experience thrilling white water rafting in the sacred Ganges River with stunning Himalayan views.",
      icon: <FaWater size={60} className={styles.icon} />,
    },
    {
      id: 3,
      title: "TRIVENI GHAT",
      description: "A sacred bathing ghat where pilgrims gather for evening Ganga Aarti and spiritual ceremonies.",
      icon: <FaPrayingHands size={60} className={styles.icon} />,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === attractions.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? attractions.length - 1 : prev - 1));
  };

  return (
    <section className={styles.container}>
      {/* Background Wrapper */}
      <div className={styles.backgroundWrapper}>
        <div className={styles.content}>
          {/* Left Section - Heading & Button */}
          <div className={styles.textSection}>
            <h1 className={styles.heading}>EXPLORE</h1>
            <h2 className={styles.subheading}>THE RISHIKESH</h2>
            <Link href="/booking" className={styles.bookButton}>
              BOOK NOW <span className={styles.arrow}>→</span>
            </Link>
          </div>

          {/* Right Section - Card Slider */}
          <div className={styles.cardsSection}>
            {/* Navigation Buttons */}
            <button className={styles.navButton} onClick={prevSlide}>
              <ChevronLeft />
            </button>
            <button className={styles.navButton} onClick={nextSlide}>
              <ChevronRight />
            </button>

            {/* Attraction Cards */}
            <div className={styles.cardsContainer}>
              {attractions.map((attraction, index) => (
                <div
                  key={attraction.id}
                  className={`${styles.card} ${index === currentSlide ? styles.activeCard : ""}`}
                  style={{
                    transform: `translateX(${(index - currentSlide) * 120}%)`,
                    opacity: index === currentSlide ? 1 : 0.6,
                  }}
                >
                  <div className={styles.cardIconContainer}>{attraction.icon}</div>
                  <div className={styles.cardContent}>
                    <h3 className={styles.cardTitle}>{attraction.title}</h3>
                    <p className={styles.cardDescription}>{attraction.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreSection;
