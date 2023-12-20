import React from "react";
import { SectionHeading } from "@/components";

type ProjectsHeaderProps = {
  subHeading: string;
  heading: string;
  description?: string;
};

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
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
