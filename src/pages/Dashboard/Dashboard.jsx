import Navbar from "../../components/Navbar";
import Sidebar from "./Sidebar";
import Home from "../Home";
import { useEffect, useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import Modal from "../../components/Modal";

import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [project, setProject] = useState("");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isAddingProject, setIsAddingProject] = useState(false);
  const [isFetchingProjects, setIsFetchingProjects] = useState(true);
  const [error, setError] = useState(null);

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
      console.log(projectsSnap);
      const projectsData = projectsSnap.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      console.log(projectsData);

      setProjects(projectsData);
    } catch (error) {
      console.log(error);
    } finally {
      setIsFetchingProjects(false);
    }
  };

  const handleAddProject = async (e) => {
    e.preventDefault();
    if (!user?.uid || !project.trim()) return;

    // Write new projects to Firestore
    try {
      setIsAddingProject(true);
      const projectsRef = collection(db, `users/${user?.uid}/projects`);
      const res = await addDoc(projectsRef, {
        name: project,
        createdAt: new Date(),
      });
      console.log("project added to firestore successfully!", res);
    } catch (error) {
      setError(error);
      console.log(error);
    } finally {
      setIsAddingProject(false);
    }

    setIsModalOpen(false);
    getProjects();
  };

  return (
    <div className="flex gap-2">
      <Sidebar projects={projects} isFetchingProjects={isFetchingProjects} />
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
              onClick={() => setIsModalOpen(true)}
            >
              create project
            </button>

            {isModalOpen && (
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
                      {!isAddingProject
                        ? "Create project"
                        : `${"Creating project"}`}
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
