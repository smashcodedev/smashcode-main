import { db } from "@/config/config";
import { child, push, ref, set } from "firebase/database";
import {
  getStorage,
  uploadBytesResumable,
  ref as storageRef,
  getDownloadURL,
} from "firebase/storage";

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
  console.log(fileLink);
};

export const uploadFile = async (file: File) => {
  const storage = getStorage();
  const storageref = storageRef(storage, `quotes-files/${file.name}`);

  await uploadBytesResumable(storageref, file);

  const downloadURL = await getDownloadURL(storageref);

  return downloadURL;
};

export default submitQuoteFirebase;
