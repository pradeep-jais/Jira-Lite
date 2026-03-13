import { doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

// Set user data in Firestore if it doesn't exist
export const createUserIfNotExists = async (user) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnap = await getDoc(userDocRef);

  if (userSnap.exists()) {
    await setDoc(userDocRef, {
      ...user,
    });
  }
};
