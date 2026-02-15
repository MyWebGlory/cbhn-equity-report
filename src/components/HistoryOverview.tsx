import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityConversation from "@/assets/community-conversation.png";
import FloatingShapes from "./FloatingShapes";
import BeforeAfterSlider from "./BeforeAfterSlider";

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

          {/* Chapter badges with staggered hover */}
          <div className="mt-10 flex flex-wrap justify-center gap-3">
            {chapters.map((ch, i) => (
              <motion.span
                key={ch}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={whoInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 + i * 0.08 }}
                whileHover={{ scale: 1.05 }}
                className={`rounded-full border-2 px-5 py-2 text-xs font-bold cursor-default ${chapterColors[i]}`}
              >
                {ch}
              </motion.span>
            ))}
          </div>

          <p className="mt-10 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            In 1980, CBHN hosted its first statewide conference and in 1983 incorporated as a 501c3 in response to the growing demand for an organization that both served the needs of and improved the health and well-being of Black Californians.
          </p>
        </motion.div>

        {/* Full-width image break with parallax hover */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={whoInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.3 }}
          whileHover={{ scale: 1.01 }}
          className="my-20 overflow-hidden rounded-3xl"
        >
          <img src={communityConversation} alt="CBHN community conversation" className="w-full h-64 md:h-96 object-cover transition-transform duration-500 hover:scale-105" />
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
                whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.1)" }}
                className={`rounded-2xl bg-background p-7 shadow-lg transition-all ${item.color}`}
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

        {/* Before/After: 2017 Strategic Re-evaluation */}
        <div ref={missionRef} className="mx-auto mt-28 max-w-4xl">
          <motion.p
            {...fadeUp(0.1)}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            className="mb-6 text-center text-[13px] font-bold uppercase tracking-[0.3em] text-secondary"
          >
            2017 Strategic Re-Evaluation
          </motion.p>
          <motion.p
            {...fadeUp(0.15)}
            animate={missionInView ? { opacity: 1, y: 0 } : {}}
            className="mb-12 text-center text-lg leading-[1.8] text-muted-foreground md:text-xl"
          >
            In 2017, CBHN reached a turning point, and the Board of Directors re-evaluated the organization's work and revised the vision, mission, and values as outlined below:
          </motion.p>

          <BeforeAfterSlider
            label="Before vs. After 2017"
            beforeTitle="Before 2017"
            beforeItems={[
              "Focused primarily on outreach and education",
              "Chapter-based model across 6 regions",
              "Grant-funded project delivery",
              "Community convenings and conferences",
            ]}
            afterTitle="After 2017 Re-evaluation"
            afterItems={[
              "Vision: To be the voice and trusted resource for Black Health Equity in California",
              "Mission: Advocate for Black Health Equity through convenings, policy analysis, and research",
              "Values: Leadership, Intergenerational Support, Coalition Building, Racial Integrity",
              "Theory of Change: Staff-driven policy, strategy, and best practices",
            ]}
          />
        </div>

        {/* Vision/Mission/Values cards */}
        <div className="mx-auto mt-16 max-w-3xl space-y-6">
          {[
            { label: "Vision", text: "To be the voice and trusted resource for Black Health Equity in California.", color: "border-l-primary", bg: "hover:bg-primary/5" },
            { label: "Mission", text: "To advocate for Black Health Equity by leading and facilitating convenings focused on providing policy analysis, research and best practices that help create the conditions for healthy Black people.", color: "border-l-secondary", bg: "hover:bg-secondary/5" },
            { label: "Values", text: "Based in the principles of Leadership and Accountability, Intergenerational Support and Activism, Coalition Building and Collaboration, and Racial Integrity and Pride.", color: "border-l-accent", bg: "hover:bg-accent/5" },
          ].map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, x: -30 }}
              animate={missionInView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.2 + i * 0.1 }}
              whileHover={{ x: 4, boxShadow: "0 8px 20px -8px rgba(0,0,0,0.08)" }}
              className={`rounded-2xl bg-background p-8 border-l-4 shadow-md transition-all ${item.color} ${item.bg}`}
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground mb-3">{item.label}</p>
              <p className="text-base leading-relaxed text-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

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
          <motion.p
            whileHover={{ scale: 1.01 }}
            className="font-serif text-lg italic leading-relaxed text-foreground/80 md:text-xl border-l-4 border-l-gold pl-8 text-left transition-all"
          >
            Staff, informed by their own experiences, relationships, conversations, information, and data, who author, analyze, develop, and communicate policy, strategy, and best practices to stakeholders (Black Californians, legislators, CEOs, foundations, researchers, healthcare providers, health plans and systems, and other key stakeholders) will help create the conditions for healthy Black people in California.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default HistoryOverview;
