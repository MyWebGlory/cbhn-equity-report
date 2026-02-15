import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Users, Megaphone, Heart, Stethoscope, FileText } from "lucide-react";

const components = [
  { icon: <Users size={22} />, title: "Black Health Network", text: "A statewide network of 700+ healthcare professionals, advocates, and community leaders connected through mentoring, networking, and workforce development." },
  { icon: <FileText size={22} />, title: "Black Health Agenda", text: "A comprehensive policy framework developed with legislators and public health officials that outlines actionable steps to eliminate health disparities." },
  { icon: <Megaphone size={22} />, title: "Health Equity Forum", text: "Annual convenings that bring together policymakers, researchers, and community members to align on priorities and share evidence-based solutions." },
  { icon: <Heart size={22} />, title: "Health4Life", text: "Community health education and screening program that brings culturally competent care directly into neighborhoods across California." },
  { icon: <ShieldCheck size={22} />, title: "Advocacy and Policy", text: "Legislative strategy that sponsors and supports bills addressing racial health disparities, from maternal mortality to environmental justice." },
  { icon: <Stethoscope size={22} />, title: "Healthcare Coverage", text: "Enrollment assistance and outreach that connects uninsured and underinsured Black Californians with Covered California and Medi-Cal coverage." },
];

const NewBeginning2020 = () => {
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
            A New Beginning
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            2020 to 2024: Response, Recovery, Resilience
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            The dual crises of COVID-19 and racial injustice demanded a new approach.
            CBHN launched the Campaign for Black Health Equity, a unified framework
            built on the understanding that health equity sits at the intersection of
            racial justice, social justice, and environmental justice.
          </p>
        </motion.div>

        {/* Health Equity Framework visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={headerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-14 max-w-2xl rounded-xl border border-border/60 bg-background p-8 text-center"
        >
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-4">
            Health Equity Framework
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3 text-sm font-semibold">
            <span className="rounded-full bg-primary/10 px-4 py-2 text-primary">Racial Justice</span>
            <span className="text-muted-foreground">+</span>
            <span className="rounded-full bg-secondary/10 px-4 py-2 text-secondary">Social Justice</span>
            <span className="text-muted-foreground">+</span>
            <span className="rounded-full bg-accent/10 px-4 py-2 text-accent">Environmental Justice</span>
            <span className="text-muted-foreground">=</span>
            <span className="rounded-full bg-foreground px-5 py-2 text-primary-foreground font-bold">Health Equity</span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Six Core Components
        </motion.p>

        <div ref={gridRef} className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-xl border border-border/60 bg-background p-6 hover:border-primary/30 transition-all duration-300"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/8 text-primary ring-1 ring-primary/10">
                {item.icon}
              </div>
              <h3 className="font-serif text-base font-semibold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewBeginning2020;
