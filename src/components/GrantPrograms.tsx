import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { HeartPulse, Flame, BookOpen, Stethoscope, Brain, Sparkles, Apple, FlaskConical, Dna, Users, Baby } from "lucide-react";

const programs = [
  {
    icon: <Brain size={22} />,
    title: "MHSOAC",
    tag: "Mental Health",
    description: "Mental Health Services Oversight and Accountability Commission program focused on reducing stigma around mental health in Black communities and increasing access to culturally responsive psychiatric care."
  },
  {
    icon: <HeartPulse size={22} />,
    title: "ACEs Awareness",
    tag: "Prevention",
    description: "Adverse Childhood Experiences awareness and screening program that trains community health workers to identify trauma and connect families with support services."
  },
  {
    icon: <Stethoscope size={22} />,
    title: "Covered California Navigation",
    tag: "Enrollment",
    description: "Navigator program that assists uninsured and underinsured Black Californians with health plan enrollment through Covered California. Over 3,100 individuals enrolled during the 2024 open enrollment period."
  },
  {
    icon: <Users size={22} />,
    title: "Medi-Cal Outreach",
    tag: "Enrollment",
    description: "Community-based outreach to increase Medi-Cal enrollment and utilization among eligible Black Californians, with a focus on newly eligible populations and redetermination support."
  },
  {
    icon: <Flame size={22} />,
    title: "Campaign for Black Health Equity",
    tag: "Framework",
    description: "CBHN's comprehensive strategy connecting community health education, legislative advocacy, workforce development, and healthcare coverage under one unified approach to eliminating health disparities."
  },
  {
    icon: <BookOpen size={22} />,
    title: "\"How Do I...\" Campaign",
    tag: "Education",
    description: "Health literacy campaign developed in response to the California Health Care Foundation's \"Listening to Black Californians\" study. Year 1 educated 600 individuals with a 4.8 out of 5.0 satisfaction rating."
  },
  {
    icon: <Apple size={22} />,
    title: "Diabetes and SDOH",
    tag: "Chronic Disease",
    description: "Diabetes prevention and social determinants of health screening program that connects individuals with nutritional counseling, exercise programs, and primary care providers."
  },
  {
    icon: <HeartPulse size={22} />,
    title: "Supporting Health of African Americans",
    tag: "Wellness",
    description: "Holistic health support program addressing cardiovascular health, hypertension management, and wellness education in partnership with county health departments across the state."
  },
  {
    icon: <Sparkles size={22} />,
    title: "Non-Toxic Black Beauty Project",
    tag: "Env. Justice",
    description: "Research and advocacy initiative exposing toxic chemicals in beauty products marketed to Black women and advocating for safer alternatives and stronger regulatory standards."
  },
  {
    icon: <Dna size={22} />,
    title: "All of Us Campaign",
    tag: "Research",
    description: "Partnership with the NIH All of Us Research Program to increase Black representation in biomedical research and precision medicine studies."
  },
  {
    icon: <Baby size={22} />,
    title: "Caregiving and the Black Community",
    tag: "Family",
    description: "Support program for Black caregivers addressing the unique challenges of managing chronic illness, elder care, and family health within systems that are not designed to serve their needs."
  },
];

const GrantPrograms = () => {
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
            Grant-Funded Programs
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Over four decades, CBHN has administered 45+ grant-funded programs. These are
            the initiatives currently active or recently completed, each designed to address
            specific health disparities facing Black Californians.
          </p>
        </motion.div>

        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {programs.map((program, i) => (
            <motion.div
              key={program.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
              className="group flex flex-col rounded-xl border border-border/60 bg-background p-6 transition-all duration-300 hover:border-primary/30 hover:shadow-md hover:shadow-primary/5"
            >
              <div className="mb-4 flex items-center gap-3">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
                  {program.icon}
                </div>
                <span className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground">
                  {program.tag}
                </span>
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground">
                {program.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-[1.7] text-muted-foreground">
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
