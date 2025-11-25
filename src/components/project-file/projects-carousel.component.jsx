import { useState, useEffect } from "react";
const ProjectCarousel = ({ images, title }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  const image = images[currentIndex];
  return (
    <>
      <div className="image-carousel" key={title}>
        <img src={image} alt={title.replace(/_/g, " ")} />
      </div>
    </>
  );
};
export default ProjectCarousel;
