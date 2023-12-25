import React from "react";
import noDataFoundImg from "@/../public/images/avatar/no-image.jpg";
import Image from "next/image";
import { TeamMemberTypes } from "@/data/members";

interface UserCardProps extends TeamMemberTypes {
  type: string;
}

const UserCard: React.FC<UserCardProps> = ({
  memberName,
  role,
  imageUrl,
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
          src={
            "https://firebasestorage.googleapis.com/v0/b/smash-code.appspot.com/o/Team-members-images%2F209397729_1201098033685868_1434788942201818518_n.jpg%20ugPadwvN?alt=media&token=5d0b72ce-b59f-4116-a60b-c48b30cb8571"
          }
          alt={`${memberName || ""} profile`}
          width={100}
          height={100}
        />
      </div>
    </div>
  );
};

export default UserCard;
