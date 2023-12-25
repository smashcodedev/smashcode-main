import { getFeedbacks } from "@/api/apiFeedbacks";
import { useQuery } from "@tanstack/react-query";

const useFeedbacks = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getFeedbacks,
  });

  return { data, isLoading };
};

export default useFeedbacks;
