import { useAuthContext } from "../context/AuthContext";
import { logInWithGoogle, logOut } from "../services/userService";

const useAuth = () => {
  const { user, isLoading, error, dispatch } = useAuthContext();

  const signInWithGoogle = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      await logInWithGoogle();
      console.log("User logged In Successfully!");
    } catch (error) {
      const { code, name, message } = error;

      dispatch({
        type: "SET_ERROR",
        payload: { error: { code, name, message } },
      });
      console.log("Something went wrong!", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  const signOut = async () => {
    try {
      dispatch({ type: "SET_LOADING", payload: true });
      await logOut();
      console.log("User logged out successfully!");
    } catch (error) {
      dispatch({
        type: "SET_ERROR",
        payload: { error: { code, name, message } },
      });
      console.log("Something went wrong!", error);
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  };

  return { signInWithGoogle, signOut };
};
export default useAuth;
