import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Activity, Heart, Baby, Scale, Brain, Ribbon, ChevronDown, Sparkles } from "lucide-react";
import { AnimatePresence } from "framer-motion";

const stats = [
  {
    icon: <Activity size={26} />,
    stat: "260%",
    label: "Asthma ER Visits",
    description:
      "Black children have a 260% higher emergency department visit rate, a 250% higher hospitalization rate, and a 500% higher death rate from asthma compared to white children. Decades of environmental injustice and limited access to preventive care produced these numbers.",
    highlight: true,
  },
  {
    icon: <Heart size={26} />,
    stat: "15%",
    label: "Diabetes and Heart Disease",
    description:
      "Nearly 15% of African Americans have diabetes, compared with 8% of whites. African Americans also face higher rates of hypertension and heart disease. Early screening and steady access to primary care could prevent most of these cases.",
    highlight: true,
  },
  {
    icon: <Baby size={26} />,
    stat: "12 per 1,000",
    label: "Infant Mortality",
    description:
      "According to KidsData.org, African Americans lead California in infant mortality. Between 2005 and 2007, an average of 12 out of every 1,000 children under one year of age suffered from a range of complications. Black maternal health in California remains a public health emergency. These historic figures reflect a systemic crisis that CBHN continues to challenge through direct policy intervention.",
  },
  {
    icon: <Scale size={26} />,
    stat: "50%",
    label: "Obesity Rates",
    description:
      "Adult obesity rates for African Americans are higher than those for whites in nearly every state. 37% of Black men and nearly 50% of Black women are obese. These rates drive chronic conditions including diabetes, stroke, and cardiovascular disease.",
  },
  {
    icon: <Brain size={26} />,
    stat: "13%",
    label: "Mental Health and Overall Wellbeing",
    description:
      "African Americans report episodes of depression that are more severe and last longer than those in other groups. 13% of African Americans of all ages describe their own health as fair or poor.",
  },
  {
    icon: <Ribbon size={26} />,
    stat: "Underrepresented",
    label: "Cancer Mortality",
    description:
      "African Americans die at higher rates from cancers that respond well to early diagnosis and treatment. Black adults with cancer remain underrepresented in clinical trials and are far less likely to survive prostate, breast, and lung cancer than white patients.",
  },
];

const FlipCard = ({ s, i, gridInView }: { s: typeof stats[0]; i: number; gridInView: boolean }) => {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 35, scale: 0.95 }}
      animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
      onClick={() => setFlipped(!flipped)}
      className="cursor-pointer perspective-1000"
    >
      <AnimatePresence mode="wait">
        {!flipped ? (
          <motion.div
            key="front"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className={`group rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col ${
              s.highlight
                ? "bg-secondary text-secondary-foreground"
                : "bg-accent text-accent-foreground"
            }`}
          >
            <div className="mb-5 flex items-center gap-3">
              <motion.div
                whileHover={{ rotate: 15, scale: 1.2 }}
                className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary-foreground/10"
              >
                {s.icon}
              </motion.div>
              <p className="font-serif text-4xl font-black md:text-5xl">{s.stat}</p>
            </div>
            <p className="text-[13px] font-bold uppercase tracking-wider opacity-80">
              {s.label}
            </p>
            <div className="mt-auto pt-4 flex items-center gap-2 text-xs font-bold opacity-60">
              <Sparkles size={14} />
              Click to learn more
              <motion.div animate={{ y: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1 }}>
                <ChevronDown size={14} />
              </motion.div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="back"
            initial={{ rotateY: -90 }}
            animate={{ rotateY: 0 }}
            exit={{ rotateY: 90 }}
            transition={{ duration: 0.4 }}
            className={`rounded-2xl p-8 shadow-lg min-h-[280px] flex flex-col ${
              s.highlight
                ? "bg-secondary/90 text-secondary-foreground"
                : "bg-accent/90 text-accent-foreground"
            }`}
          >
            <p className="text-sm leading-relaxed opacity-90 flex-1">
              {s.description}
            </p>
            <p className="mt-4 text-xs font-bold opacity-50">Click to flip back</p>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const ImpactStats = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section id="impact" className="section-padding bg-foreground">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            The Disparities
          </p>
          <h2 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-7xl">
            Why This Work Matters
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-primary-foreground/60 md:text-xl">
            Behind every number is a person who did not get the care they needed.
            Black Californians face preventable health conditions at rates that should
            not exist in 2024. Here is what the data tells us.
          </p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mt-4 flex items-center justify-center gap-2 text-sm font-bold text-gold"
          >
            <Sparkles size={16} />
            Click any card to reveal the full details
          </motion.p>
        </motion.div>

        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {stats.map((s, i) => (
            <FlipCard key={s.label} s={s} i={i} gridInView={gridInView} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
