import { NavLink } from "react-router-dom";
import { Menu, PanelLeftClose } from "lucide-react";
import Button from "./ui/Button";
import useAuth from "../hooks/useAuth";

const Sidebar = ({
  projects,
  isFetchingProjects,
  isSidebarOpen,
  setIsSidebarOpen,
}) => {
  const { signOut } = useAuth();
  return (
    <>
      <div
        className={`fixed inset-0 bg-black/50 z-50 md:hidden transition-opacity ${isSidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"}`}
      />
      <aside
        className={`h-screen bg-surface border-r border-border p-4 pr-0 fixed z-60 md:relative transition-all duration-300 ease-in-out overflow-hidden  ${isSidebarOpen ? "w-64 translate-x-0" : "-translate-x-full md:w-16 md:translate-x-0"}`}
      >
        <div className="relative mb-10">
          <button
            className={`absolute top-2 left-0.5 text-primary cursor-pointer ${isSidebarOpen ? "hidden" : ""}`}
            onClick={() => {
              setIsSidebarOpen(true);
            }}
          >
            <Menu size={24} strokeWidth={2.5} />
          </button>
          <button
            className={`absolute top-2 right-3 text-textSecondary cursor-pointer hover:bg-gray-200 p-1.5 rounded-md ${isSidebarOpen ? "" : "hidden"}`}
            onClick={() => {
              setIsSidebarOpen(false);
            }}
          >
            <PanelLeftClose size={20} strokeWidth={2} />
          </button>
        </div>
        <div>
          <h3
            className={`uppercase text-textPrimary border-b border-border font-medium tracking-wide ${!isSidebarOpen && "md:opacity-0 md:w-0"}`}
          >
            Projects
          </h3>
          <ul className="gap-1 text-sm text-textPrimary h-[calc(100vh-100px)] overflow-y-auto py-2 pr-2">
            <Button onClick={signOut}>Logout</Button>
            {projects.map((project) => {
              const { id, name } = project;
              return (
                <li key={id}>
                  <NavLink
                    to={`/dashboard/projects/${id}`}
                    className={({ isActive }) =>
                      `block w-full capitalize border-none  cursor-pointer hover:text-white hover:bg-primary px-1.5 py-1 mb-0.5 rounded-sm transition duration-100 text-nowrap overflow-hidden text-ellipsis 
                  ${!isSidebarOpen && "md:opacity-0 md:w-0"}
                  ${isActive ? "text-white bg-primary" : ""}`
                    }
                  >
                    {name}
                  </NavLink>
                </li>
              );
            })}
            {isFetchingProjects ? (
              <li className="capitalize">
                <span className={`${!isSidebarOpen && "md:opacity-0 md:w-0"}`}>
                  Loading projects...
                </span>
              </li>
            ) : (
              projects.length === 0 && (
                <li className="capitalize hover:text-textPrimary transform duration-300">
                  <span
                    className={`${!isSidebarOpen && "md:opacity-0 md:w-0"}`}
                  >
                    No projects yet
                  </span>
                </li>
              )
            )}
          </ul>

          <footer className="bg-surface absolute bottom-0 left-0 right-0 z-1 p-3">
            <p
              className={`text-xs text-textSecondary capitalize text-nowrap ${!isSidebarOpen && "md:opacity-0 md:w-0"}`}
            >
              project manager lite v0.0
            </p>
          </footer>
        </div>
      </aside>
    </>
  );
};
export default Sidebar;
