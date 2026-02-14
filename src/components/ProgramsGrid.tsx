import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Flame, BookOpen, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: <HeartPulse size={24} />,
    title: "Health4Life",
    description:
      "A comprehensive wellness initiative providing culturally competent health education, screenings, and resources to Black communities across California.",
    tag: "Wellness",
  },
  {
    icon: <Flame size={24} />,
    title: "HEAT Program",
    description:
      "Health Equity Action Team — training community health workers and advocates to address disparities through direct outreach and grassroots engagement.",
    tag: "Advocacy",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Black Health Agenda",
    description:
      "A policy framework developed in partnership with legislators and community leaders to advance structural changes for all Black Californians.",
    tag: "Policy",
  },
];

const ProgramsGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="programs" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Programs
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Driving Change on the Ground
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="group flex flex-col rounded-xl border border-border/60 bg-background p-7 transition-all duration-300 hover:border-primary/30 hover:shadow-md"
            >
              <div className="mb-5 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary">
                  {program.icon}
                </div>
                <span className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {program.tag}
                </span>
              </div>

              <h3 className="font-serif text-xl font-semibold text-foreground">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                {program.description}
              </p>
              <button className="mt-6 flex items-center gap-2 text-[13px] font-medium text-primary transition-colors hover:text-secondary">
                Learn More <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
