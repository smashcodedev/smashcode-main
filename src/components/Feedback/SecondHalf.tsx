import React from "react";
import noDataFoundImg from "@/../public/images/avatar/no-image.jpg";
import Image from "next/image";
import { FeedbackTypes } from "@/types";

const SecondHalf: React.FC<{
  secondHalf: FeedbackTypes[];
  setSelectedReview: (review: FeedbackTypes) => void;
}> = ({ secondHalf, setSelectedReview }) => {
  return (
    <div className="mt-12 w-full sm:w-1/2 md:mt-0 md:w-1/4">
      <div className="flying-avatar-wrapper">
        {secondHalf.map((review) => (
          <span
            onClick={() => setSelectedReview(review)}
            key={review.id}
            className="avatar-circle flying"
          >
            <Image
              src={review.Image_URL || noDataFoundImg}
              alt={"image"}
              width={100}
              height={100}
              className="w-full object-cover object-center text-center"
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default SecondHalf;
