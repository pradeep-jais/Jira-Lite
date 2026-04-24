import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { fetchProjects } from "../../services/projectsService";
import PopupBox from "../../components/PopupBox";

const DashboardLayout = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isFetchingProjects, setIsFetchingProjects] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getProjects(user.uid);
    }
  }, [user]);

  const getProjects = async (uid) => {
    try {
      setIsFetchingProjects(true);
      if (!uid) throw new Error("User id is not defined! Try again!");
      const projectsData = await fetchProjects(uid);
      setProjects(projectsData);
    } catch (error) {
      console.error(error);
    } finally {
      setIsFetchingProjects(false);
    }
  };

  return (
    <div className=" flex  gap-2">
      <Sidebar
        projects={projects}
        isFetchingProjects={isFetchingProjects}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
      />
      <div className="flex-auto min-w-0">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
        />
        <main>
          <Outlet context={{ projects, isFetchingProjects, getProjects }} />
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
