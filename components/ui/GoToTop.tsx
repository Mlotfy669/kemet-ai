'use client'
import { ArrowUp } from "lucide-react";
import { useEffect, useState } from "react";

const ScrollToTopButton: React.FC = () => {

  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0 });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    isVisible && (
      <button
        onClick={scrollToTop}
        className={`fixed bottom-4 right-5 cursor-pointer z-50 group p-5 bg-primary-normal hover:bg-primary-normal-hover text-white rounded-full shadow-lg transition duration-300`}
      >
        <ArrowUp size={20} className="group-hover:-translate-y-1 transition duration-300" />
      </button>
    )
  );
};

export default ScrollToTopButton;
