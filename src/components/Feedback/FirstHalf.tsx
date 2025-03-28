import Image from "next/image";
import React from "react";
import noDataFoundImg from "@/../public/images/avatar/no-image.jpg";
import { FeedbackTypes } from "@/types";

const FirstHalf: React.FC<{
  firstHalf: FeedbackTypes[];
  setSelectedReview: (review: FeedbackTypes) => void;
}> = ({ firstHalf, setSelectedReview }) => {
  return (
    <div className="w-full sm:w-1/2 md:w-1/4">
      <div className="flying-avatar-wrapper">
        {firstHalf.map((review: FeedbackTypes) => (
          <span
            onClick={() => setSelectedReview(review)}
            key={review.id}
            className="avatar-circle flying"
          >
            <Image
              src={review.Image_URL || noDataFoundImg}
              alt={"Avatar"}
              width={100}
              height={100}
              className="w-full object-cover object-center text-[12px] text-center"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.onerror = null;
                target.src = noDataFoundImg.src;
              }}
            />
          </span>
        ))}
      </div>
    </div>
  );
};

export default FirstHalf;