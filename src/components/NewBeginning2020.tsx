import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Users, Megaphone, Heart, Stethoscope, FileText } from "lucide-react";

const components = [
  { icon: <Users size={22} />, title: "The Black Health Network", text: "A community of CBOs, individuals and professionals driving a Black health movement." },
  { icon: <FileText size={22} />, title: "The Black Health Agenda", text: "A statewide plan to address health disparities in the Black community." },
  { icon: <Megaphone size={22} />, title: "Health Equity Forum", text: "Speaker series featuring public health and health equity experts." },
  { icon: <Heart size={22} />, title: "Health4Life", text: "An education series to improve health literacy." },
  { icon: <ShieldCheck size={22} />, title: "Advocacy and Policy", text: "Initiatives that aim to improve access to quality, equitable healthcare." },
  { icon: <Stethoscope size={22} />, title: "Healthcare Coverage", text: "Providing access to healthcare coverage for the uninsured." },
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
            In 2020, CBHN like many other nonprofit organizations, was confronted with new challenges, and was impacted by the unprecedented events of 2020: the impact of the Covid-19 pandemic on the Black community, the murder of George Floyd and the emergence of the Black Lives Matter Movement, the recognition of racism as a public health crisis, and the impact of the California wildfires.
          </p>
        </motion.div>

        {/* Response, Recovery, Resilience */}
        <div className="mx-auto mb-14 max-w-3xl space-y-4">
          {[
            { label: "Response", text: "Take key (and immediate) actions to address the current situation. The CBHN Board once again searched for a new Executive Director and was very deliberate, thoughtful, and strategic in seeking the right leadership to lead the organization into the next decade." },
            { label: "Recovery", text: "Seek to rebuild and stabilize the organization to focus on the future and leverage opportunities. Measures were put in place to shore up the organization to carry out its mission and respond to potential opportunities. CBHN rebuilt its staff and organizational capacity to enable it to \"pivot\" strategically to adjust to the impact of Covid-19 and operate in the era of socially distanced outreach and engagement." },
            { label: "Resilience", text: "Seek longer term opportunities and take action to build long-term sustainability. With a new Executive Director hired, CBHN aimed to diversify revenue streams, and cultivate stronger relationships with key stakeholders statewide and nationally." },
          ].map((item) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              animate={headerInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border/60 bg-background p-6"
            >
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-primary mb-2">{item.label}</p>
              <p className="text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>

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
          <p className="text-sm text-muted-foreground mb-5">
            CBHN established a Health Equity Framework, grounded in the belief that health equity is found at the convergence of:
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

        {/* New Vision and Mission */}
        <div className="mx-auto mb-14 max-w-3xl space-y-4">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="rounded-xl border border-border/60 bg-background p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">Vision</p>
            <p className="text-sm leading-relaxed text-foreground">A California where every African American and Black Immigrant has the opportunity to live long healthy lives, free from violence, racism, and health inequities.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45 }} className="rounded-xl border border-border/60 bg-background p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">Mission</p>
            <p className="text-sm leading-relaxed text-foreground">To ensure that all Black Californians, regardless of their education, socio-economic class, zip code, sexual orientation, gender identity, homelessness, or immigration status have access to high quality and equitable primary and behavioral healthcare and avoid un-necessarily succumbing to disease.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="rounded-xl border border-border/60 bg-background p-6">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-secondary mb-2">Who We Are and What We Do</p>
            <p className="text-sm leading-relaxed text-foreground">CBHN is the voice and trusted resource for Black Health Equity in California and conducts outreach, education advocacy/policy, and programmatic work to advance health equity for all Black Californians.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-10 max-w-2xl text-center text-sm font-semibold uppercase tracking-[0.2em] text-muted-foreground"
        >
          Campaign for Black Health Equity: Core Components
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
