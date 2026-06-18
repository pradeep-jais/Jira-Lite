import { useState } from "react";
import { fetchProjects, addProject } from "../services/projectsService";

const useProjects = () => {
  const [projects, setProjects] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const getProjects = async (uid) => {
    setIsLoading(true);

    try {
      const lists = await fetchProjects(uid);
      setProjects(lists);
    } catch (error) {
      setError(error);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const createProject = async (uid, project) => {
    const newProject = await addProject(uid, project);

    //   Optimistic update - avoid network pull after create project
    if (newProject.id) {
      setProjects((prev) => [...prev, newProject]);
    }
    return newProject;
  };

  return { projects, isLoading, error, getProjects, createProject };
};

export default useProjects;
