"use client";

import React from "react";
import { Loader, SectionHeading, UserCard } from "@/components";
import useTeamMembers from "@/hooks/useTeamMembers";

const TeamMembers: React.FC = () => {
  const { teamMembers, isLoadingTeamMembers } = useTeamMembers();

  if (isLoadingTeamMembers) return <Loader type="spinner" />;

  return (
    <div className="px-4 mt-12">
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
            <div className="col-md-4 w-full md:w-1/2 lg:w-1/3" key={key}>
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
