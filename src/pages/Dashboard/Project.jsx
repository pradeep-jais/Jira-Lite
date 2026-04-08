import { useEffect, useState } from "react";
import AddTask from "./AddTask";

import { collection, addDoc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Project = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const { user } = useAuthContext();
  const { id: projectId } = useParams();

  useEffect(() => {
    if (user) getTasks();
  }, [user]);

  const getTasks = async () => {
    try {
      const tasksRef = collection(
        db,
        `users/${user.uid}/projects/${projectId}/tasks`,
      );
      const tasksSnapshot = await getDocs(tasksRef);

      const tasksList = tasksSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setTasks(tasksList);
    } catch (error) {
      console.error("Error fetching tasks: ", error);
    }
  };

  const postTask = async (task) => {
    try {
      const tasksRef = collection(
        db,
        `users/${user.uid}/projects/${projectId}/tasks`,
      );
      const docRef = await addDoc(tasksRef, task);
      console.log("Task added with ID: ", docRef.id);
    } catch (error) {
      console.error("Error adding task: ", error);
    }
  };

  return (
    <section className="max-w-7xl mx-auto p-2">
      <p className="mb-2 bg-surface p-2 rounded-sm shadow-3xl">
        Welcome, Pradeep !
      </p>
      <div className="flex items-center gap-2 mb-4">
        <label>Your Project:</label>
        <h2 className="text-xl font-medium">Build a portfolio app</h2>
      </div>
      <div className="mb-2 bg-surface p-2 rounded-sm shadow-sm">
        <div className="flex justify-between border-b border-border mb-2 pb-2">
          <h3 className="text-lg font-semibold">Tasks</h3>
          <button
            className="bg-primary hover:bg-primaryHover text-white text-sm  py-1 px-3 rounded-md cursor-pointer"
            onClick={() => setIsModalOpen(true)}
          >
            Add Task
          </button>
        </div>
        {isModalOpen && (
          <AddTask
            postTask={postTask}
            getTasks={getTasks}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <table className="w-full mb-2">
            <thead className="bg-background font-bold">
              <tr>
                <td>Name</td>
                <td>Deadline</td>
                <td>Status</td>
                <td>Actions</td>
              </tr>
            </thead>
            {tasks.map((task, i) => {
              const { name, deadline, status } = task;
              return (
                <tbody key={i}>
                  <tr>
                    <td>{name}</td>
                    <td>{deadline}</td>
                    <td>{status}</td>
                    <td>
                      <button className="mr-2 cursor-pointer">📝</button>
                      <button className="cursor-pointer">❌</button>
                    </td>
                  </tr>
                </tbody>
              );
            })}
          </table>
        )}

        {tasks.length > 0 && (
          <button className="bg-primary hover:bg-primaryHover text-white text-sm  py-1 px-3 rounded-md cursor-pointer">
            Clear Tasks
          </button>
        )}
      </div>
    </section>
  );
};
export default Project;
