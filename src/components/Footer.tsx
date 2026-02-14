import { Facebook, Twitter, Instagram, Linkedin, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: <Facebook size={20} />, href: "https://facebook.com", label: "Facebook" },
  { icon: <Twitter size={20} />, href: "https://twitter.com", label: "Twitter" },
  { icon: <Instagram size={20} />, href: "https://instagram.com", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "https://linkedin.com", label: "LinkedIn" },
];

const Footer = () => (
  <footer id="donate" className="bg-secondary text-secondary-foreground">
    {/* CTA */}
    <div className="section-padding pb-12">
      <div className="report-container text-center">
        <h2 className="font-serif text-3xl font-bold md:text-5xl">
          Join the Movement
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-secondary-foreground/80">
          Your donation directly funds community health programs, policy advocacy, and
          life-saving initiatives for Black Californians.
        </p>
        <a
          href="https://yourcbhn.org"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-full bg-card px-10 py-4 text-sm font-bold text-foreground transition-transform hover:scale-105"
        >
          Donate Now <ExternalLink size={16} />
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-secondary-foreground/20 px-6 py-8 lg:px-24">
      <div className="report-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-secondary-foreground/10">
            <span className="font-serif text-lg font-bold text-secondary-foreground">CB</span>
          </div>
          <div>
            <p className="text-sm font-semibold">California Black Health Network</p>
            <p className="text-xs text-secondary-foreground/60">
              © 2024 CBHN. All rights reserved.
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} className="text-secondary-foreground/60" />
          <a
            href="mailto:info@yourcbhn.org"
            className="text-sm text-secondary-foreground/80 hover:text-secondary-foreground"
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary-foreground/10 text-secondary-foreground transition-colors hover:bg-secondary-foreground/20"
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
