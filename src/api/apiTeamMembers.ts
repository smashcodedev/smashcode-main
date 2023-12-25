"use server";

import { db } from "@/firebase/config";
import { collection, getDocs } from "firebase/firestore";

const servicesCollectionRef = collection(db, "teamMembers");

const getTeamMembers = async () => {
  try {
    const data = await getDocs(servicesCollectionRef);

    return data;
  } catch (error) {
    throw new Error("An unknown error occurred. Please try again.");
  }
};

export { getTeamMembers };
