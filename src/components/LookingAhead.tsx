import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const priorities = [
  {
    title: "Capacity Building",
    description: "Strengthening internal systems, expanding staff, and building the infrastructure needed to scale programs across all 58 counties."
  },
  {
    title: "Marketing and Branding Strategy",
    description: "Elevating CBHN's visibility and public profile through a comprehensive rebrand, digital strategy, and targeted outreach to funders and partners."
  },
  {
    title: "Provider Network Directory",
    description: "Launching a searchable directory of culturally competent healthcare providers for Black Californians, connecting patients with providers who understand their experience."
  },
  {
    title: "Health Education: \"How Do I...\" Year 2",
    description: "Expanding the \"How Do I...\" Campaign with new webinar topics, in-person workshops, and partnerships with community health centers across the state."
  },
  {
    title: "Conscious Black Beauty Movement",
    description: "Scaling the Non-Toxic Black Beauty Project into a statewide consumer awareness campaign and advocating for stronger regulations on toxic chemicals in beauty products."
  },
  {
    title: "Policy Priorities and Agenda",
    description: "Continuing to sponsor and support legislation that addresses maternal health, environmental justice, mental health access, and social determinants of health."
  },
  {
    title: "Workforce Development",
    description: "Expanding the HEAT Program and community health worker pipeline to meet the growing demand for culturally competent healthcare professionals in underserved communities."
  },
];

const levels = [
  { level: "Individual", color: "bg-primary/10 text-primary", items: ["Health literacy", "Disparities awareness", "Health outcomes improvement"] },
  { level: "Community", color: "bg-secondary/10 text-secondary", items: ["Social determinants of health", "Healthcare access", "Stakeholder engagement"] },
  { level: "System", color: "bg-accent/10 text-accent", items: ["Racial bias elimination", "Access expansion", "Affordable equitable care"] },
];

const LookingAhead = () => {
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
            What Comes Next
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Looking Ahead: 2025 and Beyond
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            The Campaign for Black Health Equity continues. Our strategy operates at three
            levels, each reinforcing the others to create lasting, systemic change.
          </p>
        </motion.div>

        {/* Three levels */}
        <div className="mx-auto mb-14 grid max-w-3xl gap-5 sm:grid-cols-3">
          {levels.map((l, i) => (
            <motion.div
              key={l.level}
              initial={{ opacity: 0, y: 20 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 + i * 0.1 }}
              className="rounded-xl border border-border/60 bg-background p-5"
            >
              <span className={`inline-block rounded-full px-3 py-1 text-[11px] font-semibold ${l.color}`}>
                {l.level}
              </span>
              <ul className="mt-3 space-y-1.5">
                {l.items.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted-foreground">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-border" />
                    {item}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Priorities */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.5 }}
          className="mb-8 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Priority Initiatives
        </motion.p>

        <div ref={gridRef} className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {priorities.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="rounded-xl border border-border/60 bg-background p-6 border-b-2 border-b-primary/10"
            >
              <h3 className="font-serif text-base font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LookingAhead;
