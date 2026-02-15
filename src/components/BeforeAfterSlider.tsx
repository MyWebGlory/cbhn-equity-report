import { useState, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { ArrowLeftRight, MousePointerClick } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeTitle: string;
  beforeItems: string[];
  afterTitle: string;
  afterItems: string[];
  label?: string;
}

const BeforeAfterSlider = ({ beforeTitle, beforeItems, afterTitle, afterItems, label = "Then vs. Now" }: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const containerRef = useRef<HTMLDivElement>(null);
  const inView = useInView(containerRef, { once: true, margin: "-60px" });

  const handleMove = (clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const pct = Math.max(5, Math.min(95, (x / rect.width) * 100));
    setPosition(pct);
  };

  return (
    <motion.div
      ref={containerRef}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
      className="mx-auto max-w-4xl"
    >
      {/* Big CTA arrow */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ delay: 0.4 }}
        className="mb-8 flex items-center justify-center gap-4"
      >
        <motion.div
          animate={{ x: [-5, 5, -5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowLeftRight size={32} className="text-secondary" />
        </motion.div>
        <div className="text-center">
          <p className="text-sm font-black uppercase tracking-[0.3em] text-secondary flex items-center gap-2">
            <MousePointerClick size={16} />
            Drag to compare: {label}
          </p>
          <p className="text-xs text-muted-foreground mt-1">Slide left and right to explore</p>
        </div>
        <motion.div
          animate={{ x: [5, -5, 5] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
        >
          <ArrowLeftRight size={32} className="text-secondary" />
        </motion.div>
      </motion.div>

      <div
        className="relative h-auto min-h-[320px] rounded-3xl overflow-hidden shadow-2xl select-none cursor-col-resize"
        onMouseMove={(e) => handleMove(e.clientX)}
        onTouchMove={(e) => handleMove(e.touches[0].clientX)}
      >
        {/* Before side */}
        <div className="absolute inset-0 bg-accent p-8 md:p-12">
          <p className="text-xs font-black uppercase tracking-[0.3em] text-accent-foreground/60 mb-4">{beforeTitle}</p>
          <div className="space-y-3">
            {beforeItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-accent-foreground/40" />
                <p className="text-sm text-accent-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* After side (clips) */}
        <div
          className="absolute inset-0 bg-primary p-8 md:p-12"
          style={{ clipPath: `inset(0 0 0 ${position}%)` }}
        >
          <p className="text-xs font-black uppercase tracking-[0.3em] text-primary-foreground/60 mb-4">{afterTitle}</p>
          <div className="space-y-3">
            {afterItems.map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <span className="mt-1 h-2 w-2 shrink-0 rounded-full bg-primary-foreground/40" />
                <p className="text-sm text-primary-foreground/90">{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Slider handle */}
        <div
          className="absolute top-0 bottom-0 z-10 flex items-center"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="h-full w-1 bg-primary-foreground shadow-lg" />
          <div className="absolute top-1/2 -translate-y-1/2 flex h-12 w-12 items-center justify-center rounded-full bg-primary-foreground shadow-xl">
            <ArrowLeftRight size={20} className="text-foreground" />
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BeforeAfterSlider;
