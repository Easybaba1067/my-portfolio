import projects from "./my-projects";

export const projectToSlug = (title) =>
  title.toLowerCase().replace(/_/g, "-");

export const getProjectBySlug = (slug) =>
  Object.entries(projects).find(([title]) => projectToSlug(title) === slug);
