import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Calendar, Users, Landmark, FileText, HeartHandshake, Stethoscope, Award, DollarSign, Network, ScrollText } from "lucide-react";
import FloatingShapes from "./FloatingShapes";
import RevealCard from "./RevealCard";

const paletteColors = [
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
  "bg-primary text-primary-foreground",
  "bg-secondary text-secondary-foreground",
  "bg-accent text-accent-foreground",
  "bg-sky-aqua text-foreground",
  "bg-gold text-foreground",
];

const stats = [
  { icon: <Calendar size={26} />, value: 1978, suffix: "", label: "Year Founded", isYear: true },
  { icon: <ScrollText size={26} />, value: 45, suffix: "+", label: "Grant-Funded Programs Reviewed" },
  { icon: <HeartHandshake size={26} />, value: 12, suffix: "", label: "Major Funders Over 4 Decades" },
  { icon: <Users size={26} />, value: 106000, suffix: "+", label: "Individuals Reached via Convenings, Conferences, Webinars, and Forums" },
  { icon: <Network size={26} />, value: 95, suffix: "", label: "Organizational Partnerships Created" },
  { icon: <Landmark size={26} />, value: 100, suffix: "+", label: "Legislative Bills Sponsored, Co-Sponsored, or Supported" },
  { icon: <Stethoscope size={26} />, value: 6000, suffix: "+", label: "Individuals Enrolled in Qualified Health Plans Since 2014" },
  { icon: <Award size={26} />, value: 700, suffix: "+", label: "Black Health Network Members" },
  { icon: <DollarSign size={26} />, value: 8.3, suffix: "M", prefix: "$", label: "In Grants (1980 to 2020)", isDecimal: true },
  { icon: <FileText size={26} />, value: 206, suffix: "+", label: "Meetings, Events and Conferences Hosted, Attended, or Participated In" },
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

const StatCell = ({ item, inView, delay, colorClass }: { item: typeof stats[0]; inView: boolean; delay: number; colorClass: string }) => {
  const count = useCounter(item.value, inView, item.isDecimal);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      animate={inView ? { opacity: 1, y: 0, scale: 1 } : {}}
      transition={{ duration: 0.6, delay, ease: [0.25, 0.1, 0.25, 1] }}
      whileHover={{ scale: 1.08, rotate: 1, boxShadow: "0 20px 50px -10px rgba(0,0,0,0.3)" }}
      className={`flex flex-col items-center text-center rounded-2xl p-8 ${colorClass} shadow-lg transition-all duration-300 cursor-pointer`}
    >
      <motion.div className="mb-4 opacity-80" whileHover={{ rotate: 360 }} transition={{ duration: 0.6 }}>
        {item.icon}
      </motion.div>
      <p className="font-serif text-4xl font-black md:text-5xl">
        {item.prefix || ""}{item.isYear ? item.value : (item.isDecimal ? count.toFixed(1) : count.toLocaleString())}{item.suffix}
      </p>
      <div className="mx-auto mt-3 h-px w-10 bg-current opacity-30" />
      <p className="mt-3 text-xs font-semibold tracking-wide opacity-90">
        {item.label}
      </p>
    </motion.div>
  );
};

const ExecutiveSummary = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section id="executive-summary" className="section-padding relative overflow-hidden bg-foreground">
      <FloatingShapes variant="rings" className="opacity-30" />
      <div className="report-container relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Results and Impact
          </p>
          <h2 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-7xl">
            Snapshot Since CBHN Inception
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-primary-foreground/70 md:text-xl">
            Between 1980 and the end of 2020, CBHN established relationships with 12 major funders: The California Endowment, The California Wellness Foundation, California Pan-Ethnic Health Network, Astra Zeneca, Glaxo Smith Kline, Health Net, The Pfizer Foundation, The Kaiser Foundation, SAMHSA, Sierra Health Foundation, California Health Care Foundation, and Charles Drew University, to implement 17 grants and one research project for just under $8.3M.
          </p>
        </motion.div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
          {stats.map((item, i) => (
            <StatCell key={item.label} item={item} inView={inView} delay={0.1 + i * 0.06} colorClass={paletteColors[i]} />
          ))}
        </div>

        {/* Interactive reveal card */}
        <div className="mt-20">
          <RevealCard
            teaser="What does 4 decades of health equity work really look like?"
            ctaText="Tap to see the full picture"
            color="bg-accent"
            revealContent={
              <p>
                Over the past four decades, CBHN has worked diligently to eradicate the persistent health disparities that have plagued Black Californians and has consistently focused on community engagement, education, partnerships, and advocating for legislation to increase access to quality healthcare. As the only Black-led, statewide organization that works to advance health equity for all Black Californians, CBHN is well positioned to leverage the successes over the past four decades to have even greater impact in the decades to come on a statewide basis.
              </p>
            }
          />
        </div>
      </div>
    </section>
  );
};

export default ExecutiveSummary;
