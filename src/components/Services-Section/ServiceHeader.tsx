import React from "react";
import { SectionHeading } from "@/components";
import { HeadingProps } from "@/types";

const ServicesHeader: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  description,
}) => {
  return (
    <>
      <div className="mb-5">
        <SectionHeading
          heading={heading}
          subHeading={subHeading}
          description={description}
        />

        <ul className="list-disc px-3">
          <li>Custom Web Development ( HTML, CSS, JS ReactJs, Firebase)</li>
          <li>
            Blockchain Web Apps (Minting, Wallet Connectivity, Smart Contract
            Integration)
          </li>
        </ul>
      </div>
    </>
  );
};

export default ServicesHeader;
