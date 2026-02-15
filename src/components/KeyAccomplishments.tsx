import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const accomplishments = [
  "2 bills signed into California law",
  "First-ever Black Health Equity Advocacy Week established (first week of May, annually)",
  "HEAT Program launched, training community health workers statewide",
  "2,000+ individuals educated through Health4Life and Health Equity Forums",
  "110,000 individuals reached across California",
  "4,000+ enrolled in healthcare coverage",
  "700+ Black Health Network members across 31 counties",
  "Named 2022 Nonprofit of the Year",
  "Sacramento Business Journal DEI Honoree, 2023",
  "Non-Toxic Black Beauty Project launched in partnership with environmental justice advocates",
];

const KeyAccomplishments = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding bg-card">
      <div className="report-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            2020 to 2024
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Key Accomplishments
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            In just four years, CBHN transformed its reach, impact, and visibility. These
            milestones reflect the scale and speed of that transformation.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-3">
          {accomplishments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -15 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="flex items-start gap-4 rounded-lg border border-border/60 bg-background px-5 py-4 hover:border-primary/20 transition-colors"
            >
              <div className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Check size={14} />
              </div>
              <p className="text-sm leading-relaxed text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyAccomplishments;
