import { useAuthContext } from "../../context/AuthContext";

const Login = () => {
  const authState = useAuthContext();
  console.log(authState);

  return (
    <main className="min-h-screen flex justify-center items-center">
      <article className="bg-surface p-8 rounded-2xl shadow-lg text-center">
        <h2 className="text-2xl text-textPrimary underline underline-offset-8 decoration-primary decoration-3">
          Login Page
        </h2>
        <p className="mt-8">Please Log in</p>
        <button className="bg-primary text-white text-sm capitalize py-1 px-4 rounded-2xl mt-1 cursor-pointer hover:bg-primaryHover transition-colors duration-300 ease-in-out">
          Sign up with Google
        </button>
      </article>
    </main>
  );
};
export default Login;
