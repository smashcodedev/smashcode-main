import React from "react";
import noDataFoundImg from "@/../public/images/avatar/no-image.jpg";
import Image from "next/image";
import { TeamMemberTypes } from "@/types";

interface UserCardProps extends TeamMemberTypes {
  type: string;
}

const UserCard: React.FC<UserCardProps> = ({
  memberName,
  role,
  Image_URL: imageUrl,
  type,
}) => {
  return (
    <div className={type === "square" ? "user-card" : "user-card1 mt-5"}>
      <div
        className={
          type === "square" ? "user-card-name-sec" : "user-card-name-sec1"
        }
      >
        <h2>{memberName}</h2>
        <p>{role}</p>
      </div>
      <div
        className={
          type === "square"
            ? "user-profile-img-wrapper"
            : "user-profile-img-wrapper1"
        }
      >
        <Image
          src={imageUrl || noDataFoundImg}
          alt={`${memberName || ""} profile`}
          width={1200}
          height={500}
        />
      </div>
    </div>
  );
};

export default UserCard;
