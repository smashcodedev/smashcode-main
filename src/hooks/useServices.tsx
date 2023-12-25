import { getServices } from "@/api/apiServices";
import { useQuery } from "@tanstack/react-query";

const useServices = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getServices,
  });

  return { data, isLoading };
};

export default useServices;
