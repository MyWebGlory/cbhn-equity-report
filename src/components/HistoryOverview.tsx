import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityConversation from "@/assets/community-conversation.png";
import FloatingShapes from "./FloatingShapes";

const ease = [0.25, 0.1, 0.25, 1] as const;
const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 40 },
  transition: { duration: 0.8, delay, ease: ease as unknown as [number, number, number, number] },
});

const chapters = [
  "African Americans Health Consortium - Inland Empire",
  "Bay Area Consortium for Quality Health Care, Inc. - Bay Area",
  "Black Health Leadership Council of Los Angeles - Los Angeles",
  "North County African American Health Consortium - San Diego",
  "San Diego Black Health Associates - San Diego",
  "Sacramento Black Health Network - Sacramento",
];

const chapterColors = [
  "border-primary bg-primary/10 text-primary",
  "border-secondary bg-secondary/10 text-secondary",
  "border-accent bg-accent/10 text-accent",
  "border-sky-aqua bg-sky-aqua/10 text-sky-aqua",
  "border-gold bg-gold/10 text-gold",
  "border-magenta bg-magenta/10 text-magenta",
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
    <section id="history" className="section-padding relative overflow-hidden bg-card">
      <FloatingShapes variant="diagonals" className="opacity-50" />
      <div className="report-container relative z-10">
        {/* History and Overview */}
        <motion.div
          ref={whoRef}
          {...fadeUp()}
          animate={whoInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            CBHN History and Overview
          </p>
          <h2 className="font-serif text-4xl font-bold leading-snug text-foreground md:text-5xl lg:text-7xl">
            Who We Are and What We Do
          </h2>
          <p className="mt-10 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            The California Black Health Network (CBHN) was established in 1978 as a collaborative arrangement with the Bay Area Black Consortium for Quality Health Care, the Black Health Leadership Council of Los Angeles, and the San Diego Black Health Associates. It soon expanded to six chapters and affiliates across the state:
          </p>

          {/* Chapter badges */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {chapters.map((ch, i) => (
              <span key={ch} className={`rounded-full border-2 px-5 py-2 text-xs font-bold ${chapterColors[i]}`}>
                {ch}
              </span>
            ))}
          </div>

          <p className="mt-10 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            In 1980, CBHN hosted its first statewide conference and in 1983 incorporated as a 501c3 in response to the growing demand for an organization that both served the needs of and improved the health and well-being of Black Californians.
          </p>
        </motion.div>

        {/* Full-width image break */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={whoInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="my-20 overflow-hidden rounded-3xl"
        >
          <img src={communityConversation} alt="CBHN community conversation" className="w-full h-64 md:h-96 object-cover" />
        </motion.div>

        {/* Core Focus */}
        <div ref={prioritiesRef} className="mx-auto mt-20 max-w-4xl">
          <motion.p
            {...fadeUp()}
            animate={prioritiesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-6 text-center text-[13px] font-bold uppercase tracking-[0.3em] text-secondary"
          >
            Core Focus
          </motion.p>
          <motion.p
            {...fadeUp(0.1)}
            animate={prioritiesInView ? { opacity: 1, y: 0 } : {}}
            className="mb-10 text-center text-lg leading-[1.8] text-muted-foreground md:text-xl"
          >
            Consequently, the core focus of CBHN as a newly established statewide organization was to:
          </motion.p>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              { title: "Outreach", text: "Outreach to African Americans in communities across the state.", color: "border-t-4 border-t-primary" },
              { title: "Advocacy", text: "Advocate for culturally competent healthcare.", color: "border-t-4 border-t-secondary" },
              { title: "Data-Driven Policy", text: "Utilize data and research to promote policy initiatives.", color: "border-t-4 border-t-accent" },
              { title: "Partnerships", text: "Cultivate partnership opportunities.", color: "border-t-4 border-t-sky-aqua" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                {...fadeUp(0.15 + i * 0.1)}
                animate={prioritiesInView ? { opacity: 1, y: 0 } : {}}
                className={`rounded-2xl bg-background p-7 shadow-lg ${item.color}`}
              >
                <h4 className="font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h4>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 2017 Strategic Re-evaluation */}
        <motion.div
          ref={missionRef}
          {...fadeUp(0.1)}
          animate={missionInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mt-28 max-w-3xl"
        >
          <p className="mb-6 text-center text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            2017 Strategic Re-Evaluation
          </p>
          <p className="text-center text-lg leading-[1.8] text-muted-foreground md:text-xl">
            In 2017, CBHN reached a turning point, and the Board of Directors re-evaluated the organization's work and revised the vision, mission, and values as outlined below:
          </p>
          <div className="mt-10 space-y-6">
            <div className="rounded-2xl bg-background p-8 border-l-4 border-l-primary shadow-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-3">Vision</p>
              <p className="text-base leading-relaxed text-foreground">To be the voice and trusted resource for Black Health Equity in California.</p>
            </div>
            <div className="rounded-2xl bg-background p-8 border-l-4 border-l-secondary shadow-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-3">Mission</p>
              <p className="text-base leading-relaxed text-foreground">To advocate for Black Health Equity by leading and facilitating convenings focused on providing policy analysis, research and best practices that help create the conditions for healthy Black people.</p>
            </div>
            <div className="rounded-2xl bg-background p-8 border-l-4 border-l-accent shadow-md">
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent mb-3">Values</p>
              <p className="text-base leading-relaxed text-foreground">Based in the principles of Leadership and Accountability, Intergenerational Support and Activism, Coalition Building and Collaboration, and Racial Integrity and Pride.</p>
            </div>
          </div>
        </motion.div>

        {/* Theory of Change */}
        <motion.div
          ref={visionRef}
          {...fadeUp(0.1)}
          animate={visionInView ? { opacity: 1, y: 0 } : {}}
          className="mx-auto mt-28 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Theory of Change
          </p>
          <p className="font-serif text-lg italic leading-relaxed text-foreground/80 md:text-xl border-l-4 border-l-gold pl-8 text-left">
            Staff, informed by their own experiences, relationships, conversations, information, and data, who author, analyze, develop, and communicate policy, strategy, and best practices to stakeholders (Black Californians, legislators, CEOs, foundations, researchers, healthcare providers, health plans and systems, and other key stakeholders) will help create the conditions for healthy Black people in California.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryOverview;
