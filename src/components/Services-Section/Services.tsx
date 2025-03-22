import React from "react";
import { ServicesList } from "@/components";
import Link from "next/link";
import servicesData, { ServiceType } from "@/data/services";

const services: ServiceType[] = [
  servicesData.customWebDevelopment,
  servicesData.blockchainDevelopment,
];

const Services = () => {
  return (
    <section className="m-7 mt-4 2xl:ml-0">
      <div className="mb-5">
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
