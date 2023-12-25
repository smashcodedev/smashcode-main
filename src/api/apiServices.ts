import { firebaseApp } from "@/firebase/config";
import { getDatabase, ref, get } from "firebase/database";
import { collection, getDocs } from "firebase/firestore";

const db = getDatabase(firebaseApp);
const getServices = async () => {
  try {
    const servicesRef = ref(db, "projects");
    const snapshot = await get(servicesRef);

    if (snapshot.exists()) {
      return snapshot.val();
    } else {
      console.log("No data available");
    }
  } catch (error) {
    throw new Error("An unknown error occurred. Please try again.");
  }
};

export { getServices };
