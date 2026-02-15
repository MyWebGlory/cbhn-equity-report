import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Check } from "lucide-react";

const checkColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
  "bg-magenta text-primary-foreground",
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
];

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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Key Accomplishments
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            2020 to 2024 Highlights
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            Over the past three years, CBHN has made significant contributions to improving the health and well-being of individuals and families across California through various initiatives. CBHN has successfully educated and empowered many Black Californians, equipping them with the knowledge and tools necessary to take control of their health and well-being.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-5">
          {accomplishments.map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -30 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.15 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              whileHover={{ x: 4, boxShadow: "0 8px 20px -8px rgba(0,0,0,0.08)" }}
              className="flex items-start gap-4 rounded-2xl bg-background px-6 py-5 shadow-md transition-all"
            >
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
                className={`mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-full ${checkColors[i]}`}
              >
                <Check size={16} />
              </motion.div>
              <p className="text-base leading-relaxed text-foreground">{item}</p>
            </motion.div>
          ))}
        </div>

        {/* Enrollment table with animated bars */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          whileHover={{ scale: 1.01 }}
          className="mx-auto mt-14 max-w-md rounded-2xl bg-primary p-8 shadow-xl transition-all"
        >
          <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-foreground/70 mb-6 text-center">
            Individuals Enrolled in Qualified Health Plans
          </p>
          <div className="space-y-3">
            {enrollmentData.map((row, i) => (
              <motion.div
                key={row.year}
                initial={{ opacity: 0, width: 0 }}
                animate={inView ? { opacity: 1, width: "100%" } : {}}
                transition={{ delay: 0.9 + i * 0.15, duration: 0.6 }}
                className="flex items-center justify-between border-b border-primary-foreground/20 pb-3"
              >
                <span className="text-base font-bold text-primary-foreground">{row.year}</span>
                <span className="text-lg font-black text-primary-foreground">{row.count}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyAccomplishments;
