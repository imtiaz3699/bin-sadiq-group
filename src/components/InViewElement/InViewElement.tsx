import React, { useEffect, useState } from 'react';

interface InViewElementProps {
  children: React.ReactNode;
  inViewClassName: string;
  outOfViewClassName: string;
  targetId: string;
}

const InViewElement: React.FC<InViewElementProps> = ({
  children,
  inViewClassName,
  outOfViewClassName,
  targetId,
}) => {
  const [isInView, setIsInView] = useState(false);

  const handleIntersection = (entries: IntersectionObserverEntry[]) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setIsInView(true);
      } else {
        setIsInView(false);
      }
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection);

    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      observer.observe(targetElement);
    }

    return () => {
      if (targetElement) {
        observer.unobserve(targetElement);
      }
    };
  }, [targetId]);

  return (
    <div
      id={targetId}
      className={isInView ? inViewClassName : outOfViewClassName}
    >
      {children}
    </div>
  );
};

export default InViewElement;
