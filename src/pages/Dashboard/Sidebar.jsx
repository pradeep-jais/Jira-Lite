import { NavLink } from "react-router-dom";

const Sidebar = ({ projects, isFetchingProjects }) => {
  return (
    <aside className="w-60 h-screen bg-surface border-r border-border p-4 pr-0 relative">
      <h3 className="uppercase text-textPrimary border-b border-border font-medium tracking-wide pb-1">
        Projects
      </h3>
      <ul className="mt-2 gap-1 text-sm text-textPrimary h-[calc(100vh-100px)] overflow-y-scroll">
        {projects.map((project) => {
          const { id, name } = project;
          return (
            <li
              key={id}
              className="capitalize cursor-pointer hover:text-white hover:bg-primary px-1 py-1 rounded-sm transition duration-100 text-nowrap overflow-hidden text-ellipsis"
            >
              <NavLink to={`/dashboard/projects/${id}`}>{name}</NavLink>
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
