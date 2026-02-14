import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Mission
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Health Equity for All Black Californians
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
          <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
            The California Black Health Network is committed to improving access to equitable
            healthcare for all Black Californians. We advocate for policies, programs, and
            partnerships that address systemic health disparities and empower communities to
            achieve optimal health outcomes. Through education, advocacy, and direct community
            engagement, we are building a future where every Black Californian can thrive.
          </p>
        </motion.div>

        {/* Decorative quote */}
        <motion.blockquote
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mx-auto mt-16 max-w-3xl border-l-4 border-secondary pl-8"
        >
          <p className="font-serif text-2xl italic text-foreground/80 md:text-3xl">
            "Health equity is not a privilege — it is a fundamental right that every Black
            Californian deserves."
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
};

export default MissionSection;
