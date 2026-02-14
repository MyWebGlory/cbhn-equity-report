import { motion } from "framer-motion";
import heroCommunity from "@/assets/hero-community.jpg";

const HeroSection = () => (
  <section className="relative flex min-h-screen items-center overflow-hidden">
    {/* Background image */}
    <div className="absolute inset-0">
      <img
        src={heroCommunity}
        alt="California Black Health Network community members"
        className="h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-primary/40" />
    </div>

    {/* Content */}
    <div className="report-container relative z-10 px-6 py-32 lg:px-24">
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-foreground/80"
      >
        2024 Annual Report
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="font-serif text-5xl font-bold leading-tight text-primary-foreground md:text-7xl lg:text-8xl"
      >
        Empowering
        <br />
        Black Health
        <br />
        <span className="italic">Equity</span>
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#mission"
          className="rounded-full bg-secondary px-8 py-3 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
        >
          Explore the Report
        </a>
        <a
          href="#donate"
          className="rounded-full border border-primary-foreground/40 px-8 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
        >
          Make a Donation
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-xs text-primary-foreground/60">Scroll</span>
          <div className="h-10 w-[1px] animate-pulse bg-primary-foreground/40" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
