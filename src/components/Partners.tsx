import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const partners = [
  { name: "The California Endowment", type: "Foundation" },
  { name: "Blue Shield of California Foundation", type: "Foundation" },
  { name: "Kaiser Permanente", type: "Health System" },
  { name: "Covered California", type: "State Agency" },
  { name: "California Department of Public Health", type: "State Agency" },
  { name: "California Legislative Black Caucus", type: "Legislature" },
  { name: "National Medical Association", type: "Professional Org" },
  { name: "UCLA Center for Health Policy Research", type: "Research" },
  { name: "Alameda County Public Health Department", type: "County" },
  { name: "Los Angeles County Department of Health Services", type: "County" },
  { name: "Charity Navigator", type: "Rating Body" },
  { name: "RPMNational", type: "Strategic Partner" },
];

const Partners = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding bg-card">
      <div className="report-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Our Partners
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Who We Work With
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            None of this work happens alone. CBHN partners with state agencies, health systems,
            research institutions, and community organizations to get results. These are some
            of the organizations that stood beside us in 2024.
          </p>
        </motion.div>

        <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.15 + i * 0.05, ease: [0.25, 0.1, 0.25, 1] }}
              className="rounded-lg border border-border/60 bg-background px-5 py-4 hover:border-l-2 hover:border-l-accent/25 transition-all duration-300"
            >
              <p className="text-sm font-medium text-foreground">{partner.name}</p>
              <p className="mt-1 text-[11px] uppercase tracking-wider text-muted-foreground">
                {partner.type}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;
