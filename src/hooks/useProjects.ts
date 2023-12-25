import { getProjects } from "@/api/apiProjects";
import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  const { data: projects } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { projects };
};

export default useProjects;
