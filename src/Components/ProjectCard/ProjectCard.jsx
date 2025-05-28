import React, { useEffect, useRef, useState } from 'react';

const ProjectCard = ({ imageUrl, title, description }) => {
  const [showDetails, setShowDetails] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const cardRef = useRef();

  useEffect(() => {
    // Check screen size once on mount
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (cardRef.current) {
      observer.observe(cardRef.current);
    }

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={cardRef}
      onClick={() => isMobile && setShowDetails(!showDetails)} // Tap-to-toggle only on mobile
      className={`
        relative w-full h-64 rounded-xl overflow-hidden shadow-lg group cursor-pointer
        transform transition-all duration-700 ease-in-out
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}
      `}
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-70"
        style={{ backgroundImage: `url(${imageUrl})` }}
      />

      {/* Radial Gradient Overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle,_rgba(0,225,255,1)_0%,_rgba(175,222,222,1)_100%)] mix-blend-overlay" />

      {/* Hover Dark Overlay (desktop only) */}
      <div
        className={`
          absolute inset-0 bg-black/30
          ${!isMobile ? 'group-hover:bg-black/50' : ''}
          transition-all duration-500 ease-in-out z-10
        `}
      />

      {/* Project Title */}
      <div className="absolute bottom-4 left-4 right-4 text-white text-xl font-semibold z-20 text-left break-words leading-snug">
        {title}
      </div>

      {/* Description: hover on desktop, tap on mobile */}
      <div
        className={`
          absolute inset-0 z-30 p-4 text-white bg-black/70 text-sm
          flex items-center justify-center text-center
          transition-opacity duration-500 ease-in-out
          ${showDetails || !isMobile ? 'group-hover:opacity-100' : ''}
          ${showDetails ? 'opacity-100' : 'opacity-0'}
        `}
      >
        {description}
      </div>
    </div>
  );
};

export default ProjectCard;
