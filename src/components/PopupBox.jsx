const PopupBox = ({ closePopup, coords, children }) => {
  return (
    <>
      <div
        className="fixed inset-0 z-65 cursor-pointer bg-black/10"
        onClick={closePopup}
      ></div>
      <div
        className={`w-60 h-60 min-h-60 bg-surface rounded-md shadow-xl fixed z-70`}
        style={{
          top: coords.top,
          left: coords.left,
        }}
      >
        {children}
      </div>
    </>
  );
};
export default PopupBox;
