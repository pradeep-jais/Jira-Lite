import { useEffect, useState } from "react";
import AddTask from "./AddTask";
import {
  Plus,
  Trash2,
  SquarePen,
  EllipsisVertical,
  CircleDashed,
} from "lucide-react";

import {
  collection,
  addDoc,
  getDocs,
  doc,
  deleteDoc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../../lib/firebase";
import { useParams } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";

const Project = () => {
  const [tasks, setTasks] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [action, setAction] = useState({ name: "", id: "" });

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

  const updateTask = async (taskId, updatedTask) => {
    try {
      const taskRef = doc(
        db,
        `users/${user.uid}/projects/${projectId}/tasks`,
        taskId,
      );
      await updateDoc(taskRef, updatedTask);
      console.log("Task updated successfully!", updatedTask);
    } catch (error) {
      console.log("Error while updating task:", error);
    }
  };

  const removeTask = async (taskId) => {
    try {
      const taskRef = doc(
        db,
        `users/${user.uid}/projects/${projectId}/tasks`,
        taskId,
      );
      await deleteDoc(taskRef);
      getTasks();
      console.log("Task deleted with ID: ", taskId);
    } catch (error) {
      console.error("Error deleting task: ", error);
    }
  };

  const pendingTasksCount = tasks.filter(
    (task) => task.status === "pending",
  ).length;

  const statusPillColor = (status) => {
    let colorClass = "";
    if (status === "pending") colorClass = "bg-gray-200 text-textPrimary";
    if (status === "completed") colorClass = "bg-success text-white";
    if (status === "in progress") colorClass = "bg-blue-500 text-white";
    return colorClass;
  };

  return (
    <section className="max-w-5xl mx-auto p-2">
      <div className="mb-2 bg-surface p-2 rounded-md shadow-sm">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-xl font-medium text-textPrimary">
              Build a portfolio app
            </h2>
            <div className="flex gap-2 text-textSecondary px-1">
              <span>{tasks.length} Task</span>
              <span className="w-1.5 h-1.5 rounded-full bg-gray-700 self-end mb-1.5"></span>
              <span>{pendingTasksCount} Pending</span>
            </div>
          </div>
          <button
            className="bg-primary hover:bg-primaryHover text-white text-sm  py-1 px-3 rounded-md cursor-pointer"
            onClick={() => {
              setIsModalOpen(true);
              setAction({ name: "add", id: "" });
            }}
          >
            Add Task
          </button>
        </div>
      </div>

      <div className="mb-2 bg-surface p-2 rounded-sm shadow-sm">
        <div className="flex justify-between border-b border-border mb-2 pb-2">
          <h3 className="text-lg font-semibold">Tasks</h3>
          <button className="cursor-pointer hover:text-primary transition">
            <EllipsisVertical />
          </button>
        </div>

        {isModalOpen && (
          <AddTask
            tasks={tasks}
            action={action}
            postTask={postTask}
            getTasks={getTasks}
            updateTask={updateTask}
            setIsModalOpen={setIsModalOpen}
          />
        )}
        {tasks.length === 0 ? (
          <p>No tasks available.</p>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full mb-2 text-sm min-w-max">
              <thead>
                <tr className="bg-background font-semibold text-left text-textPrimary">
                  <th className="p-2">Name</th>
                  <th className="p-2">Deadline</th>
                  <th className="p-2">Status</th>
                  <th className="p-2">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">
                    <button
                      className="bg-gray-100 text-sm py-1 px-3 rounded-lg text-primary font-bold hover:bg-gray-200 transition cursor-pointer flex items-center gap-1"
                      onClick={() => {
                        setIsModalOpen(true);
                        setAction({ name: "add", id: "" });
                      }}
                    >
                      <Plus size={20} /> Add Task
                    </button>
                  </td>
                </tr>
                {tasks.map((task, i) => {
                  const { id, name, deadline, status } = task;
                  return (
                    <tr key={id} className="text-textPrimary">
                      <td className="p-2 flex items-center gap-2">
                        <CircleDashed size={20} /> {name}
                      </td>
                      <td className="p-1">{deadline}</td>
                      <td className="p-1">
                        <span
                          className={`w-25 flex justify-center items-center ${statusPillColor(status)} capitalize py-0.5 px-2 rounded-2xl`}
                        >
                          {status}
                        </span>
                      </td>
                      <td className="p-1">
                        <button
                          className="mr-2 cursor-pointer hover:text-primary"
                          onClick={() => {
                            setIsModalOpen(true);
                            setAction({ name: "edit", id });
                          }}
                        >
                          <SquarePen size={20} />
                        </button>
                        <button
                          className="cursor-pointer hover:text-primary transition"
                          onClick={() => removeTask(id)}
                        >
                          <Trash2 size={20} />
                        </button>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </section>
  );
};
export default Project;
