"use client";

import React, { useState, useEffect } from "react";
import defaultImg from "@/../public/images/noDatafound.png";
import Loader from "@/components/ui/Loader";
import Image from "next/image";
import { SectionHeading } from "..";

type FeedbackType = {
  clientName: string;
  clientFeedback: string;
  platform: string;
  url: string;
  featured: boolean;
  image_url: string;
  id: string;
};
const feedbackArray = [
  {
    clientName: "John Doe",
    clientFeedback:
      "Great service! Really satisfied with the product. The customer support was fantastic, and I appreciate the quick response to my queries. Will definitely recommend it to friends and family.",
    platform: "Twitter",
    url: "https://twitter.com/example",
    featured: true,
    image_url: "https://example.com/image1.jpg",
    id: "1",
  },
  {
    clientName: "Alice Smith",
    clientFeedback:
      "Awesome experience using this platform! The user interface is intuitive, making it incredibly easy to navigate. Found exactly what I needed without any hassle.",
    platform: "Facebook",
    url: "https://facebook.com/example",
    featured: true,
    image_url: "https://example.com/image2.jpg",
    id: "2",
  },
  {
    clientName: "Ethan Brown",
    clientFeedback:
      "Exceptional service! The attention to detail by the team is commendable. The platform’s functionality exceeded my expectations.",
    platform: "Instagram",
    url: "https://instagram.com/example",
    featured: true,
    image_url: "https://example.com/image3.jpg",
    id: "3",
  },
  {
    clientName: "Sophia Johnson",
    clientFeedback:
      "Absolutely thrilled with the results! The platform is a game-changer in my industry. The support team went above and beyond to assist me.",
    platform: "LinkedIn",
    url: "https://linkedin.com/example",
    featured: true,
    image_url: "https://example.com/image4.jpg",
    id: "4",
  },
  {
    clientName: "Oliver White",
    clientFeedback:
      "Incredible experience! The platform's functionality and ease of use are unmatched. I’ve seen a significant improvement in my workflow.",
    platform: "Pinterest",
    url: "https://pinterest.com/example",
    featured: true,
    image_url: "https://example.com/image5.jpg",
    id: "5",
  },
  {
    clientName: "Emma Davis",
    clientFeedback:
      "Fantastic platform! It has simplified my tasks tremendously. The user-friendly interface makes it a joy to work with.",
    platform: "Snapchat",
    url: "https://snapchat.com/example",
    featured: true,
    image_url: "https://example.com/image6.jpg",
    id: "6",
  },
  {
    clientName: "William Martinez",
    clientFeedback:
      "Impressed with the service! The platform's features are top-notch. The team's responsiveness is commendable.",
    platform: "TikTok",
    url: "https://tiktok.com/example",
    featured: true,
    image_url: "https://example.com/image7.jpg",
    id: "7",
  },
  {
    clientName: "Ava Garcia",
    clientFeedback:
      "Highly recommend this platform! The functionalities are well-designed and easy to grasp. It's made a significant difference in my workflow.",
    platform: "Reddit",
    url: "https://reddit.com/example",
    featured: true,
    image_url: "https://example.com/image8.jpg",
    id: "8",
  },
  {
    clientName: "James Wilson",
    clientFeedback:
      "The platform is phenomenal! It's like a one-stop solution for all my needs. The support team provided exceptional assistance.",
    platform: "YouTube",
    url: "https://youtube.com/example",
    featured: true,
    image_url: "https://example.com/image9.jpg",
    id: "9",
  },
  {
    clientName: "Mia Thompson",
    clientFeedback:
      "Extremely satisfied with the service! The platform's functionality is unmatched. The user interface is intuitive and easy to navigate.",
    platform: "WhatsApp",
    url: "https://whatsapp.com/example",
    featured: true,
    image_url: "https://example.com/image10.jpg",
    id: "10",
  },
  {
    clientName: "Liam Clark",
    clientFeedback:
      "Exceptional service and support! This platform has revolutionized the way I work. The features are incredibly powerful, and the interface is seamless. I highly recommend it to anyone looking to streamline their workflow.",
    platform: "Skype",
    url: "https://skype.com/example",
    featured: true,
    image_url: "https://example.com/image11.jpg",
    id: "11",
  },
  {
    clientName: "Harper Adams",
    clientFeedback:
      "Outstanding platform with top-notch features! The user experience is excellent, and the customer service is exceptional. It has made managing my tasks a breeze.",
    platform: "Discord",
    url: "https://discord.com/example",
    featured: true,
    image_url: "https://example.com/image12.jpg",
    id: "12",
  },
];

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
    <section>
      <div className="section-heading">
        <SectionHeading subHeading="Clients" heading="Feedback" />
      </div>
      <div className="feed-back-short-row style-right-border flex flex-wrap">
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
                            <a
                              href={
                                url || "https://www.fiverr.com/ismail_muhammad"
                              }
                              target="_blank"
                              className="a-simple text-pri"
                              rel="noreferrer"
                            >
                              Posted on &nbsp;{" "}
                              <span title="Source Title">
                                {platform || "Fiverr"} &nbsp; ---{">"} &nbsp;
                                view
                              </span>
                            </a>
                          </footer>
                        </blockquote>
                      </div>
                    );
                  })
              ) : (
                <Loader type="spinner" />
              )}
            </div>
            <div className="w-full sm:w-1/2 md:w-1/4">
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
