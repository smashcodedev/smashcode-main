import { db } from "@/firebase/config";
import { ref, get } from "firebase/database";

const getTeamMembers = async () => {
  try {
    const teamMembersRef = ref(db, "teamMembers");
    const snapshot = await get(teamMembersRef);
    const data = snapshot.val();

    return data;
  } catch (error) {
    throw new Error("An unknown error occurred. Please try again.");
  }
};

export { getTeamMembers };
