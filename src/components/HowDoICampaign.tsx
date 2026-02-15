import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import communityJoy from "@/assets/community-joy.png";

const webinarTopics = [
  "Know Your Patient Rights",
  "Communicating with your Healthcare Provider",
  "Navigating the Healthcare System",
  "Advocating for Yourself And Your Loved Ones",
  "Participating in the Decision-Making For Your Care",
];

const topicCircleColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
];

const HowDoICampaign = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="relative overflow-hidden">
      {/* Full-width banner image */}
      <div className="relative h-64 md:h-96 overflow-hidden">
        <img src={communityJoy} alt="CBHN community members" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-card" />
      </div>

      <div className="section-padding bg-card -mt-20 relative z-10 pt-10">
        <div className="report-container">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 40 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
            className="mx-auto max-w-4xl"
          >
            <div className="text-center mb-20">
              <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
                Health Education
              </p>
              <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
                The "How Do I..." Campaign
              </h2>
              <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
                The "Listening to Black Californians" study by the California Health Care Foundation (CHCF) highlights Black Californians' active efforts to pursue good health and their desire for a healthcare system that fully supports them. Findings show that Black Californians are proactive about their health -- they have insurance, get preventive screenings, prepare for doctor visits, and monitor their health -- yet they seek a healthcare system that meets them halfway in their commitment to well-being.
              </p>
              <p className="mt-5 text-lg leading-[1.8] text-muted-foreground md:text-xl">
                These findings informed CBHN's "How Do I..." (HDI) Campaign, supported by the California Health Care Foundation. The Campaign aims to empower Black Californians with information and resources needed to navigate the healthcare system, advocate for friends, family, and themselves.
              </p>
            </div>

            <div className="grid gap-10 md:grid-cols-2">
              {/* Results card */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.3 }}
                className="rounded-2xl bg-foreground p-8 shadow-xl"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-primary-foreground/60 mb-6">
                  HDI Campaign Results and Impact, Year 1 (2024)
                </p>
                <p className="text-sm leading-relaxed text-primary-foreground/70 mb-6">
                  During the first year, CBHN hosted a webinar series, in-person community conversations events, and community outreach efforts to help Black Californians better understand how to make the healthcare system work better for them.
                </p>
                <div className="space-y-5">
                  <div>
                    <p className="font-serif text-5xl font-black gradient-text-shamrock">600+</p>
                    <p className="text-sm text-primary-foreground/60">Individuals educated</p>
                  </div>
                  <div className="h-px bg-primary-foreground/10" />
                  <div>
                    <p className="font-serif text-5xl font-black gradient-text-fire">4.8<span className="text-lg text-primary-foreground/40"> / 5.0</span></p>
                    <p className="text-sm text-primary-foreground/60">Overall satisfaction rating</p>
                  </div>
                </div>
              </motion.div>

              {/* Topics */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.4 }}
                className="rounded-2xl bg-background p-8 shadow-lg border-t-4 border-t-sky-aqua"
              >
                <p className="text-xs font-black uppercase tracking-[0.2em] text-muted-foreground mb-6">
                  Webinar Series Topics
                </p>
                <div className="space-y-4">
                  {webinarTopics.map((topic, i) => (
                    <div key={i} className="flex items-start gap-4">
                      <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${topicCircleColors[i]}`}>{i + 1}</span>
                      <p className="text-base font-semibold text-foreground pt-1">{topic}</p>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowDoICampaign;
