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
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-foreground/70" />
    </div>

    {/* Content */}
    <div className="report-container relative z-10 px-6 py-32 lg:px-24">
      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-6 text-[13px] font-medium uppercase tracking-[0.25em] text-primary-foreground/60"
      >
        2024 Annual Report
      </motion.p>

      <motion.h1
        initial={{ opacity: 0, y: 25 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        className="font-serif text-5xl font-bold leading-[1.1] text-primary-foreground md:text-7xl lg:text-8xl"
      >
        Empowering
        <br />
        Black Health
        <br />
        <span className="italic font-normal">Equity</span>
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="mt-8 max-w-md text-base leading-relaxed text-primary-foreground/70"
      >
        Join us in the campaign for Black health equity across California.
      </motion.p>

      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.7 }}
        className="mt-10 flex flex-wrap gap-4"
      >
        <a
          href="#mission"
          className="rounded-full bg-primary-foreground px-7 py-3 text-[13px] font-semibold text-foreground transition-opacity hover:opacity-90"
        >
          Explore the Report
        </a>
        <a
          href="#donate"
          className="rounded-full border border-primary-foreground/30 px-7 py-3 text-[13px] font-semibold text-primary-foreground transition-colors hover:border-primary-foreground/60"
        >
          Donate Now
        </a>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-[11px] tracking-widest text-primary-foreground/40">SCROLL</span>
          <div className="h-8 w-px animate-pulse bg-primary-foreground/30" />
        </div>
      </motion.div>
    </div>
  </section>
);

export default HeroSection;
