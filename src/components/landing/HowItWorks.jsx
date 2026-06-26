const steps = [
  {
    step: "01",
    title: "Create Workspace",
    description:
      "Sign in and create your first project workspace in seconds. Firebase handles authentication seamlessly.",
  },
  {
    step: "02",
    title: "Manage Tasks",
    description:
      "Create, update, and organize work into status-based columns with clean UX.",
  },
  {
    step: "03",
    title: "Track Progress",
    description:
      "Monitor project completion, manage upcoming tasks visually and create reports.",
  },
];

const HowItWorks = () => {
  return (
    <section id="how-it-works" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs bg-primary/10 border border-primary/30 text-primary font-display font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
          How It works
        </span>
        <h2 className="text-4xl font-bold tracking-tight mt-6">
          Simple Workflow. Better Productivity.
        </h2>

        <p className="mt-5 text-lg text-textSecondary">
          Streamlined project management experience built for modern teams.
        </p>
      </div>

      <div className="relative mt-20 grid gap-8 lg:grid-cols-3">
        <div className="absolute left-1/2 top-24 hidden h-1 w-[70%] -translate-x-1/2 bg-linear-to-r from-primary via-primary/50 to-primary lg:block" />

        {steps.map((item) => (
          <article
            key={item.step}
            className="relative rounded-3xl border border-border bg-surface p-8 text-center backdrop-blur-xl"
          >
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-border bg-primary/5 text-2xl font-bold text-textPrimary">
              {item.step}
            </div>

            <h3 className="mt-8 text-2xl font-semibold">{item.title}</h3>

            <p className="mt-4 leading-7 text-textSecondary">
              {item.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};
export default HowItWorks;
