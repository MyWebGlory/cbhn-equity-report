import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamOffice from "@/assets/team-office.png";

const ExecutiveDirectorLetter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="letter" className="section-padding bg-card">
      <div className="report-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-4 text-center text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            A Message from Leadership
          </p>
          <h2 className="text-center font-serif text-3xl font-semibold text-foreground md:text-4xl">
            Letter from the Executive Director
          </h2>

          {/* Quote from former ED */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mx-auto mt-10 max-w-2xl border-l-2 border-l-primary/30 pl-6"
          >
            <p className="font-serif text-lg italic leading-relaxed text-foreground/80">
              "CBHN has always been about showing up where it matters most. We do not wait for
              the system to come to us. We go to the people."
            </p>
            <cite className="mt-3 block text-sm not-italic text-muted-foreground">
              Denise Adams-Simms, Executive Director (1999 to 2008)
            </cite>
          </motion.blockquote>

          <div className="mt-12 grid gap-10 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="md:col-span-2"
            >
              <img
                src={teamOffice}
                alt="CBHN team"
                className="rounded-xl object-cover w-full h-64 md:h-full"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3 space-y-4 text-sm leading-[1.8] text-muted-foreground"
            >
              <p>
                Dear Friends, Supporters, and Partners,
              </p>
              <p>
                When I stepped into the role of Executive Director in 2020, I inherited an organization
                with a rich legacy of service and an urgent mandate to evolve. Over the past four years,
                the California Black Health Network has undergone a transformation rooted in three
                principles: Response, Recovery, and Resilience.
              </p>
              <p>
                We responded to the dual crises of COVID-19 and racial injustice by launching the
                Campaign for Black Health Equity, a comprehensive framework that connects community
                health education, legislative advocacy, workforce development, and healthcare coverage
                under one unified strategy.
              </p>
              <p>
                We recovered by rebuilding our partnerships, expanding our Black Health Network to
                over 700 members across 31 counties, and securing new grant funding to sustain
                programs like Health4Life, the HEAT Program, and the "How Do I..." Campaign.
              </p>
              <p>
                And we built resilience by investing in the systems, data, and people that will
                carry this work forward for the next four decades.
              </p>
              <p>
                This report is not just a look back. It is a case for what comes next. We invite you
                to read it, share it, and join us in rewriting the health story for all Black Californians.
              </p>
              <p className="font-semibold text-foreground pt-2">
                Rhonda M. Smith
                <br />
                <span className="font-normal text-muted-foreground">Executive Director, California Black Health Network</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveDirectorLetter;
