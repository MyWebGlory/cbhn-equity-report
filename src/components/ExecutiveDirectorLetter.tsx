import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import teamOffice from "@/assets/team-office.png";
import FloatingShapes from "./FloatingShapes";

const ExecutiveDirectorLetter = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="letter" className="section-padding relative overflow-hidden bg-card">
      <FloatingShapes variant="dots" className="opacity-60" />
      <div className="report-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-4xl"
        >
          <p className="mb-4 text-center text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Message from the Executive Director
          </p>
          <h2 className="text-center font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
            A Letter to Our Community
          </h2>

          {/* Quote from former ED */}
          <motion.blockquote
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.02, x: 4 }}
            className="mx-auto mt-14 max-w-2xl rounded-2xl bg-accent/5 p-8 border-l-4 border-l-accent transition-all"
          >
            <p className="font-serif text-xl italic leading-relaxed text-foreground/90 md:text-2xl">
              "If we are going to improve the health of the Black community, we need to help people find a way get everything they need from a system that may not be well suited to give it to them."
            </p>
            <cite className="mt-4 block text-sm font-semibold not-italic text-accent">
              Denise Adams-Simms, Executive Director, California Black Health Network, 1999 - 2008
            </cite>
          </motion.blockquote>

          <div className="mt-16 grid gap-12 md:grid-cols-5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              className="md:col-span-2 transition-all"
            >
              <img
                src={teamOffice}
                alt="CBHN team"
                className="rounded-2xl object-cover w-full h-64 md:h-full ring-4 ring-primary/20 ring-offset-4 ring-offset-card transition-all duration-500 hover:ring-primary/40 hover:ring-offset-8"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="md:col-span-3 space-y-5 text-base leading-[1.9] text-muted-foreground"
            >
              <p>
                Dear Partners, Key Stakeholders, and CBHN Community,
              </p>
              <p>
                I have had the pleasure of serving as the Executive Director of the California Black Health Network (CBHN) since July 2020, and over the past five years CBHN has achieved many milestones and accomplishments. This would not have been possible without the support of our funders, partners, network members, Board of Directors, and of course, the CBHN staff. I extend my deepest gratitude to all of you for your belief in the vision and mission of our work, and especially those of you who have been committed to CBHN's success from the very beginning, more than four decades ago.
              </p>
              <p>
                As we celebrate more than 40 years of advancing health equity for Black Californians, and as I reflect on the past, present, and the future, I recognize that despite the progress that has been made, there are still structural and systemic barriers that prevent our community from receiving quality, equitable healthcare, achieving optimal health, and living long healthy lives. Now, more than ever, it is imperative that we engage in advocacy/policy initiatives and programs that focus on addressing inequities at the individual, community, and system level to close the gap in health disparities and improve the life expectancy of Black Californians. I believe that we can only accomplish this by tackling structural and systemic racism at the system level, addressing social determinants of health, and dismantling barriers to quality, affordable, and equitable healthcare.
              </p>
              <p>
                As we move forward into the next era, and navigate through a dynamic healthcare landscape, dismantling barriers and tackling the root causes of health inequities will play a critical role in advancing health equity for Black Californians as well as for other racial/ethnic groups. We know that where there is truly health equity, there will be no health disparities. Which is why we launched the Campaign for Black Health Equity.
              </p>
              <p>
                Now, more than ever, we must come together as a collective community and work to improve health outcomes for all of our most vulnerable populations, give rise to hope for a better future, and create a new health story for all of us.
              </p>
              <p>
                Thank you for your ongoing support.
              </p>
              <p>
                In solidarity,
              </p>
              <p className="font-bold text-foreground text-lg pt-2">
                Rhonda M. Smith
                <br />
                <span className="font-normal text-sm text-muted-foreground">Executive Director</span>
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ExecutiveDirectorLetter;
