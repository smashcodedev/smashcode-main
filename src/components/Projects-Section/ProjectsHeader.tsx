import React from "react";
import { SectionHeading } from "@/components";
import { HeadingProps } from "@/types";

const ProjectsHeader: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  description,
}) => {
  return (
    <>
        <SectionHeading
          heading={heading}
          subHeading={subHeading}
          description={description}
        />

        <ul className="list-disc px-3">
          <li>Custom Web Development</li>
          <li>Blockchain Web Apps</li>
        </ul>
    </>
  );
};

export default ProjectsHeader;
