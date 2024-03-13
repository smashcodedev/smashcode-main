import React from "react";
import { ProjectsList } from "@/components";
import projectsData from "@/data/projects";
import Link from "next/link";

const Projects = () => {
  return (
    <section className="m-7 pb-10 pt-4 xl:mt-32 2xl:ml-0">
      <h2 className="pb-4 text-2xl">Explore our done</h2>
      <h2 className="section-heading pb-5 text-6xl">Projects</h2>
      <p className="w-full p-4 px-1 text-lg md:w-8/12">
        Here are some samples of our done projects delivered to our great
        clients.
      </p>

      <ul className="list-disc px-3">
        <li>Custom Web Development</li>
        <li>Blockchain Web Apps</li>
      </ul>

      <ProjectsList projects={projectsData} firstLine={true} />

      <div className="w-full pt-10 text-center">
        <Link href="/projects/web-development/Landing%20page">
          <button className="primary-btn btn">View More!</button>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
