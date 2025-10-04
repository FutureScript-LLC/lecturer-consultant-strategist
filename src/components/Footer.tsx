import { BookOpen, Linkedin, Twitter, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const footerLinks = {
    navigation: [
      { label: "About", id: "about" },
      { label: "Expertise", id: "expertise" },
      { label: "Insights", id: "insights" },
      { label: "Contact", id: "contact" },
    ],
    services: [
      { label: "Strategic Consulting" },
      { label: "Speaking & Training" },
      { label: "Academic Lectures" },
      { label: "Advisory Services" },
    ],
  };

  return (
    <footer className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gold-500 flex items-center justify-center">
                <BookOpen className="w-6 h-6 text-black" />
              </div>
              <span className="text-xl font-light">Strategic Leadership</span>
            </div>

            <p className="text-white/70 leading-relaxed font-light">
              Empowering students, professionals, and organizations through
              strategic thinking, knowledge-sharing, and thought leadership.
            </p>

            <div className="flex gap-4">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="mailto:contact@example.com"
                className="w-10 h-10 bg-white/10 flex items-center justify-center hover:bg-gold-500 hover:text-black transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Navigation</h3>
            <ul className="space-y-3">
              {footerLinks.navigation.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.id)}
                    className="text-white/70 hover:text-gold-500 transition-colors font-light"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link, index) => (
                <li key={index}>
                  <span className="text-white/70 font-light">{link.label}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-lg mb-6">Get in Touch</h3>
            <div className="space-y-4">
              <p className="text-white/70 font-light">
                Ready to collaborate or learn more about how strategic thinking
                can transform your organization?
              </p>

              <button
                onClick={() => scrollToSection("contact")}
                className="px-6 py-3 bg-gold-500 text-black font-medium hover:bg-gold-400 transition-all duration-300"
              >
                Contact Me
              </button>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-gold-500/30">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/70 text-sm font-light">
              {currentYear} Strategic Leadership. All rights reserved.
            </p>

            <p className="text-white/70 text-sm flex items-center gap-2 font-light">
              Designed by FutureScript Solutions
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
