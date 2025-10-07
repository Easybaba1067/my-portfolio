import projects from "../../my-projects";
import ProjectCarousel from "./projects-carousel.component";

const ProjectShowcase = () => {
  const currentYear = new Date().getFullYear();
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
      <footer className="project-footer">
        All reserved @copyright The Easyb Studio {currentYear}
      </footer>
    </>
  );
};
export default ProjectShowcase;
