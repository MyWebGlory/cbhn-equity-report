import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Newspaper, FileText, Megaphone, Scale } from "lucide-react";

const items = [
  {
    icon: <Landmark size={20} />,
    title: "AB 1204 — Maternal Health Equity Act",
    description: "Expanded Medi-Cal coverage for Black mothers extending postpartum care to 12 months.",
    year: "2024",
  },
  {
    icon: <FileText size={20} />,
    title: "Black Health Agenda Policy Brief",
    description: "Published comprehensive policy recommendations adopted by the California Legislative Black Caucus.",
    year: "2024",
  },
  {
    icon: <Megaphone size={20} />,
    title: "Community Health Worker Certification",
    description: "Advocated for state certification standards that recognize culturally competent health workers.",
    year: "2024",
  },
  {
    icon: <Scale size={20} />,
    title: "Health Equity Budget Allocation",
    description: "Secured $12M in state funding directed toward reducing chronic disease disparities in Black communities.",
    year: "2023",
  },
  {
    icon: <Newspaper size={20} />,
    title: "Newsroom & Media Advocacy",
    description: "Published 20+ op-eds and media features elevating Black health narratives in mainstream California press.",
    year: "2023–24",
  },
];

const LegislativeWins = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="policy" className="section-padding bg-background" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Policy & Advocacy
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Legislative Wins & Newsroom
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <div className="mx-auto max-w-3xl">
          {/* Vertical timeline */}
          <div className="relative border-l-2 border-border pl-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: -30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                className="group relative mb-10 last:mb-0"
              >
                {/* Timeline dot */}
                <div className="absolute -left-[2.6rem] top-1 flex h-10 w-10 items-center justify-center rounded-full border-2 border-border bg-card text-primary transition-colors group-hover:border-secondary group-hover:text-secondary">
                  {item.icon}
                </div>

                <span className="mb-1 inline-block rounded-full bg-accent px-3 py-0.5 text-xs font-semibold text-accent-foreground">
                  {item.year}
                </span>
                <h3 className="mt-1 font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LegislativeWins;
