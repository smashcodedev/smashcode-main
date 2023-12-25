import { getTeamMembers } from "@/api/apiTeamMembers";
import { useQuery } from "@tanstack/react-query";

const useTeamMembers = () => {
  const { data: teamMembers, isLoading: isLoadingTeamMembers } = useQuery({
    queryKey: ["projects"],
    queryFn: getTeamMembers,
  });

  return { teamMembers, isLoadingTeamMembers };
};

export default useTeamMembers;
