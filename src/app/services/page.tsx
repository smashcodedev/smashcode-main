import { ServicesList } from "@/components";
import servicesData, { ServiceType } from "@/data/services";

const services: ServiceType[] = [
  servicesData.customWebApp,
  servicesData.contractIntegration,
  servicesData.walletConnectivity,
  servicesData.landingPages,
  servicesData.nftLandingPages,
  servicesData.responsiveWebsites,
  servicesData.fullStackWebApps,
];

const ServicesPage: React.FC = () => {
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <h2 className="pb-4 text-2xl">Services we</h2>
        <h2 className="section-heading pb-5 text-6xl">Offered</h2>
        <p className="w-full p-4 px-1 text-lg md:w-8/12">
          Responsive Websites & Web Apps, and Full Stack Web Apps Development.
        </p>

        <ul className="list-disc px-3">
          <li>Custom Web Development ( HTML, CSS, JS ReactJs, Firebase)</li>
          <li>
            Blockchain Web Apps (Minting, Wallet Connectivity, Smart Contract
            Integration)
          </li>
        </ul>

        <ServicesList services={services} />
      </div>
    </section>
  );
};

export default ServicesPage;
