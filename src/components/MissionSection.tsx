import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const MissionSection = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="mission" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        {/* Who We Are */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.9 }}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Who We Are
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-snug text-foreground md:text-4xl lg:text-5xl">
            The Voice for Black Health in California
          </h2>
          <p className="mt-8 text-base leading-[1.8] text-muted-foreground md:text-lg">
            CBHN is the voice and trusted resource for Black Health Equity in California.
            We are the only Black-led, statewide organization dedicated to advancing health
            equity for all African Americans and Black immigrants. We conduct outreach,
            education, and advocacy through the lens of understanding the critical issues
            that sit at the intersection of racial justice, social justice, and environmental justice.
          </p>
        </motion.div>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Mission
          </p>
          <h2 className="font-serif text-2xl font-semibold leading-snug text-foreground md:text-3xl">
            Health Equity for All Black Californians
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            To ensure that all Black Californians, regardless of their education,
            socio-economic class, zip code, sexual orientation, gender identity,
            homelessness, or immigration status have access to high quality and equitable
            primary and behavioral healthcare, and avoid unnecessarily succumbing to disease.
          </p>
        </motion.div>

        {/* Vision */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Vision
          </p>
          <p className="font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl">
            A California where every African American and Black immigrant has the
            opportunity to live long, healthy lives, free from violence, racism,
            and health inequities.
          </p>
        </motion.div>

        {/* Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mx-auto mt-20 max-w-3xl"
        >
          <p className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Priorities
          </p>
          <p className="mb-8 text-center text-base leading-[1.8] text-muted-foreground md:text-lg">
            We support research and educational efforts that document the underlying factors
            determining the health status of Black Californians and inform policy initiatives
            to reduce disparities.
          </p>
          <div className="grid gap-5 md:grid-cols-3">
            {[
              {
                title: "Coordinated Action",
                text: "Provide a structure for coordinated efforts to improve the health status of Black Californians across the state.",
              },
              {
                title: "Partnerships",
                text: "Establish partnerships with and mobilize support for community and statewide health organizations serving Black Californians.",
              },
              {
                title: "Policy Participation",
                text: "Increase participation of Black Californians in policy making at all levels within the health industry and public sector.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-xl border border-border/60 bg-background p-6"
              >
                <h4 className="font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default MissionSection;
