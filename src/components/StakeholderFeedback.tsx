import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";
import cbhnCommunity from "@/assets/cbhn-community.png";

const stakeholders = [
  {
    quote: "CBHN is one of the most effective health equity organizations in California. Their ability to translate community need into legislative action is unmatched. We are proud to support their work.",
    name: "Leigh Purry",
    org: "Blue Shield of California",
  },
  {
    quote: "CBHN brings a level of authenticity and trust to health policy conversations that is rare. They represent the communities they serve, and that representation makes the policy stronger.",
    name: "Kiran Savage-Sangwan",
    org: "California Pan-Ethnic Health Network",
  },
  {
    quote: "The HEAT training changed everything for me. I went from handing out flyers to actually sitting with people in their homes and listening. That is where the real health work begins.",
    name: "Anonymous",
    org: "HEAT Program Graduate",
  },
  {
    quote: "Before the Health4Life screening, I had not seen a doctor in over five years. They found my blood pressure was dangerously high. I got on medication that same week.",
    name: "Anonymous",
    org: "Health4Life Participant",
  },
];

const themes = [
  { label: "Health Disparity Awareness", stat: "100%", text: "of stakeholders reported improved awareness of health disparities" },
  { label: "Trust in CBHN Advocacy", stat: "85%", text: "expressed confidence in CBHN's ability to influence policy" },
  { label: "Connections Made", stat: "80%", text: "reported making meaningful professional connections through CBHN" },
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
            What They Say
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Stakeholder Feedback
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            From funding partners to program participants, here is what people
            say about working with CBHN and experiencing our programs firsthand.
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
        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
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
      </div>
    </section>
  );
};

export default StakeholderFeedback;
