import React from "react";

type ProjectsHeadingProps = {
  title: string;
  description?: string;
};
export const ProjectsHeading: React.FC<ProjectsHeadingProps> = ({
  title,
  description,
}) => {
  return (
    <>
      <h3 className="text-xl">{title}</h3>
      <h2 className="special-heading">Projects</h2>
      <p className="special-paragraph w-full md:w-8/12">{description}</p>
    </>
  );
};
