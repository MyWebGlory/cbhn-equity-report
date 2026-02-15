import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Community Health Programs", value: 45, color: "hsl(150, 47%, 38%)" },
  { name: "Policy and Advocacy", value: 20, color: "hsl(13, 88%, 52%)" },
  { name: "Education and Outreach", value: 15, color: "hsl(216, 100%, 26%)" },
  { name: "Research and Data", value: 10, color: "hsl(192, 100%, 48%)" },
  { name: "Operations and Admin", value: 10, color: "hsl(42, 92%, 56%)" },
];

const CustomTooltip = ({ active, payload }: any) => {
  if (!active || !payload?.length) return null;
  return (
    <div className="rounded-xl border border-border bg-card px-5 py-4 shadow-xl">
      <p className="text-sm font-bold text-foreground">{payload[0].name}</p>
      <p className="text-2xl font-black text-primary">{payload[0].value}%</p>
    </div>
  );
};

const FinancialsChart = () => {
  const headerRef = useRef(null);
  const chartRef = useRef(null);
  const headerInView = useInView(headerRef, { once: true, margin: "-60px" });
  const chartInView = useInView(chartRef, { once: true, margin: "-40px" });
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <section id="financials" className="section-padding bg-card">
      <div className="report-container">
        <motion.div
          ref={headerRef}
          initial={{ opacity: 0, y: 40 }}
          animate={headerInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >
          <p className="mb-6 text-[13px] font-bold uppercase tracking-[0.3em] text-secondary">
            Financial Transparency
          </p>
          <h2 className="font-serif text-4xl font-bold text-foreground md:text-5xl lg:text-7xl">
            Where Your Donations Go
          </h2>
          <p className="mt-8 text-lg leading-[1.8] text-muted-foreground md:text-xl">
            CBHN holds a Charity Navigator Four Star rating. We publish exactly how every
            dollar is spent because donors deserve to know. In 2024, 90% of all funds went
            directly to programs, advocacy, and community education.
          </p>
        </motion.div>

        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 30, scale: 0.97 }}
          animate={chartInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.1, 0.25, 1] }}
          className="flex flex-col items-center gap-14 lg:flex-row lg:justify-center"
        >
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
                      opacity={activeIndex === null || activeIndex === index ? 1 : 0.35}
                      style={{ transition: "opacity 0.3s", cursor: "pointer" }}
                    />
                  ))}
                </Pie>
                <Tooltip content={<CustomTooltip />} />
              </PieChart>
            </ResponsiveContainer>
          </div>

          <div className="flex flex-col gap-4">
            {data.map((item, i) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, x: 20 }}
                animate={chartInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
                className="flex items-center gap-4 cursor-pointer rounded-xl px-4 py-3 transition-all hover:bg-muted/50 hover:shadow-md"
                onMouseEnter={() => setActiveIndex(i)}
                onMouseLeave={() => setActiveIndex(null)}
              >
                <div
                  className="h-5 w-5 rounded-lg shadow-sm"
                  style={{ backgroundColor: item.color }}
                />
                <span className="text-base font-semibold text-foreground">{item.name}</span>
                <span className="ml-auto text-base font-black text-muted-foreground">
                  {item.value}%
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={chartInView ? { opacity: 1 } : {}}
          transition={{ delay: 0.8 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="https://charitynavigator.org/ein/953794688"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
          >
            Charity Navigator Four Star Rated, 2025
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinancialsChart;
