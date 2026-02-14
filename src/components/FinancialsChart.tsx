import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Community Health Programs", value: 45, color: "hsl(212, 100%, 20%)" },
  { name: "Policy & Advocacy", value: 20, color: "hsl(356, 85%, 47%)" },
  { name: "Education & Outreach", value: 15, color: "hsl(212, 80%, 35%)" },
  { name: "Research & Data", value: 10, color: "hsl(356, 65%, 60%)" },
  { name: "Operations & Admin", value: 10, color: "hsl(210, 20%, 75%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-lg border border-border bg-card px-4 py-3 shadow-lg">
      <p className="text-sm font-semibold text-foreground">{payload[0].name}</p>
      <p className="text-2xl font-bold text-primary">{payload[0].value}%</p>
    </div>
  );
};

const FinancialsChart = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="financials" className="section-padding bg-card" ref={ref}>
      <div className="report-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary">
            Financial Transparency
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-5xl">
            Where Your Donations Go
          </h2>
          <div className="mx-auto mt-6 h-1 w-16 rounded-full bg-secondary" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center gap-12 lg:flex-row lg:justify-center"
        >
          {/* Chart */}
          <div className="h-80 w-80 md:h-96 md:w-96">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={70}
                  outerRadius={140}
                  paddingAngle={3}
                  dataKey="value"
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                  stroke="none"
                >
                  {data.map((entry, index) => (
                    <Cell
                      key={entry.name}
                      fill={entry.color}
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.4}
                      style={{ transition: "opacity 0.3s", cursor: "pointer" }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Legend */}
          <div className="flex flex-col gap-4">
            {data.map((item, i) => (
              <div
                key={item.name}
                className="flex items-center gap-3 cursor-pointer"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className="h-4 w-4 rounded-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-sm font-medium text-foreground">{item.name}</span>
                <span className="ml-auto text-sm font-bold text-muted-foreground">
                  {item.value}%
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialsChart;
