import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { firebaseApp } from "../firebase/config";

export const auth = getAuth(firebaseApp);

const signIn = async (email: string, password: string) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (error: any) {
    if (typeof error.code === "string") {
      switch (error.code) {
        case "auth/invalid-email":
          throw new Error("Invalid email address.");
        case "auth/user-disabled":
          throw new Error("This user account has been disabled.");
        case "auth/user-not-found":
        case "auth/wrong-password":
          throw new Error("Invalid email or password.");
        default:
          throw new Error("An unknown error occurred. Please try again.");
      }
    }
  }
};

export { signIn };
