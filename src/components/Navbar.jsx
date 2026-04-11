import { Menu } from "lucide-react";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen }) => {
  return (
    <nav className=" h-16 flex justify-between items-center px-4 border-b border-border">
      <div className="flex items-center gap-4">
        <button
          className={`text-primary cursor-pointer md:hidden`}
          onClick={() => {
            setIsSidebarOpen(true);
          }}
        >
          <Menu size={30} strokeWidth={2.5} />
        </button>
        <span className="text-xl font-medium">
          Jira <strong className="text-primary">Lite</strong>
        </span>
      </div>
      <span className="bg-primary text-sm rounded-full w-10 h-10 flex items-center justify-center text-white">
        User
      </span>
    </nav>
  );
};
export default Navbar;
