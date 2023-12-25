import { db } from "@/firebase/config";
import { ref, get } from "firebase/database";

const getProjects = async () => {
  try {
    const projectsRef = ref(db, "projects");
    const snapshot = await get(projectsRef);
    const data = snapshot.val();

    return data;
  } catch (error) {
    throw new Error("An unknown error occurred. Please try again.");
  }
};

export { getProjects };
