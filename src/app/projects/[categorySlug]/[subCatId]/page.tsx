"use client";

import { ProjectsList, SectionHeading, Loader } from "@/components";
import { ProjectType } from "@/data/projects";
import useCategories from "@/hooks/useCategories";
import useProjects from "@/hooks/useProjects";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type CatType = {
  categorySlug: string;
  subCategories: string[];
  tittle: string;
};

const ProjectsPage: React.FC = () => {
  const { data } = useProjects();
  const { allCategories } = useCategories();

  const { categorySlug, subCatId } = useParams<{
    categorySlug: string;
    subCatId: string;
  }>();
  const pathname = usePathname();

  const [allCats, setAllCats] = useState<CatType[]>([]);

  const [allProjects, setAllProjects] = useState([]);

  const [filteredProjects, setFiltered] = useState<ProjectType []>([]);

  useEffect(() => {
    let categoriesData: any = Object.values(allCategories || {});
    setAllCats(categoriesData);
    let projectsData: any = Object.values(data || [])?.filter(
      (val: any) => val?.featured === true,
    );
    setAllProjects(projectsData);
  }, [data, allCategories]);

  useEffect(() => {
    let finds: ProjectType[] =
      allProjects?.filter((item: ProjectType) => item.category === categorySlug) || [];
    setFiltered(finds);
  }, [categorySlug, subCatId, allProjects]);

  const projects = filteredProjects?.filter(
    (item) => item?.subCategory === decodeURIComponent(subCatId),
  );

  const checkNested = (catPath: string) => {
    return pathname?.includes(catPath);
  };

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
                    checkNested(v?.categorySlug) ? "active-tab-btn" : ""
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
              ?.subCategories?.map((subName) => {
                return (
                  <Link
                    href={`/projects/${categorySlug}/${subName}`}
                    key={subName}
                    className={`tab-btn ${
                      checkNested(subName.replaceAll(" ", "%20"))
                        ? "active-tab-btn"
                        : ""
                    }`}
                  >
                    {subName}
                  </Link>
                );
              })}
          </div>
        </div>
        <ProjectsList projects={projects} firstLine={false} />
      </div>
    </section>
  );
};

export default ProjectsPage;
