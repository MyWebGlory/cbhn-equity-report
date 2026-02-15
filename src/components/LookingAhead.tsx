import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityFaces from "@/assets/community-faces.png";

const priorities = [
  {
    title: "Capacity Building",
    description: "To create the internal infrastructure, resources, competencies, and intellectual expertise to achieve success in the implementation of the strategy framework and in achieving health equity for Black Californians."
  },
  {
    title: "Marketing and Branding Strategy",
    description: "To build/increase awareness and establish CBHN as a recognized leader in advocating for Black health equity and driving change in California."
  },
  {
    title: "Provider Network Directory",
    description: "To create opportunities for Black Californians to access Black physicians, health, and wellness professionals."
  },
  {
    title: "Health Education Programs and Initiatives",
    description: "Year two of the \"How Do I...\" Campaign, with webinars hosted by Dr. Melissa Clarke, will continue to empower Black Californians with information and resources needed to navigate the healthcare system, advocate for themselves, their friends and family, and take action when faced with discrimination."
  },
  {
    title: "Conscious Black Beauty Movement",
    description: "Building upon the successes of the work between CBHN and Breast Cancer Prevention Partners' launch of the Nontoxic Black Beauty Project (NTBBP), CBHN created the Conscious Black Beauty Movement (CBBM). The CBBM aims to create a movement to tackle the critical health risks linked to toxic ingredients."
  },
  {
    title: "Policy Priorities and Agenda",
    description: "To effect change that can impact and improve health outcomes for Black Californians by leading policy initiatives aligned with the Black Health Agenda."
  },
  {
    title: "Workforce Development",
    description: "To support and facilitate the creation of a pipeline process to increase the number of Black multidisciplinary healthcare professionals. Create a community of members that is focused on power and capacity building for Black led community-based organizations and a space for professional networking."
  },
];

const numColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
  "bg-magenta text-primary-foreground",
  "bg-primary text-primary-foreground",
];

const levels = [
  { level: "Individual Level", color: "bg-primary text-primary-foreground", items: ["Health literacy", "Health disparities", "Health outcomes"] },
  { level: "Community Level", color: "bg-secondary text-secondary-foreground", items: ["Social/Political Determinants of Health", "Healthcare access", "Stakeholder engagement"] },
  { level: "System Level", color: "bg-accent text-accent-foreground", items: ["Racial bias/racism in healthcare", "Healthcare access", "Affordable, quality, equitable healthcare"] },
];

const LookingAhead = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section className="relative overflow-hidden">
      {/* Full-width banner */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={communityFaces} alt="CBHN community faces" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-muted/80" />
      </div>

      <div className="section-padding bg-muted/30 -mt-20 relative z-10 pt-10">
        <div className="report-container">
          <motion.div
            ref={headerRef}
            initial={{ opacity: 0, y: 40 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto mb-20 max-w-3xl text-center"
          >
            <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
              Looking Ahead
            </p>
            <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
              2025 and Beyond
            </h2>
            <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
              In looking ahead to the next phase of CBHN's evolution, the continued implementation of the core components of the Campaign for Black Health Equity will be the driving force to close the gap in health disparities, advance health equity, and ultimately improve life expectancy of Black Californians. To support this work, CBHN will work to address health disparities and inequities at three levels:
            </p>
          </motion.div>

          {/* Three levels - solid colored */}
          <div className="mx-auto mb-20 grid max-w-4xl gap-6 sm:grid-cols-3">
            {levels.map((l, i) => (
              <motion.div
                key={l.level}
                initial={{ opacity: 0, y: 20 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 + i * 0.1 }}
                className={`rounded-2xl p-7 shadow-xl ${l.color}`}
              >
                <span className="text-sm font-black uppercase tracking-wider">
                  {l.level}
                </span>
                <ul className="mt-4 space-y-2">
                  {l.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm opacity-90">
                      <span className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-current opacity-50" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Priorities */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.5 }}
            className="mb-5 text-center text-sm font-black uppercase tracking-[0.2em] text-muted-foreground"
          >
            Priority Initiatives
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={headerInView ? { opacity: 1 } : {}}
            transition={{ delay: 0.55 }}
            className="mb-10 mx-auto max-w-3xl text-center text-lg leading-[1.8] text-muted-foreground"
          >
            The Campaign for Black Health Equity will build greater awareness of CBHN, statewide and nationally, and provide a key fundraising vehicle for the organization in order to diversify revenue, support capacity building, and ensure long-term sustainability. Through the Campaign, CBHN will prioritize the following:
          </motion.p>

          <div ref={gridRef} className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {priorities.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 30, scale: 0.95 }}
                animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="rounded-2xl bg-card p-8 shadow-lg hover:shadow-xl transition-all hover:-translate-y-1"
              >
                <span className={`flex h-10 w-10 items-center justify-center rounded-full text-sm font-black ${numColors[i]}`}>{i + 1}</span>
                <h3 className="mt-4 font-serif text-lg font-bold text-foreground">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-[1.7] text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Our Commitment */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={gridInView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.6 }}
            className="mx-auto mt-20 max-w-3xl rounded-3xl bg-gradient-to-br from-primary via-accent to-primary p-10 text-center shadow-2xl"
          >
            <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-foreground/70 mb-4">Our Commitment</p>
            <p className="text-base leading-relaxed text-primary-foreground/90">
              CBHN is committed to eliminating health disparities among Black Californians by continuing to work with communities and faith-based organizations, healthcare systems and providers, public health agencies, and policymakers working together to develop policies, programs, and systems based on a health equity framework and community needs. The Campaign for Black Health Equity will build greater awareness about health inequities affecting our community and lead efforts to educate Black Californians about health equity issues and empower these communities to engage in the policymaking process.
            </p>
            <p className="mt-6 text-lg font-bold text-primary-foreground">
              Please join the Campaign for Black Health Equity and help CBHN rewrite the health story for all Black Californians.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LookingAhead;
