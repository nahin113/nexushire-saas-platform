"use client";
import { Button, Link } from "@heroui/react";

const CTASection = () => {
  return (
    <section className="relative w-full bg-[#0a0a0c] text-white overflow-hidden py-32 px-6 flex flex-col items-center justify-center min-h-[60vh]">
      {/* Master Vector Dome Background Layer
        Perfect positioning matching the curve structure from the reference design.
      */}
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1400px] h-[700px] bg-bottom bg-no-repeat bg-contain opacity-70 pointer-events-none z-0"
        style={{
          backgroundImage: "url('/images/cta-bg.png')",
          maskImage:
            "radial-gradient(circle at center bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
          WebkitMaskImage:
            "radial-gradient(circle at center bottom, rgba(0,0,0,1) 30%, rgba(0,0,0,0.5) 60%, rgba(0,0,0,0) 100%)",
        }}
      />

      {/* Subtle Blue/Purple Ambient Light Flare underneath the dome layout */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[250px] bg-gradient-to-t from-indigo-600/15 to-transparent blur-[120px] pointer-events-none rounded-full z-0" />

      {/* Core Typography & Conversion Button Container */}
      <div className="max-w-3xl w-full mx-auto flex flex-col items-center text-center relative z-10">
        {/* Section Action Catchphrase */}
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-medium tracking-tight text-white mb-6 max-w-2xl leading-[1.15]">
          Your next role is already looking for you
        </h2>

        {/* Subtitle Value Proposition Statement */}
        <p className="text-zinc-500 text-base sm:text-lg max-w-xl font-normal leading-relaxed mb-12">
          Build a profile in three minutes. The matches start arriving tomorrow
          morning.
        </p>

        {/* Action Call Button Matrix Panel */}
        <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
          {/* Primary Action Button */}
          <Button
            as={Link}
            href="/sign-up"
            className="w-full sm:w-auto bg-white text-black font-semibold px-8 h-12 rounded-xl shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all text-sm transform active:scale-95"
          >
            Create a free account
          </Button>

          {/* Secondary Action Link Button */}
          <Button
            as={Link}
            href="/pricing"
            className="w-full sm:w-auto bg-[#111113]/40 text-zinc-300 font-semibold px-8 h-12 rounded-xl border border-zinc-800/80 backdrop-blur-sm hover:bg-zinc-900/60 hover:text-white transition-all text-sm transform active:scale-95"
          >
            View pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
