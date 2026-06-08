"use client";
import { useState } from "react";
import { Link, Button } from "@heroui/react";
import { authClient } from "@/lib/auth-client";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session} = authClient.useSession()
  const user = session?.user
  console.log(user)
  const handleSignOut = async ()=> {
    await authClient.signOut()
  }

  return (
    <nav className="sticky top-0 z-40 w-full bg-[#121212] text-white">
      <header className="flex h-20 items-center justify-between px-8 max-w-7xl mx-auto">
        {/* Left Side: Logo & Mobile Toggle */}
        <div className="flex items-center gap-4">
          <button
            className="md:hidden text-zinc-400 hover:text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span className="sr-only">Menu</span>
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Brand/Logo Area */}
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
        </div>

        {/* Right Side: Primary CTA Action Button */}
        <div className="hidden md:flex items-center">
          <div className="hidden md:flex items-center bg-zinc-900/80 border border-zinc-800/50 backdrop-blur-md rounded-full px-6 py-2 shadow-inner">
            <ul className="flex items-center gap-8">
              <li>
                <Link
                  href="/jobs"
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link
                  href="/companies"
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Company
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm font-medium text-zinc-300 hover:text-white transition-colors"
                >
                  Pricing
                </Link>
              </li>
            </ul>

            {/* Elegant Thin Separator Line from Image */}
            <div className="h-4 w-[1px] bg-zinc-800 mx-6" />
            {user ? (
              <>
                <Button variant="ghost" onClick={handleSignOut}>
                  Logout
                </Button>
              </>
            ) : (
              <>
                <Link
                  href="/auth/sign-in"
                  className="text-sm font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
                >
                  Sign In
                </Link>
              </>
            )}
          </div>
          <Button className="bg-white font-semibold px-6 py-5 rounded-xl shadow-xl shadow-white/5 hover:bg-zinc-100 transition-all text-sm transform active:scale-95">
            <Link href="/auth/sign-up" className="text-black no-underline">
              Get Started
            </Link>
          </Button>
        </div>
      </header>

      {/* Mobile Dropped Down Menu View */}
      {isMenuOpen && (
        <div className="border-t border-zinc-900 bg-[#121212] md:hidden animate-in fade-in slide-in-from-top-5 duration-200">
          <ul className="flex flex-col gap-2 p-6">
            <li>
              <Link
                href="/jobs"
                className="block py-2 text-zinc-400 hover:text-white"
              >
                Browse Jobs
              </Link>
            </li>
            <li>
              <Link
                href="/companies"
                className="block py-2 text-zinc-400 hover:text-white"
              >
                Company
              </Link>
            </li>
            <li>
              <Link
                href="/pricing"
                className="block py-2 text-zinc-400 hover:text-white"
              >
                Pricing
              </Link>
            </li>
            <hr className="border-zinc-900 my-2" />
            <li>
              <Link href="/auth/sign-in" className="block py-2 text-indigo-400">
                Sign In
              </Link>
            </li>
            <li className="pt-2">
              <Button
                as={Link}
                href="/auth/sign-up"
                className="w-full bg-white text-black font-semibold py-4 rounded-xl"
              >
                Get Started
              </Button>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
