import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Newspaper, FileText, Megaphone, Scale, Leaf, Users } from "lucide-react";

const items = [
  {
    icon: <Landmark size={18} />,
    title: "Maternal Health Equity Advocacy",
    description:
      "CBHN successfully advocated for expanded Medi-Cal coverage for Black mothers, extending postpartum care from 60 days to a full 12 months. This expansion includes mental health screenings, doula services, and lactation support. The policy change is projected to benefit more than 18,000 Black mothers across the state each year.",
    year: "2024",
  },
  {
    icon: <FileText size={18} />,
    title: "Black Health Agenda Policy Brief",
    description:
      "The 2024 Black Health Agenda laid out 14 policy recommendations across maternal health, chronic disease prevention, environmental justice, and behavioral health access. The document was formally adopted by the California Legislative Black Caucus and cited in three separate committee hearings during the spring legislative session.",
    year: "2024",
  },
  {
    icon: <Megaphone size={18} />,
    title: "Community Health Worker Certification",
    description:
      "CBHN co-authored legislation to establish statewide certification standards for community health workers. The certification program recognizes culturally competent training and creates a career pathway for outreach workers in underserved neighborhoods. The first cohort of 120 certified workers began practicing in September 2024.",
    year: "2024",
  },
  {
    icon: <Users size={18} />,
    title: "$12M Health Equity Budget Allocation",
    description:
      "Through a coalition effort with allied organizations, CBHN secured $12 million in state budget funding directed toward reducing chronic disease disparities in Black communities. The funds support county-level grants for diabetes prevention, hypertension management, and mental health first responder training.",
    year: "2023",
  },
  {
    icon: <Leaf size={18} />,
    title: "Climate Change as a Public Health Crisis",
    description:
      "CBHN led a statewide campaign to recognize climate change as a public health crisis that disproportionately affects Black Californians. The campaign resulted in the inclusion of environmental health metrics in the state's health equity dashboard and new air quality monitoring stations in three underserved communities.",
    year: "2023",
  },
  {
    icon: <Scale size={18} />,
    title: "Oral Health Coverage Expansion",
    description:
      "CBHN advocated for the expansion of Medi-Cal dental benefits to include preventive periodontal care for adults. Black Californians experience higher rates of untreated tooth decay and gum disease, conditions linked to heart disease and diabetes. The expanded coverage went into effect in January 2024.",
    year: "2023",
  },
  {
    icon: <Newspaper size={18} />,
    title: "Building a Black Health Agenda One Story at a Time",
    description:
      "CBHN's newsroom published over 20 op-eds, feature stories, and community spotlights across major California outlets. Topics ranged from hiking with health-conscious Black communities to the effects of environmental racism on respiratory health. The coverage put Black health front and center in public conversation.",
    year: "2023 to 2024",
  },
];

const LegislativeWins = () => {
  const headerRef = useRef(null);
  const timelineRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const timelineInView = useInView(timelineRef, { once: true, margin: "-40px" });

  return (
    <section id="policy" className="section-padding bg-muted/50">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Policy & Advocacy
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Legislative Wins and Newsroom
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            CBHN does not wait for policy to catch up. In 2023 and 2024, we wrote legislation,
            secured state funding, and made sure Black health stories were heard in Sacramento
            and across California media.
          </p>
        </motion.div>

        <div ref={timelineRef} className="mx-auto max-w-2xl">
          <div className="relative space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -20 }}
                animate={timelineInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: i * 0.1,
                  ease: [0.25, 0.1, 0.25, 1],
                }}
                className="group flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-card text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {item.icon}
                  </div>
                  {i < items.length - 1 && (
                    <div className="mt-2 h-full w-px bg-border" />
                  )}
                </div>

                <div className="pb-2">
                  <span className="text-[11px] font-semibold tracking-wider text-muted-foreground">
                    {item.year}
                  </span>
                  <h3 className="mt-1 font-serif text-base font-semibold text-foreground">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegislativeWins;
