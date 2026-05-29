"use client";

const FeaturesSection = () => {
  // Features dataset mapped directly from your image text
  const features = [
    {
      title: "Smart Search",
      description: "Find your ideal job with advanced filters.",
      // Magnifying glass icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      ),
    },
    {
      title: "Salary Insights",
      description: "Get real salary data to negotiate confidently.",
      // Line chart icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
    {
      title: "Top Companies",
      description: "Apply to vetted companies that are hiring.",
      // Bar chart/buildings icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-6 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"
          />
        </svg>
      ),
    },
    {
      title: "Saved Jobs",
      description: "Manage apps & favorites on your dashboard.",
      // Bookmark icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
          />
        </svg>
      ),
    },
    {
      title: "One-Click Apply",
      description: "Simplify your job applications for an easier process!",
      // Cursor click icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
          />
        </svg>
      ),
    },
    {
      title: "Resume Builder",
      description: "Create professional resumes with modern templates.",
      // Badge/ID card icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 014 0m-3 8h4m-4 4h2"
          />
        </svg>
      ),
    },
    {
      title: "Skill-Based Matching",
      description: "Discover jobs that match your skills and experience.",
      // Hexagon/Nut icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
          />
        </svg>
      ),
    },
    {
      title: "Career Growth Resources",
      description: "Boost your career with quick interview tips.",
      // Growth trend icon path
      icon: (
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0c] text-white py-24 px-6 border-t border-zinc-900/40">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Accent Category Badge */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-500 uppercase">
            Features Job
          </span>
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
        </div>

        {/* Section Main Catchy Title Heading */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center text-white mb-20 max-w-xl leading-[1.15]">
          Everything you need to succeed
        </h2>

        {/* Feature Matrix Layout: 4 columns on desktop, 2 on tablet, 1 on mobile */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4 group">
              {/* Left Side: Dark Structured Soft-Glow Icon Frame */}
              <div className="w-12 h-12 bg-[#121214] border border-zinc-800/60 rounded-xl flex items-center justify-center text-indigo-400 shadow-inner flex-shrink-0 group-hover:border-indigo-500/30 group-hover:text-indigo-300 transition-all duration-300">
                {feature.icon}
              </div>

              {/* Right Side: Text Description Blocks */}
              <div className="flex flex-col gap-1 pt-1">
                <h3 className="text-[15px] font-semibold tracking-tight text-white transition-colors duration-200">
                  {feature.title}
                </h3>
                <p className="text-[13px] text-zinc-500 leading-relaxed font-normal">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
