import React from "react";
import { ServiceHeader, ServicesList } from "@/components";
import { ServiceType } from "../../data/services";
import Link from "next/link";

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

      <div className="my-8 text-center">
        <Link href="/services">
          <button className="primary-btn btn">View More!</button>
        </Link>
      </div>
    </section>
  );
};

export default Services;
