import projectsData from "@/data/projects";
import servicesData, { ServiceType } from "@/data/services";
import { Feedbacks, HeroSection, Projects, Services } from "@/components";

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

      <Projects projects={projectsData}/>

      <Services services={services} />

      <Feedbacks />
    </main>
  );
}
