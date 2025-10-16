import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LogoWhite from "../assets/images/DPAA logo white.png";
import LogoBlack from "../assets/images/DPAA logo black.png";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  const navItems = [
    { label: "About", id: "about" },
    { label: "Expertise", id: "expertise" },
    { label: "Insights", id: "insights" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white backdrop-blur-md shadow-sm"
          : "bg-black backdrop-blur-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className={`flex items-center gap-2 hover:opacity-70 transition-opacity ${
              isScrolled ? "text-black" : "text-white"
            }`}
          >
            <div className={`py-3.5`}>
              {isScrolled ? (
                <img
                  src={LogoBlack}
                  className="w-[180px] md:w-[250px]"
                  alt="logo"
                />
              ) : (
                <img
                  src={LogoWhite}
                  className="w-[180px] md:w-[250px]"
                  alt="logo"
                />
              )}
            </div>
          </button>

          <nav className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`hover:text-gold-500 font-light transition-colors ${
                  isScrolled ? "text-black" : "text-white"
                }`}
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2.5 bg-gold-500 text-black font-medium hover:bg-gold-400 transition-all duration-300"
            >
              Get in Touch
            </button>
          </nav>

          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`md:hidden p-2 transition-colors ${
              isScrolled
                ? "text-black hover:bg-gray-100"
                : "text-white hover:bg-white/10"
            }`}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200 shadow-xl">
          <div className="max-w-7xl mx-auto px-6 py-6 space-y-4">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className="block w-full text-left px-4 py-3 text-black hover:bg-gray-50 font-light transition-colors"
              >
                {item.label}
              </button>
            ))}

            <button
              onClick={() => scrollToSection("contact")}
              className="w-full px-6 py-3 bg-gold-500 text-black font-medium hover:bg-gold-400 transition-all duration-300"
            >
              Get in Touch
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
