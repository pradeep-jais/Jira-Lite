import { useState } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";

import Modal from "../../components/Modal";

import { useAuthContext } from "../../context/AuthContext";
import useProjects from "../../hooks/useProjects";

const ProjectForm = ({ setIsModalOpen }) => {
  const [project, setProject] = useState("");
  const [formError, setFormError] = useState(null);
  const [isCreating, setIsCreating] = useState(false);
  const [error, setError] = useState(null);

  const { createProject } = useOutletContext();

  const { user } = useAuthContext();
  const navigate = useNavigate();

  const handleAddProject = async (e) => {
    e.preventDefault();

    if (!project.trim()) {
      setFormError("Project name is required!");
      return;
    }

    // Write new projects to Firestore
    let newProject = { name: project, createdAt: new Date() };

    try {
      setIsCreating(true);

      const res = await createProject(user.uid, newProject);

      setIsModalOpen(false);
      setProject("");

      if (res?.id) {
        navigate(`/dashboard/projects/${res.id}`);
      }
    } catch (error) {
      setError(error);
      console.error("Error while creating project:", error);
    } finally {
      setIsCreating(false);
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
            onChange={(e) => {
              setProject(e.target.value);
              setFormError(null);
              setError(null);
            }}
            className="border border-border px-2 py-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="Eg; project management app"
          />
          {formError && <p className="text-warning text-sm">{formError}</p>}
          {error && (
            <p className="text-warning text-sm">
              Ops! Error while creating new project, Please try again.
            </p>
          )}
        </div>
        <div className="flex justify-end mt-4">
          <button
            className={`bg-primary hover:bg-primaryHover transform duration-300 text-white text-sm py-1 px-4 capitalize rounded-md  flex items-center gap-2 ${isCreating ? "cursor-not-allowed" : "cursor-pointer"}`}
            type="submit"
            disabled={isCreating}
          >
            {isCreating && (
              <span
                className="loader-1"
                style={{
                  width: "20px",
                  padding: "4px",
                  background: "#fff",
                }}
              ></span>
            )}
            {!isCreating ? "Create project" : `${"Creating project"}`}
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default ProjectForm;
