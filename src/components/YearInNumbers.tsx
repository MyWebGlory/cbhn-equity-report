import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const counters = [
  { value: 58, suffix: "", label: "Counties Reached", subtitle: "100% Statewide Coverage" },
  { value: 42000, suffix: "+", label: "People Screened or Served" },
  { value: 86, suffix: "", label: "Community Health Workers Trained" },
  { value: 14, suffix: "", label: "Policy Recommendations Published" },
  { value: 12, suffix: "M", prefix: "$", label: "State Funding Secured" },
  { value: 23, suffix: "", label: "Community Events Hosted" },
];

function useCounter(target: number, active: boolean, duration = 1800) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start = 0;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return count;
}

const CounterCell = ({ item, inView, delay }: { item: typeof counters[0]; inView: boolean; delay: number }) => {
  const count = useCounter(item.value, inView);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      <p className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-6xl">
        {item.prefix || ""}{count.toLocaleString()}{item.suffix}
      </p>
      <p className="mt-3 text-sm font-medium tracking-wide text-muted-foreground">
        {item.label}
      </p>
      {item.subtitle && (
        <p className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-secondary">
          {item.subtitle}
        </p>
      )}
    </motion.div>
  );
};

const YearInNumbers = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section className="section-padding bg-gradient-to-b from-muted/50 to-muted/30">
      <div className="report-container">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-16 max-w-3xl text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            2024 at a Glance
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            The Year in Numbers
          </h2>
          <p className="mt-6 text-base leading-[1.8] text-muted-foreground md:text-lg">
            Every number here represents hours spent in communities, doors knocked on,
            policies drafted, and lives changed. This is what 2024 looked like for CBHN.
          </p>
        </motion.div>

        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {counters.map((item, i) => (
            <CounterCell key={item.label} item={item} inView={inView} delay={0.15 + i * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default YearInNumbers;
