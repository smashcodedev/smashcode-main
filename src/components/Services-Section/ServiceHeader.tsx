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
      <div className="section-heading">
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
          <li>Graphic Designing (Logo Design, Cv Design, Photo Editing)</li>
          <li>Content and Copy Writing (Web Pages, Blog & Article Writing)</li>
        </ul>
      </div>
    </>
  );
};

export default ServicesHeader;
