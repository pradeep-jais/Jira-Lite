import { Menu } from "lucide-react";

import { useAuthContext } from "../context/AuthContext";

const Navbar = ({ isSidebarOpen, setIsSidebarOpen, togglePopup }) => {
  const { user } = useAuthContext();

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
      <button
        className="bg-surface border border-border text-sm rounded-full w-11 h-11  flex items-center justify-center text-white overflow-hidden  cursor-pointer"
        onClick={(e) => togglePopup(e)}
        data-name="nav-profile-btn"
      >
        {user.photoURL ? (
          <img
            src={user.photoURL}
            alt={user.name}
            className="square"
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "/images/user.png";
              e.target.className = "w-8";
            }}
          />
        ) : (
          <img src="/images/user.png" alt="user profile" className="w-8" />
        )}
      </button>
    </nav>
  );
};
export default Navbar;
