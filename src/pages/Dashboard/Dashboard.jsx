import { useState } from "react";
import { useAuthContext } from "../../context/AuthContext";
import ProjectForm from "./ProjectForm";
import Button from "../../components/ui/Button";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { user, isLoading } = useAuthContext();

  return (
    <section className="flex flex-col gap-12 items-center pt-12">
      <h2 className="text-center text-textPrimary font-medium text-3xl">
        Welcome,{" "}
        {!isLoading ? (
          <strong>{user?.name?.split(" ")[0]}</strong>
        ) : (
          <span className="loader-2"></span>
        )}
      </h2>
      <Button onClick={() => setIsModalOpen(true)}>Create project</Button>

      {isModalOpen && <ProjectForm setIsModalOpen={setIsModalOpen} />}
    </section>
  );
};
export default Dashboard;
