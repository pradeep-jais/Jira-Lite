import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <section className="relative mx-auto grid min-h-[calc(100vh - 4rem)] max-w-7xl grid-cols-1 items-center gap-14 px-6 py-10 lg:grid-cols-2 lg:px-8">
      <div className="relative z-10">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border  px-4 py-2 text-sm text-textPrimary">
          ⚡ Modern SaaS Project Management Experience
        </div>

        <h2 className="max-w-2xl text-4xl font-black leading-tight tracking-tight sm:text-6xl">
          Manage Projects
          <span className="bg-linear-to-r from-primary to-[#304C89] bg-clip-text text-transparent">
            {" "}
            Without the Chaos
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-lg leading-8 text-textSecondary">
          Organize projects, manage tasks, and collaborate with a fast
          responsive workflow built using React, Tailwind, and Firebase.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Button to="/login" size="lg">
            Get Started
          </Button>

          <Button
            to="#features"
            size="lg"
            variant="hipster"
            className="border border-primary/50"
          >
            View Demo
          </Button>
        </div>

        <div className="mt-8 flex flex-wrap gap-4 text-sm text-textSecondary">
          <span className="rounded-full border border-border bg-surface px-4 py-2">
            Responsive
          </span>
          <span className="rounded-full border border-border bg-surface px-4 py-2">
            Realtime Ready
          </span>
          <span className="rounded-full border border-border bg-surface px-4 py-2">
            Firebase Powered
          </span>
        </div>
      </div>
      <div className="bg-linear-to-br from-primary/10 to-[#304C89]/10 p-6 rounded-2xl border border-border shadow-md">
        <img
          src="/images/dashbord-preview-1.png"
          alt="dashboard preview"
          className="w-full rounded-md border border-border"
        />
      </div>
    </section>
  );
};
export default HeroSection;
