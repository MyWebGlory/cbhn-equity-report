import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Landmark, FileText, Scale, Megaphone } from "lucide-react";
import advocacyImg from "@/assets/advocacy.png";

const sponsored = [
  {
    icon: <Landmark size={18} />,
    bill: "SB 987 (Portantino)",
    title: "California Cancer Care Equity Act",
    status: "Signed into law 2022",
    position: "Co-sponsor",
    description: "This law requires Medi-Cal managed care plans to make a good faith effort to contract with at least one National Cancer Institute (NCI)-designated comprehensive cancer center within each county in which the plan operates. This legislation has expanded access to specialized cancer care for Medi-Cal patients who have received complex cancer diagnoses.",
    importance: "According to NIH data, the cancer death rate for black Californians is almost 145% higher than the average death rate for all Californians. The law closes the gap on equitable cancer care and treatment."
  },
  {
    icon: <FileText size={18} />,
    bill: "AB 85 (Weber)",
    title: "Social Determinants of Health Screening and Outreach",
    status: "Vetoed in 2023, being re-introduced in 2024",
    position: "Co-Sponsor",
    description: "AB 85 would have required coverage and reimbursement for primary care providers to conduct a Social Determinants of Health (SDOH) Screening. In addition, this bill requires insurers to provide primary care providers with adequate access to community health workers to address these social determinants of health.",
    importance: "SDOH (the conditions under which people are born, grow, live, work, and age) are large drivers of health disparities and are prevalent in the Black Communities."
  },
  {
    icon: <Scale size={18} />,
    bill: "HERJF",
    title: "Health Equity and Racial Justice Fund",
    status: "Not included in the 2023/24 State budget",
    position: "Co-sponsor",
    description: "Support for $50 million over two years in a one-time investment to create the Health Equity and Racial Justice Fund (HERJF). The Fund would support projects proposed by nonprofit organizations, clinics, and tribal organizations that serve disproportionately impacted communities of color and low income.",
    importance: "The HERJF would direct resources to organizations and leaders rooted in communities, focused on areas that present gaps in current investments."
  },
  {
    icon: <Megaphone size={18} />,
    bill: "AB 2300 (Wilson)",
    title: "California Toxic-Free Medical Devices Act",
    status: "Signed into law 2024",
    position: "Co-sponsor",
    description: "This legislation prohibits the production, sale, and use of Di(2-ethylhexyl)phthalate (DEHP) in IV bags and tubing throughout California commencing January 1, 2030. CBHN co-sponsored this bill with Breast Cancer Prevention Partners (BCPP).",
    importance: "DEHP can leach into fluids administered to patients and is linked to serious health issues, including hormone disruption, reduced fertility, liver and kidney damage, and respiratory irritation. It has also been classified as a probable human carcinogen."
  },
];

const supported = [
  { bill: "SB 65 (Skinner)", title: "California Momnibus Act", status: "Signed into law 2022" },
  { bill: "SB 17 (Pan)", title: "Racial Equity Commission", status: "Approved through Executive Order" },
  { bill: "Proposition 31", title: "Flavored Tobacco Ban", status: "Passed" },
  { bill: "Proposition 3", title: "Right to Marry and Repeal Prop 8", status: "Passed" },
  { bill: "Proposition 4", title: "Climate and Safe Drinking Water Bond", status: "Passed" },
  { bill: "Proposition 6", title: "End Involuntary Servitude", status: "Did not pass" },
  { bill: "Proposition 33", title: "Expand Rent Control", status: "Did not pass" },
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
            Policy Initiatives
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Advocacy and Legislation
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Addressing health disparities and systemic racism within healthcare is difficult without policy and legislative reform. CBHN prides itself on working with California legislators, and United States Congressional representatives to advance legislation to enhance the overall health of Black and African Americans Californians. In the past four decades, CBHN has pushed for several policies and legislation through sponsoring, co-sponsoring, and advocating for collaborative support from its statewide partners.
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

        {/* Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-12 max-w-2xl"
        >
          <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">CBHN's Policy Priorities</p>
          <div className="flex flex-wrap gap-2">
            {["Anti-racism in Medicine", "Social Determinants of Health", "Precision/Personalized Medicine in Primary Care"].map((p) => (
              <span key={p} className="rounded-full border border-primary/20 bg-primary/5 px-4 py-2 text-xs font-semibold text-primary">{p}</span>
            ))}
          </div>
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
                className="group rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all"
              >
                <div className="flex items-center gap-2 mb-2">
                  <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-background text-primary">
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-primary">{item.bill}</span>
                    <span className="ml-2 text-[10px] font-semibold text-muted-foreground">CBHN Position: {item.position}</span>
                  </div>
                </div>
                <div className="mb-2">
                  <span className="text-[10px] font-semibold uppercase tracking-wider text-secondary">{item.status}</span>
                </div>
                <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
                <p className="mt-1.5 text-sm leading-[1.7] text-muted-foreground">{item.description}</p>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground italic">{item.importance}</p>
              </motion.div>
            ))}
          </div>

          {/* Supported */}
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Supported Legislation
          </p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3 mb-12">
            {supported.map((item, i) => (
              <motion.div
                key={item.bill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.04 }}
                className="rounded-lg border border-border/60 bg-card px-4 py-3"
              >
                <span className="text-xs font-bold text-accent">{item.bill}</span>
                <p className="text-sm font-medium text-foreground mt-1">{item.title}</p>
                <p className="text-[10px] text-muted-foreground mt-1">{item.status}</p>
              </motion.div>
            ))}
          </div>

          {/* Advocacy Wins */}
          <p className="mb-5 text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Advocacy Initiatives
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-3xl rounded-xl border-2 border-primary/20 bg-primary/5 p-7 text-center mb-8"
          >
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary mb-3">Landmark Achievement</p>
            <h3 className="font-serif text-xl font-semibold text-foreground">
              Black Health Equity Advocacy Week
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              A resolution created and written by CBHN and sponsored by Assemblymember Dr. Akilah Weber. The resolution recognized May 1-5, 2023, and every first week of May thereafter, as Black Health Equity Advocacy Week (BHEAW) in California. BHEAW establishes the first of its kind, a statewide focus on the need to address the health disparities gap for Black Californians.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mx-auto max-w-3xl rounded-xl border border-border/60 bg-card p-7"
          >
            <h3 className="font-serif text-lg font-semibold text-foreground mb-3">
              Health Equity Advocacy Training (HEAT) Program
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground mb-4">
              The HEAT Program organizes, trains, and empowers Black Californians and civic-minded individuals to utilize their collective community capital to persuade legislative decision-makers to implement policies that address health disparities in California. The goal is to cultivate a culture of power-building and a statewide network of activists within the Black community, with the aim of influencing policy change at the state and local levels.
            </p>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-3">Upon completion, cohort members will be able to:</p>
            <div className="space-y-2">
              {[
                "Better understand the California legislative process and how a bill becomes a law.",
                "Engage in the advocacy process and galvanize community engagement around key issues and drivers of health.",
                "Communicate effectively with policymakers and legislators to drive change.",
                "Amplify their voice and advocate for change around issues affecting the health and well-being of Black Californians within their respective communities.",
                "Turn issues into actionable policy advocacy.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-2">
                  <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                  <p className="text-xs text-muted-foreground">{item}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LegislativeWins;
