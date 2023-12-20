import React from "react";
import { Button, ProjectCard } from "@/components";
import { ProjectType } from "../../data/projects";
import { colors, getDividedData } from "../../utils/helpers";
import Link from "next/link";

const ProjectsList: React.FC<{ projects: ProjectType[] }> = ({ projects }) => {
  return (
    <div className="flex flex-wrap">
      <div className="m-0 w-full p-0 md:w-1/2">
        <div className="m-0 flex flex-wrap">
          {getDividedData(projects, "1st").map(
            ({
              title,
              description,
              imageUrl,
              projectUrl,
              videoUrl,
            }: ProjectType) => {
              return (
                <div key={title} className="relative mt-5 w-full">
                  <ProjectCard
                    bgColor={colors[Math.floor(Math.random() * colors.length)]}
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    projectUrl={projectUrl}
                    videoUrl={videoUrl}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="w-full p-0 md:w-1/2">
        <div className="m-0 flex flex-wrap">
          {getDividedData(projects, "").map(
            ({
              title,
              description,
              imageUrl,
              projectUrl,
              videoUrl,
            }: ProjectType) => {
              return (
                <div key={title} className="relative mt-5 w-full">
                  <ProjectCard
                    bgColor={colors[Math.floor(Math.random() * colors.length)]}
                    title={title}
                    description={description}
                    imageUrl={imageUrl}
                    projectUrl={projectUrl}
                    videoUrl={videoUrl}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="w-full pt-10 text-center">
        <Link href="/projects">
          <Button variant="primary">View More!</Button>
        </Link>
      </div>
    </div>
  );
};

export default ProjectsList;
