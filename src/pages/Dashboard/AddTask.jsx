import Modal from "../../components/Modal";
import { ClosedCaption, CrossIcon, X } from "lucide-react";

import { useEffect, useState } from "react";
import Button from "../../components/ui/Button";

const AddTask = ({
  tasks,
  action,
  getTasks,
  postTask,
  updateTask,
  setIsModalOpen,
}) => {
  const [task, setTask] = useState({
    name: "",
    deadline: "",
    status: "pending",
  });

  useEffect(() => {
    if (action.name === "edit") {
      const taskToEdit = tasks.find((task) => task.id === action.id);
      if (taskToEdit) {
        setTask(taskToEdit);
      }
    }
    if (action.name === "add") {
      setTask({
        name: "",
        deadline: "",
        status: "pending",
      });
    }
  }, []);

  const handleTaskInput = (e) => {
    setTask((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };
  const handleTaskSubmit = (e) => {
    e.preventDefault();
    if (action.name === "edit") {
      updateTask(action.id, task);
    }
    if (action.name === "add") {
      postTask({ createdAt: new Date(), ...task });
    }

    getTasks();

    setTask({
      name: "",
      deadline: "",
      status: "pending",
    });
    setIsModalOpen(false);
  };
  return (
    <Modal
      onClose={() => {
        setIsModalOpen(false);
      }}
    >
      <form
        onSubmit={handleTaskSubmit}
        className={`bg-background w-full p-6 max-w-lg rounded-sm shadow-md relative`}
      >
        <div className="flex justify-between mb-4">
          <div>
            <h3 className="capitalize text-xl font-bold">
              {action.name === "edit" ? "Edit Task" : "Add New Task"}
            </h3>
            <p className="text-textSecondary text-sm">
              Create tasks inside your project
            </p>
          </div>
          <button
            className="text-textSecondary hover:text-warning transition text-2xl font-bold cursor-pointer"
            type="button"
            onClick={() => setIsModalOpen(false)}
          >
            <X size={32} strokeWidth="3.5" />
          </button>
        </div>

        <div className="flex flex-col mb-5 gap-1">
          <label
            htmlFor="taskName"
            className="text-sm text-textSecondary font-medium tracking-wide capitalize"
          >
            Task name
          </label>
          <input
            type="text"
            id="taskName"
            name="name"
            value={task.name}
            onChange={handleTaskInput}
            className="bg-surface border border-gray-300 px-3 py-1 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="New task"
          />
        </div>
        <div className="flex flex-col mb-5 gap-1">
          <label
            htmlFor="taskDeadline"
            className="text-sm text-textSecondary font-medium tracking-wide"
          >
            Due Date
          </label>
          <input
            type="date"
            id="taskDeadline"
            name="deadline"
            value={task.deadline}
            onChange={handleTaskInput}
            className="bg-surface border border-gray-300 px-3 py-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary uppercase placeholder:text-textSecondary"
          />
        </div>
        <div className="flex flex-col mb-5 gap-1">
          <label
            htmlFor="taskStatus"
            className="text-sm text-textSecondary font-medium tracking-wide capitalize"
          >
            Status
          </label>
          <select
            name="status"
            id="taskStatus"
            className="bg-surface border border-gray-300 px-3 py-1 rounded-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary capitalize placeholder:text-textSecondary"
            value={task.status}
            onChange={handleTaskInput}
          >
            <option value="pending">pending</option>
            <option value="in progress">in progress</option>
            <option value="completed">completed</option>
          </select>
        </div>
        <div className="flex justify-end gap-4">
          <Button
            type="button"
            variant={"hipster"}
            onClick={() => setIsModalOpen(false)}
          >
            cancel
          </Button>
          <Button type="submit">Save task</Button>
        </div>
      </form>
    </Modal>
  );
};
export default AddTask;
