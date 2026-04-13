import { useState } from "react";

import Modal from "../../components/Modal";

import { useAuthContext } from "../../context/AuthContext";
import { useNavigate, useOutletContext } from "react-router-dom";

import { addProject } from "../../services/projectsService";

const ProjectForm = ({ setIsModalOpen }) => {
  const [project, setProject] = useState("");
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [error, setError] = useState(null);

  const { user } = useAuthContext();
  const navigate = useNavigate();
  const { getProjects } = useOutletContext();

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!user?.uid || !project.trim()) return;

    // Write new projects to Firestore
    let newProject = { name: project, createdAt: new Date() };
    try {
      setIsAddingProject(true);
      newProject = await addProject(user.uid, newProject);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsAddingProject(false);
    }

    setIsModalOpen(false);
    setProject("");

    // Refresh projects list
    getProjects(user.uid);
    if (newProject.id) {
      navigate(`/dashboard/projects/${newProject?.id}`);
    }
  };

  return (
    <Modal onClose={() => setIsModalOpen(false)}>
      <form
        onSubmit={(e) => handleAddProject(e)}
        className={`w-full bg-surface flex flex-col gap-4 p-8 max-w-lg rounded-sm shadow-md relative`}
      >
        <button
          className="absolute top-4 right-5 text-red-500 text-2xl font-bold cursor-pointer"
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        <h3 className="capitalize text-lg font-bold">Create project</h3>
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
        <div className="flex justify-end mt-4">
          <button
            className="bg-primary hover:bg-primaryHover transform duration-300 text-white text-sm py-1 px-4 capitalize rounded-md cursor-pointer flex items-center gap-2"
            type="submit"
          >
            {isAddingProject && (
              <span
                className="loader-1"
                style={{
                  width: "20px",
                  padding: "4px",
                  background: "#fff",
                }}
              ></span>
            )}
            {!isAddingProject ? "Create project" : `${"Creating project"}`}
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default ProjectForm;
