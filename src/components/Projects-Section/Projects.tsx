import React from "react";
import { ProjectsHeader, ProjectsList } from "@/components";
import { ProjectType } from "@/data/projects";
import Link from "next/link";

type ProjectsProps = {
  projects: ProjectType[];
};

const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  return (
    <section className="m-7 pb-10 pt-4 xl:mt-32 2xl:ml-0">
      <ProjectsHeader
        heading="Projects"
        subHeading="Explore our done"
        description="Here are some samples of our done projects delivered to our great clients."
      />

      <ProjectsList projects={projects} firstLine={true} />

      <div className="w-full pt-10 text-center">
        <Link href="/projects/web-development/Landing%20page">
          <button className="">View More!</button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
