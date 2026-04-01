import { createContext, useContext, useEffect, useReducer } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import { auth } from "../lib/firebase";
import { createUserIfNotExists } from "../services/userService";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initialAuthState = {
  user: null,
  loading: false,
  error: null,
};

const authReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      loading: action.payload,
    };
  }
  if (action.type === "SET_ERROR") {
    return {
      ...state,
      error: action.payload.error,
    };
  }
  if (action.type === "SET_USER") {
    return {
      ...state,
      user: action.payload.user,
    };
  }
  return state;
};

const googleProvider = new GoogleAuthProvider();

const signInWithGoogle = async () => {
  try {
    dispatch({ type: "SET_ERROR", payload: { error: null } });
    dispatch({ type: "SET_LOADING", payload: true });
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    dispatch({ type: "SET_ERROR", payload: { error: error.message } });
  } finally {
    dispatch({ type: "SET_LOADING", payload: false });
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

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: true });

    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, photoURL, metadata } = user;
        const userData = {
          uid,
          name: user.displayName,
          email,
          photoURL,
          createAt: metadata.creationTime,
          lastLoginAt: metadata.lastSignInTime,
          role: "user",
        };

        dispatch({
          type: "SET_USER",
          payload: {
            user: userData,
          },
        });
        createUserIfNotExists(userData); // save new user to firestore
      } else {
        dispatch({ type: "SET_USER", payload: { user: null } });
      }
      dispatch({ type: "SET_LOADING", payload: false });
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider
      value={{ ...state, dispatch, signInWithGoogle, logOut }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
