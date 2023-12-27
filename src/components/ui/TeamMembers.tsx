import React from "react";
import { SectionHeading, UserCard } from "@/components";
import { getTeamMembers } from "@/api/apiTeamMembers";

const TeamMembers: React.FC = async () => {
  const teamMembers = await getTeamMembers();

  return (
    <div className="mt-12 px-4">
      <SectionHeading subHeading="Meet out" heading="Team" />
      <div className="style-right-border team-member-main flex flex-wrap items-center px-5">
        {(
          Object.values(teamMembers) as Array<{
            memberName: string;
            role: string;
            Image_URL: string;
          }>
        ).map(({ memberName, role, Image_URL }, key) => {
          return (
            <div className="col w-full sm:w-1/2 md:w-1/3" key={key}>
              <UserCard
                type={""}
                memberName={memberName}
                role={role}
                Image_URL={Image_URL}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamMembers;
