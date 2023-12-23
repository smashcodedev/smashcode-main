import { HeadingProps } from "@/types";
import React from "react";

const SectionHeading: React.FC<HeadingProps> = ({
  heading,
  subHeading,
  description,
}) => {
  return (
    <div>
      <h3 className="text-2xl pb-4">{subHeading}</h3>
      <h2 className={`section-heading pb-5 text-6xl`}>{heading}</h2>
      <p className="p-4 px-1 w-full text-lg md:w-8/12">
        {description}
      </p>
    </div>
  );
};

export default SectionHeading;
