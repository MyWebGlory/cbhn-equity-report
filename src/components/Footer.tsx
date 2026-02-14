import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: <Twitter size={18} />, href: "http://twitter.com/yourCBHN", label: "Twitter" },
  { icon: <Facebook size={18} />, href: "https://www.facebook.com/California-Black-Health-Network-180896428938816/", label: "Facebook" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/company/california-black-health-network/", label: "LinkedIn" },
  { icon: <Youtube size={18} />, href: "https://www.youtube.com/results?search_query=california+black+health+network", label: "YouTube" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/yourcbhn/", label: "Instagram" },
];

const Footer = () => (
  <footer id="donate">
    {/* CTA Section — subtle dark background */}
    <div className="bg-foreground section-padding pb-16">
      <div className="report-container mx-auto max-w-2xl text-center">
        <p className="mb-4 text-[12px] font-semibold uppercase tracking-[0.25em] text-secondary">
          Support Our Work
        </p>
        <h2 className="font-serif text-3xl font-semibold text-primary-foreground md:text-4xl lg:text-5xl">
          Learn How You Can Make a Difference
        </h2>
        <p className="mx-auto mt-5 max-w-lg text-base leading-relaxed text-primary-foreground/60">
          Your donation directly funds community health programs, policy advocacy, and
          life-saving initiatives for Black Californians.
        </p>
        <a
          href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-secondary px-8 py-3.5 text-[13px] font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
        >
          Donate Today <ExternalLink size={14} />
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="bg-foreground border-t border-primary-foreground/10 px-6 py-8 lg:px-24">
      <div className="report-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div>
          <p className="text-sm font-medium text-primary-foreground/80">
            California Black Health Network
          </p>
          <p className="mt-1 text-xs text-primary-foreground/40">
            © 2026 CBHN. All rights reserved. |{" "}
            <a href="https://yourcbhn.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:text-primary-foreground/60">
              Privacy Policy
            </a>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={14} className="text-primary-foreground/40" />
          <a
            href="mailto:info@yourcbhn.org"
            className="text-sm text-primary-foreground/60 hover:text-primary-foreground/80"
          >
            info@yourcbhn.org
          </a>
        </div>

        <div className="flex gap-2">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={link.label}
              className="flex h-9 w-9 items-center justify-center rounded-full text-primary-foreground/40 transition-colors hover:text-primary-foreground/70"
            >
              {link.icon}
            </a>
          ))}
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
