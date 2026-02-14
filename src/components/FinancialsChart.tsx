import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Community Health Programs", value: 45, color: "hsl(180, 45%, 28%)" },
  { name: "Policy & Advocacy", value: 20, color: "hsl(28, 55%, 52%)" },
  { name: "Education & Outreach", value: 15, color: "hsl(270, 20%, 38%)" },
  { name: "Research & Data", value: 10, color: "hsl(180, 30%, 50%)" },
  { name: "Operations & Admin", value: 10, color: "hsl(220, 10%, 75%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
      <p className="text-sm font-medium text-foreground">{payload[0].name}</p>
      <p className="text-xl font-bold text-primary">{payload[0].value}%</p>
    </div>
  );
};

const FinancialsChart = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="financials" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mb-14 text-center"
        >
          <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
            Financial Transparency
          </p>
          <h2 className="font-serif text-3xl font-semibold text-foreground md:text-4xl lg:text-5xl">
            Where Your Donations Go
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center"
        >
          <div className="h-72 w-72 md:h-80 md:w-80">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={120}
                  paddingAngle={2}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.35}
                      style={{ transition: "opacity 0.3s", cursor: "pointer" }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-3">
            {data.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center gap-3 cursor-pointer rounded-lg px-3 py-2 transition-colors hover:bg-muted/50"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className="h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm text-foreground">{item.name}</span>
                <span className="ml-auto text-sm font-semibold text-muted-foreground">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.6 }}
          className="mt-10 flex justify-center"
        >
          <a
            href="https://charitynavigator.org/ein/953794688"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[13px] text-muted-foreground transition-colors hover:text-foreground"
          >
            ★★★★ Charity Navigator — Four Star Rated
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialsChart;
