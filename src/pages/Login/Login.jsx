import { Navigate } from "react-router-dom";

import useAuth from "../../hooks/useAuth";
import Button from "../../components/ui/Button";
import { useEffect } from "react";

const Login = () => {
  const { user, isLoading, error, signInWithGoogle, clearError } = useAuth();

  useEffect(() => {
    // Clear any error state after component unmounts
    return () => clearError();
  }, []);

  if (error) return <Navigate replace to={"/error"} />;

  if (user) return <Navigate replace to={"/dashboard"} />;

  return (
    <main className="min-h-screen flex justify-center items-center">
      <article className="bg-surface p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl text-textPrimary underline underline-offset-8 decoration-primary decoration-3">
          Login Page
        </h2>
        <p className="mt-10 mb-5">Please Log in</p>
        <Button size={"lg"} onClick={signInWithGoogle}>
          {isLoading && (
            <span
              className="loader-1"
              style={{ background: "white", width: "30px", padding: "6px" }}
            ></span>
          )}
          {isLoading ? "Signing In" : "Sign in with Google"}
        </Button>
      </article>
    </main>
  );
};
export default Login;
