import { collection, getDocs, addDoc } from "firebase/firestore";
import { db } from "../lib/firebase";

const fetchProjects = async (uid) => {
  const projectsRef = collection(db, `users/${uid}/projects`);
  const projectsSnap = await getDocs(projectsRef);
  const projectsData = projectsSnap.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));

  return projectsData || [];
};

const addProject = async (uid, project) => {
  const projectsRef = collection(db, `users/${uid}/projects`);
  const res = await addDoc(projectsRef, project);

  return { ...project, id: res.id };
};

export { fetchProjects, addProject };
