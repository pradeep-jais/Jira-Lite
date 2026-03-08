const Sidebar = ({ projects }) => {
  return (
    <aside className="w-48 h-screen bg-surface border-r border-border p-4">
      <h3 className="uppercase text-textPrimary border-b border-border font-medium tracking-wide pb-1">
        Projects
      </h3>
      <ul className="flex flex-col mt-2 text-sm text-textSecondary">
        {projects.map((project, i) => {
          return (
            <li
              key={i}
              className="capitalize cursor-pointer hover:text-white hover:bg-primary py-1 px-1 rounded-sm transition duration-100"
            >
              {project}
            </li>
          );
        })}
        {projects.length === 0 && (
          <li className="capitalize hover:text-textPrimary transform duration-300">
            No projects yet
          </li>
        )}
      </ul>
      <footer className=" absolute bottom-4">
        <p className="text-xs text-textSecondary capitalize">
          project manager lite v0.0
        </p>
      </footer>
    </aside>
  );
};
export default Sidebar;
