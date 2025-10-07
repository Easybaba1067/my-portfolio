import { useState, useEffect, useRef } from "react";
import testimonies from "../testimont-data";
import Testimony from "./testimony.component";

const ResumeCarousel = () => {
  const careerStyle = {
    fontSize: "3rem",
    padding: "20px",
    color: "darkgoldenrod",
  };

  const [currentIndex, setCurrentIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  // Auto-play every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Swipe detection
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    handleSwipe();
  };

  const handleSwipe = () => {
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    const threshold = 50; // Minimum swipe distance
    if (distance > threshold) {
      nextBtn();
    } else if (distance < -threshold) {
      previousBtn();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  const nextBtn = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonies.length);
  };

  const previousBtn = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + testimonies.length) % testimonies.length
    );
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };
  const fillterdTestimony = testimonies[currentIndex];

  return (
    <>
      <div className="carousel">
        <div className="carousel-details">
          <div className="hide" onClick={previousBtn}>
            <i className="bi bi-caret-left-fill" style={careerStyle}></i>
          </div>
          <Testimony
            testimony={fillterdTestimony}
            handleTouchStart={handleTouchStart}
            handleTouchEnd={handleTouchEnd}
          />
          <div className="hide" onClick={nextBtn}>
            <i className="bi bi-caret-right-fill" style={careerStyle}></i>
          </div>
        </div>

        <div className="dots" style={{ marginTop: "10px" }}>
          {testimonies.map((_, index) => (
            <span
              key={index}
              onClick={() => goToSlide(index)}
              style={{
                display: "inline-block",
                width: "10px",
                height: "10px",
                borderRadius: "50%",
                backgroundColor:
                  index === currentIndex ? "darkgoldenrod" : "lightgray",
                margin: "5px",
                cursor: "pointer",
              }}
            ></span>
          ))}
        </div>
      </div>
    </>
  );
};

export default ResumeCarousel;
