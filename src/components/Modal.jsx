const Modal = ({ children, onClose }) => {
  const handleModalClose = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };
  return (
    <article
      className="flex justify-center items-center fixed inset-0 bg-gray-950/50 z-auto p-4"
      onClick={(e) => handleModalClose(e)}
    >
      {children}
    </article>
  );
};
export default Modal;
