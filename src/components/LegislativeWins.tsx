import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, Newspaper, FileText, Megaphone, Scale } from "lucide-react";

const items = [
  {
    icon: <Landmark size={18} />,
    title: "Maternal Health Equity Advocacy",
    description: "Expanded Medi-Cal coverage for Black mothers, extending postpartum care and addressing infant mortality disparities.",
    year: "2024",
  },
  {
    icon: <FileText size={18} />,
    title: "Black Health Agenda Policy Brief",
    description: "Comprehensive policy recommendations adopted by the California Legislative Black Caucus for systemic change.",
    year: "2024",
  },
  {
    icon: <Megaphone size={18} />,
    title: "Community Health Worker Certification",
    description: "State certification standards recognizing culturally competent health workers in underserved communities.",
    year: "2024",
  },
  {
    icon: <Scale size={18} />,
    title: "Climate Change as Public Health Crisis",
    description: "Led campaign recognizing climate change as disproportionately affecting Black Californians.",
    year: "2023",
  },
  {
    icon: <Newspaper size={18} />,
    title: "Building a Black Health Agenda One Story at a Time",
    description: "Stories and media features elevating Black health narratives in mainstream California press.",
    year: "2023–24",
  },
];

const LegislativeWins = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="policy" className="section-padding bg-muted/50" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Policy & Advocacy
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Legislative Wins & Newsroom
          </h2>
        </motion.div>

        <div className="mx-auto max-w-2xl">
          <div className="relative space-y-8">
            {items.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
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
                  <p className="mt-1.5 text-sm leading-relaxed text-muted-foreground">
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
