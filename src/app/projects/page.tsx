"use client";

import { ProjectsList, SectionHeading, Loader } from "@/components";
import { ProjectType } from "@/data/projects";
import useCategories from "@/hooks/useCategories";
import useProjects from "@/hooks/useProjects";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectsPage: React.FC = () => {
  const { data } = useProjects();
  const { allCategories } = useCategories();

  const { categorySlug, subCatId } = useParams();
  const pathname = usePathname();

  const [allCats, setAllCats] = useState([]);

  const [projects, setAllProjects] = useState([]);

  const [filteredProjects, setFiltered] = useState([]);

  useEffect(() => {
    let categoriesData = Object.values(allCategories || {});
    setAllCats(categoriesData);
    let projectsData = Object.values(data || [])?.filter(
      (val) => val?.featured === true,
    );
    setAllProjects(projectsData);
  }, [data, allCategories]);

  // filter data according to main category
  useEffect(() => {
    let finds =
      projects?.filter((item) => item.category === categorySlug) || [];
    setFiltered(finds);
  }, [categorySlug, subCatId, projects]);

  // filter data according to sub category
  const getDataWithFiltered = (dataToFilter) => {
    let data = dataToFilter?.filter((item) => item?.subCategory === subCatId);
    return data;
  };
  
  const checkNested = (catPath) => {
    return pathname?.includes(catPath);
  };
  console.log(categorySlug);

  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <SectionHeading heading="Projects" subHeading="Explore our" />
        <div className="col-12">
          <div className="tabs-buttons-wrapper">
            {allCats.map((v, key) => {
              return (
                <Link
                  href={`/projects/${v?.categorySlug}/${v?.subCategories[0]}`}
                  key={key}
                  className={`tab-btn ${
                    checkNested(v?.categorySlug) ? "active-tab-btn" : " "
                  }`}
                >
                  {v.tittle}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-12 text-center">
          <div className="sub-categories-btn-wrapper">
            {allCats
              ?.find((v) => v.categorySlug === categorySlug)
              ?.subCategories?.map((subName, key) => {
                return (
                  <Link
                    href={`/projects/${categorySlug}/${subName}`}
                    key={key}
                    className="tab-btn"
                  >
                    {subName}
                  </Link>
                );
              })}
          </div>
        </div>
        <ProjectsList projects={filteredProjects} firstLine={false} />
      </div>
    </section>
  );
};

export default ProjectsPage;
