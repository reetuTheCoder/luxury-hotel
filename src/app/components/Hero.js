'use client';

import { useState, useEffect } from 'react';

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Hero Images
  const slides = [
    '/assets/img/home/bannerImg1.jpg',
    '/assets/img/home/bannerImg2.jpg',
    '/assets/img/home/bannerImg3.jpg',
    '/assets/img/home/bannerImg4.jpg',
    '/assets/img/home/bannerImg5.jpg',
    '/assets/img/home/bannerImg6.jpg',
    '/assets/img/home/bannerImg7.jpg',
  ];

  // Auto Slide
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [slides.length]);

  const handleReservation = () => {
    alert('This is a design demo. Booking functionality is not active.');
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <section className="hero">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${
            index === currentSlide ? 'active' : ''
          }`}
          style={{
            backgroundImage: `url(${slide})`,
          }}
        />
      ))}

      {/* Overlay */}
      <div className="hero-overlay"></div>

      {/* Content */}
      <div className="hero-content">
        <h1>
          Luxury Redefined
        </h1>

        <p>
          Experience timeless elegance and unforgettable stays
        </p>

        <button
          onClick={handleReservation}
          className="btn"
        >
          MAKE A RESERVATION
        </button>
      </div>

      {/* Slider Controls */}
      <div className="slide-controls">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`slide-dot ${
              index === currentSlide ? 'active' : ''
            }`}
            onClick={() => goToSlide(index)}
          />
        ))}
      </div>
    </section>
  );
}