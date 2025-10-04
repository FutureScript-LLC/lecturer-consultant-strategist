import React from "react";
import { Quote, Star } from "lucide-react";

interface TestimonialsProps {
  darkMode?: boolean;
}

const Testimonials: React.FC<TestimonialsProps> = ({ darkMode = true }) => {
  const testimonials = [
    {
      name: "Dr. Amaka Okonkwo",
      role: "CEO, TechVenture Africa",
      content:
        "The strategic consulting we received was transformative. Clear frameworks, actionable insights, and a partnership approach that truly understood our unique challenges. Our market positioning has never been stronger.",
      rating: 5,
    },
    {
      name: "Michael Adeyemi",
      role: "MBA Graduate, Lagos Business School",
      content:
        "As a lecturer, the ability to bridge complex theory with real-world application is exceptional. The mentorship I received went beyond the classroom and fundamentally shaped my strategic thinking approach.",
      rating: 5,
    },
    {
      name: "Sarah Chen",
      role: "Director of Strategy, Global Finance Corp",
      content:
        "The keynote at our leadership summit was outstanding. Engaging, insightful, and packed with frameworks we immediately implemented. Our entire executive team left inspired and equipped with practical tools.",
      rating: 5,
    },
    {
      name: "Prof. Ibrahim Mohammed",
      role: "Dean, Faculty of Management Sciences",
      content:
        "A rare combination of academic rigor and practical wisdom. The curriculum development work has elevated our programs and the guest lectures consistently receive the highest student ratings.",
      rating: 5,
    },
    {
      name: "Jennifer Okoro",
      role: "Founder, GrowthPath Consulting",
      content:
        "The strategic advisory support during our scaling phase was invaluable. Patient, insightful, and always focused on long-term sustainable growth rather than quick fixes. A true thought partner.",
      rating: 5,
    },
    {
      name: "David Mensah",
      role: "VP Operations, PanAfrican Industries",
      content:
        "The change management workshop equipped our leadership team with frameworks that are still driving our transformation two years later. Practical, engaging, and tailored perfectly to our context.",
      rating: 5,
    },
  ];

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < rating ? "text-yellow-400 fill-current" : "text-gray-500"
        }`}
      />
    ));

  const TestimonialCard = ({
    testimonial,
  }: {
    testimonial: (typeof testimonials)[0];
  }) => (
    <div
      className={`flex-shrink-0 w-80 md:w-96 p-6 rounded-2xl mx-4 transition-all duration-300 hover:scale-105 hover:shadow-2xl border ${
        darkMode
          ? "bg-white/10 border-white/20"
          : "bg-white border-gray-200 text-gray-800"
      }`}
    >
      <div className="flex items-center justify-between mb-4">
        <Quote
          className={`w-8 h-8 ${darkMode ? "text-white/40" : "text-gray-400"}`}
        />
        <div className="flex gap-1">{renderStars(testimonial.rating)}</div>
      </div>

      <p
        className={`italic leading-relaxed mb-6 ${
          darkMode ? "text-white/80" : "text-gray-700"
        }`}
      >
        "{testimonial.content}"
      </p>

      <div
        className={`border-t pt-4 ${
          darkMode ? "border-white/20" : "border-gray-200"
        }`}
      >
        <h4
          className={`font-semibold ${
            darkMode ? "text-white" : "text-gray-900"
          }`}
        >
          {testimonial.name}
        </h4>
        <p
          className={`text-sm ${darkMode ? "text-white/60" : "text-gray-600"}`}
        >
          {testimonial.role}
        </p>
      </div>
    </div>
  );

  const firstRow = testimonials.slice(0, 3);
  const secondRow = testimonials.slice(3, 6);
  const duplicate = (arr: typeof testimonials) => [...arr, ...arr, ...arr];

  return (
    <section
      className={`py-32 overflow-hidden relative ${
        darkMode ? "bg-black text-white" : "bg-white text-gray-900"
      }`}
    >
      {/* Subtle Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="h-1 w-16 bg-yellow-400 mx-auto mb-6"></div>
          <h2 className="text-5xl lg:text-6xl font-light mb-6">
            Trusted by{" "}
            <span className="font-semibold">Leaders Across Industries</span>
          </h2>
          <p
            className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              darkMode ? "text-white/80" : "text-gray-600"
            }`}
          >
            Real results from professionals, executives, and institutions
            transformed by strategic thinking in action.
          </p>
        </div>

        {/* Scrolling Testimonials */}
        <div className="hidden md:block">
          <div className="relative mb-8 overflow-hidden">
            <div
              className="flex animate-scroll-right"
              style={{ width: "fit-content", animationDelay: "0s" }}
            >
              {duplicate(firstRow).map((t, i) => (
                <TestimonialCard key={`row1-${i}`} testimonial={t} />
              ))}
            </div>
          </div>

          <div className="relative overflow-hidden">
            <div
              className="flex animate-scroll-left"
              style={{ width: "fit-content", animationDelay: "2s" }}
            >
              {duplicate(secondRow).map((t, i) => (
                <TestimonialCard key={`row2-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Mobile */}
        <div className="block md:hidden">
          <div className="relative overflow-hidden">
            <div
              className="flex animate-scroll-right"
              style={{ width: "fit-content", animationDelay: "0s" }}
            >
              {duplicate(testimonials).map((t, i) => (
                <TestimonialCard key={`mobile-${i}`} testimonial={t} />
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div
          className={`mt-20 p-8 rounded-2xl border text-center grid md:grid-cols-3 gap-8 ${
            darkMode
              ? "border-yellow-400/30 bg-white/5"
              : "border-yellow-300 bg-yellow-50"
          }`}
        >
          <div>
            <div className="text-5xl font-light mb-2">
              <span className="font-semibold">98</span>%
            </div>
            <p className="opacity-80">Client Satisfaction Rate</p>
          </div>

          <div>
            <div className="text-5xl font-light mb-2">
              <span className="font-semibold">50</span>+
            </div>
            <p className="opacity-80">Organizations Served</p>
          </div>

          <div>
            <div className="text-5xl font-light mb-2">
              <span className="font-semibold">500</span>+
            </div>
            <p className="opacity-80">Professionals Mentored</p>
          </div>
        </div>
      </div>

      {/* Animations */}
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-33.333%); }
        }

        @keyframes scroll-left {
          0% { transform: translateX(-33.333%); }
          100% { transform: translateX(0%); }
        }

        .animate-scroll-right {
          animation: scroll-right 25s linear infinite;
        }

        .animate-scroll-left {
          animation: scroll-left 25s linear infinite;
        }

        @media (max-width: 768px) {
          .animate-scroll-right {
            animation: scroll-right 40s linear infinite;
          }
        }

        .animate-scroll-right:hover,
        .animate-scroll-left:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Testimonials;
