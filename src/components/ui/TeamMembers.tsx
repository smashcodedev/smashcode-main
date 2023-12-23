"use client";

import React from "react";
import { SectionHeading, UserCard } from "@/components";
import { teamMembers } from "@/data/members";

const TeamMembers: React.FC = () => {
  return (
    <div className="px-4">
      <SectionHeading subHeading="Meet out" heading="Team" />
      <div className="style-right-border team-member-main flex flex-wrap items-center px-5">
        {teamMembers.map(({ memberName, role, imageUrl }, key) => (
          <div className="col-md-4 w-full md:w-1/2 lg:w-1/3" key={key}>
            <UserCard
              type=""
              memberName={memberName}
              role={role}
              imageUrl={imageUrl}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamMembers;
