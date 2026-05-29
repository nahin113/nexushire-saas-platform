"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";

const PricingSection = () => {
  const [billingPeriod, setBillingPeriod] = useState("monthly"); // "monthly" | "yearly"

  const plans = [
    {
      id: "starter",
      name: "Starter",
      priceMonthly: 0,
      priceYearly: 0,
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      cta: "Choose This Plan",
      highlighted: false,
      icon: (
        <svg
          className="w-4 h-4 text-pink-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"
          />
        </svg>
      ),
    },
    {
      id: "growth",
      name: "Growth",
      priceMonthly: 17,
      priceYearly: 12, // example discounted amount
      description: "Start building your insights hub:",
      features: [
        "Daily AI match brief (top 5)",
        "Verified salary bands",
        "Company insight dashboards",
        "1-click apply, unlimited",
      ],
      cta: "Choose This Plan",
      highlighted: true, // Replicates the centered prominent glowing look from the image
      icon: (
        <svg
          className="w-4 h-4 text-purple-400"
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
      id: "premium",
      name: "Premium",
      priceMonthly: 99,
      priceYearly: 79,
      description: "Start building your insights hub:",
      features: [
        "Everything in Pro",
        "Multi-profile career portfolios",
        "Shared talent rooms",
        "Recruiter view (read-only)",
      ],
      cta: "Choose This Plan",
      highlighted: false,
      icon: (
        <svg
          className="w-4 h-4 text-indigo-400"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13 10V3L4 14h7v7l9-11h-7z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#0a0a0c] text-white py-24 px-6 border-t border-zinc-900/40">
      <div className="max-w-6xl mx-auto flex flex-col items-center">
        {/* Top Accent Pill Category Subheading */}
        <div className="flex items-center gap-2 mb-4">
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
          <span className="text-[11px] font-bold tracking-[0.2em] text-indigo-500 uppercase">
            Pricing
          </span>
          <span className="w-1.5 h-1.5 bg-indigo-500 rounded-sm" />
        </div>

        {/* Section Catchphrase Title */}
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-medium tracking-tight text-center text-white mb-10 max-w-xl leading-[1.15]">
          Pay for the leverage, not the listings
        </h2>

        {/* Sliding Billing Interval Selector Pill */}
        <div className="bg-[#141416] border border-zinc-800/60 p-1 rounded-full flex items-center gap-1 mb-16 relative z-10 shadow-inner">
          <button
            onClick={() => setBillingPeriod("monthly")}
            className={`px-5 py-2 text-xs font-semibold rounded-full transition-all duration-200 ${
              billingPeriod === "monthly"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod("yearly")}
            className={`px-5 py-2 text-xs font-semibold rounded-full flex items-center gap-1.5 transition-all duration-200 ${
              billingPeriod === "yearly"
                ? "bg-white text-black shadow-md"
                : "text-zinc-400 hover:text-white"
            }`}
          >
            <span>Yearly</span>
            <span className="bg-pink-500 text-white font-bold px-1.5 py-0.5 rounded-full text-[9px] tracking-wide animate-pulse">
              25%
            </span>
          </button>
        </div>

        {/* 3-Card Interactive Grid Deck */}
        <div className="w-full grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-[24px] p-8 flex flex-col justify-between transition-all duration-300 relative ${
                plan.highlighted
                  ? "bg-[#121215] border-2 border-zinc-800/80 shadow-[0_0_40px_rgba(99,102,241,0.05)] scale-[1.02] z-10"
                  : "bg-[#0c0c0e]/40 border border-zinc-900 shadow-sm hover:border-zinc-800"
              }`}
            >
              <div>
                {/* Header Info Block */}
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-zinc-900/80 border border-zinc-800/50 rounded-lg flex items-center justify-center">
                      {plan.icon}
                    </div>
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-200">
                      {plan.name}
                    </h3>
                  </div>

                  {/* Financial Metrics */}
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-bold tracking-tight text-white">
                      $
                      {billingPeriod === "monthly"
                        ? plan.priceMonthly
                        : plan.priceYearly}
                    </span>
                    <span className="text-[11px] text-zinc-500 font-medium">
                      /month
                    </span>
                  </div>
                </div>

                <p className="text-xs font-semibold text-zinc-400 tracking-wide mb-6">
                  {plan.description}
                </p>

                {/* Features Checklist List Block */}
                <ul className="flex flex-col gap-4 mb-10">
                  {plan.features.map((feature, idx) => (
                    <li
                      key={idx}
                      className="flex items-start gap-3 text-xs font-medium text-zinc-500"
                    >
                      <div className="w-4 h-4 bg-zinc-900/60 border border-zinc-800/60 rounded flex items-center justify-center text-zinc-400 flex-shrink-0 text-[10px] font-bold">
                        ＋
                      </div>
                      <span className="leading-tight pt-0.5">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button Container */}
              <Button
                className={`w-full h-12 rounded-xl text-xs font-semibold transition-all duration-200 flex items-center justify-between px-6 ${
                  plan.highlighted
                    ? "bg-white text-black hover:bg-zinc-200"
                    : "bg-zinc-900/50 text-zinc-300 border border-zinc-800/60 hover:bg-zinc-800/80 hover:text-white"
                }`}
              >
                <span>{plan.cta}</span>
                <svg
                  className="w-3 h-3 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
