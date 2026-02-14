import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "About Us", href: "#mission" },
  { label: "Impact", href: "#impact" },
  { label: "Programs", href: "#programs" },
  { label: "Policy & Advocacy", href: "#policy" },
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
    <>
      {/* Top teal banner */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-primary py-2 text-center">
        <a
          href="#donate"
          className="text-xs font-semibold tracking-wide text-primary-foreground hover:underline md:text-sm"
        >
          Join Us In The Campaign For Black Health Equity!
        </a>
      </div>

      <header
        className={`fixed top-8 left-0 right-0 z-40 transition-all duration-300 ${
          scrolled
            ? "bg-card/95 backdrop-blur-md shadow-md"
            : "bg-card/80 backdrop-blur-sm"
        }`}
      >
        <div className="report-container flex items-center justify-between px-6 py-3 lg:px-24">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary">
              <span className="font-serif text-sm font-bold text-secondary-foreground">
                CBHN
              </span>
            </div>
            <div className="hidden sm:block">
              <span className="text-xs font-bold uppercase tracking-wider text-foreground">
                California
              </span>
              <span className="block text-xs font-semibold text-foreground">
                Black Health Network
              </span>
            </div>
          </a>

          <nav className="hidden items-center gap-6 lg:flex">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-md bg-secondary px-5 py-2 text-sm font-bold uppercase tracking-wider text-secondary-foreground transition-transform hover:scale-105"
            >
              Donate
            </a>
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {mobileOpen && (
          <nav className="flex flex-col gap-4 bg-card px-6 pb-6 lg:hidden">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="text-sm font-medium text-foreground transition-colors hover:text-primary"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://fundraise.givesmart.com/e/c21PlQ?vid=19fqpi"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileOpen(false)}
              className="rounded-md bg-secondary px-5 py-2 text-center text-sm font-bold uppercase text-secondary-foreground"
            >
              Donate
            </a>
          </nav>
        )}
      </header>
    </>
  );
};

export default Navbar;
