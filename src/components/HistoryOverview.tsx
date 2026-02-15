import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  transition: { duration: 0.8, delay, ease: ease as unknown as [number, number, number, number] },
});

const chapters = [
  "Bay Area", "Los Angeles", "San Diego", "Sacramento", "Inland Empire", "Central Valley"
];

const HistoryOverview = () => {
  const whoRef = useRef(null);
  const missionRef = useRef(null);
  const visionRef = useRef(null);
  const prioritiesRef = useRef(null);

  const whoInView = useInView(whoRef, { once: true, margin: "-60px" });
  const missionInView = useInView(missionRef, { once: true, margin: "-60px" });
  const visionInView = useInView(visionRef, { once: true, margin: "-60px" });
  const prioritiesInView = useInView(prioritiesRef, { once: true, margin: "-60px" });

  return (
    <section id="history" className="section-padding bg-card">
      <div className="report-container">
        {/* Who We Are */}
        <motion.div
          ref={whoRef}
          {...fadeUp()}
          animate={whoInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Who We Are
          </p>
          <h2 className="font-serif text-3xl font-semibold leading-snug text-foreground md:text-4xl lg:text-5xl">
            The Voice for Black Health in California
          </h2>
          <p className="mt-8 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Founded in 1978 as a collaboration between health advocates in the Bay Area,
            Los Angeles, and San Diego, CBHN is the only Black-led statewide organization
            working to close health gaps for all African Americans and Black immigrants in
            California. Incorporated as a 501(c)(3) nonprofit in 1983, CBHN addresses the
            critical intersections where racial justice, social justice, and environmental
            justice determine health outcomes.
          </p>

          {/* Chapter badges */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {chapters.map((ch) => (
              <span key={ch} className="rounded-full border border-border bg-background px-4 py-1.5 text-xs font-medium text-muted-foreground">
                {ch}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Mission */}
        <motion.div
          ref={missionRef}
          {...fadeUp(0.1)}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
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
          ref={visionRef}
          {...fadeUp(0.1)}
          animate={visionInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mt-20 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Vision
          </p>
          <p className="font-serif text-xl italic leading-relaxed text-foreground/80 md:text-2xl border-l-2 border-l-accent/25 pl-6 text-left">
            A California where every African American and Black immigrant has the
            opportunity to live long, healthy lives, free from violence, racism,
            and health inequities.
          </p>
        </motion.div>

        {/* Theory of Change */}
        <div ref={prioritiesRef} className="mx-auto mt-20 max-w-3xl">
          <motion.p
            {...fadeUp()}
            animate={prioritiesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-6 text-center text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary"
          >
            Our Approach
          </motion.p>
          <motion.p
            {...fadeUp(0.1)}
            animate={prioritiesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-8 text-center text-base leading-[1.8] text-muted-foreground md:text-lg"
          >
            In 2017, CBHN conducted a strategic re-evaluation that produced a renewed vision,
            mission, and theory of change. Our work operates across four pillars that reinforce
            each other at every level.
          </motion.p>
          <div className="grid gap-5 md:grid-cols-4">
            {[
              { title: "Outreach", text: "Culturally competent community engagement and health education in neighborhoods where Black Californians live and work." },
              { title: "Advocacy", text: "Sponsoring and supporting legislation that directly addresses racial health disparities at the state level." },
              { title: "Data-Driven Policy", text: "Research and evaluation that documents health determinants and informs equitable policy decisions." },
              { title: "Partnerships", text: "Building coalitions with healthcare systems, state agencies, and community organizations statewide." },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.15 + i * 0.1)}
                animate={prioritiesInView ? { opacity: 1, y: 0 } : {}}
                className="rounded-xl border border-border/60 bg-background p-6 border-t-2 border-t-primary/15"
              >
                <h4 className="font-serif text-base font-semibold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HistoryOverview;
