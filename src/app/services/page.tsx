import { ServicesList } from "@/components";
import servicesData, { ServiceType } from "@/data/services";

const services: ServiceType[] = [
  servicesData.customWebDevelopment,
  servicesData.blockchainDevelopment,
  servicesData.conversionLandingPages,
  servicesData.fullStackSolutions,
  servicesData.enterpriseWebSystems,
];

const ServicesPage: React.FC = () => {
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <h2 className="pb-4 text-2xl">Services we</h2>
        <h2 className="section-heading pb-5 text-6xl">Offer</h2>
        <p className="w-full p-4 px-1 text-lg md:w-[60%]">
          Full-Cycle Web Development & Blockchain Solutions - From Responsive Websites to AI-Powered Web3 Applications
        </p>

        <ul className="list-disc px-3">
          <li>Custom Web Development (React.js, Next.js, Node.js, Firebase)</li>
          <li>
              Blockchain Solutions (Smart Contracts, DApps, NFT Ecosystems)
          </li>
        </ul>

        <ServicesList services={services} />
      </div>
    </section>
  );
};

export default ServicesPage;
