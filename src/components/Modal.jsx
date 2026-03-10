const Modal = ({ children }) => {
  return (
    <article className="flex justify-center items-center fixed inset-0 bg-gray-950/50 z-auto p-4">
      {children}
    </article>
  );
};
export default Modal;
