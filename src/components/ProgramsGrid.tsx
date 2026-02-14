import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Flame, BookOpen, ArrowRight, Phone } from "lucide-react";

const programs = [
  {
    icon: <HeartPulse size={32} />,
    title: "Health4Life",
    description:
      "A comprehensive wellness initiative providing culturally competent health education, screenings, and resources to Black communities across California — empowering individuals to take control of their health journey.",
    tag: "Wellness",
    color: "bg-primary",
  },
  {
    icon: <Flame size={32} />,
    title: "HEAT Program",
    description:
      "Health Equity Action Team — training community health workers and advocates to address disparities at the neighborhood level through direct outreach, data-driven strategy, and grassroots engagement.",
    tag: "Advocacy",
    color: "bg-secondary",
  },
  {
    icon: <BookOpen size={32} />,
    title: "Black Health Agenda",
    description:
      "A policy framework and action plan developed in partnership with legislators and community leaders to advance structural changes that improve health outcomes for all Black Californians.",
    tag: "Policy",
    color: "bg-accent",
  },
];

const ProgramsGrid = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="programs" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Our Programs
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Driving Change on the Ground
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-primary" />
        </motion.div>

        <div className="grid gap-8 md:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-background transition-shadow hover:shadow-xl"
            >
              <div className={`flex items-center gap-4 ${program.color} p-6`}>
                <div className="rounded-xl bg-white/10 p-3 text-white">
                  {program.icon}
                </div>
                <div>
                  <span className="mb-1 inline-block rounded-full bg-white/20 px-3 py-0.5 text-xs font-semibold text-white">
                    {program.tag}
                  </span>
                  <h3 className="font-serif text-xl font-bold text-white">
                    {program.title}
                  </h3>
                </div>
              </div>

              <div className="flex flex-1 flex-col justify-between p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {program.description}
                </p>
                <button className="mt-6 flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-secondary">
                  Learn More <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Covered California call-out */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="mt-12 flex flex-col items-center justify-between gap-4 rounded-2xl bg-primary/10 p-8 md:flex-row"
        >
          <div className="flex items-center gap-3">
            <Phone size={24} className="text-primary" />
            <p className="font-serif text-lg font-semibold text-foreground">
              Learn More About Covered California
            </p>
          </div>
          <a
            href="tel:866-761-4165"
            className="rounded-full bg-primary px-8 py-3 text-sm font-bold text-primary-foreground transition-transform hover:scale-105"
          >
            (866) 761-4165
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgramsGrid;
