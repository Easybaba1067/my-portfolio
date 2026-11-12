import { useEffect, useRef, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getProjectBySlug } from "../project-utils";
import "../css-files/project-details.css";

const ProjectDetails = () => {
  const { slug } = useParams();
  const [index, setIndex] = useState(0);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const entry = getProjectBySlug(slug);
  const images = entry ? entry[1] : [];

  useEffect(() => {
    setIndex(0);
  }, [slug]);

  useEffect(() => {
    const handleKey = (e) => {
      if (!images.length) return;
      if (e.key === "ArrowRight") {
        setIndex((prev) => (prev + 1) % images.length);
      } else if (e.key === "ArrowLeft") {
        setIndex((prev) => (prev - 1 + images.length) % images.length);
      }
    };

    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [images.length]);

  const previousImage = () =>
    setIndex((prev) => (prev - 1 + images.length) % images.length);

  const nextImage = () => setIndex((prev) => (prev + 1) % images.length);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    if (touchStartX.current === null || touchEndX.current === null) return;

    const distance = touchStartX.current - touchEndX.current;
    if (distance > 50) {
      nextImage();
    } else if (distance < -50) {
      previousImage();
    }

    touchStartX.current = null;
    touchEndX.current = null;
  };

  if (!entry) {
    return (
      <div className="project-details project-details-empty">
        <h1>Project not found</h1>
        <Link to="/projects" className="project-back">
          <i className="bi bi-arrow-left"></i>
          Back to projects
        </Link>
      </div>
    );
  }

  const [title] = entry;
  const projectName = title.replace(/_/g, " ");

  return (
    <div className="project-details">
      <div className="project-details-inner">
        <div className="project-details-top">
          <Link to="/projects" className="project-back">
            <i className="bi bi-arrow-left"></i>
            All projects
          </Link>
          <span className="project-counter">
            {String(index + 1).padStart(2, "0")} /{" "}
            {String(images.length).padStart(2, "0")}
          </span>
        </div>

        <h1 className="project-details-title">{projectName}</h1>

        <div className="project-gallery">
          <button
            className="gallery-nav prev"
            type="button"
            onClick={previousImage}
            aria-label="Previous image"
          >
            <i className="bi bi-chevron-left"></i>
          </button>

          <figure
            className="gallery-stage"
            key={index}
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              src={images[index]}
              alt={`${projectName} screenshot ${index + 1}`}
            />
          </figure>

          <button
            className="gallery-nav next"
            type="button"
            onClick={nextImage}
            aria-label="Next image"
          >
            <i className="bi bi-chevron-right"></i>
          </button>
        </div>

        <div className="gallery-thumbs">
          {images.map((image, imageIndex) => (
            <button
              key={`${image}-${imageIndex}`}
              type="button"
              className={`gallery-thumb ${
                imageIndex === index ? "active" : ""
              }`}
              onClick={() => setIndex(imageIndex)}
              aria-label={`Go to image ${imageIndex + 1}`}
            >
              <img src={image} alt="" loading="lazy" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;
