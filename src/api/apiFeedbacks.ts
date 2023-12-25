import { db } from "@/firebase/config";
import { ref, get } from "firebase/database";

const getFeedbacks = async () => {
  try {
    const feedbacksRef = ref(db, "clientReviews");
    const snapshot = await get(feedbacksRef);
    const data = snapshot.val();

    return data;
  } catch (error) {
    throw new Error("An unknown error occurred. Please try again.");
  }
};

export { getFeedbacks };
