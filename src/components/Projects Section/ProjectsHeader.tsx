import React from "react";
import { ProjectsHeading } from "./ProjectsHeading";

type ProjectsHeaderProps = {
  title: string;
  description?: string;
};

const ProjectsHeader: React.FC<ProjectsHeaderProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <div className="section-heading">
        <ProjectsHeading title={title} description={description} />

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
