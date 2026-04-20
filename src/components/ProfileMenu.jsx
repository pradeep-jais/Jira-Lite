import useAuth from "../hooks/useAuth";
import Button from "./ui/Button";

const ProfileMenu = () => {
  const { user, signOut } = useAuth();

  return (
    <div className="py-6 px-4 h-full flex flex-col justify-between">
      <div>
        <div className="flex gap-4 border-b border-gray-100 pb-4">
          <img
            src="/images/user.png"
            alt="user profile"
            className="bg-surface border border-border w-10 p-1.5 rounded-full"
          />
          <div>
            <p className="text-sm font-bold">{user.name}</p>
            <p className="text-xs text-textSecondary">{user.email}</p>
          </div>
        </div>
        <h4 className="text-sm  text-textPrimary py-2">Profile Settings</h4>
      </div>
      <Button
        className="hover:bg-gray-50 px-4 py-2 cursor-pointer text-sm text-warning font-medium w-full"
        onClick={signOut}
        size={"sm"}
        variant={"warning"}
      >
        Logout
      </Button>
    </div>
  );
};
export default ProfileMenu;
