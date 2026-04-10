import { NavLink } from "react-router-dom";

const Sidebar = ({ projects, isFetchingProjects }) => {
  return (
    <aside className="w-60 h-screen bg-surface border-r border-border p-4 pr-0 relative">
      <h3 className="uppercase text-textPrimary border-b border-border font-medium tracking-wide">
        Projects
      </h3>
      <ul className="gap-1 text-sm text-textPrimary h-[calc(100vh-100px)] overflow-y-auto py-2 pr-2">
        {projects.map((project) => {
          const { id, name } = project;
          return (
            <li key={id}>
              <NavLink
                to={`/dashboard/projects/${id}`}
                className={({ isActive }) =>
                  `block w-full capitalize border-none  cursor-pointer hover:text-white hover:bg-primary px-1.5 py-1 mb-0.5 rounded-sm transition duration-100 text-nowrap overflow-hidden text-ellipsis ${isActive ? "text-white bg-primary" : ""}`
                }
              >
                {name}
              </NavLink>
            </li>
          );
        })}
        {isFetchingProjects ? (
          <li className="capitalize">Loading projects...</li>
        ) : (
          projects.length === 0 && (
            <li className="capitalize hover:text-textPrimary transform duration-300">
              No projects yet
            </li>
          )
        )}
      </ul>
      <footer className="bg-surface absolute bottom-0 left-0 right-0 z-1 p-3">
        <p className="text-xs text-textSecondary capitalize">
          project manager lite v0.0
        </p>
      </footer>
    </aside>
  );
};
export default Sidebar;
