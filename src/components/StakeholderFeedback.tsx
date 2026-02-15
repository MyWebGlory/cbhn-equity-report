import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import cbhnCommunity from "@/assets/cbhn-community.png";

const stakeholders = [
  {
    quote: "CBHN has added depth to our understanding of Black health disparities. While we may have the data, working with CBHN helps us to understand the complex and intersectional community behind the data.",
    name: "Leigh Purry",
    org: "Blue Shield of California",
  },
  {
    quote: "CPEHN has been able to deepen our multicultural work by having CBHN as a member at the table and representing the Black community. Without CBHN, there would be a considerable void and it would not be possible to meaningfully advance health equity.",
    name: "Kiran Savage-Sangwan",
    org: "California Pan-Ethnic Health Network",
  },
  {
    quote: "I went in not knowing what to expect but gained a lot out of the experience. Very informative. Would like to do it again. Ready to stir things up!",
    name: "Anonymous",
    org: "HEAT Program Participant",
  },
  {
    quote: "This was my first opportunity to be an advocate. I realized how much I needed the community connection.",
    name: "Anonymous",
    org: "HEAT Program Participant",
  },
  {
    quote: "Appreciation for the community coming together from up and down the state and speaking on behalf of Black issues.",
    name: "Anonymous",
    org: "HEAT Program Participant",
  },
];

const themes = [
  { label: "Health Disparity Awareness", stat: "100%", text: "of survey respondents who attended at least one Health Equity Forum stated that they have a better awareness of the health disparities affecting the Black community in their area/region." },
  { label: "Trust in CBHN Advocacy", stat: "85%", text: "of survey respondents stated they trust CBHN to advocate for legislation that will positively impact their communities." },
  { label: "Connections Made", stat: "80%", text: "of survey respondents stated they have made at least one personal, professional and/or organizational connection since attending a CBHN event or becoming a BHN Member." },
];

const keyLearnings = [
  "CBHN needs to continue to build awareness of the health inequities affecting Black Californians, statewide and locally, and could benefit from a campaign to support elevating the level of awareness of the organization and its work to advance health equity.",
  "CBHN needs to amplify its policy/advocacy initiatives and priorities, provide information to promote better understanding of what they are, and engage the community more broadly in identifying high priority issues to address to advance health equity for Black Californians.",
  "There is value and power in the BHN, facilitating connections and being intentional about cultivating a culture of collaboration, and building a bridge between individuals, the community, and organizations working to advance health equity for Black Californians.",
];

const StakeholderFeedback = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section className="section-padding bg-card">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Listening and Learning
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Stakeholder Feedback
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            CBHN conducted an evaluation of key stakeholders to obtain their feedback and perspective on the organization's progress. The aim of this evaluation was to understand the impact CBHN has had on the individual and organizational level over the past decade.
          </p>
        </motion.div>

        {/* Community image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 overflow-hidden rounded-xl"
        >
          <img
            src={cbhnCommunity}
            alt="CBHN community members"
            className="h-64 w-full object-cover md:h-80"
          />
        </motion.div>

        {/* Themes stats */}
        <div className="mx-auto mb-12 grid max-w-3xl gap-5 sm:grid-cols-3">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.label}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-xl border border-border/60 bg-background p-5 text-center"
            >
              <p className="font-serif text-3xl font-bold text-primary">{theme.stat}</p>
              <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-muted-foreground">{theme.label}</p>
              <p className="mt-2 text-xs text-muted-foreground">{theme.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quotes */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {stakeholders.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="flex flex-col rounded-xl border border-border/60 bg-background p-7 border-l-2 border-l-accent/20"
            >
              <Quote size={18} className="mb-3 text-accent/40" />
              <p className="flex-1 text-sm italic leading-[1.8] text-foreground/80">
                "{s.quote}"
              </p>
              <div className="mt-5 border-t border-border pt-3">
                <p className="text-sm font-semibold text-foreground">{s.name}</p>
                <p className="text-xs text-muted-foreground">{s.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-12 max-w-3xl"
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Key Learnings from the Stakeholder Survey
          </p>
          <div className="space-y-3">
            {keyLearnings.map((item, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg border border-border/60 bg-background px-5 py-4">
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-secondary" />
                <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakeholderFeedback;
