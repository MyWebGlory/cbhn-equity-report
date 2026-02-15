import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const accomplishments = [
  "Grew membership to 700 members as of the end of 2024",
  "Hosted in-person member networking events held in Los Angeles (5), Riverside (1), San Diego (3), Sacramento (1), Fresno (1), and Orange County (1)",
  "Established 11 mentorship pairs",
  "Graduated 37 members from the HEAT program",
  "Record attendance at our member-led healthy aging and behavioral health peer network meetings",
  "Sparked the development of the CBHN Black Health and Wellness Provider Directory",
  "Created the CBHN Black Healthcare Bill of Rights",
  "Spotlighted 22 members in the membership email blog, including individuals, organizations and corporations",
];

const testimonials = [
  {
    quote: "The program was helpful to have me see things from a different perspective to try and find solutions. It also helped me identify valuable training courses to keep progressing my skills. My mentor has been very helpful and we plan to keep in contact.",
    name: "Ivanna Evans",
    role: "Mentee",
  },
  {
    quote: "The mentoring program was a great opportunity to develop my skills as a mentor and guide alongside someone as they achieved their goals. It can be tough to find professional support that centers your voice and experience, so having the opportunity to provide that for someone was a moment of growth and healing for me as well. I recommend diving into the program as a mentor, or mentee, and giving yourself the opportunity for support.",
    name: "Mercedes Samudio",
    role: "Mentor",
  },
  {
    quote: "Working with my mentee was a great experience in knowing that my experiences and access to resources may help someone else be successful in their career. Additionally, it kept me on my toes and helped me think about strategies to ensure my mentee is getting what she needs. I personally learned a lot about myself in this process and really enjoyed it.",
    name: "Stephanie Bryant",
    role: "Mentor",
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
            Established in May 2021, the Black Health Network (BHN) serves as the membership arm of CBHN. This virtual community of like-minded health equity leaders, professionals, policymakers, advocates, individuals, and partners work to ensure that Black Californians live a life free from violence, racism, and health inequities. The statewide network aims to inspire and empower members to advance health equity for Black Californians by offering them opportunities to build their skills and knowledge, expand their networks, engage in advocacy, and stay connected.
          </p>
          <p className="mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Residing in thirty-one counties in California, members are employed by nonprofits, government entities, healthcare organizations, and corporations. Top focus areas include aging, behavioral health, maternal and infant health, and health access/advocacy. BHN members work in various fields, and some professional titles include licensed clinical social worker, nonprofit executive director, chief health equity officer, physician, doula, CEO, medical student, public health director, professor, fitness instructor, and advocate.
          </p>
        </motion.div>

        {/* Accomplishments */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mb-14 max-w-3xl"
        >
          <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            BHN Accomplishments
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
        <p className="mb-5 text-center text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          Member Mentoring Program Testimonials
        </p>
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
