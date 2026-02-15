import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Users, Landmark, FileText, HeartHandshake, Stethoscope, Award, DollarSign, Network, ScrollText } from "lucide-react";

const stats = [
  { icon: <Calendar size={22} />, value: 1978, suffix: "", label: "Year Founded", isYear: true },
  { icon: <ScrollText size={22} />, value: 45, suffix: "+", label: "Grant-Funded Programs Reviewed" },
  { icon: <HeartHandshake size={22} />, value: 12, suffix: "", label: "Major Funders Over 4 Decades" },
  { icon: <Users size={22} />, value: 106000, suffix: "+", label: "Individuals Reached via Convenings, Conferences, Webinars, and Forums" },
  { icon: <Network size={22} />, value: 95, suffix: "", label: "Organizational Partnerships Created" },
  { icon: <Landmark size={22} />, value: 100, suffix: "+", label: "Legislative Bills Sponsored, Co-Sponsored, or Supported" },
  { icon: <Stethoscope size={22} />, value: 6000, suffix: "+", label: "Individuals Enrolled in Qualified Health Plans Since 2014" },
  { icon: <Award size={22} />, value: 700, suffix: "+", label: "Black Health Network Members" },
  { icon: <DollarSign size={22} />, value: 8.3, suffix: "M", prefix: "$", label: "In Grants (1980 to 2020)", isDecimal: true },
  { icon: <FileText size={22} />, value: 206, suffix: "+", label: "Meetings, Events and Conferences Hosted, Attended, or Participated In" },
];

function useCounter(target: number, active: boolean, isDecimal = false, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = eased * target;
      setCount(isDecimal ? Math.round(val * 10) / 10 : Math.round(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration, isDecimal]);
  return count;
}

const StatCell = ({ item, inView, delay }: { item: typeof stats[0]; inView: boolean; delay: number }) => {
  const count = useCounter(item.value, inView, item.isDecimal);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="flex flex-col items-center text-center rounded-xl border border-border/60 bg-card p-6 hover:border-primary/30 transition-all duration-300"
    >
      <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-full bg-primary/10 text-primary">
        {item.icon}
      </div>
      <p className="font-serif text-3xl font-bold text-foreground md:text-4xl">
        {item.prefix || ""}{item.isYear ? item.value : (item.isDecimal ? count.toFixed(1) : count.toLocaleString())}{item.suffix}
      </p>
      <div className="mx-auto mt-2 h-px w-8 bg-secondary/20" />
      <p className="mt-2 text-xs font-medium tracking-wide text-muted-foreground">
        {item.label}
      </p>
    </motion.div>
  );
};

const ExecutiveSummary = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="executive-summary" className="section-padding bg-gradient-to-b from-muted/50 to-muted/30">
      <div className="report-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Results and Impact
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Snapshot Since CBHN Inception
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Between 1980 and the end of 2020, CBHN established relationships with 12 major funders: The California Endowment, The California Wellness Foundation, California Pan-Ethnic Health Network, Astra Zeneca, Glaxo Smith Kline, Health Net, The Pfizer Foundation, The Kaiser Foundation, SAMHSA, Sierra Health Foundation, California Health Care Foundation, and Charles Drew University, to implement 17 grants and one research project for just under $8.3M.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, i) => (
            <StatCell key={item.label} item={item} inView={inView} delay={0.1 + i * 0.06} />
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
          className="mx-auto mt-10 max-w-3xl text-center text-base leading-[1.8] text-muted-foreground"
        >
          Over the past four decades, CBHN has worked diligently to eradicate the persistent health disparities that have plagued Black Californians and has consistently focused on community engagement, education, partnerships, and advocating for legislation to increase access to quality healthcare. As the only Black-led, statewide organization that works to advance health equity for all Black Californians, CBHN is well positioned to leverage the successes over the past four decades to have even greater impact in the decades to come on a statewide basis.
        </motion.p>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
