import Link from "next/link";
import Image from "next/image";
import React from "react";
import { FeedbackTypes } from "@/types";
import noDataFoundImg from "@/../public/images/avatar/no-image.jpg";

const Feedback: React.FC<{
  featuredReviews: FeedbackTypes[];
  selectedReview: FeedbackTypes | null;
}> = ({ featuredReviews, selectedReview }) => {
  return (
    <div className="w-full md:w-1/2">
      {featuredReviews
        ?.filter((review) => review.id === selectedReview?.id)
        ?.slice(0, 1)
        .map((review) => (
          <div key={review.id} className="feed-back-short fade-in-bottom">
            <p className="clientName">
              <span className="avatar-circle">
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
              {review.client_Name}
            </p>
            <blockquote className="blockquote">
              <p className="mb-0">"{review.client_feedback}"</p>
              <footer className="blockquote-footer mt-2">
                <Link
                  href={review.url || "https://www.fiverr.com/ismail_muhammad"}
                  target="_blank"
                  className="a-simple text-primary-green"
                  rel="noreferrer"
                >
                  Posted on &nbsp;{" "}
                  <span title="Source Title">
                    {review.platform || "Fiverr"} &nbsp; ---{">"} &nbsp; view
                  </span>
                </Link>
              </footer>
            </blockquote>
          </div>
        ))}
    </div>
  );
};

export default Feedback;