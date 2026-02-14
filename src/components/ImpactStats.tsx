import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Heart, Baby, Scale, Brain, Ribbon } from "lucide-react";

const stats = [
  {
    icon: <Activity size={28} />,
    stat: "260%",
    label: "Asthma ER Visits",
    description:
      "Black children have a 260% higher emergency department visit rate, a 250% higher hospitalization rate, and a 500% higher death rate from asthma compared to white children.",
  },
  {
    icon: <Heart size={28} />,
    stat: "15%",
    label: "Diabetes Rate",
    description:
      "Nearly 15% of African Americans have diabetes compared with 8% of whites. Higher rates of hypertension and heart disease compound these challenges.",
  },
  {
    icon: <Baby size={28} />,
    stat: "12/1K",
    label: "Infant Mortality",
    description:
      "On average 12 out of every 1,000 children under 1 year of age suffer from complications. Black maternal health remains in crisis across California.",
  },
  {
    icon: <Scale size={28} />,
    stat: "50%",
    label: "Obesity Rates",
    description:
      "37% of Black men and nearly 50% of Black women are obese — rates higher than those for whites in nearly every state of the nation.",
  },
  {
    icon: <Brain size={28} />,
    stat: "Severe",
    label: "Mental Health",
    description:
      "Mental health problems among African Americans include bouts of depression that are more severe and long lasting than others.",
  },
  {
    icon: <Ribbon size={28} />,
    stat: "Higher",
    label: "Cancer Rates",
    description:
      "African Americans experience higher incidence and mortality rates from many cancers and are much less likely to survive prostate, breast, and lung cancer.",
  },
];

const ImpactStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding bg-muted" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            The Disparities
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Why This Work Matters
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-xl"
            >
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                {s.icon}
              </div>
              <p className="font-serif text-4xl font-bold text-foreground">{s.stat}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-secondary">
                {s.label}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-primary transition-all duration-500 group-hover:w-full" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
