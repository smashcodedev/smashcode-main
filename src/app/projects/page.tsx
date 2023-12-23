import { ProjectsList, SectionHeading } from "@/components";
import projectsData, { ProjectType } from "@/data/projects";

const projects: ProjectType[] = [
  projectsData.rarare,
  projectsData.journeyBlog,
  projectsData.trippyFrens,
  projectsData.phenomAcademy,
];

const ProjectsPage: React.FC = () => {
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <SectionHeading heading="Projects" subHeading="Explore our" />

        <ProjectsList projects={projects} />
      </div>
    </section>
  );
};

export default ProjectsPage;
