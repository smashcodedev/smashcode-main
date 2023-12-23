import { ServiceHeader, ServicesList } from "@/components";
import servicesData, { ServiceType } from "@/data/services";

const services: ServiceType[] = [
  servicesData.customWebApp,
  servicesData.contractIntegration,
  servicesData.walletConnectivity,
  servicesData.landingPages,
  servicesData.nftLandingPages,
  servicesData.responsiveWebsites,
  servicesData.fullStackWebApps,
  servicesData.copyWriting,
  servicesData.blogAndArticalWriting,
  servicesData.logoDesign,
  servicesData.photoEditing,
];

const page: React.FC = () => {
  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <ServiceHeader
          subHeading="Services we"
          heading="Offered"
          description="Responsive Websites & Web Apps, and Full Stack Web Apps Development."
        />

        <ServicesList services={services} />
      </div>
    </section>
  );
};

export default page;
