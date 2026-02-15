import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const accomplishments = [
  "Co-sponsored two Bills signed into law by Gov. Newsom: SB 987, the California Cancer Care Equity Act, and AB 2300, the California Toxic-Free Medical Devices Act.",
  "Created and championed the first ever Black Health Equity Advocacy Week (BHEAW) resolution in California through the support of the California Legislative Black Caucus.",
  "Curated and launched the first ever CBHN Health Equity Advocacy Training (HEAT) Program.",
  "Educated over 2,000 individuals across the state to improve health literacy of Black Californians through the Health4Life series and Health Equity Forums.",
  "Reached nearly 110,000 individuals statewide to promote key health messages that impact the health of Black Californians.",
  "Conducted 3 Black Health Agenda events across Northern California and engaged key stakeholders in the process to address the State of Black Health in CA and create a statewide strategy and plan to reduce health disparities.",
  "Enrolled over 4,000 individuals in qualified health plans since July 2021.",
  "Achieved record growth in the Black Health Network membership. CBHN now leads a statewide network of over 700 active members.",
  "Received 2022 Nonprofit of the Year Award from the Sacramento Black Chamber of Commerce.",
  "Named as \"Sacramento Business Journal 2023 DEI Honoree\".",
  "Launched the Non-toxic Black Beauty Project to tackle the environmental injustice of the beauty industry by curating a list of safe, non-toxic Black-owned beauty products to mitigate harmful health risks for Black women and girls.",
];

const enrollmentData = [
  { year: "2024", count: "1,039" },
  { year: "2023", count: "847" },
  { year: "2022", count: "397" },
  { year: "July 2021", count: "340" },
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
            Key Accomplishments
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            2020 to 2024 Highlights
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Over the past three years, CBHN has made significant contributions to improving the health and well-being of individuals and families across California through various initiatives. CBHN has successfully educated and empowered many Black Californians, equipping them with the knowledge and tools necessary to take control of their health and well-being.
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

        {/* Enrollment table */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="mx-auto mt-10 max-w-md rounded-xl border border-border/60 bg-background p-6"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4 text-center">
            Individuals Enrolled in Qualified Health Plans
          </p>
          <div className="space-y-2">
            {enrollmentData.map((row) => (
              <div key={row.year} className="flex items-center justify-between border-b border-border/40 pb-2">
                <span className="text-sm font-medium text-foreground">{row.year}</span>
                <span className="text-sm font-bold text-primary">{row.count}</span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyAccomplishments;
