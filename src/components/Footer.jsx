"use client";
import { Link } from "@heroui/react";
import { LogoFacebook, LogoGithub, LogoLinkedin } from "@gravity-ui/icons";

const Footer = () => {
  return (
    <footer className="w-full bg-transparent text-[#a1a1aa] py-16 px-8 border-t border-zinc-900">
      <div className="max-w-7xl mx-auto">
        {/* Top Section: Brand Info & Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-4 pb-16">
          {/* Left Block: Logo and Tagline (Takes 5 columns on desktop) */}
          <div className="md:col-span-5 flex flex-col gap-5">
            <Link
              href="/"
              className="flex items-center gap-3 font-semibold text-white text-xl tracking-tight"
            >
              <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
                <span className="text-white font-bold text-sm">N</span>
              </div>
              <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
                Nexus<span className="text-white font-bold">Hire</span>
              </span>
            </Link>

            <p className="text-[15px] leading-relaxed max-w-sm text-zinc-500 font-normal">
              The AI-native career platform. Built for people who take their
              work seriously.
            </p>
          </div>

          {/* Right Block: 3 Navigation Link Columns (Takes 7 columns on desktop) */}
          <div className="md:col-span-7 grid grid-cols-3 gap-4">
            {/* Column 1: Product */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-indigo-500 tracking-wider">
                Product
              </h3>
              <ul className="flex flex-col gap-3 text-[14px]">
                <li>
                  <Link
                    href="/jobs"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Job discovery
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Worker AI
                  </Link>
                </li>
                <li>
                  <Link
                    href="/companies"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Companies
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Salary data
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 2: Navigations */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-indigo-500 tracking-wider">
                Navigations
              </h3>
              <ul className="flex flex-col gap-3 text-[14px]">
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Help center
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Career library
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Column 3: Resources */}
            <div className="flex flex-col gap-4">
              <h3 className="text-sm font-semibold text-indigo-500 tracking-wider">
                Resources
              </h3>
              <ul className="flex flex-col gap-3 text-[14px]">
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Brand Guideline
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-500 hover:text-white transition-colors"
                  >
                    Newsroom
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Section: Socials & Copyright Info */}
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between pt-8 border-t border-zinc-900/60 gap-6">
          {/* Social Icon Row */}
          <div className="flex items-center gap-3">
            {/* Facebook Container */}
            <Link
              href="https://facebook.com"
              isExternal
              className="h-10 w-10 bg-[#1c1c1e] hover:bg-zinc-800 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              <LogoFacebook width={18} height={18} />
            </Link>

            {/* Pinterest Container (Highlighted in image) */}
            <Link
              href="https://pinterest.com"
              isExternal
              className="h-10 w-10 bg-indigo-600 hover:bg-indigo-700 rounded-xl flex items-center justify-center text-white transition-colors shadow-md shadow-indigo-600/20"
            >
              <LogoGithub width={18} height={18} />
            </Link>

            {/* Linkedin Container */}
            <Link
              href="https://linkedin.com"
              isExternal
              className="h-10 w-10 bg-[#1c1c1e] hover:bg-zinc-800 rounded-xl flex items-center justify-center text-white transition-colors"
            >
              <LogoLinkedin width={18} height={18} />
            </Link>
          </div>

          {/* Copyright and Legal Links */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-8 text-xs text-zinc-600 font-medium w-full md:w-auto justify-between md:justify-end">
            <span>Copyright 2026 — NexusHire</span>
            <div className="flex items-center gap-4">
              <Link
                href="/terms"
                className="text-xs text-zinc-600 hover:text-white transition-colors"
              >
                Terms & Policy
              </Link>
              <span className="text-zinc-800">·</span>
              <Link
                href="/privacy"
                className="text-xs text-zinc-600 hover:text-white transition-colors"
              >
                Privacy Guideline
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
