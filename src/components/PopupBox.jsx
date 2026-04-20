import ProfileMenu from "./ProfileMenu";

const PopupBox = ({ closePopup, position, children }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-65 cursor-pointer bg-black/10"
        onClick={closePopup}
      ></div>
      <div
        className={`w-60 min-h-60 h-full bg-surface rounded-md shadow-xl absolute z-70 ${position}`}
      >
        {children}
      </div>
    </>
  );
};
export default PopupBox;
