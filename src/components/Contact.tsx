import { useState } from "react";
import {
  Mail,
  Phone,
  Linkedin,
  Instagram,
  MessageSquare,
  Send,
  CheckCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    request_type: "general",
    message: "",
  });

  // const [isSubmitting, setIsSubmitting] = useState(false);
  // const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <div>
              <div className="inline-block mb-4">
                <div className="h-1 w-16 bg-gold-500 mb-6"></div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-light text-black mb-6">
                Let's Create{" "}
                <span className="font-semibold">Impact Together</span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Whether you're looking for strategic consulting, booking a
                speaker, or exploring collaboration opportunities, I'm here to
                help turn your vision into reality.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500 flex items-center justify-center">
                  <Mail className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Email</h3>
                  <a
                    href="mailto:Prince.aning@edipconsulting.com"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    Prince.aning@edipconsulting.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500 flex items-center justify-center">
                  <Phone className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">Phone</h3>
                  <a
                    href="tel:+1234567890"
                    className="text-gray-600 hover:text-black transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gold-500 flex items-center justify-center">
                  <MessageSquare className="w-6 h-6 text-black" />
                </div>
                <div>
                  <h3 className="font-semibold text-black mb-1">
                    Response Time
                  </h3>
                  <p className="text-gray-600">Typically within 24-48 hours</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-gray-200">
              <h3 className="font-semibold text-black mb-4">
                Connect on Social Media
              </h3>
              <div className="flex gap-4">
                <a
                  href="https://www.linkedin.com/in/dr-prince-akowuah-aning-68a9694a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/drpaning?igsh=MWJ4NDN1cDM0bjZ1eQ"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-white border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-all duration-300"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>

            <div className="bg-white border border-gray-200 p-6">
              <h3 className="font-semibold text-black mb-3">What to Expect</h3>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Personalized response addressing your specific needs
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Initial consultation to understand your objectives
                  </span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle className="w-5 h-5 text-gold-500 flex-shrink-0 mt-0.5" />
                  <span>
                    Tailored proposal with clear deliverables and timeline
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-black p-8 lg:p-10">
            <form
              action="https://formsubmit.co/tomtunnel3@gmail.com"
              method="POST"
              className="space-y-6"
            >
              {/* Hidden settings for Formsubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input type="hidden" name="_template" value="table" />
              <input
                type="hidden"
                name="_autoresponse"
                value="Thank you for your message!"
              />
              <input type="hidden" name="_next" value="/thank-you" />

              <div>
                <h3 className="text-2xl font-bold text-white mb-2">
                  Send a Message
                </h3>
                <p className="text-white/70">
                  Fill out the form below and I'll respond promptly.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="your.email@example.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="organization"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Organization (Optional)
                  </label>
                  <input
                    type="text"
                    id="organization"
                    name="organization"
                    value={formData.organization}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                    placeholder="Your company or institution"
                  />
                </div>

                <div>
                  <label
                    htmlFor="request_type"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Type of Request *
                  </label>
                  <select
                    id="request_type"
                    name="request_type"
                    required
                    value={formData.request_type}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                  >
                    <option value="general" className="bg-black">
                      General Inquiry
                    </option>
                    <option value="consultation" className="bg-black">
                      Strategic Consultation
                    </option>
                    <option value="speaking" className="bg-black">
                      Speaking Engagement
                    </option>
                    <option value="collaboration" className="bg-black">
                      Collaboration Opportunity
                    </option>
                  </select>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-white mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent resize-none"
                    placeholder="Tell me about your needs, goals, or questions..."
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full px-8 py-4 bg-gold-500 text-black font-medium hover:bg-gold-400 transition-all duration-300 flex items-center justify-center gap-2"
              >
                Send Message
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
