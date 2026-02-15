import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Users, Landmark, FileText, HeartHandshake, Stethoscope, Award, DollarSign, Network, ScrollText } from "lucide-react";

const stats = [
  { icon: <Calendar size={22} />, value: 1978, suffix: "", label: "Year Founded", isYear: true },
  { icon: <ScrollText size={22} />, value: 45, suffix: "+", label: "Grant-Funded Programs" },
  { icon: <HeartHandshake size={22} />, value: 12, suffix: "", label: "Major Funders Over 4 Decades" },
  { icon: <Users size={22} />, value: 106000, suffix: "+", label: "Individuals Reached" },
  { icon: <Network size={22} />, value: 95, suffix: "", label: "Organizational Partnerships" },
  { icon: <Landmark size={22} />, value: 100, suffix: "+", label: "Legislative Bills Sponsored or Supported" },
  { icon: <Stethoscope size={22} />, value: 6000, suffix: "+", label: "Enrolled in Health Plans" },
  { icon: <Award size={22} />, value: 700, suffix: "+", label: "Black Health Network Members" },
  { icon: <DollarSign size={22} />, value: 8.3, suffix: "M", prefix: "$", label: "In Grants (1980 to 2020)", isDecimal: true },
  { icon: <FileText size={22} />, value: 4000, suffix: "+", label: "Enrolled in Coverage (2020 to 2024)" },
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
            Executive Summary
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Four Decades at a Glance
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Since 1978, CBHN has been the backbone of Black health equity in California.
            These numbers represent 46 years of outreach, advocacy, partnerships, and
            direct community investment.
          </p>
        </motion.div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, i) => (
            <StatCell key={item.label} item={item} inView={inView} delay={0.1 + i * 0.06} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
