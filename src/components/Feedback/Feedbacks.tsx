"use client";

import { useEffect, useMemo, useState } from "react";

import { FeedbackTypes } from "@/types";
import { Feedback, FirstHalf, SecondHalf, SectionHeading } from "@/components";

const Feedbacks: React.FC<{ feedbacks: FeedbackTypes }> = ({ feedbacks }) => {
  const [selectedReview, setSelectedReview] = useState<FeedbackTypes | null>(
    null,
  );
  const [firstHalf, setFirstHalf] = useState<FeedbackTypes[]>([]);
  const [secondHalf, setSecondHalf] = useState<FeedbackTypes[]>([]);

  const featuredReviews = useMemo(() => {
    if (!feedbacks) return [];
    const reviewsArray = Object.values(feedbacks) as unknown as FeedbackTypes[];
    const featured = reviewsArray.filter((review) => review.featured);
    return featured;
  }, [feedbacks]);

  useEffect(() => {
    if (featuredReviews.length > 0) {
      setSelectedReview(featuredReviews[0]);
      const half = Math.ceil(featuredReviews.length / 2);
      setFirstHalf(featuredReviews.slice(0, half));
      setSecondHalf(featuredReviews.slice(half));
    }
  }, [featuredReviews]);

  return (
    <div className="m-7">
      <SectionHeading subHeading="Clients" heading="Feedback" />
      <div className="feed-back-short-row style-right-border flex flex-wrap items-center justify-center">
        <FirstHalf
          firstHalf={firstHalf}
          setSelectedReview={setSelectedReview}
        />
        <Feedback
          featuredReviews={featuredReviews}
          selectedReview={selectedReview}
        />
        <SecondHalf
          secondHalf={secondHalf}
          setSelectedReview={setSelectedReview}
        />
      </div>
    </div>
  );
};

export default Feedbacks;
