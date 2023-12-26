"use client";

import { ProjectsList, SectionHeading, Loader } from "@/components";
import { ProjectType } from "@/data/projects";
import useProjects from "@/hooks/useProjects";

const ProjectsPage: React.FC = () => {
  const { data, isLoading } = useProjects();
  const projects =
    data !== undefined ? (Object.values(data) as ProjectType[]) : [];

  if (isLoading) return <Loader type="spinner" />;

  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <SectionHeading heading="Projects" subHeading="Explore our" />

        <ProjectsList projects={projects} firstLine={false} />
      </div>
    </section>
  );
};

export default ProjectsPage;
