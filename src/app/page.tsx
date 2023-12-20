import { HeroSection, Projects } from "@/components";
import Services from "@/components/Services Section/Services";
import projectsData, { ProjectType } from "@/../data/projects";

const projects: ProjectType[] = [
  projectsData.rarare,
  projectsData.journeyBlog,
  projectsData.trippyFrens,
  projectsData.phenomAcademy,
];

export default function Home() {
  return (
    <main className="m-10 mx-auto w-full lg:max-w-7xl">
      <HeroSection />

      <Projects projects={projects} />

      <Services />
    </main>
  );
}
