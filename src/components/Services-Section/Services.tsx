import React from "react";
import { ServicesList } from "@/components";
import Link from "next/link";
import servicesData, { ServiceType } from "@/data/services";

const services: ServiceType[] = [
  servicesData.customWebDevelopment,
  servicesData.blockchainWebApps,
];

const Services = () => {
  return (
    <section className="m-7 mt-4 2xl:ml-0">
      <div className="mb-5">
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
      </div>

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
