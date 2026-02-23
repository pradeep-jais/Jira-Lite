import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="min-h-screen flex flex-col justify-center items-center">
      <h2>Error</h2>
      <p>Something Went wrong</p>
      <button className="bg-primary text-white text-xl capitalize py-2 px-4 rounded-2xl mt-8 cursor-pointer hover:bg-primaryHover transition-colors duration-300 ease-in-out">
        <Link to="/">Go home</Link>
      </button>
    </section>
  );
};
export default ErrorPage;
