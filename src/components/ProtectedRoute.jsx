import { useAuthContext } from "../context/AuthContext";
import { Navigate, Outlet } from "react-router-dom";
import Loader from "./ui/Loader";

const ProtectedRoute = () => {
  const { user, isLoading } = useAuthContext();

  if (isLoading) return <Loader />;

  if (!user) return <Navigate to={"/"} />;

  return <Outlet />;
};
export default ProtectedRoute;
