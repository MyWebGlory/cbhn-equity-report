import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";

interface RevealCardProps {
  teaser: string;
  revealContent: React.ReactNode;
  ctaText?: string;
  color?: string;
}

const RevealCard = ({ teaser, revealContent, ctaText = "Tap to reveal the full story", color = "bg-primary" }: RevealCardProps) => {
  const [revealed, setRevealed] = useState(false);

  return (
    <motion.div
      layout
      className="relative rounded-3xl overflow-hidden shadow-xl cursor-pointer group"
      onClick={() => setRevealed(!revealed)}
      whileHover={{ scale: 1.01 }}
      transition={{ layout: { duration: 0.4, ease: [0.25, 0.1, 0.25, 1] } }}
    >
      {/* Teaser state */}
      <div className={`${color} p-10 md:p-14`}>
        <p className="font-serif text-2xl font-bold text-primary-foreground md:text-3xl leading-snug">
          {teaser}
        </p>

        <AnimatePresence mode="wait">
          {!revealed && (
            <motion.div
              key="cta"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="mt-8 flex items-center gap-4"
            >
              {/* Bouncing arrow */}
              <motion.div
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-primary-foreground/20 backdrop-blur-sm">
                  <ChevronDown size={28} className="text-primary-foreground" />
                </div>
              </motion.div>
              <div>
                <p className="text-base font-black uppercase tracking-wider text-primary-foreground/90 flex items-center gap-2">
                  <Sparkles size={16} className="animate-spin-slow" />
                  {ctaText}
                </p>
                <p className="text-sm text-primary-foreground/60 mt-1">Click anywhere on this card</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        <AnimatePresence>
          {revealed && (
            <motion.div
              key="content"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
              className="overflow-hidden"
            >
              <div className="mt-8 border-t border-primary-foreground/20 pt-8 text-base leading-[1.9] text-primary-foreground/90">
                {revealContent}
              </div>
              <p className="mt-6 text-xs font-bold uppercase tracking-widest text-primary-foreground/50">
                Click to collapse
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

export default RevealCard;
