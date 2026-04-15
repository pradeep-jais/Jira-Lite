import { signOut, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { auth, db } from "../lib/firebase";

const logInWithGoogle = async () => {
  const googleProvider = new GoogleAuthProvider();

  await signInWithPopup(auth, googleProvider);
};

const logOut = async () => {
  await signOut(auth);
};

// Set user data in Firestore if it doesn't exist
const createUserIfNotExists = async (user) => {
  const userDocRef = doc(db, "users", user.uid);

  const userSnap = await getDoc(userDocRef);

  if (!userSnap.exists()) {
    await setDoc(userDocRef, {
      ...user,
    });
  }
};

export { logInWithGoogle, logOut, createUserIfNotExists };
