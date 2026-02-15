import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const webinarTopics = [
  "Know Your Patient Rights",
  "Communicating with your Healthcare Provider",
  "Navigating the Healthcare System",
  "Advocating for Yourself And Your Loved Ones",
  "Participating in the Decision-Making For Your Care",
];

const HowDoICampaign = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding bg-muted/50">
      <div className="report-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto max-w-4xl"
        >
          <div className="text-center mb-14">
            <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
              Health Education
            </p>
            <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
              The "How Do I..." Campaign
            </h2>
            <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
              The "Listening to Black Californians" study by the California Health Care Foundation (CHCF) highlights Black Californians' active efforts to pursue good health and their desire for a healthcare system that fully supports them. Findings show that Black Californians are proactive about their health -- they have insurance, get preventive screenings, prepare for doctor visits, and monitor their health -- yet they seek a healthcare system that meets them halfway in their commitment to well-being.
            </p>
            <p className="mt-4 text-base leading-[1.8] text-muted-foreground md:text-lg">
              These findings informed CBHN's "How Do I..." (HDI) Campaign, supported by the California Health Care Foundation. The Campaign aims to empower Black Californians with information and resources needed to navigate the healthcare system, advocate for friends, family, and themselves.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Results card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.3 }}
              className="rounded-xl border border-border/60 bg-card p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
                HDI Campaign Results and Impact, Year 1 (2024)
              </p>
              <p className="text-sm leading-relaxed text-muted-foreground mb-4">
                During the first year, CBHN hosted a webinar series, in-person community conversations events, and community outreach efforts to help Black Californians better understand how to make the healthcare system work better for them.
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">600+</p>
                  <p className="text-sm text-muted-foreground">Individuals educated</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">4.8<span className="text-lg text-muted-foreground"> / 5.0</span></p>
                  <p className="text-sm text-muted-foreground">Overall satisfaction rating</p>
                </div>
              </div>
            </motion.div>

            {/* Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.4 }}
              className="rounded-xl border border-border/60 bg-card p-7"
            >
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground mb-5">
                Webinar Series Topics
              </p>
              <div className="space-y-3">
                {webinarTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="mt-1 text-xs font-bold text-primary">{i + 1}.</span>
                    <p className="text-sm text-foreground">{topic}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowDoICampaign;
