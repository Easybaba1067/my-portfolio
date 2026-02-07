import projects from "../../my-projects";
import ProjectCarousel from "./projects-carousel.component";

const ProjectShowcase = () => {
  return (
    <>
      <section className="showcasing">
        {Object.entries(projects).map(([Title, images]) => (
          <div key={Title}>
            <ProjectCarousel title={Title} images={images} />
            <h1>{Title.replace(/_/g, " ")}</h1>
          </div>
        ))}
      </section>
    </>
  );
};
export default ProjectShowcase;
