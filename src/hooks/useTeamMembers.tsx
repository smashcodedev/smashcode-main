import { getTeamMembers } from "@/api/apiTeamMembers";
import { useQuery } from "@tanstack/react-query";

const useTeamMembers = () => {
  const { data, isLoading } = useQuery({
    queryKey: ["projects"],
    queryFn: getTeamMembers,
  });

  return { data, isLoading };
};

export default useTeamMembers;
