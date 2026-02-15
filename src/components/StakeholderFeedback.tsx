import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import cbhnCommunity from "@/assets/cbhn-community.png";

const stakeholders = [
  {
    quote: "CBHN has added depth to our understanding of Black health disparities. While we may have the data, working with CBHN helps us to understand the complex and intersectional community behind the data.",
    name: "Leigh Purry",
    org: "Blue Shield of California",
    borderColor: "border-l-4 border-l-primary",
  },
  {
    quote: "CPEHN has been able to deepen our multicultural work by having CBHN as a member at the table and representing the Black community. Without CBHN, there would be a considerable void and it would not be possible to meaningfully advance health equity.",
    name: "Kiran Savage-Sangwan",
    org: "California Pan-Ethnic Health Network",
    borderColor: "border-l-4 border-l-secondary",
  },
  {
    quote: "I went in not knowing what to expect but gained a lot out of the experience. Very informative. Would like to do it again. Ready to stir things up!",
    name: "Anonymous",
    org: "HEAT Program Participant",
    borderColor: "border-l-4 border-l-accent",
  },
  {
    quote: "This was my first opportunity to be an advocate. I realized how much I needed the community connection.",
    name: "Anonymous",
    org: "HEAT Program Participant",
    borderColor: "border-l-4 border-l-sky-aqua",
  },
  {
    quote: "Appreciation for the community coming together from up and down the state and speaking on behalf of Black issues.",
    name: "Anonymous",
    org: "HEAT Program Participant",
    borderColor: "border-l-4 border-l-gold",
  },
];

const themes = [
  { label: "Health Disparity Awareness", stat: "100%", text: "of survey respondents who attended at least one Health Equity Forum stated that they have a better awareness of the health disparities affecting the Black community in their area/region.", color: "bg-primary text-primary-foreground" },
  { label: "Trust in CBHN Advocacy", stat: "85%", text: "of survey respondents stated they trust CBHN to advocate for legislation that will positively impact their communities.", color: "bg-secondary text-secondary-foreground" },
  { label: "Connections Made", stat: "80%", text: "of survey respondents stated they have made at least one personal, professional and/or organizational connection since attending a CBHN event or becoming a BHN Member.", color: "bg-accent text-accent-foreground" },
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
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Listening and Learning
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Stakeholder Feedback
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            CBHN conducted an evaluation of key stakeholders to obtain their feedback and perspective on the organization's progress. The aim of this evaluation was to understand the impact CBHN has had on the individual and organizational level over the past decade.
          </p>
        </motion.div>

        {/* Community image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 overflow-hidden rounded-3xl"
        >
          <img
            src={cbhnCommunity}
            alt="CBHN community members"
            className="h-64 w-full object-cover md:h-96"
          />
        </motion.div>

        {/* Themes stats - bold colored */}
        <div className="mx-auto mb-16 grid max-w-4xl gap-6 sm:grid-cols-3">
          {themes.map((theme, i) => (
            <motion.div
              key={theme.label}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className={`rounded-2xl p-7 text-center shadow-xl ${theme.color}`}
            >
              <p className="font-serif text-5xl font-black">{theme.stat}</p>
              <p className="mt-2 text-xs font-black uppercase tracking-wider opacity-80">{theme.label}</p>
              <p className="mt-3 text-xs opacity-90 leading-relaxed">{theme.text}</p>
            </motion.div>
          ))}
        </div>

        {/* Quotes */}
        <div ref={gridRef} className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {stakeholders.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className={`flex flex-col rounded-2xl bg-background p-8 shadow-lg ${s.borderColor}`}
            >
              <Quote size={24} className="mb-4 text-secondary" />
              <p className="flex-1 text-base italic leading-[1.8] text-foreground/80">
                "{s.quote}"
              </p>
              <div className="mt-6 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{s.name}</p>
                <p className="text-xs font-semibold text-muted-foreground">{s.org}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Key Learnings */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={gridInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="mx-auto mt-16 max-w-3xl"
        >
          <p className="mb-6 text-center text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
            Key Learnings from the Stakeholder Survey
          </p>
          <div className="space-y-4">
            {keyLearnings.map((item, i) => {
              const dots = ["bg-primary", "bg-secondary", "bg-accent"];
              return (
                <div key={i} className="flex items-start gap-4 rounded-2xl bg-background px-6 py-5 shadow-md">
                  <div className={`mt-1 h-3 w-3 shrink-0 rounded-full ${dots[i]}`} />
                  <p className="text-sm leading-relaxed text-muted-foreground">{item}</p>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StakeholderFeedback;
