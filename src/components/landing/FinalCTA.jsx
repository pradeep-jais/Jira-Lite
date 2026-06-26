import Button from "../ui/Button";
const FinalCTA = () => {
  return (
    <section className="px-6 py-16 pb-28 lg:px-8">
      <div className="mx-auto max-w-5xl overflow-hidden rounded-4xl border border-border bg-linear-to-br from-primary via-white/[0.03] to-[#304C89] px-8 py-20 text-center backdrop-blur-2xl">
        <div className="mx-auto max-w-3xl">
          <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Start Managing Projects Smarter
          </h2>

          <p className="mt-6 text-lg leading-8 text-textSecondary">
            A modern Jira Lite experience focused on clean UI, scalable
            architecture, and smooth workflows.
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <Button to="/login" size="lg">
              Launch App
            </Button>

            <a
              href="https://github.com/pradeep-jais/jira-lite"
              target="_blank"
              className="capitalize cursor-pointer transition-colors duration-300 ease-in-out tracking-wider shadow-md bg-surface border border-border text-primary font-semibold hover:bg-gray-100 hover:border-primary px-6 py-2 text-base rounded-xl"
            >
              View Source Code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
export default FinalCTA;
