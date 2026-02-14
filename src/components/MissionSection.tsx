import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-snug text-foreground md:text-4xl lg:text-5xl">
            Health Equity for All Black Californians
          </h2>
          <p className="mt-8 text-base leading-[1.8] text-muted-foreground md:text-lg">
            To ensure that all Black Californians, regardless of their education,
            socio-economic class, zip code, sexual orientation, gender identity,
            homelessness, or immigration status have access to high quality and equitable
            primary and behavioral healthcare, and avoid unnecessarily succumbing to disease.
          </p>
        </motion.div>

        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-2xl border-l-2 border-primary/40 pl-8"
        >
          <p className="font-serif text-xl italic leading-relaxed text-foreground/70 md:text-2xl">
            "Health equity is not a privilege — it is a fundamental right that every Black
            Californian deserves."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default MissionSection;
