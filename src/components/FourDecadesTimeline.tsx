import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const decades = [
  {
    era: "1978",
    title: "CBHN Founded",
    description: "The California Black Health Network is established as a statewide collaboration between health advocates in the Bay Area, Los Angeles, and San Diego. Six regional chapters are formed to address the unique health challenges facing Black Californians."
  },
  {
    era: "1980s",
    title: "Building the Foundation",
    description: "CBHN hosts its first statewide conference, establishes the chapter model for regional outreach, and secures its first major grant from the California Health Care Foundation. Incorporated as a 501(c)(3) in 1983. The organization begins publishing health education materials and hosting community forums."
  },
  {
    era: "1990s",
    title: "Tobacco, Nutrition, and Prevention",
    description: "CBHN launches the \"Not in Mama's Kitchen\" nutrition campaign and receives funding through AATEP (Proposition 99) for tobacco research and education. The Sickle Cell Disease pilot project (SLAA) is funded. Community health fairs expand across the Central Valley and Southern California."
  },
  {
    era: "2000s",
    title: "Quality, Outreach, and Technology",
    description: "The Quality Assurance Project, Sweet Heart Project (cardiovascular health), and Personal Health Records initiative launch. CBHN begins partnering with county health departments on diabetes prevention and chronic disease management. The organization receives its first multi-year federal grant."
  },
  {
    era: "2010s",
    title: "Healthcare Reform and Expansion",
    description: "CBHN becomes a Covered California Navigator, enrolling thousands of Black Californians in health coverage during ACA implementation. The organization launches HIV/AIDS awareness campaigns, mental health webinars, prevention and wellness programs, and the Black Health Agenda town halls across the state."
  },
  {
    era: "2020 to 2024",
    title: "Campaign for Black Health Equity",
    description: "In response to COVID-19 and systemic racial injustice, CBHN launches the Campaign for Black Health Equity. New Executive Director Rhonda M. Smith is hired. The organization builds the Black Health Network (700+ members), launches HEAT and Health4Life programs, sponsors landmark legislation, and reaches over 110,000 individuals statewide."
  },
];

const FourDecadesTimeline = () => {
  const headerRef = useRef(null);
  const listRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const listInView = useInView(listRef, { once: true, margin: "-40px" });

  return (
    <section id="timeline" className="section-padding bg-muted/50">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Journey
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Four Decades of Impact
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            From a small coalition of health advocates in 1978 to California's leading
            Black health equity organization, CBHN's story is one of steady growth,
            bold advocacy, and unwavering commitment to community.
          </p>
        </motion.div>

        <div ref={listRef} className="mx-auto max-w-2xl">
          <div className="relative space-y-10">
            {decades.map((item, i) => (
              <motion.div
                key={item.era}
                initial={{ opacity: 0, x: -20 }}
                animate={listInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="group flex gap-5"
              >
                <div className="flex flex-col items-center">
                  <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-2 border-primary/30 bg-card text-[12px] font-bold text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                    {item.era.length <= 5 ? item.era : item.era.slice(0, 5)}
                  </div>
                  {i < decades.length - 1 && (
                    <div className="mt-2 h-full w-px bg-gradient-to-b from-primary/30 to-border" />
                  )}
                </div>
                <div className="pb-2">
                  <span className="text-[11px] font-semibold tracking-wider text-secondary">
                    {item.era}
                  </span>
                  <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">
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

export default FourDecadesTimeline;
