import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Heart, Baby, Scale, Brain, Ribbon } from "lucide-react";

const stats = [
  {
    icon: <Activity size={22} />,
    stat: "260%",
    label: "Asthma ER Visits",
    description:
      "Black children have a 260% higher emergency department visit rate and a 500% higher death rate from asthma compared to white children.",
  },
  {
    icon: <Heart size={22} />,
    stat: "15%",
    label: "Diabetes Rate",
    description:
      "Nearly 15% of African Americans have diabetes compared with 8% of whites, compounded by higher rates of hypertension.",
  },
  {
    icon: <Baby size={22} />,
    stat: "12/1K",
    label: "Infant Mortality",
    description:
      "On average 12 out of every 1,000 children under 1 year of age suffer from complications. Maternal health remains in crisis.",
  },
  {
    icon: <Scale size={22} />,
    stat: "50%",
    label: "Obesity Rates",
    description:
      "37% of Black men and nearly 50% of Black women are obese — rates higher than those for whites in nearly every state.",
  },
  {
    icon: <Brain size={22} />,
    stat: "Severe",
    label: "Mental Health",
    description:
      "Mental health problems among African Americans include bouts of depression that are more severe and long lasting than others.",
  },
  {
    icon: <Ribbon size={22} />,
    stat: "Higher",
    label: "Cancer Rates",
    description:
      "Higher incidence and mortality rates from many cancers, with far less likelihood of surviving prostate, breast, and lung cancer.",
  },
];

const ImpactStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="impact" className="section-padding bg-muted/50" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            The Disparities
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Why This Work Matters
          </h2>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="group rounded-xl border border-border/60 bg-card p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  {s.icon}
                </div>
                <div>
                  <p className="font-serif text-2xl font-bold text-foreground">{s.stat}</p>
                </div>
              </div>
              <p className="text-[13px] font-semibold uppercase tracking-wider text-secondary/80">
                {s.label}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
