import React from "react";
import { SectionHeading, ServiceHeader, ServicesList } from "@/components";
import { ServiceType } from "../../data/services";

type ServicesProps = {
  services: ServiceType[];
};

const Services: React.FC<ServicesProps> = ({ services }) => {
  return (
    <section className="m-7 mt-4 2xl:ml-0">
      <ServiceHeader
        subHeading="Services we"
        heading="Offered"
        description="Responsive Websites & Web Apps, and Full Stack Web Apps Development."
      />

      <ServicesList services={services} />
    </section>
  );
};

export default Services;
