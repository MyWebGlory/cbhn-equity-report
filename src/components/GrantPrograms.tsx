import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Flame, BookOpen, Stethoscope, Brain, Sparkles, Apple, Dna, Users, Baby } from "lucide-react";
import FloatingShapes from "./FloatingShapes";

const topBorderColors = [
  "border-t-4 border-t-primary",
  "border-t-4 border-t-secondary",
  "border-t-4 border-t-accent",
  "border-t-4 border-t-sky-aqua",
  "border-t-4 border-t-gold",
  "border-t-4 border-t-magenta",
  "border-t-4 border-t-primary",
  "border-t-4 border-t-secondary",
  "border-t-4 border-t-accent",
  "border-t-4 border-t-sky-aqua",
  "border-t-4 border-t-gold",
];

const iconColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
  "bg-magenta text-primary-foreground",
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
];

const tagColors = [
  "bg-primary/15 text-primary",
  "bg-secondary/15 text-secondary",
  "bg-accent/15 text-accent",
  "bg-sky-aqua/15 text-sky-aqua",
  "bg-gold/15 text-gold",
  "bg-magenta/15 text-magenta",
  "bg-primary/15 text-primary",
  "bg-secondary/15 text-secondary",
  "bg-accent/15 text-accent",
  "bg-sky-aqua/15 text-sky-aqua",
  "bg-gold/15 text-gold",
];

const programs = [
  {
    icon: <Brain size={22} />,
    title: "Mental Health Services Office of Accountability (MHSOAC)",
    tag: "Mental Health",
    description: "To bring awareness of the challenges and issues facing the diverse racial and ethnic communities through advocacy, training and education, and outreach and engagement at the local levels to drive policy change to ensure that state policymaking reflects the collective needs of local communities and is responsive to the needs of the Black, Indigenous, and People of Color (BIPOC) communities across California."
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Adverse Childhood Experiences (ACEs) Awareness",
    tag: "Prevention",
    description: "To engage Black healthcare providers, health professionals, and community service providers in discussions on ACES, the connection between ACES and Black maternal health, and effective approaches to address the needs of Black pregnant women in this context."
  },
  {
    icon: <Stethoscope size={22} />,
    title: "Covered California Navigation",
    tag: "Enrollment",
    description: "To provide assistance and support for Covered California-eligible consumers to successfully enroll and re-enroll in a health insurance plan on behalf of Covered California, and to conduct outreach, education, enrollment, renewal assistance, and post-enrollment support."
  },
  {
    icon: <Users size={22} />,
    title: "Medi-Cal Outreach, Education, and Enrollment",
    tag: "Enrollment",
    description: "Enrollment, Retention and Education for California's diverse health care consumers to assist consumers with enrolling in and retaining health coverage (including Medi-Cal and Medicare), understanding their benefits, and navigating the health care system."
  },
  {
    icon: <Flame size={22} />,
    title: "Campaign for Black Health Equity",
    tag: "Framework",
    description: "A multi-year initiative that aims to close the gap in health disparities and improve the life expectancy of Black Californians. Specific programs include the New Black Health Agenda, the Black Health Network, Health Equity Forum, Health4Life, advocacy and policy initiatives, and continued Covered California Navigation."
  },
  {
    icon: <BookOpen size={22} />,
    title: "The \"How Do I...\" Campaign",
    tag: "Education",
    description: "To provide support for and empower Black Californians in navigating the healthcare system through a multi-channel approach, giving individuals the knowledge and tools to make informed healthcare decisions, as well as address healthcare challenges and systemic inequities through educational resources, advocacy, and interactive dialogues."
  },
  {
    icon: <Apple size={22} />,
    title: "Diabetes and Social Determinants of Health",
    tag: "Chronic Disease",
    description: "To launch a culturally tailored diabetes outreach, education, and engagement program for Black Californians to improve the health literacy of pre-diabetic and type-2 diabetic people, teach patients how to manage their disease, support patients to create positive lifestyle behavior change, and improve transplant-related outcomes for Black dialysis patients through the CARE Program."
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Supporting the Health of African Americans",
    tag: "Wellness",
    description: "To increase the number of African American individuals and organizations mobilizing themselves locally and joining collaborations at the state level to impact policies, services, and the environment for the purpose of improving the health and well-being of their community in Fresno, San Bernardino, and San Joaquin."
  },
  {
    icon: <Sparkles size={22} />,
    title: "Non-Toxic Black Beauty Project and Safer Black Beauty List",
    tag: "Env. Justice",
    description: "To improve Black women's health through education and awareness about the hazardous chemicals in products marketed to and targeted towards Black women and girls, center Black women with the resources they can trust and empower them to make safer choices, and train community leaders on how to share the issue and resource with their network."
  },
  {
    icon: <Dna size={22} />,
    title: "All of Us Campaign",
    tag: "Research",
    description: "To provide outreach, education, and engagement with older adults to encourage their participation in the All of Us Research Program."
  },
  {
    icon: <Baby size={22} />,
    title: "Caregiving and the Black Community",
    tag: "Family",
    description: "To raise awareness of family caregiving issues for the Black community and provide education and resources to assist caregivers in mitigating the pressure, stress, and strain of caring for their loved ones."
  },
];

const GrantPrograms = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section id="programs" className="section-padding relative overflow-hidden bg-card">
      <FloatingShapes variant="dots" className="opacity-40" />
      <div className="report-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Grant Funded Projects and Programs
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Programs and Initiatives: 2020 to 2024
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            Between 2020 and 2024, CBHN received funding from eleven different funders to support the following key projects and programs:
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group flex flex-col rounded-2xl bg-background p-8 shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${topBorderColors[i]}`}
            >
              <div className="mb-5 flex items-center gap-3">
                <div className={`flex h-11 w-11 items-center justify-center rounded-xl ${iconColors[i]}`}>
                  {program.icon}
                </div>
                <span className={`rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-widest ${tagColors[i]}`}>
                  {program.tag}
                </span>
              </div>
              <h3 className="font-serif text-base font-bold text-foreground">
                {program.title}
              </h3>
              <p className="mt-3 flex-1 text-sm leading-[1.7] text-muted-foreground">
                {program.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrantPrograms;
