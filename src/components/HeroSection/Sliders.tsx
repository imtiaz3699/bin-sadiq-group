"use client"
import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';

const ContinuousSlider: React.FC = () => {
  useEffect(() => {
    const swiper = new Swiper('.swiper-container', {
      loop: true, // Enable continuous loop
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    return () => {
      swiper.destroy(); // Clean up Swiper instance on component unmount
    };
  }, []);

  return (
    <div className="swiper-container" style = {{width:'70px'}}>
      <div className="swiper-wrapper">
        {/* Add your slider items here */}
        <div className="swiper-slide">Slide 1</div>
        <div className="swiper-slide">Slide 2</div>
        <div className="swiper-slide">Slide 3</div>
        
        {/* ... more slides */}
      </div>
      <div className="swiper-button-next">Next</div>
      <div className="swiper-button-prev">Previous</div>
    </div>
  );
};

export default ContinuousSlider;
