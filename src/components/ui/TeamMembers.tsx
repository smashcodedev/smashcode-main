import React from "react";
import { SectionHeading, UserCard } from "@/components";
import { getTeamMembers } from "@/api/apiTeamMembers";

type TeamMemberType = {
  memberName: string;
  role: string;
  Image_URL: string;
  featured?: boolean;
};

const TeamMembers: React.FC = async () => {
  const teamMembers = await getTeamMembers();
  const filteredMembers = Object.values(
    teamMembers as Record<string, TeamMemberType>,
  ).filter((member) => member.featured === true);

  return (
    <div className="mt-12 px-4">
      <SectionHeading subHeading="Meet out" heading="Team" />
      <div className="style-right-border team-member-main col flex flex-wrap items-center px-5">
        {(filteredMembers as Array<TeamMemberType>).map(
          ({ memberName, role, Image_URL }, key) => {
            return (
              <div className="col w-full sm:w-1/2 md:w-4/12" key={key}>
                <UserCard
                  type={""}
                  memberName={memberName}
                  role={role}
                  Image_URL={Image_URL}
                />
              </div>
            );
          },
        )}
      </div>
    </div>
  );
};

export default TeamMembers;
