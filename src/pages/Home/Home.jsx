import { Link } from "react-router-dom";

const Home = () => {
  return (
    <section className="text-center pt-6 min-h-screen">
      <h1 className="text-lg md:text-2xl font-bold capitalize underline decoration-primary decoration-4 underline-offset-10">
        Client Project Management App
      </h1>
      <p className="text-textSecondary mt-10 text-sm md:text-lg max-w-3xl mx-auto">
        Use this app to manage your projects efficiently.
      </p>
      <button className="bg-primary text-white text-xl capitalize py-2 px-4 rounded-2xl mt-8 cursor-pointer hover:bg-primaryHover transition-colors duration-300 ease-in-out">
        <Link to="/login">Get started</Link>
      </button>
    </section>
  );
};
export default Home;
