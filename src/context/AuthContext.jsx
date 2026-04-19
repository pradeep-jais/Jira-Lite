import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initialAuthState = {
  user: null,
  isLoading: true,
  error: null,
};

const authReducer = (state, action) => {
  if (action.type === "SET_LOADING") {
    return {
      ...state,
      isLoading: action.payload,
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
      user: action.payload.userData,
    };
  }
  if (action.type === "CLEAR_ERROR") {
    return {
      ...state,
      error: null,
    };
  }
  return state;
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(authReducer, initialAuthState);

  useEffect(() => {
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
            userData,
          },
        });
      } else {
        dispatch({ type: "SET_USER", payload: { userData: null } });
      }

      dispatch({ type: "SET_LOADING", payload: false });
    });

    return () => unsubscribe();
  }, []);

  return (
    <AuthContext.Provider value={{ ...state, dispatch }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
