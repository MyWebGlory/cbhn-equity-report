import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Mission", href: "#mission" },
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-card/95 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="report-container flex items-center justify-between px-6 py-4 lg:px-24">
        {/* Logo placeholder */}
        <a href="#" className="flex items-center gap-2">
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary">
            <span className="font-serif text-lg font-bold text-primary-foreground">CB</span>
          </div>
          <div className="hidden sm:block">
            <span className="text-sm font-semibold tracking-tight text-foreground">
              California Black
            </span>
            <span className="block text-xs font-medium text-muted-foreground">
              Health Network
            </span>
          </div>
        </a>

        {/* Desktop nav */}
        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
            className="rounded-full bg-secondary px-5 py-2 text-sm font-semibold text-secondary-foreground transition-transform hover:scale-105"
          >
            Donate
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden text-foreground"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <nav className="flex flex-col gap-4 bg-card px-6 pb-6 md:hidden">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#donate"
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
