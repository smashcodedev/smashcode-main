import { getProjects } from "@/api/apiProjects";
import { useQuery } from "@tanstack/react-query";

const useProjects = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getProjects,
  });

  return { data, isLoading };
};

export default useProjects;
