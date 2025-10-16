import { ArrowRight, ChevronDown } from "lucide-react";
import prince from "../assets/images/Prince.jpeg";

export default function Hero() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center bg-black text-white overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black opacity-90"></div>

      {/* Dot pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Main content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 py-20 lg:py-32 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left side - Text content */}
          <div className="space-y-8 order-2 lg:order-1">
            <div className="space-y-2">
              <div className="inline-block">
                <div className="h-1 w-16 bg-yellow-500 mb-6"></div>
              </div>

              <h1 className="text-5xl lg:text-7xl font-light tracking-tight leading-none mb-6">
                <span className="block font-light text-white/90">
                  Transforming
                </span>
                <span className="block font-semibold text-yellow-500">
                  Ideas Into Impact
                </span>
              </h1>
            </div>

            <p className="text-xl lg:text-2xl text-white/70 leading-relaxed font-light">
              Lecturer • Consultant • Entrepreneur
            </p>

            <p className="text-base lg:text-lg text-white/60 leading-relaxed">
              Empowering organizations and professionals through strategic
              insight, knowledge-sharing, and transformative leadership.
            </p>

            <div className="flex flex-wrap gap-4 pt-4">
              <button
                onClick={() => scrollToSection("contact")}
                className="group px-8 py-4 bg-yellow-500 text-black rounded-none font-medium hover:bg-yellow-400 transition-all duration-300 flex items-center gap-2"
              >
                Get In Touch
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => scrollToSection("about")}
                className="px-8 py-4 border border-white/30 text-white rounded-none font-medium hover:bg-white/10 transition-all duration-300"
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right side - Image (easily replaceable with carousel component) */}
          <div className="order-1 lg:order-2">
            <div className="relative aspect-[3/4] lg:aspect-[4/5] w-full mx-auto lg:mx-0">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-transparent rounded-lg"></div>
              <img
                src={prince}
                alt="Professional consultant"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
              />
              {/* Optional decorative elements */}
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-yellow-500/10 rounded-lg -z-10"></div>
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-yellow-500/10 rounded-lg -z-10"></div>
            </div>

            {/* 
            To replace with carousel, simply swap the above div with:
            <YourCarouselComponent />
            */}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={() => scrollToSection("about")}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce hidden lg:block"
      >
        <ChevronDown className="w-8 h-8 text-yellow-500" />
      </button>
    </section>
  );
}
