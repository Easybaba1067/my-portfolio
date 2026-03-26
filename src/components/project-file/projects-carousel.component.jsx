import { useEffect, useRef, useState } from "react";
const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visible, setVisible] = useState(false);
  const carouselRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (carouselRef.current) observer.observe(carouselRef.current);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const image = images[currentIndex];
  return (
    <>
      <div
        ref={carouselRef}
        className={`image-carousel ${visible ? "slide-in" : ""}`}
        key={title}
      >
        <img src={image} alt={title.replace(/_/g, " ")} />
      </div>
    </>
  );
};
export default ProjectCarousel;
