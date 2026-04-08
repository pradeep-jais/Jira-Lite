import { useState } from "react";
import AddTask from "./AddTask";
import Modal from "../../components/Modal";

const Project = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

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
        {isModalOpen && <AddTask setIsModalOpen={setIsModalOpen} />}
        <table className="w-full mb-2">
          <thead className="bg-background font-bold">
            <tr>
              <td>Your Task</td>
              <td>Deadline</td>
              <td>Status</td>
              <td>Actions</td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Create folder structure</td>
              <td>2023-10-31</td>
              <td>In progress</td>
              <td>
                <button className="mr-2 cursor-pointer">📝</button>
                <button className="cursor-pointer">❌</button>
              </td>
            </tr>
          </tbody>
          <tbody className="bg-background">
            <tr>
              <td>Initialize firebase</td>
              <td>2023-10-31</td>
              <td>Pending</td>
              <td>
                <button className="mr-2 cursor-pointer">📝</button>
                <button className="cursor-pointer">❌</button>
              </td>
            </tr>
          </tbody>
        </table>
        <button className="bg-primary hover:bg-primaryHover text-white text-sm  py-1 px-3 rounded-md cursor-pointer">
          Clear Tasks
        </button>
      </div>
    </section>
  );
};
export default Project;
