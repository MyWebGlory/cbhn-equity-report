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
    importance: "According to NIH data, the cancer death rate for black Californians is almost 145% higher than the average death rate for all Californians. The law closes the gap on equitable cancer care and treatment.",
    signed: true,
  },
  {
    icon: <FileText size={18} />,
    bill: "AB 85 (Weber)",
    title: "Social Determinants of Health Screening and Outreach",
    status: "Vetoed in 2023, being re-introduced in 2024",
    position: "Co-Sponsor",
    description: "AB 85 would have required coverage and reimbursement for primary care providers to conduct a Social Determinants of Health (SDOH) Screening. In addition, this bill requires insurers to provide primary care providers with adequate access to community health workers to address these social determinants of health.",
    importance: "SDOH (the conditions under which people are born, grow, live, work, and age) are large drivers of health disparities and are prevalent in the Black Communities.",
    signed: false,
  },
  {
    icon: <Scale size={18} />,
    bill: "HERJF",
    title: "Health Equity and Racial Justice Fund",
    status: "Not included in the 2023/24 State budget",
    position: "Co-sponsor",
    description: "Support for $50 million over two years in a one-time investment to create the Health Equity and Racial Justice Fund (HERJF). The Fund would support projects proposed by nonprofit organizations, clinics, and tribal organizations that serve disproportionately impacted communities of color and low income.",
    importance: "The HERJF would direct resources to organizations and leaders rooted in communities, focused on areas that present gaps in current investments.",
    signed: false,
  },
  {
    icon: <Megaphone size={18} />,
    bill: "AB 2300 (Wilson)",
    title: "California Toxic-Free Medical Devices Act",
    status: "Signed into law 2024",
    position: "Co-sponsor",
    description: "This legislation prohibits the production, sale, and use of Di(2-ethylhexyl)phthalate (DEHP) in IV bags and tubing throughout California commencing January 1, 2030. CBHN co-sponsored this bill with Breast Cancer Prevention Partners (BCPP).",
    importance: "DEHP can leach into fluids administered to patients and is linked to serious health issues, including hormone disruption, reduced fertility, liver and kidney damage, and respiratory irritation. It has also been classified as a probable human carcinogen.",
    signed: true,
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
    <section id="policy" className="section-padding relative overflow-hidden bg-muted/30">
      <div className="report-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Policy Initiatives
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Advocacy and Legislation
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            Addressing health disparities and systemic racism within healthcare is difficult without policy and legislative reform. CBHN prides itself on working with California legislators, and United States Congressional representatives to advance legislation to enhance the overall health of Black and African Americans Californians. In the past four decades, CBHN has pushed for several policies and legislation through sponsoring, co-sponsoring, and advocating for collaborative support from its statewide partners.
          </p>
        </motion.div>

        {/* Advocacy image with overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-16 overflow-hidden rounded-3xl relative"
        >
          <img src={advocacyImg} alt="CBHN advocacy event" className="h-64 w-full object-cover md:h-96" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/30 to-transparent" />
        </motion.div>

        {/* Priorities */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="mx-auto mb-16 max-w-2xl"
        >
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">CBHN's Policy Priorities</p>
          <div className="flex flex-wrap gap-3">
            {["Anti-racism in Medicine", "Social Determinants of Health", "Precision/Personalized Medicine in Primary Care"].map((p, i) => {
              const colors = ["bg-primary text-primary-foreground", "bg-secondary text-secondary-foreground", "bg-accent text-accent-foreground"];
              return (
                <span key={p} className={`rounded-full px-5 py-2.5 text-xs font-bold shadow-md ${colors[i]}`}>{p}</span>
              );
            })}
          </div>
        </motion.div>

        <div ref={contentRef}>
          {/* Sponsored */}
          <p className="mb-8 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
            Sponsored Legislation
          </p>
          <div className="grid gap-8 md:grid-cols-2 mb-16">
            {sponsored.map((item, i) => (
              <motion.div
                key={item.bill}
                initial={{ opacity: 0, y: 25 }}
                animate={contentInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className={`group rounded-2xl bg-card p-8 shadow-lg border-l-4 ${item.signed ? "border-l-primary" : "border-l-destructive"}`}
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl ${item.signed ? "bg-primary text-primary-foreground" : "bg-destructive text-destructive-foreground"}`}>
                    {item.icon}
                  </div>
                  <div>
                    <span className="text-sm font-black text-foreground">{item.bill}</span>
                    <span className="ml-2 text-[10px] font-bold text-muted-foreground">CBHN Position: {item.position}</span>
                  </div>
                </div>
                <span className={`inline-block rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider ${item.signed ? "bg-primary/15 text-primary" : "bg-destructive/15 text-destructive"}`}>{item.status}</span>
                <h3 className="mt-3 font-serif text-lg font-bold text-foreground">{item.title}</h3>
                <p className="mt-2 text-sm leading-[1.7] text-muted-foreground">{item.description}</p>
                <p className="mt-3 text-xs leading-relaxed text-muted-foreground italic">{item.importance}</p>
              </motion.div>
            ))}
          </div>

          {/* Supported */}
          <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
            Supported Legislation
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 mb-16">
            {supported.map((item, i) => (
              <motion.div
                key={item.bill}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={contentInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 + i * 0.04 }}
                className="rounded-xl bg-card px-5 py-4 shadow-md border-l-4 border-l-accent"
              >
                <span className="text-xs font-black text-accent">{item.bill}</span>
                <p className="text-sm font-bold text-foreground mt-1">{item.title}</p>
                <p className="text-[10px] font-semibold text-muted-foreground mt-1">{item.status}</p>
              </motion.div>
            ))}
          </div>

          {/* BHEAW - full green card */}
          <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
            Advocacy Initiatives
          </p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mx-auto max-w-3xl rounded-3xl bg-primary p-10 text-center mb-10 shadow-xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">Landmark Achievement</p>
            <h3 className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl">
              Black Health Equity Advocacy Week
            </h3>
            <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
              A resolution created and written by CBHN and sponsored by Assemblymember Dr. Akilah Weber. The resolution recognized May 1-5, 2023, and every first week of May thereafter, as Black Health Equity Advocacy Week (BHEAW) in California. BHEAW establishes the first of its kind, a statewide focus on the need to address the health disparities gap for Black Californians.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={contentInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.7 }}
            className="mx-auto max-w-3xl rounded-3xl bg-accent p-10 shadow-xl"
          >
            <h3 className="font-serif text-xl font-bold text-accent-foreground mb-4">
              Health Equity Advocacy Training (HEAT) Program
            </h3>
            <p className="text-sm leading-relaxed text-accent-foreground/90 mb-5">
              The HEAT Program organizes, trains, and empowers Black Californians and civic-minded individuals to utilize their collective community capital to persuade legislative decision-makers to implement policies that address health disparities in California. The goal is to cultivate a culture of power-building and a statewide network of activists within the Black community, with the aim of influencing policy change at the state and local levels.
            </p>
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-accent-foreground/70 mb-4">Upon completion, cohort members will be able to:</p>
            <div className="space-y-2">
              {[
                "Better understand the California legislative process and how a bill becomes a law.",
                "Engage in the advocacy process and galvanize community engagement around key issues and drivers of health.",
                "Communicate effectively with policymakers and legislators to drive change.",
                "Amplify their voice and advocate for change around issues affecting the health and well-being of Black Californians within their respective communities.",
                "Turn issues into actionable policy advocacy.",
              ].map((item, i) => (
                <div key={i} className="flex items-start gap-3">
                  <div className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-accent-foreground/50" />
                  <p className="text-sm text-accent-foreground/90">{item}</p>
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
