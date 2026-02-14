import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Activity, Heart, Baby, Scale, Brain, Ribbon } from "lucide-react";

const stats = [
  {
    icon: <Activity size={22} />,
    stat: "260%",
    label: "Asthma ER Visits",
    description:
      "Black children have a 260% higher emergency department visit rate, a 250% higher hospitalization rate, and a 500% higher death rate from asthma compared to white children. These numbers reflect decades of environmental injustice and unequal access to preventive care.",
  },
  {
    icon: <Heart size={22} />,
    stat: "15%",
    label: "Diabetes & Heart Disease",
    description:
      "Nearly 15% of African Americans have diabetes, compared with 8% of whites. African Americans also experience higher rates of hypertension and heart disease, conditions that are preventable with early screening and consistent access to primary care.",
  },
  {
    icon: <Baby size={22} />,
    stat: "12 per 1,000",
    label: "Infant Mortality",
    description:
      "According to KidsData.org, African Americans lead California in infant mortality. Between 2005 and 2007, an average of 12 out of every 1,000 children under one year of age suffered from a range of complications. Black maternal health in California remains a public health emergency.",
  },
  {
    icon: <Scale size={22} />,
    stat: "50%",
    label: "Obesity Rates",
    description:
      "Adult obesity rates for African Americans are higher than those for whites in nearly every state. 37% of Black men and nearly 50% of Black women are obese. These rates drive chronic conditions including diabetes, stroke, and cardiovascular disease.",
  },
  {
    icon: <Brain size={22} />,
    stat: "13%",
    label: "Mental Health & Fair/Poor Health",
    description:
      "Mental health problems among African Americans include bouts of depression that are more severe and longer lasting than those experienced by other groups. 13% of African Americans of all ages report being in fair or poor health overall.",
  },
  {
    icon: <Ribbon size={22} />,
    stat: "Underrepresented",
    label: "Cancer Disparities",
    description:
      "African Americans experience higher incidence and mortality from many cancers that respond well to early diagnosis and treatment. Black adults with cancer are underrepresented in clinical trials and are far less likely to survive prostate, breast, and lung cancer than their white counterparts.",
  },
];

const ImpactStats = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section id="impact" className="section-padding bg-muted/50">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            The Disparities
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Why This Work Matters
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Health disparities among Black Californians are not abstract statistics.
            They represent real families, real neighborhoods, and real lives cut short
            by preventable conditions. Here is what the data tells us.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.08,
                ease: [0.25, 0.1, 0.25, 1],
              }}
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
