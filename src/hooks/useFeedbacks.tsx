"use client";

import { getFeedbacks } from "@/api/apiFeedbacks";
import { useQuery } from "@tanstack/react-query";

const useFeedbacks = () => {
  const { data: feedbacks, isLoading: isLoadingFeedbacks } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: getFeedbacks,
  });

  return { feedbacks, isLoadingFeedbacks };
};

export default useFeedbacks;
