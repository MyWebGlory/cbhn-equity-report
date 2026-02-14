import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Activity, Heart, Baby, Scale } from "lucide-react";

interface StatCardProps {
  icon: React.ReactNode;
  stat: string;
  label: string;
  description: string;
  delay: number;
}

const useCountUp = (end: number, inView: boolean, duration = 2000) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const step = end / (duration / 16);
    const timer = setInterval(() => {
      start += step;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);
    return () => clearInterval(timer);
  }, [end, inView, duration]);
  return count;
};

const StatCard = ({ icon, stat, label, description, delay }: StatCardProps) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay }}
      className="group relative overflow-hidden rounded-2xl border border-border bg-card p-8 transition-shadow duration-300 hover:shadow-xl"
    >
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-accent text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
        {icon}
      </div>
      <p className="font-serif text-4xl font-bold text-foreground md:text-5xl">{stat}</p>
      <p className="mt-2 text-sm font-semibold uppercase tracking-wider text-secondary">
        {label}
      </p>
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
      {/* Decorative accent */}
      <div className="absolute bottom-0 left-0 h-1 w-0 bg-secondary transition-all duration-500 group-hover:w-full" />
    </motion.div>
  );
};

const stats = [
  {
    icon: <Activity size={28} />,
    stat: "260%",
    label: "Asthma ER Visits",
    description:
      "Black Californians experience a 260% higher emergency visit rate for asthma compared to other populations.",
  },
  {
    icon: <Heart size={28} />,
    stat: "15%",
    label: "Diabetes Rate",
    description:
      "An alarming 15% diabetes rate among Black Californians demands urgent, culturally responsive interventions.",
  },
  {
    icon: <Baby size={28} />,
    stat: "3-4x",
    label: "Maternal Crisis",
    description:
      "Black mothers face 3–4 times higher maternal mortality rates — our maternal health programs address this crisis head on.",
  },
  {
    icon: <Scale size={28} />,
    stat: "36%",
    label: "Obesity Rates",
    description:
      "Disproportionate obesity rates at 36% drive chronic disease in Black communities across California.",
  },
];

const ImpactStats = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="impact" className="section-padding bg-background" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            The Disparities
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Why This Work Matters
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} {...s} delay={i * 0.15} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
