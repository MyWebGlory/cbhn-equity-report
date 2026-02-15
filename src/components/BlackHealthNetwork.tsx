import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityMen from "@/assets/community-men.png";
import FloatingShapes from "./FloatingShapes";
import RevealCard from "./RevealCard";

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

const dotColors = [
  "bg-primary",
  "bg-secondary",
  "bg-accent",
  "bg-sky-aqua",
  "bg-gold",
  "bg-magenta",
  "bg-primary",
  "bg-secondary",
];

const testimonials = [
  {
    quote: "The program was helpful to have me see things from a different perspective to try and find solutions. It also helped me identify valuable training courses to keep progressing my skills. My mentor has been very helpful and we plan to keep in contact.",
    name: "Ivanna Evans",
    role: "Mentee",
    color: "border-t-4 border-t-primary",
  },
  {
    quote: "The mentoring program was a great opportunity to develop my skills as a mentor and guide alongside someone as they achieved their goals. It can be tough to find professional support that centers your voice and experience, so having the opportunity to provide that for someone was a moment of growth and healing for me as well. I recommend diving into the program as a mentor, or mentee, and giving yourself the opportunity for support.",
    name: "Mercedes Samudio",
    role: "Mentor",
    color: "border-t-4 border-t-secondary",
  },
  {
    quote: "Working with my mentee was a great experience in knowing that my experiences and access to resources may help someone else be successful in their career. Additionally, it kept me on my toes and helped me think about strategies to ensure my mentee is getting what she needs. I personally learned a lot about myself in this process and really enjoyed it.",
    name: "Stephanie Bryant",
    role: "Mentor",
    color: "border-t-4 border-t-accent",
  },
];

const BlackHealthNetwork = () => {
  const headerRef = useRef(null);
  const gridRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const gridInView = useInView(gridRef, { once: true, margin: "-40px" });

  return (
    <section id="network" className="section-padding relative overflow-hidden bg-muted/30">
      <FloatingShapes variant="circles" className="opacity-40" />
      <div className="report-container relative z-10">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Black Health Network
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            <span className="gradient-text-shamrock">700+</span> Members Across 31 Counties
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            Established in May 2021, the Black Health Network (BHN) serves as the membership arm of CBHN. This virtual community of like-minded health equity leaders, professionals, policymakers, advocates, individuals, and partners work to ensure that Black Californians live a life free from violence, racism, and health inequities. The statewide network aims to inspire and empower members to advance health equity for Black Californians by offering them opportunities to build their skills and knowledge, expand their networks, engage in advocacy, and stay connected.
          </p>
          <p className="mt-5 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            Residing in thirty-one counties in California, members are employed by nonprofits, government entities, healthcare organizations, and corporations. Top focus areas include aging, behavioral health, maternal and infant health, and health access/advocacy. BHN members work in various fields, and some professional titles include licensed clinical social worker, nonprofit executive director, chief health equity officer, physician, doula, CEO, medical student, public health director, professor, fitness instructor, and advocate.
          </p>
        </motion.div>

        {/* Accomplishments with image */}
        <div className="mx-auto mb-20 max-w-5xl grid gap-10 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={headerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <p className="mb-6 text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
              BHN Accomplishments
            </p>
            <div className="space-y-4">
              {accomplishments.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={headerInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.4 + i * 0.06 }}
                  whileHover={{ x: 4 }}
                  className="flex items-start gap-3 rounded-xl bg-card px-5 py-4 shadow-md transition-all"
                >
                  <motion.div
                    whileHover={{ scale: 1.15 }}
                    className={`mt-1 h-3 w-3 shrink-0 rounded-full ${dotColors[i]}`}
                  />
                  <p className="text-sm text-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={headerInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{ scale: 1.01 }}
            className="overflow-hidden rounded-3xl"
          >
            <img src={communityMen} alt="CBHN community members" className="w-full h-full object-cover transition-transform duration-500 hover:scale-105" />
          </motion.div>
        </div>

        {/* Interactive reveal for member details */}
        <div className="mx-auto mb-16 max-w-3xl">
          <RevealCard
            teaser="What kind of impact has the mentoring program had on members?"
            ctaText="Click to read member testimonials"
            color="bg-primary"
            revealContent={
              <div className="space-y-6">
                {testimonials.map((t) => (
                  <div key={t.name}>
                    <p className="italic leading-[1.8] opacity-90">"{t.quote}"</p>
                    <p className="mt-2 text-sm font-bold">{t.name}, {t.role}</p>
                  </div>
                ))}
              </div>
            }
          />
        </div>

        {/* Testimonials */}
        <p className="mb-8 text-center text-sm font-black uppercase tracking-[0.2em] text-muted-foreground">
          Member Mentoring Program Testimonials
        </p>
        <div ref={gridRef} className="grid gap-8 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              animate={gridInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -4, boxShadow: "0 12px 24px -8px rgba(0,0,0,0.08)" }}
              className={`rounded-2xl bg-card p-8 shadow-lg transition-all ${t.color}`}
            >
              <p className="text-base italic leading-[1.8] text-foreground/80">
                "{t.quote}"
              </p>
              <div className="mt-5 border-t border-border pt-4">
                <p className="text-sm font-bold text-foreground">{t.name}</p>
                <p className="text-xs font-semibold text-muted-foreground">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlackHealthNetwork;
