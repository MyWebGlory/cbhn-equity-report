import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, FileText, Scale, Megaphone, Vote, Leaf, Users, Heart } from "lucide-react";
import advocacyImg from "@/assets/advocacy.png";

const sponsored = [
  {
    icon: <Landmark size={18} />,
    bill: "SB 987",
    title: "California Cancer Care Equity Act",
    status: "Signed into law, 2022",
    description: "Requires cancer screening programs to collect and report demographic data, ensuring that disparities in diagnosis and treatment are visible and actionable."
  },
  {
    icon: <FileText size={18} />,
    bill: "AB 85",
    title: "Social Determinants of Health Screening",
    status: "Vetoed 2023, reintroduced",
    description: "Would require Medi-Cal providers to screen patients for social determinants of health including housing instability, food insecurity, and transportation barriers."
  },
  {
    icon: <Scale size={18} />,
    bill: "HERJF",
    title: "Health Equity and Racial Justice Fund",
    status: "Budget request",
    description: "State budget request to establish a dedicated funding stream for community-based organizations addressing racial health disparities."
  },
  {
    icon: <Megaphone size={18} />,
    bill: "AB 2300",
    title: "Toxic-Free Medical Devices Act",
    status: "Signed into law, 2024",
    description: "Prohibits the use of certain toxic chemicals in medical devices sold in California, with a focus on products disproportionately affecting communities of color."
  },
];

const supported = [
  { bill: "SB 65", title: "California Momnibus Act" },
  { bill: "SB 17", title: "Racial Equity Commission" },
  { bill: "Prop 31", title: "Flavored Tobacco Ban" },
  { bill: "Prop 3", title: "Right to Marry" },
  { bill: "Prop 4", title: "Climate Bond" },
  { bill: "Prop 6", title: "End Involuntary Servitude" },
  { bill: "Prop 33", title: "Rent Control" },
];

const LegislativeWins = () => {
  const headerRef = useRef(null);
  const contentRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const contentInView = useInView(contentRef, { once: true, margin: "-40px" });

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
            Policy and Advocacy
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Changing the Law, Changing Lives
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            CBHN does not wait for policy to catch up. We write legislation, build coalitions,
            and make sure Black health is on the agenda in Sacramento and beyond.
          </p>
        </motion.div>

        {/* Advocacy image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-12 overflow-hidden rounded-xl"
        >
          <img src={advocacyImg} alt="CBHN advocacy event" className="h-64 w-full object-cover md:h-80" />
        </motion.div>

        <div ref={contentRef}>
          {/* Sponsored */}
          <p className="mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Sponsored Legislation
          </p>
          <div className="grid gap-5 md:grid-cols-2 mb-12">
            {sponsored.map((item, i) => (
              <motion.div
                key={item.bill}
                initial={{ opacity: 0, y: 25 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group flex gap-4 rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                  {item.icon}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-bold text-primary">{item.bill}</span>
                    <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary">{item.status}</span>
                  </div>
                  <h3 className="mt-1 font-serif text-base font-semibold text-foreground">{item.title}</h3>
                  <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Supported */}
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Supported Legislation
          </p>
          <div className="flex flex-wrap gap-3 mb-12">
            {supported.map((item, i) => (
              <motion.div
                key={item.bill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.04 }}
                className="rounded-full border border-border/60 bg-card px-4 py-2"
              >
                <span className="text-xs font-bold text-accent">{item.bill}</span>
                <span className="ml-2 text-xs text-muted-foreground">{item.title}</span>
              </motion.div>
            ))}
          </div>

          {/* Advocacy Win */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-2xl rounded-xl border-2 border-primary/20 bg-primary/5 p-7 text-center"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Landmark Achievement</p>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Black Health Equity Advocacy Week
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              CBHN established the first-ever Black Health Equity Advocacy Week, held the
              first week of May every year. This annual event brings together legislators,
              healthcare providers, and community leaders in Sacramento to advance health
              equity policy for Black Californians.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegislativeWins;
