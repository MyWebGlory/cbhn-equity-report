import { useEffect, useState, useRef } from "react";
import { motion, useInView } from "framer-motion";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  color?: string;
  duration?: number;
  isDecimal?: boolean;
}

const AnimatedCounter = ({ value, suffix = "", prefix = "", label, color = "text-primary", duration = 2000, isDecimal = false }: AnimatedCounterProps) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!inView) return;
    const startTime = performance.now();
    const step = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 4);
      const val = eased * value;
      setCount(isDecimal ? Math.round(val * 10) / 10 : Math.round(val));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [inView, value, duration, isDecimal]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, scale: 0.5, y: 30 }}
      animate={inView ? { opacity: 1, scale: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
      className="text-center"
    >
      <p className={`font-serif text-6xl font-black md:text-7xl lg:text-8xl ${color}`}>
        {prefix}{isDecimal ? count.toFixed(1) : count.toLocaleString()}{suffix}
      </p>
      <p className="mt-3 text-sm font-bold uppercase tracking-wider text-muted-foreground">{label}</p>
    </motion.div>
  );
};

export default AnimatedCounter;
