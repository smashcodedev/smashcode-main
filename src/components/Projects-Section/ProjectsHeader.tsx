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
      <div className="section-heading">
        <SectionHeading
          heading={heading}
          subHeading={subHeading}
          description={description}
        />

        <ul className="list-disc px-3">
          <li>Custom Web Development</li>
          <li>Content & Copy Writing</li>
          <li>Blockchain Web Apps</li>
          <li>Graphic Designing</li>
        </ul>
      </div>
    </>
  );
};

export default ProjectsHeader;
