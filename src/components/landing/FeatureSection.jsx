import { features } from "../../data/constants";

const FeatureSection = () => {
  return (
    <section id="features" className="mx-auto max-w-7xl px-6 py-20 lg:px-8">
      <div className="mx-auto max-w-3xl text-center">
        <span className="text-xs bg-primary/10 border border-primary/30 text-primary font-display font-semibold uppercase tracking-widest px-3 py-1.5 rounded-full">
          Product Preview
        </span>
        <h2 className="text-4xl mt-5 font-bold tracking-tight">
          Built For Modern Workflow
        </h2>
        <p className="mt-5 text-lg text-textSecondary">
          Designed with clean architecture, responsive UX, and scalable frontend
          engineering practices.
        </p>
      </div>

      <div className="mt-20 grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => {
          const { title, description, tags, icon, iconColor } = feature;
          return (
            <article
              key={title}
              className="group rounded-3xl border border-border bg-surface p-8 transition duration-300 hover:-translate-y-2 hover:border-primary hover:shadow-lg"
            >
              <div className="mb-5 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/5 text-2xl">
                <feature.icon className={`${iconColor}`} strokeWidth={2.75} />
              </div>

              <h3 className="text-xl font-semibold">{title}</h3>

              <p className="mt-4 leading-7 text-textSecondary">{description}</p>
              <div className="flex flex-wrap gap-2 mt-4.5">
                {tags.map((tag, i) => {
                  return (
                    <span
                      key={i}
                      className="text-xs bg-surface border border-border text-textPrimary font-display font-semibold px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  );
                })}
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
};
export default FeatureSection;
