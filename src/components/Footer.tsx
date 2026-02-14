import { Facebook, Twitter, Instagram, Linkedin, Youtube, Mail, ExternalLink } from "lucide-react";

const socialLinks = [
  { icon: <Twitter size={20} />, href: "http://twitter.com/yourCBHN", label: "Twitter" },
  { icon: <Facebook size={20} />, href: "https://www.facebook.com/California-Black-Health-Network-180896428938816/", label: "Facebook" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/company/california-black-health-network/", label: "LinkedIn" },
  { icon: <Youtube size={20} />, href: "https://www.youtube.com/results?search_query=california+black+health+network", label: "YouTube" },
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/yourcbhn/", label: "Instagram" },
];

const Footer = () => (
  <footer id="donate" className="bg-primary text-primary-foreground">
    {/* CTA */}
    <div className="section-padding pb-12">
      <div className="report-container text-center">
        <h2 className="font-serif text-3xl font-bold md:text-5xl">
          Learn How You Can Make a Difference
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-base text-primary-foreground/80">
          Your donation directly funds community health programs, policy advocacy, and
          life-saving initiatives for Black Californians.
        </p>
        <a
          href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex items-center gap-2 rounded-md bg-secondary px-10 py-4 text-sm font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-105"
        >
          Donate Today! <ExternalLink size={16} />
        </a>
      </div>
    </div>

    {/* Bottom bar */}
    <div className="border-t border-primary-foreground/20 px-6 py-8 lg:px-24">
      <div className="report-container flex flex-col items-center justify-between gap-6 md:flex-row">
        <div className="flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
            <span className="font-serif text-xs font-bold text-secondary-foreground">CBHN</span>
          </div>
          <div>
            <p className="text-sm font-semibold">CA Black Health Network</p>
            <p className="text-xs text-primary-foreground/60">
              © 2026 CBHN. All rights reserved. |{" "}
              <a href="https://yourcbhn.org/privacy-policy" target="_blank" rel="noopener noreferrer" className="hover:underline">
                Privacy Policy
              </a>
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <Mail size={16} className="text-primary-foreground/60" />
          <a
            href="mailto:info@yourcbhn.org"
            className="text-sm text-primary-foreground/80 hover:text-primary-foreground"
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
              className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-foreground/10 text-primary-foreground transition-colors hover:bg-primary-foreground/20"
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
