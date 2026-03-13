import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import Home from "../Home";
import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Modal from "../../components/Modal";

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
    setIsAddProjectModalOpen(false);
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
          <section className="flex flex-col gap-12 items-center pt-12">
            <h2 className="text-center text-textPrimary font-medium text-3xl">
              Welcome,{" "}
              {user ? (
                <strong>{user.name.split(" ")[0]}</strong>
              ) : (
                <span className="loader"></span>
              )}
            </h2>

            <button
              className="bg-primary hover:bg-primaryHover transform duration-300 text-white text-sm py-1 px-4 capitalize rounded-md cursor-pointer"
              onClick={handleCreateProject}
            >
              create project
            </button>

            {IsAddProjectModalOpen && (
              <Modal onClose={() => setIsAddProjectModalOpen(false)}>
                <form
                  onSubmit={(e) => handleAddProject(e)}
                  className={`w-full bg-surface flex flex-col gap-4 p-8 max-w-lg rounded-sm shadow-md relative`}
                >
                  <button
                    className="absolute top-4 right-5 text-red-500 text-2xl font-bold cursor-pointer"
                    onClick={() => setIsAddProjectModalOpen(false)}
                  >
                    X
                  </button>
                  <h3 className="capitalize text-lg font-bold">
                    Create project
                  </h3>
                  <div className="flex flex-col gap-2">
                    <label htmlFor="projectName">Project name</label>
                    <input
                      type="text"
                      id="projectName"
                      value={project}
                      onChange={(e) => setProject(e.target.value)}
                      className="border border-border px-2 py-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      placeholder="Eg; project management app"
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
              </Modal>
            )}
          </section>
        </main>
      </div>
    </div>
  );
};
export default Dashboard;
