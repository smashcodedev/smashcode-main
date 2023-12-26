import { db } from "@/firebase/config";
import { ref, get } from "firebase/database";

const getCategories = async () => {
  try {
    const categoriesRef = ref(db, "categories");
    const snapshot = await get(categoriesRef);
    const data = snapshot.val();

    return data;
  } catch (error) {
    throw new Error("An unknown error occurred. Please try again.");
  }
};

export { getCategories };
