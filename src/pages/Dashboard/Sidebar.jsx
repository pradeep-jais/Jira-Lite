const Sidebar = () => {
  return (
    <aside className="w-48 h-screen bg-surface border-r border-border p-4">
      <h3 className="uppercase text-textPrimary border-b border-border font-medium tracking-wide pb-1">
        Projects
      </h3>
      <ul className="flex flex-col gap-2 mt-2 text-sm text-textSecondary">
        <li>Project 1</li>
        <li>Project 2</li>
        <li>Project 3</li>
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
