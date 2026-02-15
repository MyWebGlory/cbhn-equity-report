import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: <Twitter size={20} />, href: "http://twitter.com/yourCBHN", label: "Twitter" },
  { icon: <Facebook size={20} />, href: "https://www.facebook.com/California-Black-Health-Network-180896428938816/", label: "Facebook" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/california-black-health-network/", label: "LinkedIn" },
  { icon: <Youtube size={20} />, href: "https://www.youtube.com/results?search_query=california+black+health+network", label: "YouTube" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/yourcbhn/", label: "Instagram" },
];

const Footer = () => {
  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true, margin: "-60px" });

  return (
    <footer id="donate">
      <div className="bg-gradient-to-br from-primary via-accent to-primary section-padding pb-20" ref={ctaRef}>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={ctaInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.25, 0.1, 0.25, 1] }}
          className="report-container mx-auto max-w-2xl text-center"
        >
          <p className="mb-6 text-[13px] font-black uppercase tracking-[0.35em] text-primary-foreground/60">
            Join the Movement
          </p>
          <h2 className="font-serif text-4xl font-bold text-primary-foreground md:text-5xl lg:text-7xl">
            Join the Campaign for Black Health Equity
          </h2>
          <p className="mx-auto mt-8 max-w-lg text-lg leading-relaxed text-primary-foreground/80">
            Help CBHN rewrite the health story for all Black Californians. Your support
            funds community health programs, legislative advocacy, and direct services
            that save lives.
          </p>
          <motion.a
            initial={{ opacity: 0, y: 15 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.25, 0.1, 0.25, 1] }}
            href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-3 rounded-full bg-secondary px-10 py-5 text-base font-black text-secondary-foreground shadow-[0_8px_30px_-4px_hsl(13,88%,52%,0.5)] transition-all hover:shadow-[0_12px_40px_-4px_hsl(13,88%,52%,0.7)] hover:scale-105"
          >
            Donate Today <ExternalLink size={18} />
          </motion.a>
        </motion.div>
      </div>

      <div className="bg-foreground border-t border-primary-foreground/10 px-6 py-10 lg:px-24">
        <div className="report-container flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <p className="text-base font-bold text-primary-foreground/80">
              California Black Health Network
            </p>
            <p className="mt-1 text-xs text-primary-foreground/40">
              2026 CBHN. All rights reserved.{" "}
              <a href="https://yourcbhn.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/60">
                Privacy Policy
              </a>
              {" "}Powered by{" "}
              <a href="https://www.rpmnational.com/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/60">
                RPMNational
              </a>
            </p>
          </div>

          <div className="flex items-center gap-2">
            <Mail size={16} className="text-primary-foreground/40" />
            <a
              href="mailto:info@yourcbhn.org"
              className="text-sm font-semibold text-primary-foreground/60 hover:text-primary-foreground/80"
            >
              info@yourcbhn.org
            </a>
          </div>

          <div className="flex gap-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="flex h-11 w-11 items-center justify-center rounded-full text-primary-foreground/40 transition-all hover:text-primary-foreground hover:bg-primary-foreground/10"
              >
                {link.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
