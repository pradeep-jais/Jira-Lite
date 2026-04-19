import { createContext, useContext, useEffect, useReducer } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../lib/firebase";

const AuthContext = createContext();

export const useAuthContext = () => useContext(AuthContext);

const initialAuthState = {
  user: null,
  isInitialLoading: true,
  isActionLoading: false,
  error: null,
};

const authReducer = (state, action) => {
  if (action.type === "SET_INITIAL_LOADING") {
    return {
      ...state,
      isInitialLoading: action.payload,
    };
  }
  if (action.type === "SET_ACTION_LOADING") {
    return {
      ...state,
      isActionLoading: action.payload,
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

      dispatch({ type: "SET_INITIAL_LOADING", payload: false });
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
