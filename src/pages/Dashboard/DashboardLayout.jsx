import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";

import { useState, useEffect } from "react";
import { useAuthContext } from "../../context/AuthContext";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

const DashboardLayout = ({ children }) => {
  const [projects, setProjects] = useState([]);
  const [isFetchingProjects, setIsFetchingProjects] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getProjects();
    }
  }, [user]);

  const getProjects = async () => {
    if (!user?.uid) return;

    try {
      setIsFetchingProjects(true);
      const projectsRef = collection(db, `users/${user?.uid}/projects`);
      const projectsSnap = await getDocs(projectsRef);
      const projectsData = projectsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProjects(projectsData);
    } catch (error) {
      console.log(error);
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
