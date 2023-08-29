// components/TypingAnimation.tsx
import React, { useEffect, useState } from 'react';

interface TypingAnimationProps {
  text: string;
  className?: string;
}

const TypingAnimation: React.FC<TypingAnimationProps> = ({ text, className }) => {
  const [displayText, setDisplayText] = useState('');
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const typingSpeed = 20; // Adjust typing speed as needed
  const blinkSpeed = 500; // Adjust blinking speed as needed

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex < text.length) {
        setDisplayText((prevText) => prevText + text[currentIndex]);
        currentIndex++;
      } else {
        clearInterval(interval);
        setIsAnimationComplete(true);
      }
    }, typingSpeed);

    return () => {
      clearInterval(interval);
    };
  }, [text]);

  return (
    <span className={className}>
      {isAnimationComplete ? text : displayText}
    </span>
  );
};

export default TypingAnimation;
