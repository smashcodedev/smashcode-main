"use client";

import React from "react";
import { ProjectCard } from "@/components";
import { colors, getDividedData } from "@/utils/helpers";
import { ProjectType } from "@/data/projects";

const ProjectsList: React.FC<{
  projects: ProjectType[];
  firstLine: boolean;
}> = ({ projects, firstLine }) => {
  return (
    <div className="flex flex-wrap justify-between">
      <div className="m-0 w-full p-0 md:w-1/2">
        <div className="m-0 flex flex-wrap">
          {getDividedData(projects, firstLine === true ? "1st" : "").map(
            ({
              proj_title,
              proj_desc,
              Image_URL,
              url,
              video_url,
            }: ProjectType) => {
              return (
                <div key={proj_title} className="relative mt-5 w-full md:mr-5">
                  <ProjectCard
                    // bgColor={colors[Math.floor(Math.random() * colors.length)]}
                    proj_title={proj_title}
                    proj_desc={proj_desc}
                    Image_URL={Image_URL}
                    url={url}
                    video_url={video_url}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
      <div className="w-full p-0 md:w-1/2">
        <div className="m-0 flex flex-wrap">
          {getDividedData(projects, firstLine === true ? "" : "1st").map(
            ({
              proj_title,
              proj_desc,
              Image_URL,
              url,
              video_url,
            }: ProjectType) => {
              return (
                <div key={proj_title} className="relative mt-5 w-full">
                  <ProjectCard
                    // bgColor={colors[Math.floor(Math.random() * colors.length)]}
                    proj_title={proj_title}
                    proj_desc={proj_desc}
                    Image_URL={Image_URL}
                    url={url}
                    video_url={video_url}
                  />
                </div>
              );
            },
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectsList;
