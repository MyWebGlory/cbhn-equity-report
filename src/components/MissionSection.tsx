import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" ref={ref}>
      {/* Gold banner — matches site's "What is CBHN?" bar */}
      <div className="bg-secondary py-6">
        <div className="report-container flex flex-col items-center justify-between gap-4 px-6 md:flex-row lg:px-24">
          <h3 className="font-serif text-xl font-bold text-secondary-foreground md:text-2xl">
            What is California Black Health Network?
          </h3>
          <a
            href="https://yourcbhn.org/who-we-are/"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-md bg-accent px-6 py-3 text-sm font-bold uppercase tracking-widest text-accent-foreground transition-transform hover:scale-105"
          >
            Learn More
          </a>
        </div>
      </div>

      {/* Mission content */}
      <div className="section-padding bg-card">
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
            <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
            <p className="mt-8 text-lg leading-relaxed text-muted-foreground md:text-xl">
              To ensure that all Black Californians, regardless of their education,
              socio-economic class, zip code, sexual orientation, gender identity,
              homelessness, or immigration status have access to high quality and equitable
              primary and behavioral healthcare, and avoid unnecessarily succumbing to disease.
            </p>
          </motion.div>

          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mx-auto mt-16 max-w-3xl border-l-4 border-primary pl-8"
          >
            <p className="font-serif text-2xl italic text-foreground/80 md:text-3xl">
              "Health equity is not a privilege — it is a fundamental right that every Black
              Californian deserves."
            </p>
          </motion.blockquote>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
