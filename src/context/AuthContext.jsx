import { createContext, useContext, useReducer } from "react";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../lib/firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initialAuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  return state;
};

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    const result = await signInWithPopup(auth, googleProvider);
    console.log(result.user);
  } catch (error) {
    console.log(error);
  }
};

const logOut = async () => {
  try {
    await signOut(auth);
    console.log("User Logged out successfully!");
  } catch (error) {
    console.log(error);
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, signInWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
