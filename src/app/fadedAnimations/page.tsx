'use client'
import React, { ReactNode, useEffect, useState, useRef } from 'react';

interface FadeInElementProps {
  children: React.ReactNode[];
}

const FadeInElement: React.FC<FadeInElementProps> = ({children}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (elementRef.current) {
        const { top, bottom } = elementRef.current.getBoundingClientRect();
        setIsVisible(top < window.innerHeight && bottom >= 0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      ref={elementRef}
      className={`transition-opacity ${isVisible ? 'opacity-100' : 'opacity-0'}`}
      style={{
        transitionProperty: 'opacity',
        transitionDuration: isVisible ? '2s' : '0.5s', // Fade-in duration is 2 seconds, fade-out duration is 0.5 seconds
      }}
    >
      {children}
    </div>
  );
};

export default FadeInElement;
