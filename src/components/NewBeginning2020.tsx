import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShieldCheck, Users, Megaphone, Heart, Stethoscope, FileText } from "lucide-react";
import communityLeaders from "@/assets/community-leaders.png";
import FloatingShapes from "./FloatingShapes";

const componentColors = [
  "border-t-4 border-t-primary",
  "border-t-4 border-t-secondary",
  "border-t-4 border-t-accent",
  "border-t-4 border-t-sky-aqua",
  "border-t-4 border-t-gold",
  "border-t-4 border-t-magenta",
];

const iconBgColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
  "bg-magenta text-primary-foreground",
];

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
    <section className="section-padding relative overflow-hidden bg-gradient-to-br from-accent/5 via-background to-primary/5">
      <FloatingShapes variant="circles" className="opacity-40 animate-float" />
      <div className="report-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            A New Beginning
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            2020 to 2024: Response, Recovery, Resilience
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            In 2020, CBHN like many other nonprofit organizations, was confronted with new challenges, and was impacted by the unprecedented events of 2020: the impact of the Covid-19 pandemic on the Black community, the murder of George Floyd and the emergence of the Black Lives Matter Movement, the recognition of racism as a public health crisis, and the impact of the California wildfires.
          </p>
        </motion.div>

        {/* Response, Recovery, Resilience with image */}
        <div className="mx-auto mb-20 max-w-5xl grid gap-8 lg:grid-cols-2">
          <div className="space-y-5">
            {[
              { label: "Response", text: "Take key (and immediate) actions to address the current situation. The CBHN Board once again searched for a new Executive Director and was very deliberate, thoughtful, and strategic in seeking the right leadership to lead the organization into the next decade.", color: "bg-primary text-primary-foreground" },
              { label: "Recovery", text: "Seek to rebuild and stabilize the organization to focus on the future and leverage opportunities. Measures were put in place to shore up the organization to carry out its mission and respond to potential opportunities. CBHN rebuilt its staff and organizational capacity to enable it to \"pivot\" strategically to adjust to the impact of Covid-19 and operate in the era of socially distanced outreach and engagement.", color: "bg-secondary text-secondary-foreground" },
              { label: "Resilience", text: "Seek longer term opportunities and take action to build long-term sustainability. With a new Executive Director hired, CBHN aimed to diversify revenue streams, and cultivate stronger relationships with key stakeholders statewide and nationally.", color: "bg-accent text-accent-foreground" },
            ].map((item) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 15 }}
                animate={headerInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="rounded-2xl bg-card p-7 shadow-lg"
              >
                <span className={`inline-block rounded-full px-4 py-1 text-xs font-black uppercase tracking-wider ${item.color}`}>{item.label}</span>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="overflow-hidden rounded-3xl"
          >
            <img src={communityLeaders} alt="CBHN community leaders" className="w-full h-full object-cover" />
          </motion.div>
        </div>

        {/* Health Equity Framework visual */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={headerInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-20 max-w-3xl rounded-3xl bg-foreground p-10 text-center shadow-2xl"
        >
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-primary-foreground/60 mb-6">
            Health Equity Framework
          </p>
          <p className="text-base text-primary-foreground/70 mb-8">
            CBHN established a Health Equity Framework, grounded in the belief that health equity is found at the convergence of:
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4 text-sm font-bold">
            <span className="rounded-full bg-primary px-6 py-3 text-primary-foreground shadow-lg">Racial Justice</span>
            <span className="text-2xl text-primary-foreground/40">+</span>
            <span className="rounded-full bg-secondary px-6 py-3 text-secondary-foreground shadow-lg">Social Justice</span>
            <span className="text-2xl text-primary-foreground/40">+</span>
            <span className="rounded-full bg-accent px-6 py-3 text-accent-foreground shadow-lg">Environmental Justice</span>
            <span className="text-2xl text-primary-foreground/40">=</span>
            <span className="rounded-full bg-gold px-8 py-3 text-foreground font-black text-lg shadow-lg">Health Equity</span>
          </div>
        </motion.div>

        {/* New Vision and Mission */}
        <div className="mx-auto mb-20 max-w-3xl space-y-6">
          <motion.div initial={{ opacity: 0, y: 15 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.4 }} className="rounded-2xl bg-primary p-8 shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-foreground/80 mb-3">Vision</p>
            <p className="text-base leading-relaxed text-primary-foreground">A California where every African American and Black Immigrant has the opportunity to live long healthy lives, free from violence, racism, and health inequities.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.45 }} className="rounded-2xl bg-secondary p-8 shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-secondary-foreground/80 mb-3">Mission</p>
            <p className="text-base leading-relaxed text-secondary-foreground">To ensure that all Black Californians, regardless of their education, socio-economic class, zip code, sexual orientation, gender identity, homelessness, or immigration status have access to high quality and equitable primary and behavioral healthcare and avoid un-necessarily succumbing to disease.</p>
          </motion.div>
          <motion.div initial={{ opacity: 0, y: 15 }} animate={headerInView ? { opacity: 1, y: 0 } : {}} transition={{ delay: 0.5 }} className="rounded-2xl bg-accent p-8 shadow-lg">
            <p className="text-xs font-black uppercase tracking-[0.2em] text-accent-foreground/80 mb-3">Who We Are and What We Do</p>
            <p className="text-base leading-relaxed text-accent-foreground">CBHN is the voice and trusted resource for Black Health Equity in California and conducts outreach, education advocacy/policy, and programmatic work to advance health equity for all Black Californians.</p>
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={headerInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.4 }}
          className="mx-auto mb-12 max-w-2xl text-center text-sm font-black uppercase tracking-[0.3em] text-muted-foreground"
        >
          Campaign for Black Health Equity: Core Components
        </motion.p>

        <div ref={gridRef} className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {components.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              animate={gridInView ? { opacity: 1, y: 0, scale: 1 } : {}}
              transition={{ duration: 0.6, delay: i * 0.08, ease: [0.25, 0.1, 0.25, 1] }}
              className={`rounded-2xl bg-card p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${componentColors[i]}`}
            >
              <div className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl ${iconBgColors[i]}`}>
                {item.icon}
              </div>
              <h3 className="font-serif text-lg font-bold text-foreground">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewBeginning2020;
