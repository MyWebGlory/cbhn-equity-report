import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const lookingAhead = [
  {
    title: "Expanding Health4Life to 10 New Counties",
    description:
      "In 2025, CBHN will open Health4Life sites in Contra Costa, Riverside, San Bernardino, Solano, Stanislaus, Tulare, Ventura, Yolo, Marin, and Sonoma counties. Each new site will hire and train local facilitators, with a goal of screening 8,000 additional individuals for chronic disease risk factors by December.",
  },
  {
    title: "Launching the Black Mental Health Initiative",
    description:
      "CBHN is developing a statewide mental health initiative focused on reducing stigma around therapy and psychiatric care in Black communities. The program will train 50 peer counselors, partner with Federally Qualified Health Centers to offer free intake sessions, and produce a public awareness campaign in partnership with CalMHSA.",
  },
  {
    title: "Building a Statewide Health Data Dashboard",
    description:
      "Our research team is building a public-facing dashboard that will track health outcomes for Black Californians by county, condition, and demographic. The dashboard will use data from the California Health Interview Survey, Medi-Cal claims, and CBHN's own screening results. The beta launch is scheduled for Q3 2025.",
  },
  {
    title: "Advocating for AB-1247: Black Maternal Mortality Review Act",
    description:
      "CBHN is co-sponsoring a bill that would require every California county to establish a maternal mortality review committee with mandatory demographic reporting. The bill would also fund community-based doula programs in the 15 counties with the highest Black maternal mortality rates.",
  },
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
            Looking Ahead to 2025
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            2024 gave us momentum. In 2025, we plan to use it. Here is where we are
            putting our energy, our funding, and our people over the next twelve months.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-6 md:grid-cols-2">
          {lookingAhead.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-xl border border-border/60 bg-background p-7 border-b-2 border-b-primary/10"
            >
              <h3 className="font-serif text-lg font-semibold text-foreground">
                {item.title}
              </h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
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
