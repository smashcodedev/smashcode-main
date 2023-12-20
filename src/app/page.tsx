import { HeroSection, Projects } from "@/components";
import Services from "@/components/Services-Section/Services";
import projectsData, { ProjectType } from "@/data/projects";
import servicesData, { ServiceType } from "@/data/services";

const projects: ProjectType[] = [
  projectsData.rarare,
  projectsData.journeyBlog,
  projectsData.trippyFrens,
  projectsData.phenomAcademy,
];

const services: ServiceType[] = [
  servicesData.customWebDevelopment,
  servicesData.blockchainWebApps,
  servicesData.graphicsDesigning,
  servicesData.contentWriting,
];

export default function Home() {
  return (
    <main className="m-10 mx-auto w-full lg:max-w-7xl">
      <HeroSection />

      <Projects projects={projects} />

      <Services services={services} />
    </main>
  );
}
