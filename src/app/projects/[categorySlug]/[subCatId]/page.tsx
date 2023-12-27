import { getCategories } from "@/api/apiCategories";
import { getProjects } from "@/api/apiProjects";
import { ProjectsPage } from "@/components";
import React from "react";

const page = async () => {
  const data = await getProjects();
  const allCategories = await getCategories();

  return (
    <main>
      <ProjectsPage data={data} allCategories={allCategories} />
    </main>
  );
};

export default page;
