import { useEffect, useState } from "react";
import { ArrowUp } from "lucide-react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      setVisible(window.scrollY > window.innerHeight);
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Ease-in-out cubic function
  const easeInOutCubic = (t) =>
    t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const scrollToTop = () => {
    const startY = window.scrollY;
    const duration = 2500; // Increase to slow down the scroll
    let startTime = null;

    const step = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = easeInOutCubic(progress);
      const position = startY * (1 - ease);

      window.scrollTo(0, position);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  };

  return (
    visible && (
      <button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 z-50 p-3 md:p-4 rounded-full bg-gray-800 text-white shadow-lg hover:bg-gray-700 transition"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-5 h-5 md:w-6 md:h-6" />
      </button>
    )
  );
};

export default ScrollToTopButton;
