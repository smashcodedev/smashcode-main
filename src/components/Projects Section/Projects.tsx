import React from "react";
import { ProjectsHeader, ProjectsList } from "@/components";
import projectsData, { ProjectType } from "../../../data/projects";

const projects: ProjectType[] = [
  projectsData.rarare,
  projectsData.journeyBlog,
  projectsData.trippyFrens,
  projectsData.phenomAcademy,
];

const Projects = () => {
  return (
    <section className="m-7 pb-10 pt-4 xl:mt-32 2xl:ml-0">
      <ProjectsHeader
        title="Explore our done"
        description="Here are some samples of our done projects delivered to our great clients."
      />

      <ProjectsList projects={projects} />
    </section>
  );
};

export default Projects;
