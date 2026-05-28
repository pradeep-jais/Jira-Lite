const stacks = [
  { name: "React", icon: "⚛️", color: "#61dafb", desc: "UI Library" },
  { name: "Firebase", icon: "🔥", color: "#ffca28", desc: "Backend" },
  {
    name: "Tailwind CSS",
    icon: "🎨",
    color: "#38bdf8",
    desc: "Styling",
  },
  {
    name: "React Router",
    icon: "🔀",
    color: "#f44250",
    desc: "Routing",
  },
  {
    name: "Firestore",
    icon: "🗄️",
    color: "#ff6d00",
    desc: "Database",
  },
  { name: "Lucide", icon: "✦", color: "#a78bfa", desc: "Icons" },
];

const architectures = [
  { label: "Service-Oriented Architecture", icon: "🏛️" },
  { label: "Protected Route Guards", icon: "🛡️" },
  { label: "Reusable Custom Hooks", icon: "🪝" },
  { label: "Scalable Folder Structure", icon: "📁" },
];

const TechStack = () => {
  return (
    <section id="tech" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="bg-primary/10 text-primary border border-border text-xs font-display font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full">
            Tech Stack
          </span>
          <h2 className="font-display font-extrabold mt-6 mb-4 text-4xl tracking-tight">
            Built with{" "}
            <span className="bg-linear-to-r from-primary to-[#304C89] bg-clip-text text-transparent">
              Modern Tools
            </span>
          </h2>
          <p className="text-textSecondary max-w-xl text-lg mx-auto">
            Production-grade technologies chosen for scalability, developer
            experience, and performance.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
          {stacks.map((t) => (
            <div
              key={t.name}
              className="bg-surface border border-border rounded-2xl p-5 flex flex-col items-center text-center gap-3 hover:border-primary hover:scale-108 transition-transform duration-300"
            >
              <span className="text-3xl">{t.icon}</span>
              <div>
                <div className="text-sm text-textPrimary font-semibold">
                  {t.name}
                </div>
                <div className="text-textSecondary text-xs">{t.desc}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Architecture callouts */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {architectures.map((a) => (
            <div
              key={a.label}
              className="flex items-center gap-3 px-5 py-4 rounded-xl bg-surface border border-border"
            >
              <span className="text-xl">{a.icon}</span>
              <span className="text-textPrimary font-semibold text-sm">
                {a.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default TechStack;
