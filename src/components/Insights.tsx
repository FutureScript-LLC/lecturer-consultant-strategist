import { TrendingUp, Brain, Rocket, Calendar } from 'lucide-react';

export default function Insights() {
  const insights = [
    {
      category: 'Strategic Thinking',
      title: 'The Future of Strategic Planning in a VUCA World',
      excerpt: 'How organizations can build resilient strategies that adapt to volatility, uncertainty, complexity, and ambiguity.',
      date: 'March 2024',
      icon: Brain,
    },
    {
      category: 'Leadership',
      title: 'Building High-Performance Teams Through Servant Leadership',
      excerpt: 'Exploring the principles of servant leadership and their impact on team performance and organizational culture.',
      date: 'February 2024',
      icon: Users2,
    },
    {
      category: 'Innovation',
      title: 'From Disruption to Integration: Navigating Digital Transformation',
      excerpt: 'A framework for successfully integrating digital innovation without losing organizational identity and values.',
      date: 'January 2024',
      icon: Rocket,
    },
  ];

  const upcomingEvents = [
    {
      type: 'Keynote',
      title: 'Strategic Leadership Summit 2024',
      date: 'June 15, 2024',
      location: 'Virtual',
    },
    {
      type: 'Workshop',
      title: 'Advanced Strategy Masterclass',
      date: 'July 8-9, 2024',
      location: 'Lagos, Nigeria',
    },
    {
      type: 'Lecture Series',
      title: 'Innovation in African Markets',
      date: 'August 2024',
      location: 'Multiple Universities',
    },
  ];

  return (
    <section id="insights" className="py-32 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-12">
            <div>
              <div className="inline-block mb-4">
                <div className="h-1 w-16 bg-gold-500 mb-6"></div>
              </div>

              <h2 className="text-5xl lg:text-6xl font-light text-black mb-6">
                Latest <span className="font-semibold">Insights & Publications</span>
              </h2>

              <p className="text-xl text-gray-700 leading-relaxed font-light">
                Exploring the intersection of strategy, leadership, and innovation through
                research, case studies, and practical frameworks.
              </p>
            </div>

            <div className="space-y-6">
              {insights.map((insight, index) => (
                <article
                  key={index}
                  className="group border border-gray-200 p-8 hover:border-gold-500 transition-all duration-300 bg-white"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-14 h-14 bg-gold-500 flex items-center justify-center group-hover:bg-black transition-colors duration-300">
                        <insight.icon className="w-7 h-7 text-black group-hover:text-white" />
                      </div>
                    </div>

                    <div className="flex-1 space-y-3">
                      <div className="flex items-center gap-3 text-sm">
                        <span className="px-3 py-1 bg-black text-white font-light">
                          {insight.category}
                        </span>
                        <span className="text-gray-500">{insight.date}</span>
                      </div>

                      <h3 className="text-2xl font-semibold text-black group-hover:text-gold-600 transition-colors">
                        {insight.title}
                      </h3>

                      <p className="text-gray-600 leading-relaxed font-light">
                        {insight.excerpt}
                      </p>

                      <button className="text-gold-600 font-medium hover:gap-3 flex items-center gap-2 transition-all">
                        Read More
                        <TrendingUp className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </article>
              ))}
            </div>

            <div className="pt-6 text-center">
              <button className="px-10 py-4 border border-black text-black font-medium hover:bg-black hover:text-white transition-all duration-300">
                View All Publications
              </button>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-black p-8 text-white">
              <div className="flex items-center gap-3 mb-6">
                <Calendar className="w-6 h-6" />
                <h3 className="text-2xl font-bold">Upcoming Events</h3>
              </div>

              <div className="space-y-6">
                {upcomingEvents.map((event, index) => (
                  <div
                    key={index}
                    className="border-l-4 border-gold-500 pl-4 space-y-2"
                  >
                    <div className="text-sm font-semibold text-white/80">
                      {event.type}
                    </div>
                    <h4 className="font-bold text-lg">{event.title}</h4>
                    <div className="text-sm text-white/70 space-y-1">
                      <p>{event.date}</p>
                      <p>{event.location}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className="mt-8 w-full px-6 py-3 bg-gold-500 text-black font-medium hover:bg-gold-400 transition-all duration-300"
              >
                Book for Your Event
              </button>
            </div>

            <div className="bg-gray-50 border border-gray-200 p-8">
              <h3 className="text-xl font-semibold text-black mb-4">
                Subscribe to Newsletter
              </h3>
              <p className="text-gray-600 mb-6 font-light">
                Get monthly insights, strategy frameworks, and industry analysis delivered to your inbox.
              </p>

              <div className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-3 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gold-500 focus:border-transparent"
                />
                <button className="w-full px-6 py-3 bg-black text-white font-medium hover:bg-gold-500 hover:text-black transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Users2({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2}
        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
      />
    </svg>
  );
}
