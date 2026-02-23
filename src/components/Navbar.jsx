const Navbar = () => {
  return (
    <nav className=" h-16 flex justify-between items-center px-4 border-b-1 border-border">
      <span className="text-lg font-medium">
        Jira <strong className="text-primary">Lite</strong>
      </span>
      <span className="bg-primary text-sm rounded-full w-10 h-10 flex items-center justify-center text-white">
        User
      </span>
    </nav>
  );
};
export default Navbar;
