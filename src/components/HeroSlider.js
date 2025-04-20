import React, { useEffect } from 'react';
import Slider from 'react-slick';
import { Button } from 'react-bootstrap';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './HeroSlider.css';

const HeroSlider = () => {
  // Initialize animations when component mounts
  useEffect(() => {
    // Short delay to ensure DOM is ready
    setTimeout(() => {
      const elements = document.querySelectorAll('.animate-up');
      elements.forEach(el => {
        el.classList.add('animate-visible');
      });
    }, 100);
  }, []);
  // Hero slider data - just images without text
  const heroSlides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1920&q=80"
    }
  ];

  // Slick slider settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    fade: false,
    cssEase: 'ease',
    arrows: false,
    swipe: false,
    touchMove: false,
    beforeChange: (current, next) => {
      // Reset animations when slide changes
      const currentSlide = document.querySelector(`.slick-slide[data-index="${current}"]`);
      const nextSlide = document.querySelector(`.slick-slide[data-index="${next}"]`);
      
      if (currentSlide) {
        const elements = currentSlide.querySelectorAll('.animate-up');
        elements.forEach(el => {
          // Remove animation and visibility
          el.style.animation = 'none';
          el.classList.remove('animate-visible');
          // Trigger reflow by accessing offsetHeight and storing it in a variable
          const height = el.offsetHeight;
        });
      }
      
      if (nextSlide) {
        const elements = nextSlide.querySelectorAll('.animate-up');
        elements.forEach(el => {
          // Reset animation and add visibility after a short delay
          setTimeout(() => {
            el.classList.add('animate-visible');
            el.style.animation = '';
          }, 100);
        });
      }
    },
    afterChange: (current) => {
      // Ensure animations play on the current slide
      const currentSlide = document.querySelector(`.slick-slide[data-index="${current}"]`);
      if (currentSlide) {
        const elements = currentSlide.querySelectorAll('.animate-up');
        elements.forEach(el => {
          el.classList.add('animate-visible');
        });
      }
    }
  };

  return (
    <section className="hero-slider-section">
      <Slider {...settings} className="hero-slider">
        {heroSlides.map(slide => (
          <div key={slide.id} className="hero-slide">
            <div 
              className="hero-slide-bg" 
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="hero-content-wrapper">
                <h2 className="whats-new-text animate-up">WHAT'S NEW</h2>
                <Button className="transparent-btn animate-up animate-delay">DISCOVER</Button>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </section>
  );
};

export default HeroSlider;