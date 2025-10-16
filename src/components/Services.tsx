import {
  Presentation,
  Building2,
  Users as Users2,
  BookOpenCheck,
} from "lucide-react";

export default function Services() {
  const services = [
    {
      icon: Building2,
      title: "Strategic Consulting",
      description:
        "Tailored strategic solutions for organizations navigating growth, transformation, or market challenges.",
      features: [
        "Strategic development and execution",
        "Market analysis and competitive positioning",
        "Business model innovation",
        "Change management strategies",
      ],
      ideal: "Corporate bodies,SMEs, Start-Ups, NGOs",
    },
    {
      icon: Presentation,
      title: "Speaking & Training",
      description:
        "Engaging keynotes, workshops, and training programs designed to inspire action and build capabilities.",
      features: [
        "Industry conferences and corporate events",
        "Leadership and management training",
        "Strategy workshops and masterclasses",
        "Custom curriculum development",
      ],
      ideal:
        "Business events, conferences, corporate training, SMEs and Start-Ups",
    },
    {
      icon: BookOpenCheck,
      title: "Academic Lectures",
      description:
        "Comprehensive educational programs combining theoretical foundations with practical applications.",
      features: [
        "Entrepreneurship and strategy lectures",
        "Curriculum design and review",
        "Research and case study publications",
        "Professional certification programs",
      ],
      ideal: "Educational institutions, students",
    },
    {
      icon: Users2,
      title: "Collaborative transformation",
      description:
        "Long-term partnerships with policy makers, public and private sector leaders, and international stakeholders for strategic guidance and socio-economic development.",
      features: [
        "Advisory board/committee participation",
        "SME and Industrial Policy Advisory",
        "Research and thought leadership projects",
        "Executive coaching and mentorship",
      ],
      ideal: "Policy makers, Boards, Institutional Bodies",
    },
  ];

  return (
    <section id="expertise" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-block mb-4">
            <div className="h-1 w-16 bg-gold-500 mx-auto mb-6"></div>
          </div>

          <h2 className="text-5xl lg:text-6xl font-light text-black mb-6">
            How can we <span className="font-semibold">work together</span>
          </h2>

          <p className="text-xl text-gray-700 leading-relaxed font-light">
            Comprehensive services designed to meet the unique needs of
            organizations, leaders, and teams at every stage of their journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="group bg-white border border-gray-200 p-10 hover:border-gold-500 transition-all duration-300"
            >
              <div className="mb-6">
                <div className="w-16 h-16 bg-gold-500 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                  <service.icon className="w-8 h-8 text-black group-hover:text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-semibold text-black mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 mb-6 leading-relaxed font-light">
                {service.description}
              </p>

              <div className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-1.5 h-1.5 bg-gold-500 rounded-full mt-2"></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <div className="pt-6 border-t border-gray-200">
                <div className="flex items-center gap-2">
                  <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider whitespace-nowrap">
                    Ideal for:
                  </span>
                  <span className="text-sm text-black font-medium">
                    {service.ideal}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-10 py-4 bg-gold-500 text-black font-medium hover:bg-black hover:text-white transition-all duration-300"
          >
            Discuss Your Needs
          </button>
        </div>
      </div>
    </section>
  );
}
