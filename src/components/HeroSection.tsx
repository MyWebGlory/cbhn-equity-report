import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import heroCommunity from "@/assets/hero-community.jpg";
import FloatingShapes from "./FloatingShapes";

const HeroSection = () => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "15%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section ref={sectionRef} className="relative flex min-h-screen items-center overflow-hidden">
      <motion.div className="absolute inset-0" style={{ y: imageY }}>
        <img
          src={heroCommunity}
          alt="California Black Health Network community"
          className="h-full w-full object-cover scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[hsl(216,80%,12%)]/85 via-foreground/60 to-foreground/80" />
      </motion.div>

      <FloatingShapes variant="rings" className="opacity-40 animate-drift" />

      <motion.div className="report-container relative z-10 px-6 py-32 lg:px-24" style={{ y: textY, opacity }}>
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-8 text-[13px] font-bold uppercase tracking-[0.35em] text-sky-aqua"
        >
          Impact Report
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="font-serif text-5xl font-black leading-[0.95] text-primary-foreground md:text-7xl lg:text-[110px]"
        >
          4 Decades of
          <br />
          Advancing Health
          <br />
          <span className="gradient-text-shamrock italic font-normal">Equity</span>{" "}
          <span className="text-primary-foreground">in California</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-10 max-w-xl text-lg leading-relaxed text-primary-foreground/80 md:text-xl"
        >
          Investments, Initiatives, and Impact. CBHN is the only Black-led statewide
          organization in California dedicated to health equity for all African Americans
          and Black immigrants. Founded in 1978.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <motion.a
            href="#executive-summary"
            whileHover={{ scale: 1.03, boxShadow: "0 12px 30px -4px hsl(150,47%,38%,0.4)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full bg-primary px-9 py-4 text-sm font-bold text-primary-foreground shadow-[0_8px_30px_-4px_hsl(150,47%,38%,0.5)] transition-all"
          >
            Read the Report
          </motion.a>
          <motion.a
            href="#donate"
            whileHover={{ scale: 1.03, backgroundColor: "rgba(255,255,255,0.08)" }}
            whileTap={{ scale: 0.97 }}
            className="rounded-full border-2 border-primary-foreground/40 px-9 py-4 text-sm font-bold text-primary-foreground transition-all hover:border-primary-foreground"
          >
            Support the Campaign
          </motion.a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2"
          >
            <span className="text-[11px] tracking-widest text-primary-foreground/40">SCROLL</span>
            <div className="h-10 w-px bg-primary-foreground/30" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Wavy SVG divider */}
      <div className="absolute bottom-0 left-0 right-0 z-10">
        <svg viewBox="0 0 1440 80" fill="none" className="w-full" preserveAspectRatio="none">
          <path d="M0 40 C360 80 720 0 1080 40 S1440 60 1440 40 L1440 80 L0 80 Z" fill="hsl(0, 0%, 100%)" />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
