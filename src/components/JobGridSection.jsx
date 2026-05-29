"use client";
import { Button, Link } from "@heroui/react";
import { ArrowRight } from "@gravity-ui/icons";

const JobGridSection = () => {
  // Mock array replicating the exact cards from your design image
  const jobs = Array(6).fill({
    title: "Frontend Developer",
    description:
      "Showcase your commitment to diversity and inclusion by highlighting initiatives",
    location: "New York, USA",
    type: "Hybrid",
    salary: "€25–€40/hour",
  });

  return (
    <section className="w-full bg-[#0a0a0c] text-white py-24 px-6 border-t border-zinc-900/40">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        {/* Top Minimal Purple Subheading Tag */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-500 uppercase">
            Smart Job Discovery
          </span>
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
        </div>

        {/* Section Main Header Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center text-white mb-16 max-w-2xl leading-[1.15]">
          The roles you'd never find by searching
        </h2>

        {/* Grid Container Board */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="bg-[#111113] border border-zinc-900 rounded-[24px] p-8 flex flex-col justify-between items-start min-h-[320px] transition-all duration-300 hover:border-zinc-800 hover:bg-[#131316] group"
            >
              {/* Upper Block: Information Content */}
              <div className="w-full flex flex-col gap-3">
                <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-indigo-400 transition-colors">
                  {job.title}
                </h3>
                <p className="text-[14px] text-zinc-500 font-normal leading-relaxed">
                  {job.description}
                </p>
              </div>

              {/* Middle Block: Dynamic Metric Attribute Pills */}
              <div className="w-full flex flex-wrap gap-2.5 my-6">
                {/* Location Pill */}
                <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/30 rounded-full px-3.5 py-1 text-xs font-medium text-zinc-400">
                  <span className="text-[10px] text-pink-400">📍</span>
                  {job.location}
                </div>

                {/* Mode Type Pill */}
                <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/30 rounded-full px-3.5 py-1 text-xs font-medium text-zinc-400">
                  <span className="text-[10px] text-pink-400">☕</span>
                  {job.type}
                </div>

                {/* Financial Compensation Rate Pill */}
                <div className="inline-flex items-center gap-1.5 bg-zinc-900/60 border border-zinc-800/30 rounded-full px-3.5 py-1 text-xs font-medium text-zinc-400 w-full sm:w-auto">
                  <span className="text-[10px] text-pink-400">🪙</span>
                  {job.salary}
                </div>
              </div>

              {/* Lower Block: Redirection Anchor Trigger */}
              <Link
                href="#"
                className="inline-flex items-center gap-2 text-sm font-medium text-white hover:text-indigo-400 transition-colors pt-2"
              >
                Apply Now
                <ArrowRight
                  width={16}
                  height={16}
                  className="transform transition-transform group-hover:translate-x-1"
                />
              </Link>
            </div>
          ))}
        </div>

        {/* Bottom Central Section Redistribution CTA Button */}
        <Button
          as={Link}
          href="/jobs"
          className="bg-white text-black font-semibold px-8 h-12 rounded-xl shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all text-sm transform active:scale-95"
        >
          View all job open
        </Button>
      </div>
    </section>
  );
};

export default JobGridSection;
