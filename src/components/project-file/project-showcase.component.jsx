import { useEffect, useState } from "react";
import projects from "../../my-projects";
import ProjectCarousel from "./projects-carousel.component";

const ProjectShowcase = () => {
  const [visible, setVisible] = useState({});

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const id = entry.target.dataset.id;
            setVisible((prev) => ({ ...prev, [id]: true }));
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    const headings = document.querySelectorAll(".showcasing h1");
    headings.forEach((h) => observer.observe(h));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="showcasing">
      {Object.entries(projects).map(([Title, images]) => (
        <div key={Title}>
          <ProjectCarousel title={Title} images={images} />
          <h1 data-id={Title} className={`${visible[Title] ? "slide-in" : ""}`}>
            {Title.replace(/_/g, " ")}
          </h1>
        </div>
      ))}
    </section>
  );
};

export default ProjectShowcase;
