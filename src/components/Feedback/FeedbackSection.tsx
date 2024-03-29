import { getFeedbacks } from "@/api/apiFeedbacks";
import React from "react";
import { Feedbacks } from "@/components";

const FeedbackSection = async () => {
  const feedbacks = await getFeedbacks();

  return (
    <section>
      <Feedbacks feedbacks={feedbacks} />
    </section>
  );
};

export default FeedbackSection;
