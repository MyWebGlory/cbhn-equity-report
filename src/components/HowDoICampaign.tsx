import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import communityJoy from "@/assets/community-joy.png";
import AnimatedCounter from "./AnimatedCounter";

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
  const imageRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const { scrollYProgress } = useScroll({ target: imageRef, offset: ["start end", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section className="relative overflow-hidden">
      {/* Full-width banner image with parallax */}
      <div ref={imageRef} className="relative h-64 md:h-96 overflow-hidden">
        <motion.img
          style={{ y: imageY }}
          src={communityJoy}
          alt="CBHN community members"
          className="w-full h-[120%] object-cover"
        />
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

            {/* Big animated counters */}
            <div className="grid gap-10 sm:grid-cols-2 mb-16">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-foreground p-10 text-center shadow-xl transition-all"
              >
                <AnimatedCounter value={600} suffix="+" label="Individuals Educated" color="gradient-text-shamrock" />
                <p className="mt-4 text-xs text-primary-foreground/50">HDI Campaign Year 1 (2024)</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={inView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="rounded-3xl bg-foreground p-10 text-center shadow-xl transition-all"
              >
                <AnimatedCounter value={4.8} suffix="/5.0" label="Overall Satisfaction Rating" color="gradient-text-fire" isDecimal />
                <p className="mt-4 text-xs text-primary-foreground/50">Across all webinars and events</p>
              </motion.div>
            </div>

            {/* Topics with hover */}
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
                  <motion.div
                    key={i}
                    whileHover={{ x: 12, backgroundColor: "rgba(0,0,0,0.02)" }}
                    className="flex items-start gap-4 rounded-xl p-2 transition-all cursor-default"
                  >
                    <motion.span
                      whileHover={{ scale: 1.2, rotate: 360 }}
                      transition={{ duration: 0.4 }}
                      className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full text-xs font-black ${topicCircleColors[i]}`}
                    >
                      {i + 1}
                    </motion.span>
                    <p className="text-base font-semibold text-foreground pt-1">{topic}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HowDoICampaign;
