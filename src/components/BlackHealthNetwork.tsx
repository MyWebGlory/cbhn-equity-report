import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, Award, BookOpen, Handshake, FileText } from "lucide-react";

const accomplishments = [
  "13 networking events across 31 counties",
  "11 mentorship pairs matched and active",
  "37 HEAT Program graduates (community health workers)",
  "Provider Directory in development",
  "Black Healthcare Bill of Rights published",
];

const testimonials = [
  {
    quote: "I found my mentor through the Black Health Network. She helped me navigate public health leadership in a way no textbook could. The relationship changed my career trajectory completely.",
    name: "Ivanna Evans",
    role: "BHN Mentee",
  },
  {
    quote: "Being a mentor in the BHN has been one of the most fulfilling experiences of my career. Watching the next generation of Black health leaders find their voice is exactly why this network exists.",
    name: "Mercedes Samudio",
    role: "BHN Mentor",
  },
  {
    quote: "The BHN gave me a community I did not know I needed. As a Black woman in healthcare, having a space where people understand the challenges you face every day is invaluable.",
    name: "Stephanie Bryant",
    role: "BHN Member",
  },
];

const BlackHealthNetwork = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section id="network" className="section-padding bg-muted/50">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Black Health Network
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            700+ Members Across 31 Counties
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            The Black Health Network connects healthcare professionals, community health workers,
            policy advocates, researchers, and students in a statewide community of practice
            dedicated to advancing Black health equity.
          </p>
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-14 max-w-2xl"
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            Key Accomplishments
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {accomplishments.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={headerInView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.4 + i * 0.06 }}
                className="flex items-start gap-3 rounded-lg border border-border/60 bg-card px-4 py-3"
              >
                <div className="mt-0.5 h-2 w-2 shrink-0 rounded-full bg-primary" />
                <p className="text-sm text-muted-foreground">{item}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div ref={gridRef} className="grid gap-6 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="rounded-xl border border-border/60 bg-card p-6 border-l-2 border-l-primary/20"
            >
              <p className="text-sm italic leading-[1.7] text-foreground/80">
                "{t.quote}"
              </p>
              <div className="mt-4 border-t border-border pt-3">
                <p className="text-sm font-semibold text-foreground">{t.name}</p>
                <p className="text-xs text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackHealthNetwork;
