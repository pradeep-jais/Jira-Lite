import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import Home from "../Home";

const Dashboard = () => {
  return (
    <div className="flex gap-4">
      <Sidebar />
      <div className="flex-auto">
        <Navbar />
        <main>
          <Home />
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
