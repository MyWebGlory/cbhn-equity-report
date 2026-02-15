import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const webinarTopics = [
  "How do I navigate the healthcare system?",
  "How do I talk to my doctor about my concerns?",
  "How do I find a provider who understands my experience?",
  "How do I manage a chronic condition day to day?",
  "How do I access mental health services?",
  "How do I enroll in health coverage?",
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
              Developed in response to the California Health Care Foundation's "Listening to
              Black Californians" study, this campaign addresses the health literacy gap with
              practical, culturally competent education delivered through community webinars
              and in-person workshops.
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
                Year 1 Results
              </p>
              <div className="space-y-4">
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">600</p>
                  <p className="text-sm text-muted-foreground">Individuals educated</p>
                </div>
                <div className="h-px bg-border" />
                <div>
                  <p className="font-serif text-3xl font-bold text-primary">4.8<span className="text-lg text-muted-foreground"> / 5.0</span></p>
                  <p className="text-sm text-muted-foreground">Participant satisfaction rating</p>
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
                Webinar Topics
              </p>
              <div className="space-y-3">
                {webinarTopics.map((topic, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-secondary" />
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
