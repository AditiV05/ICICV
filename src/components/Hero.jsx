import React, { useState, useEffect } from "react";
import "./hero.css";
import "./styles.css";

const Hero = () => {
  const images = [
    "https://icicv.co.in/wp-content/uploads/2023/09/MUJ_Banner_Tapmi_dome_building.png",
    "https://icicv.co.in/wp-content/uploads/2023/09/MUJ-Banner-NIRF.jpg",
    "https://icicv.co.in/wp-content/uploads/2023/11/MUJ-hostel-campus.jpg",
    "https://icicv.co.in/wp-content/uploads/2023/08/2.png",
    "https://icicv.co.in/wp-content/uploads/2023/08/1.png",
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    // Cleanup interval on component unmount
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <section
      id="home"
      style={{
        backgroundImage: `url(${images[currentIndex]})`,
      }}
    >
      <div className="hero-content">
        <h1>Fourth International Conference</h1>
        <p>Innovations in Computational Intelligence and Computer Vision</p>
        <p>10-11 April, 2024</p>
        <a
          href="https://cmt3.research.microsoft.com/User/Login?ReturnUrl=%2FICICV2024"
          target="_blank"
          rel="noopener noreferrer"
        >
          Submit Paper
        </a>
      </div>
      <div className="carousel-controls">
        <button className="arrow left-arrow" onClick={handlePrev}>
          &#8249;
        </button>
        <button className="arrow right-arrow" onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Hero;
