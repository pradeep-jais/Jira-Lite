import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Sidebar from "../../components/Sidebar";
import PopupBox from "../../components/PopupBox";
import ProfileMenu from "../../components/ProfileMenu";

import { useAuthContext } from "../../context/AuthContext";
import userPopover from "../../hooks/usePopover";
import useProjects from "../../hooks/useProjects";

const DashboardLayout = ({ children }) => {
  const { projects, getProjects, createProject, isLoading, error } =
    useProjects();
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
  const { isPopupOpen, coords, togglePopup } = userPopover(false);

  const { user } = useAuthContext();

  useEffect(() => {
    if (user) {
      getProjects(user.uid);
    }
  }, [user]);

  return (
    <div className=" flex  gap-2">
      {isPopupOpen && (
        <PopupBox closePopup={togglePopup} coords={coords}>
          <ProfileMenu />
        </PopupBox>
      )}
      <Sidebar
        projects={projects}
        isFetchingProjects={isLoading}
        isSidebarOpen={isSidebarOpen}
        setIsSidebarOpen={setIsSidebarOpen}
        togglePopup={togglePopup}
      />
      <div className="flex-auto min-w-0">
        <Navbar
          isSidebarOpen={isSidebarOpen}
          setIsSidebarOpen={setIsSidebarOpen}
          togglePopup={togglePopup}
        />
        <main>
          <Outlet
            context={{ projects, isLoading, getProjects, createProject }}
          />
        </main>
      </div>
    </div>
  );
};
export default DashboardLayout;
