
// import { useEffect, useState, useRef } from "react";

// const CircularProgress = ({
//   target = 95,
//   logo,
//   color = "#3b82f6",
//   size = 140,
// }) => {
//   const [progress, setProgress] = useState(0);
//   const [showPercent, setShowPercent] = useState(false);
//   const [progressComplete, setProgressComplete] = useState(false);
//   const [isVisible, setIsVisible] = useState(false);
//   const containerRef = useRef(null);
//   const toggleIntervalRef = useRef(null);

//   const radius = size / 2 - 10;
//   const circumference = 2 * Math.PI * radius;

//   const getLabel = (path) => {
//     const parts = path.split("/");
//     const file = parts[parts.length - 1];
//     return file.split(".")[0].replace(/[-_]/g, " ");
//   };

//   const label = getLabel(logo);

//   // Intersection Observer to detect when in view
//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setIsVisible(true);
//         } else {
//           // Optional: re-trigger if you want repeatable scroll effect
//           // setIsVisible(false);
//         }
//       },
//       {
//         threshold: 0.5, // 50% visibility
//         rootMargin: "0px 0px -10% 0px", // triggers a bit earlier on mobile scroll
//       }
//     );

//     if (containerRef.current) {
//       observer.observe(containerRef.current);
//     }

//     return () => {
//       if (containerRef.current) {
//         observer.unobserve(containerRef.current);
//       }
//     };
//   }, []);


//   // Animate progress once visible
//   useEffect(() => {
//     if (!isVisible || progressComplete) return;

//     let interval;
//     let timeout;

//     interval = setInterval(() => {
//       setProgress((prev) => {
//         if (prev < target) {
//           return prev + 1;
//         } else {
//           clearInterval(interval);
//           setShowPercent(true);
//           setProgressComplete(true);
//           timeout = setTimeout(() => setShowPercent(false), 4000);
//           return prev;
//         }
//       });
//     }, 20);

//     return () => {
//       clearInterval(interval);
//       clearTimeout(timeout);
//     };
//   }, [isVisible, target, progressComplete]);

//   // Toggle between number and logo every 5 sec after progress completed
//   useEffect(() => {
//     if (progressComplete) {
//       toggleIntervalRef.current = setInterval(() => {
//         setShowPercent((prev) => !prev);
//       }, 5000);
//     }

//     return () => clearInterval(toggleIntervalRef.current);
//   }, [progressComplete]);

//   return (
//     <div ref={containerRef} className="flex flex-col items-center">
//       <div className="relative" style={{ width: size, height: size }}>
//         <svg className="w-full h-full rotate-[-90deg]">
//           <circle
//             stroke="#e5e7eb"
//             strokeWidth="10"
//             fill="transparent"
//             r={radius}
//             cx={size / 2}
//             cy={size / 2}
//           />
//           <circle
//             stroke={color}
//             strokeWidth="10"
//             fill="transparent"
//             r={radius}
//             cx={size / 2}
//             cy={size / 2}
//             strokeDasharray={circumference}
//             strokeDashoffset={
//               circumference - (progress / 100) * circumference
//             }
//             strokeLinecap="round"
//             style={{ transition: "stroke-dashoffset 0.2s linear" }}
//           />
//         </svg>

//         <div className="absolute inset-0 flex items-center justify-center">
//           {/* Percentage */}
//           <span
//             className={`absolute text-black text-xl font-bold transition-all duration-700 ease-in-out transform ${showPercent
//                 ? "opacity-100 scale-100"
//                 : "opacity-0 scale-75 pointer-events-none"
//               }`}
//           >
//             {progress}%
//           </span>

//           {/* Logo */}
//           <img
//             src={logo}
//             alt="Logo"
//             className={`absolute w-16 h-16 object-contain transition-all duration-700 ease-in-out transform ${showPercent
//                 ? "opacity-0 scale-75 pointer-events-none"
//                 : "opacity-100 scale-100"
//               }`}
//           />
//         </div>
//       </div>

//       {/* Label below the circle */}
//       <p className="mt-2 text-black font-bold text-sm capitalize">{label}</p>
//     </div>
//   );
// };

// export default CircularProgress;


import { useEffect, useRef, useState } from "react";

const CircularProgress = ({
  logo,
  color = "#3b82f6",
  size = 140,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef(null);

  const radius = size / 2 - 10;
  const circumference = 2 * Math.PI * radius;

  const getLabel = (path) => {
    const parts = path.split("/");
    const file = parts[parts.length - 1];
    return file.split(".")[0].replace(/[-_]/g, " ");
  };

  const label = getLabel(logo);

  // Trigger animation when in view
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
            strokeWidth="10"
            fill="transparent"
            r={radius}
            cx={size / 2}
            cy={size / 2}
          />
          <circle
            stroke={color}
            strokeWidth="10"
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
            alt="Logo"
            className={`w-16 h-16 object-contain transition-all duration-1000 ease-in-out transform ${
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
            }`}
          />
        </div>
      </div>

      <p className="mt-2 text-black font-bold text-sm capitalize">{label}</p>
    </div>
  );
};

export default CircularProgress;
