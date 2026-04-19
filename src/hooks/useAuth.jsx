import { useAuthContext } from "../context/AuthContext";
import {
  logInWithGoogle,
  logOut,
  createUserIfNotExists,
} from "../services/userService";

const useAuth = () => {
  const { user, isActionLoading, isInitialLoading, error, dispatch } =
    useAuthContext();

  const clearError = () => dispatch({ type: "CLEAR_ERROR" });

  const signInWithGoogle = async () => {
    clearError();

    dispatch({ type: "SET_ACTION_LOADING", payload: true });

    try {
      const userData = await logInWithGoogle();
      await createUserIfNotExists(userData); // save new user to firestore

      console.log("User logged In Successfully!");
    } catch (error) {
      const { code, name, message } = error;

      dispatch({
        type: "SET_ERROR",
        payload: { error: { code, name, message } },
      });
      console.log("Something went wrong!", error);
    } finally {
      dispatch({ type: "SET_ACTION_LOADING", payload: false });
    }
  };

  const signOut = async () => {
    await logOut();
    console.log("User logged Out Successfully!");
    // No need to manually dispatch SET_USER; onAuthStateChanged handles it!
    // Not required to handle loading and error for signOut - It's instant, never fails, bad UX choice
  };

  return {
    user,
    isActionLoading,
    isInitialLoading,
    error,
    signInWithGoogle,
    signOut,
    clearError,
  };
};

export default useAuth;
