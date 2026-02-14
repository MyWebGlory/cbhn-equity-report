import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Policy", href: "#policy" },
  { label: "Financials", href: "#financials" },
];

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="report-container flex items-center justify-between px-6 py-5 lg:px-24">
        <a href="#" className="flex items-center gap-3">
          <span className={`font-serif text-lg font-bold tracking-tight ${scrolled ? "text-foreground" : "text-primary-foreground"}`}>
            CBHN
          </span>
          <div className={`hidden h-5 w-px sm:block ${scrolled ? "bg-border" : "bg-primary-foreground/30"}`} />
          <span className={`hidden text-xs font-medium tracking-wide sm:block ${scrolled ? "text-muted-foreground" : "text-primary-foreground/70"}`}>
            California Black Health Network
          </span>
        </a>

        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-[13px] font-medium tracking-wide transition-colors ${
                scrolled
                  ? "text-muted-foreground hover:text-foreground"
                  : "text-primary-foreground/70 hover:text-primary-foreground"
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
            target="_blank"
            rel="noopener noreferrer"
            className="animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite] rounded-full bg-secondary px-5 py-2 text-[13px] font-semibold text-secondary-foreground transition-opacity hover:opacity-90"
          >
            Donate
          </a>
        </nav>

        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className={`lg:hidden ${scrolled ? "text-foreground" : "text-primary-foreground"}`}
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {mobileOpen && (
        <nav className="flex flex-col gap-4 bg-card px-6 pb-6 shadow-lg lg:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => setMobileOpen(false)}
            className="rounded-full bg-secondary px-5 py-2 text-center text-sm font-semibold text-secondary-foreground"
          >
            Donate
          </a>
        </nav>
      )}
    </header>
  );
};

export default Navbar;
