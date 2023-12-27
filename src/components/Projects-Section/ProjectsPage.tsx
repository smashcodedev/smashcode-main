"use client";

import { ProjectsList, SectionHeading, Loader } from "@/components";
import { ProjectType } from "@/data/projects";
import { getSortByTransactionDate } from "@/utils/helpers";
import Link from "next/link";
import { useParams, usePathname } from "next/navigation";
import { useEffect, useState } from "react";

type CatType = {
  categorySlug: string;
  subCategories: string[];
  tittle: string;
};

type AllCategoriesType = {
  Done_By: string;
  Image_URL: string;
  Record_State: number;
  categorySlug: string;
  featured: boolean;
  id: string;
  subCategories: string[];
  tittle: string;
  transaction_date: string;
};

const ProjectsPage: React.FC<{
  data: ProjectType;
  allCategories: AllCategoriesType[];
}> = ({ data, allCategories }) => {
  const { categorySlug, subCatId } = useParams<{
    categorySlug: string;
    subCatId: string;
  }>();
  const pathname = usePathname();

  const [allCats, setAllCats] = useState<CatType[]>([]);

  const [allProjects, setAllProjects] = useState<ProjectType[]>([]);

  const [filteredProjects, setFiltered] = useState<ProjectType[]>([]);

  useEffect(() => {
    let categoriesData: AllCategoriesType[] = Object.values(
      allCategories || {},
    );
    setAllCats(categoriesData);
    
    let projectsData: ProjectType[] = (
      Object.values(data || []) as ProjectType[] | []
    )?.filter((val) => val?.featured === true);
    setAllProjects(projectsData);
  }, [data, allCategories]);

  useEffect(() => {
    let finds: ProjectType[] =
      allProjects?.filter(
        (item: ProjectType) => item.category === categorySlug,
      ) || [];
    setFiltered(finds);
  }, [categorySlug, subCatId, allProjects]);

  const projects = filteredProjects
    ?.filter((item) => item?.subCategory === decodeURIComponent(subCatId))
    .sort(getSortByTransactionDate);

  const checkNested = (catPath: string) => {
    return pathname?.includes(catPath);
  };

  return (
    <section className="m-10 mx-auto w-full lg:max-w-7xl">
      <div className="m-7 mt-32 xl:mt-44 2xl:ml-0">
        <SectionHeading heading="Projects" subHeading="Explore our" />
        <div className="w-full">
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
        <div className="w-full text-center">
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
        <ProjectsList projects={projects} firstLine={true} />
      </div>
    </section>
  );
};

export default ProjectsPage;
