"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Loader, SectionHeading } from "@/components";
import defaultImg from "@/../public/images/noDatafound.png";
import useFeedbacks from "@/hooks/useFeedbacks";

const Feedback = () => {
  const { feedbacks, isLoadingFeedbacks } = useFeedbacks();
  const [selectedReview, setSelectedReview] = useState(null);
  const [firstHalf, setFirstHalf] = useState([]);
  const [secondHalf, setSecondHalf] = useState([]);

  // Filter and sort feedbacks once after they're loaded
  const featuredReviews = React.useMemo(() => {
    if (!feedbacks) return [];
    const reviewsArray = Object.values(feedbacks);
    const featured = reviewsArray.filter((review) => review.featured);
    return featured;
  }, [feedbacks]);

  // Set the first review as selected once featuredReviews changes
  useEffect(() => {
    if (featuredReviews.length > 0) {
      setSelectedReview(featuredReviews[0]);
      const half = Math.ceil(featuredReviews.length / 2);
      setFirstHalf(featuredReviews.slice(0, half));
      setSecondHalf(featuredReviews.slice(half));
    }
  }, [featuredReviews]);

  if (isLoadingFeedbacks) {
    return <Loader type="spinner" />;
  }

  return (
    <section className="m-7">
      <SectionHeading subHeading="Clients" heading="Feedback" />
      <div className="feed-back-short-row style-right-border flex flex-wrap items-center justify-center">
        <div className="w-full sm:w-1/2 md:w-1/4">
          <div className="flying-avatar-wrapper">
            {firstHalf.map((review) => (
              <span
                onClick={() => setSelectedReview(review)}
                key={review.id}
                className="avatar-circle flying"
              >
                <Image
                  src={defaultImg}
                  alt={"image"}
                  width={100}
                  height={100}
                  className="w-full object-cover object-center text-center"
                />
              </span>
            ))}
          </div>
        </div>
        <div className="w-full md:w-1/2">
          {featuredReviews
            .filter((review) => review.id === selectedReview?.id)
            .map((review) => (
              <div key={review.id} className="feed-back-short fade-in-bottom">
                <p className="clientName">
                  <span className="avatar-circle">
                    <Image
                      src={defaultImg}
                      alt={"image"}
                      width={100}
                      height={100}
                      className="w-full object-cover object-center text-center"
                    />
                  </span>
                  {review.client_Name}
                </p>
                <blockquote className="blockquote">
                  <p className="mb-0">“{review.client_feedback}”</p>
                  <footer className="blockquote-footer mt-2">
                    <Link
                      href={
                        review.url || "https://www.fiverr.com/ismail_muhammad"
                      }
                      target="_blank"
                      className="a-simple text-primary-green"
                      rel="noreferrer"
                    >
                      Posted on &nbsp;{" "}
                      <span title="Source Title">
                        {review.platform || "Fiverr"} &nbsp; ---{">"} &nbsp;
                        view
                      </span>
                    </Link>
                  </footer>
                </blockquote>
              </div>
            ))}
        </div>
        <div className="mt-12 w-full sm:w-1/2 md:mt-0 md:w-1/4">
          <div className="flying-avatar-wrapper">
            {secondHalf.map((review) => (
              <span
                onClick={() => setSelectedReview(review)}
                key={review.id}
                className="avatar-circle flying"
              >
                <Image
                  src={defaultImg}
                  alt={"image"}
                  width={100}
                  height={100}
                  className="w-full object-cover object-center text-center"
                />
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feedback;
