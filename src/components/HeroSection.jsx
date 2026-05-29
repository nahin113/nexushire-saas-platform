"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";
import {
  Magnifier,
  Compass,
  Briefcase,
  Layers,
  Person,
  Star,
} from "@gravity-ui/icons";
import TypewriterHeader from "@/ui/TypewriterHeader";

const HeroSection = () => {
  const [jobQuery, setJobQuery] = useState("");
  const [locationQuery, setLocationQuery] = useState("");

  return (
    <section className="relative w-full bg-[#0a0a0c] text-white overflow-hidden pt-24 pb-32 px-6 flex flex-col items-center justify-center min-h-screen">
      {/* Full-Section Globe Background Layer */}
      <div
        className="absolute inset-0 bg-center bg-no-repeat bg-cover opacity-25 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/globe.png')",
          maskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 85%)",
          WebkitMaskImage:
            "radial-gradient(circle at center, rgba(0,0,0,1) 20%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0) 85%)",
        }}
      />

      {/* Background Decorative Ambient Glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-gradient-to-t from-indigo-600/10 to-transparent blur-[140px] pointer-events-none rounded-full z-0" />

      {/* Minimalistic Ambient Particle Highlights */}
      <div className="absolute inset-0 bg-[radial-gradient(#ffffff05_1px,transparent_1px)] [background-size:24px_24px] opacity-60 pointer-events-none z-0" />

      {/* Main Hero Form and Heading Container */}
      <div className="max-w-4xl w-full mx-auto flex flex-col items-center text-center relative z-10 mb-28">
        {/* Top Stats Pill Badge Layout */}
        <div className="flex items-center gap-2 bg-zinc-900/40 border border-zinc-800/40 backdrop-blur-md px-4 py-1.5 rounded-full mb-8 shadow-lg">
          <span className="text-base">💼</span>
          <p className="text-xs font-semibold tracking-widest text-zinc-400 uppercase">
            <span className="text-white font-bold">50,000+</span> New Jobs This
            Month
          </p>
        </div>

        {/* Hero Main Catchphrase Heading */}
        <TypewriterHeader text="Find Your Dream Job Today"></TypewriterHeader>

        {/* Sub-headline Paragraph */}
        <p className="text-zinc-500 text-base sm:text-lg max-w-2xl font-normal leading-relaxed mb-12">
          NexusHire connects top talent with world-class companies. Browse
          thousands of curated opportunities and land your next role — faster.
        </p>

        {/* Core Double-Input Search Capsule Engine */}
        <div className="w-full max-w-3xl bg-[#141416]/90 border border-zinc-800/80 rounded-full p-2 flex flex-col sm:flex-row items-center gap-2 shadow-2xl backdrop-blur-xl mb-6">
          {/* Column Input 1: Job Title / Keyword */}
          <div className="w-full flex items-center gap-3 pl-4 py-1">
            <Magnifier
              className="text-zinc-500 flex-shrink-0"
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="Job title, skill or company"
              value={jobQuery}
              onChange={(e) => setJobQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-zinc-600 font-normal"
            />
          </div>

          {/* Thin Center Partition Boundary Line */}
          <div className="hidden sm:block h-6 w-[1px] bg-zinc-800/80 mx-2" />

          {/* Column Input 2: Location / Remote */}
          <div className="w-full flex items-center gap-3 pl-4 sm:pl-2 py-1">
            <Compass
              className="text-zinc-500 flex-shrink-0"
              width={18}
              height={18}
            />
            <input
              type="text"
              placeholder="Location or Remote"
              value={locationQuery}
              onChange={(e) => setLocationQuery(e.target.value)}
              className="w-full bg-transparent border-none outline-none text-sm text-white placeholder-zinc-600 font-normal"
            />
          </div>

          {/* Indigo Action Submission Trigger Button */}
          <Button
            isIconOnly
            radius="full"
            className="w-full sm:w-12 h-11 bg-indigo-600 hover:bg-indigo-500 transition-all text-white shadow-lg shadow-indigo-600/20 active:scale-95 flex-shrink-0"
            aria-label="Search opportunities"
          >
            <Magnifier width={18} height={18} />
          </Button>
        </div>

        {/* Trending Keywords */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm">
          <span className="text-zinc-600 font-normal">Trending Position</span>

          <Link
            href="/jobs?search=Product+Designer"
            className="px-4 py-1 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-white text-xs font-medium border border-zinc-800/40 transition-all"
          >
            Product Designer
          </Link>

          <Link
            href="/jobs?search=AI+Engineering"
            className="px-4 py-1 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-white text-xs font-medium border border-zinc-800/40 transition-all"
          >
            AI Engineering
          </Link>

          <Link
            href="/jobs?search=Devops+Engineer"
            className="px-4 py-1 rounded-full bg-zinc-900/50 hover:bg-zinc-800/80 text-zinc-400 hover:text-white text-xs font-medium border border-zinc-800/40 transition-all"
          >
            Dev-ops Engineer
          </Link>
        </div>
      </div>

      {/* --- INTEGRATED STATS SUBSECTION --- */}
      <div className="w-full pt-80 max-w-7xl mx-auto flex flex-col items-center relative z-10">
        {/* Stats Section Subheading Text */}
        <h2 className="text-2xl sm:text-3xl font-medium tracking-tight text-center text-zinc-300 max-w-xl leading-relaxed mb-16 relative z-10">
          Assisting over{" "}
          <span className="text-white font-semibold">15,000 job seekers</span>{" "}
          find their dream positions.
        </h2>

        {/* 4-Column Metric Card Board Layout */}
        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 relative z-10">
          {/* Card 1: Active Jobs */}
          <div className="bg-[#111113]/60 backdrop-blur-md border border-zinc-800/40 rounded-[20px] p-8 flex flex-col gap-8 transition-all hover:border-zinc-800">
            <div className="text-zinc-400">
              <Briefcase width={20} height={20} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                50K
              </span>
              <span className="text-sm text-zinc-500 font-medium">
                Active Jobs
              </span>
            </div>
          </div>

          {/* Card 2: Companies */}
          <div className="bg-[#111113]/60 backdrop-blur-md border border-zinc-800/40 rounded-[20px] p-8 flex flex-col gap-8 transition-all hover:border-zinc-800">
            <div className="text-zinc-400">
              <Layers width={20} height={20} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                12K
              </span>
              <span className="text-sm text-zinc-500 font-medium">
                Companies
              </span>
            </div>
          </div>

          {/* Card 3: Job Seekers */}
          <div className="bg-[#111113]/60 backdrop-blur-md border border-zinc-800/40 rounded-[20px] p-8 flex flex-col gap-8 transition-all hover:border-zinc-800">
            <div className="text-zinc-400">
              <Person width={20} height={20} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                2M
              </span>
              <span className="text-sm text-zinc-500 font-medium">
                Job Seekers
              </span>
            </div>
          </div>

          {/* Card 4: Satisfaction Rate */}
          <div className="bg-[#111113]/60 backdrop-blur-md border border-zinc-800/40 rounded-[20px] p-8 flex flex-col gap-8 transition-all hover:border-zinc-800">
            <div className="text-zinc-400">
              <Star width={20} height={20} />
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-4xl font-semibold tracking-tight text-white">
                97%
              </span>
              <span className="text-sm text-zinc-500 font-medium">
                Satisfaction Rate
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
