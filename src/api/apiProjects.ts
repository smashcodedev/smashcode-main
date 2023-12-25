import { db, firebaseApp } from "@/firebase/config";
import { getDatabase, ref, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

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
