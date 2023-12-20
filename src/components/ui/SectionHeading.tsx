import React from "react";

type SectionHeadingProps = {
  heading: string;
  subHeading: string;
  description?: string;
};
const SectionHeading: React.FC<SectionHeadingProps> = ({
  heading,
  subHeading,
  description,
}) => {
  return (
    <>
      <h3 className="text-2xl">{subHeading}</h3>
      <h2 className="special-heading">{heading}</h2>
      <p className="special-paragraph w-full text-lg md:w-8/12">
        {description}
      </p>
    </>
  );
};
export default SectionHeading;
