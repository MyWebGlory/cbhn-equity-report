import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Flame, BookOpen, Stethoscope, ArrowRight } from "lucide-react";

const programs = [
  {
    icon: <HeartPulse size={24} />,
    title: "Health4Life",
    description:
      "Health4Life brings culturally competent health education, free screenings, and preventive care directly into Black communities across California. The program trains local facilitators who share the lived experience of the people they serve, building trust from the ground up. In 2024, Health4Life expanded into three new counties and screened over 4,200 individuals for chronic disease risk factors.",
    tag: "Wellness",
  },
  {
    icon: <Flame size={24} />,
    title: "HEAT Program",
    description:
      "The Health Equity Action Team trains community health workers to tackle health disparities block by block. HEAT uses outreach strategies grounded in local data and grassroots engagement to connect residents with preventive care, insurance enrollment, and mental health resources.",
    highlightText: "In 2024, the program graduated 86 new community health workers",
    descriptionSuffix: " and reached over 11,000 residents through door-to-door campaigns and community events.",
    tag: "Advocacy",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Black Health Agenda",
    description:
      "The Black Health Agenda is a policy framework built with state legislators, public health officials, and community leaders. It spells out specific actions to break down the barriers between Black Californians and equitable healthcare. The 2024 edition focused on maternal mortality, environmental justice, and the expansion of Medi-Cal benefits to cover doula services and postpartum mental health support.",
    tag: "Policy",
  },
  {
    icon: <Stethoscope size={24} />,
    title: "Covered California Outreach",
    description:
      "CBHN partners with Covered California to increase health insurance enrollment among Black Californians who remain uninsured or underinsured. Through multilingual outreach, enrollment assistance, and educational workshops, the program helped over 3,100 individuals sign up for coverage during the 2024 open enrollment period.",
    phoneNumber: "(866) 761-4165",
    tag: "Enrollment",
  },
];

const ProgramsGrid = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section id="programs" className="section-padding bg-card">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Programs
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            What We Do on the Ground
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            CBHN runs outreach, education, and advocacy programs across the state, from
            rural Central Valley towns to neighborhoods in Los Angeles and Oakland. Each
            program is built around what communities actually need.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 35, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{
                duration: 0.6,
                delay: i * 0.1,
                ease: [0.25, 0.1, 0.25, 1],
              }}
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
              <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                {program.description}
                {program.highlightText && (
                  <>
                    {" "}<span className="font-semibold text-foreground">{program.highlightText}</span>
                    {program.descriptionSuffix}
                  </>
                )}
              </p>
              {program.phoneNumber && (
                <a
                  href={`tel:${program.phoneNumber.replace(/[^0-9]/g, "")}`}
                  className="mt-4 inline-flex items-center gap-2 rounded-full bg-secondary/10 px-4 py-2 text-[13px] font-semibold text-secondary transition-colors hover:bg-secondary/20"
                >
                  Call Now: {program.phoneNumber}
                </a>
              )}
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
