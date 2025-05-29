import { useEffect, useRef, useState } from "react";

const CircularProgress = ({
  logo,
  label,
  color = "#3b82f6",
  size = 140,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.5,
        rootMargin: "0px 0px -10% 0px",
      }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      if (containerRef.current) {
        observer.unobserve(containerRef.current);
      }
    };
  }, []);

  return (
    <div ref={containerRef} className="flex flex-col items-center">
      <div className="relative" style={{ width: size, height: size }}>
        <svg className="w-full h-full rotate-[-90deg]">
          <circle
            stroke="#e5e7eb"
            strokeWidth="5"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            stroke={color}
            strokeWidth="5"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
            strokeDasharray={circumference}
            strokeDashoffset={0}
            strokeLinecap="round"
          />
        </svg>

        <div className="absolute inset-0 flex items-center justify-center">
          <img
            src={logo}
            alt={label}
            className={`w-16 h-16 object-contain transition-all duration-1000 ease-in-out transform ${isVisible
              ? "opacity-100 scale-100"
              : "opacity-0 scale-75"
            }`}
          />
        </div>
      </div>

      <p className="mt-2 text-black font-bold text-sm capitalize">{label}</p>
    </div>
  );
};

export default CircularProgress;
