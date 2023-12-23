"use client";

import React, { useEffect, useState } from "react";

import Link from "next/link";
import Image from "next/image";
import { Loader, SectionHeading } from "@/components";
import defaultImg from "@/../public/images/noDatafound.png";
import { FeedbackType, feedbackArray } from "@/data/feedbacks";

const Feedback = () => {
  const [featuredReviews, setFeaturedReviews] = useState<FeedbackType[]>([]);
  const [firstHalf, setFirstHalf] = useState<FeedbackType[]>([]);
  const [secondHalf, setSecondHalf] = useState<FeedbackType[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedReview, setSelectedReview] = useState("");

  useEffect(() => {
    if (feedbackArray.length > 0) {
      setLoading(false);
      let filterdList = Object.values(feedbackArray)
        .slice(0, 12)
        .filter((val) => val.featured === true);
      setFeaturedReviews(feedbackArray.filter((val) => val.featured === true));
      if (filterdList.length > 0) {
        filterdList[0] && setSelectedReview(filterdList[0].id);
        const half = Math.ceil(filterdList.length / 2);
        setFirstHalf(filterdList.splice(0, half));
        setSecondHalf(filterdList.splice(-half));
      }
    } else {
      setFeaturedReviews([]);
      setLoading(true);
    }
  }, []);

  return (
    <section className="m-7">
      <SectionHeading subHeading="Clients" heading="Feedback" />

      <div className="feed-back-short-row style-right-border flex flex-wrap items-center justify-center">
        {!loading && featuredReviews.length > 0 ? (
          <>
            <div className="w-full sm:w-1/2 md:w-1/4">
              <div className="flying-avatar-wrapper">
                {firstHalf.map(({ id }) => {
                  return (
                    <span
                      onClick={() => setSelectedReview(id)}
                      key={id}
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
                  );
                })}
              </div>
            </div>
            <div className="w-full md:w-1/2">
              {featuredReviews.filter((val) => val.id === selectedReview) ? (
                featuredReviews
                  .filter((val) => val.id === selectedReview)
                  .map(({ clientName, clientFeedback, url, platform }) => {
                    return (
                      <div
                        key={clientName}
                        className="feed-back-short fade-in-bottom"
                      >
                        <p className="clientName">
                          <span className="avatar-circle">
                            <Image
                              src={defaultImg}
                              alt={"Image"}
                              width={100}
                              height={100}
                            />
                          </span>
                          {clientName}
                        </p>
                        <blockquote className="blockquote">
                          <p className="mb-0">“{clientFeedback}”</p>
                          <footer className="blockquote-footer mt-2">
                            <Link
                              href={
                                url || "https://www.fiverr.com/ismail_muhammad"
                              }
                              target="_blank"
                              className="a-simple text-primary-green"
                              rel="noreferrer"
                            >
                              Posted on &nbsp;{" "}
                              <span title="Source Title">
                                {platform || "Fiverr"} &nbsp; ---{">"} &nbsp;
                                view
                              </span>
                            </Link>
                          </footer>
                        </blockquote>
                      </div>
                    );
                  })
              ) : (
                <Loader type="spinner" />
              )}
            </div>
            <div className="mt-12 w-full sm:w-1/2 md:mt-0 md:w-1/4">
              <div className="flying-avatar-wrapper">
                <div className="flying-avatar-wrapper">
                  {secondHalf.map(({ id }) => {
                    return (
                      <span
                        onClick={() => setSelectedReview(id)}
                        key={id}
                        className="avatar-circle flying"
                      >
                        <Image
                          src={defaultImg}
                          alt={"image"}
                          width={100}
                          height={100}
                        />
                      </span>
                    );
                  })}
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className="w-full text-center">
            <Loader type="spinner" />
          </div>
        )}
      </div>
    </section>
  );
};

export default Feedback;
