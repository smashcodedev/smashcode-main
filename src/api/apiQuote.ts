import { db } from "@/config/config";
import { child, push, ref, set } from "firebase/database";

type SubmitQuoteFirebaseArgs = {
  name: string;
  email: string;
  description: string;
  budget: number;
  fileLink: string;
};

const submitQuoteFirebase = async ({
  name,
  email,
  description,
  budget,
  fileLink,
}: SubmitQuoteFirebaseArgs) => {
  const quoteRef = ref(db, "client-quotes");
  const newId = push(quoteRef).key as string;

  set(child(quoteRef, newId), {
    id: newId,
    client_name: name,
    email: email,
    description: description,
    budget: budget,
    file_url: fileLink,
  });
};

export default submitQuoteFirebase;
