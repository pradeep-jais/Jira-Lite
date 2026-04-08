import Modal from "../../components/Modal";

import { useState } from "react";

const AddTask = ({ setTasks, postTask, setIsModalOpen }) => {
  const [task, setTask] = useState({
    name: "",
    deadline: "",
    status: "pending",
  });
  const handleTaskInput = (e) => {
    setTask((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    setTasks((prev) => [...prev, task]);
    postTask({ createdAt: new Date(), ...task });

    setTask({
      name: "",
      deadline: "",
      status: "pending",
    });
    setIsModalOpen(false);
  };
  return (
    <Modal>
      <form
        onSubmit={handleTaskSubmit}
        className={`w-full bg-surface flex flex-col gap-4 p-8 max-w-lg rounded-sm shadow-md relative`}
      >
        <button
          className="absolute top-4 right-5 text-red-500 text-2xl font-bold cursor-pointer"
          type="button"
          onClick={() => setIsModalOpen(false)}
        >
          X
        </button>
        <h3 className="capitalize text-lg font-bold">Add New Tasks</h3>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskName">Task name</label>
          <input
            type="text"
            id="taskName"
            name="name"
            value={task.name}
            onChange={handleTaskInput}
            className="border border-border px-2 py-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
            placeholder="New task"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskDeadline">Deadline</label>
          <input
            type="date"
            id="taskDeadline"
            name="deadline"
            value={task.deadline}
            onChange={handleTaskInput}
            className="border border-border px-2 py-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="taskStatus">Status</label>
          <select
            name="status"
            id="taskStatus"
            value={task.status}
            onChange={handleTaskInput}
          >
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <div className="flex justify-end mt-4">
          <button
            className="bg-primary hover:bg-primaryHover transform duration-300 text-white text-sm py-1 px-4 capitalize rounded-md cursor-pointer flex items-center gap-2"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </Modal>
  );
};
export default AddTask;
