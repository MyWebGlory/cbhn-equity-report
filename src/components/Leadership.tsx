import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const leaders = [
  {
    name: "Rhonda Smith, MPH",
    role: "Executive Director",
    bio: "Rhonda has spent 25 years building public health infrastructure in Black communities across California. Before joining CBHN, she directed maternal health programs at the Alameda County Public Health Department and served as a policy advisor to the California Endowment. She holds a Master of Public Health from UC Berkeley.",
  },
  {
    name: "Dr. Anthony Iton, MD, JD, MPH",
    role: "Board Chair",
    bio: "Dr. Iton is a physician, attorney, and public health leader who has dedicated his career to understanding how place and race determine health outcomes. He currently serves as Senior Vice President at The California Endowment and previously led the Alameda County Public Health Department for nearly a decade.",
  },
  {
    name: "Kimberly Lewis",
    role: "Director of Programs",
    bio: "Kimberly oversees all of CBHN's community-facing programs, including Health4Life and HEAT. She built the community health worker training curriculum from scratch and has personally trained over 300 outreach workers since 2019. She grew up in Stockton and brings firsthand knowledge of Central Valley health challenges to her work.",
  },
  {
    name: "Marcus Johnson, JD",
    role: "Policy Director",
    bio: "Marcus leads CBHN's legislative strategy in Sacramento. He drafted the language behind the Medi-Cal postpartum extension and the community health worker certification bill. Before CBHN, he worked as a legislative aide in the California State Assembly and clerked for a federal judge in the Eastern District of California.",
  },
  {
    name: "Dr. Tanya Williams, PhD",
    role: "Director of Research",
    bio: "Tanya runs CBHN's data and research division. Her team produces the annual health disparities report and the Black Health Agenda policy brief. She holds a PhD in Epidemiology from UCLA and previously worked at the CDC's National Center for Health Statistics, where she focused on racial disparities in chronic disease data.",
  },
  {
    name: "David Chen",
    role: "Director of Communications",
    bio: "David manages CBHN's newsroom, media partnerships, and public-facing campaigns. He has placed op-eds and feature stories in outlets from the Sacramento Bee to CalMatters. Before CBHN, he spent eight years as a health reporter at the Los Angeles Times covering the ACA rollout and Medi-Cal expansion.",
  },
];

const Leadership = () => {
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
            Our Team
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            The People Behind the Work
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            CBHN is led by public health professionals, policy experts, and community organizers
            who grew up in the neighborhoods they now serve. They know the problems personally,
            and they bring decades of experience to fixing them.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {leaders.map((person, i) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-xl border border-border/60 bg-background p-7 hover:border-t-2 hover:border-t-secondary/20 transition-all duration-300"
            >
              <p className="text-[11px] font-semibold uppercase tracking-widest text-secondary/80">
                {person.role}
              </p>
              <div className="mt-2 h-px w-8 bg-secondary/20" />
              <h3 className="mt-2 font-serif text-lg font-semibold text-foreground">
                {person.name}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                {person.bio}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Leadership;
