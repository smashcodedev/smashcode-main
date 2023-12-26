import { getCategories } from "@/api/apiCategories";
import { useQuery } from "@tanstack/react-query";

const useCategories = () => {
  const { data: allCategories } = useQuery({
    queryKey: ["categories"],
    queryFn: getCategories,
  });

  return { allCategories };
};

export default useCategories;
