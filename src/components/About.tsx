import {
  Lightbulb,
  Target,
  Handshake as HandshakeIcon,
  GraduationCap,
} from "lucide-react";

export default function About() {
  const pillars = [
    {
      icon: GraduationCap,
      title: "Strategic Advisory",
      description:
        "Helping organizations navigate complexity with clear, data-driven insights that align vision with actionable execution.",
    },
    {
      icon: Target,
      title: "Research and Publication",
      description:
        "Sharing cutting-edge insights and innovative approaches that challenge conventional thinking, contribute to academic literature, and drive industry advancement",
    },
    {
      icon: Lightbulb,
      title: "Knowledge sharing",
      description:
        "Dedicated to educating and empowering the next generation of organizational leaders, professionals, and young people through comprehensive lectures, publications, public speaking, and mentorship/coaching programs.",
    },
    {
      icon: HandshakeIcon,
      title: "Collaborative Transformation",
      description:
        "Building meaningful partnerships with public and private sector leaders, international organizations, and local community leaders to transform Ghana and aid the African Renaissance. ",
    },
  ];

  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-6 lg:sticky lg:top-24">
            <div className="inline-block">
              <div className="h-1 w-16 bg-gold-500 mb-6"></div>
            </div>

            <h2 className="text-5xl lg:text-6xl font-light text-black leading-tight">
              Bridging Theory and Practice for{" "}
              <span className="font-semibold">Real-World Impact</span>
            </h2>

            <div className="space-y-4 text-lg text-gray-700 leading-relaxed font-light">
              <p>
                With experience spanning academia and industry, I specialize in
                translating theoretical concepts and industry insights into
                practical strategies that drive tangible results.
              </p>

              <p>
                My work centers on empowering organizations (large companies and
                SMEs), leaders and individuals to think strategically, act
                decisively, and adapt continuously in an ever-evolving
                landscape.
              </p>

              <p>
                Whether in the lecture hall, boardroom, or collaborative
                workshop, my approach combines rigorous analysis with
                human-centered thinking to deliver solutions that are both
                innovative and implementable.
              </p>
            </div>

            <div className="pt-4">
              <div className="flex flex-wrap gap-3">
                <span className="px-5 py-2 bg-black text-white text-sm font-light tracking-wide">
                  Business Strategy
                </span>
                <span className="px-5 py-2 bg-black text-white text-sm font-light tracking-wide">
                  Leadership Development
                </span>
                <span className="px-5 py-2 bg-black text-white text-sm font-light tracking-wide">
                  Change Management
                </span>
                <span className="px-5 py-2 bg-black text-white text-sm font-light tracking-wide">
                  SME and Industrial policy
                </span>
                <span className="px-5 py-2 bg-black text-white text-sm font-light tracking-wide">
                  Innovation, Entrepreneurship and Start-ups
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            {pillars.map((pillar, index) => (
              <div
                key={index}
                className="group p-8 bg-white border border-gray-200 hover:border-gold-500 transition-all duration-300"
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-14 h-14 bg-gold-500 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                      <pillar.icon className="w-7 h-7 text-black group-hover:text-white" />
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h3 className="text-xl font-semibold text-black">
                      {pillar.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed font-light">
                      {pillar.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
