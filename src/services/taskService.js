import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../lib/firebase";

const fetchTasks = async (uid, projectId) => {
  const tasksRef = collection(db, `users/${uid}/projects/${projectId}/tasks`);
  const tasksSnapshot = await getDocs(tasksRef);

  const tasksList = tasksSnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return tasksList;
};

const createTask = async (uid, projectId, task) => {
  const tasksRef = collection(db, `users/${uid}/projects/${projectId}/tasks`);
  const docRef = await addDoc(tasksRef, task);
};

const updateTask = async (uid, projectId, taskId, editedTask) => {
  const taskRef = doc(db, `users/${uid}/projects/${projectId}/tasks`, taskId);
  await updateDoc(taskRef, editedTask);
};

const deleteTask = async (uid, projectId, taskId) => {
  const taskRef = doc(db, `users/${uid}/projects/${projectId}/tasks`, taskId);
  await deleteDoc(taskRef);
};

export { fetchTasks, createTask, updateTask, deleteTask };
