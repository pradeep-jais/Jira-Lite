import Button from "../ui/Button";

const LandingNav = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-surface">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <h1 className="text-xl font-bold tracking-wide">
          Jira <span className="text-primary">Lite</span>
        </h1>

        <nav className="hidden items-center md:gap-6 lg:gap-8 text-sm text-textSecondary md:flex">
          <a href="#features" className="transition hover:text-textPrimary">
            Features
          </a>
          <a href="#preview" className="transition hover:text-textPrimary">
            Preview
          </a>
          <a href="#how-it-works" className="transition hover:text-textPrimary">
            How it works
          </a>
          <a href="#tech" className="transition hover:text-textPrimary">
            Tech Stack
          </a>
        </nav>

        <Button to={"/login"}>Login</Button>
      </div>
    </header>
  );
};
export default LandingNav;
