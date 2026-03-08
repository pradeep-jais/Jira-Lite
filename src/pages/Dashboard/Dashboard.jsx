import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import Home from "../Home";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState("");
  const [IsAddProjectModalOpen, setIsAddProjectModalOpen] = useState(false);

  const { user } = useAuthContext();

  const handleAddProject = (e) => {
    e.preventDefault();
    if (!project.trim()) return;

    const newProjects = [...projects, project];
    setProjects(newProjects);
    setProject("");
  };

  const handleCreateProject = () => {
    setIsAddProjectModalOpen(true);
  };

  return (
    <div className="flex gap-2">
      <Sidebar projects={projects} />
      <div className="flex-auto">
        <Navbar />
        <main>
          <section className="pt-10">
            <div className="flex justify-center">
              <h2 className="w-full text-textPrimary font-medium text-3xl">
                Welcome,{" "}
                {user ? (
                  user.name.split(" ")[0]
                ) : (
                  <span className="loader"></span>
                )}
              </h2>
            </div>
            <div className="h-20">
              <div className="loader"></div>
            </div>

            <div className="p-4 text-center mt-4">
              <button
                className="bg-primary hover:bg-primaryHover transform duration-300 text-white text-sm py-1 px-4 capitalize rounded-md cursor-pointer"
                onClick={handleCreateProject}
              >
                create project
              </button>
            </div>
            <form
              onSubmit={(e) => handleAddProject(e)}
              className={`w-[95%] mx-auto bg-surface min-h-40 flex flex-col gap-4 p-4 mt-4 max-w-xl rounded-sm shadow-md ${IsAddProjectModalOpen ? "block" : "hidden"}`}
            >
              <h3 className="capitalize text-lg">Create a project</h3>
              <div className="flex flex-col gap-1">
                <input
                  type="text"
                  id="project"
                  value={project}
                  onChange={(e) => setProject(e.target.value)}
                  className="border border-border p-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="Enter project name"
                />
              </div>
              <div className="text-end mt-4">
                <button
                  className="bg-primary hover:bg-primaryHover transform duration-300 text-white text-sm py-1 px-4 capitalize rounded-md cursor-pointer"
                  type="submit"
                >
                  Add project
                </button>
              </div>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
