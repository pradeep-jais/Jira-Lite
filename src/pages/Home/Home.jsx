import { useEffect } from "react";
import Button from "../../components/ui/Button";
import { useAuthContext } from "../../context/AuthContext";

const Home = () => {
  const { dispatch } = useAuthContext();

  useEffect(() => {
    dispatch({ type: "SET_LOADING", payload: false });
    dispatch({ type: "SET_ERROR", payload: { error: null } });
  }, []);

  return (
    <section className="text-center pt-6 min-h-screen">
      <h1 className="text-lg md:text-2xl font-bold capitalize underline decoration-primary decoration-4 underline-offset-10">
        Client Project Management App
      </h1>
      <p className="text-textSecondary mt-10 text-sm md:text-lg max-w-3xl mx-auto">
        Use this app to manage your projects efficiently.
      </p>
      <Button to="/login" className={"mt-8"} size={"xl"}>
        Get started
      </Button>
    </section>
  );
};
export default Home;
