import Link from "next/link";
import Image from "next/image";
import { FeedbackTypes } from "@/types";
import defaultImg from "@/../public/images/noDatafound.png";

const Feedback: React.FC<{
  featuredReviews: FeedbackTypes[];
  selectedReview: FeedbackTypes | null;
}> = ({ featuredReviews, selectedReview }) => {
  return (
    <div className="w-full md:w-1/2">
      {featuredReviews
        ?.filter((review) => review.id === selectedReview?.id)
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
