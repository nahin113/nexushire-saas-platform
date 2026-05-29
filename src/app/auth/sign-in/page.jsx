"use client";
import { useState } from "react";
import { Button, Link } from "@heroui/react";
import { ArrowLeft } from "@gravity-ui/icons";
import { authClient } from "@/lib/auth-client";
import { redirect, useRouter } from "next/navigation";

const SignInPage = () => {
    const router = useRouter()
  const [isVisible, setIsVisible] = useState(false);
  const toggleVisibility = () => setIsVisible(!isVisible);
const onSubmit = async (e)=> {
    e.preventDefault()
    const formData = new FormData(e.currentTarget)
    const user = Object.fromEntries(formData.entries())
    console.log(user)

    try {
const { data, error } = await authClient.signIn.email(
      {
        email : user.email,
        password : user.password,
        rememberMe: true,
      }
    );

    if(error) {
        alert("Unexpecter Error Occured")
    }

    alert("success")
    router.push("/")
    router.refresh()

    } catch(err) {
        console.log(err)
    }
}


  return (
    <main className="w-full min-h-screen bg-[#0a0a0c] text-white flex flex-col items-center justify-center px-6 py-12 relative overflow-hidden">
      {/* Decorative Ambient Background Glows */}
      <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-purple-900/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-indigo-900/10 blur-[150px] rounded-full pointer-events-none" />

      {/* Top Left: Back to Home Link Anchor */}
      <div className="absolute top-8 left-8 z-20">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-white transition-colors group"
        >
          <ArrowLeft
            width={16}
            height={16}
            className="transform transition-transform group-hover:-translate-x-0.5"
          />
          Back to home
        </Link>
      </div>

      {/* Main Container Card */}
      <div className="w-full max-w-[440px] bg-[#111113]/60 border border-zinc-900/80 backdrop-blur-xl rounded-[28px] p-10 shadow-2xl relative z-10 flex flex-col items-center">
        {/* Brand/Logo Area */}
        <Link
          href="/"
          className="flex items-center gap-3 font-semibold text-white text-xl tracking-tight mb-8"
        >
          <div className="h-9 w-9 rounded-xl bg-gradient-to-tr from-indigo-500 via-purple-500 to-pink-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <span className="text-white font-bold text-sm">N</span>
          </div>
          <span className="bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
            Nexus<span className="text-white font-bold">Hire</span>
          </span>
        </Link>

        {/* Text Header Headers */}
        <div className="text-center mb-8">
          <h1 className="text-2xl font-semibold tracking-tight text-white mb-2">
            Welcome back
          </h1>
          <p className="text-sm text-zinc-500">
            Enter your details to log in to your account
          </p>
        </div>

        {/* Sign In Interactive Form Block */}
        <form
          onSubmit={onSubmit}
          className="w-full flex flex-col gap-5"
        >
          {/* Email Input Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <label className="text-xs font-semibold text-zinc-400 tracking-wide">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              placeholder="name@company.com"
              className="w-full bg-[#141416]/50 border border-zinc-800/80 hover:border-zinc-700 focus:outline-none focus:border-indigo-500/80 h-12 transition-all rounded-xl px-4 text-white placeholder:text-zinc-600 text-sm"
            />
          </div>

          {/* Password Input Field */}
          <div className="flex flex-col gap-1.5 w-full">
            <div className="flex items-center justify-between">
              <label className="text-xs font-semibold text-zinc-400 tracking-wide">
                Password
              </label>
              <Link
                href="/forgot-password"
                className="text-xs font-medium text-indigo-400 hover:text-indigo-300 transition-colors"
              >
                Forgot password?
              </Link>
            </div>

            <div className="relative w-full flex items-center">
              <input
                type={isVisible ? "text" : "password"}
                name="password"
                placeholder="••••••••••••"
                className="w-full bg-[#141416]/50 border border-zinc-800/80 hover:border-zinc-700 focus:outline-none focus:border-indigo-500/80 h-12 transition-all rounded-xl px-4 pr-12 text-white placeholder:text-zinc-600 text-sm"
              />

              {/* Floating Visibility Switcher Icon */}
              <button
                className="absolute right-4 z-20 focus:outline-none text-zinc-500 hover:text-zinc-300 transition-colors"
                type="button"
                onClick={toggleVisibility}
              >
                {isVisible ? (
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
                      d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"
                    />
                  </svg>
                ) : (
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
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>

          {/* Conversion Call Submission Button */}
          <Button
            type="submit"
            className="w-full bg-white text-black font-semibold h-12 rounded-xl shadow-xl shadow-white/5 hover:bg-zinc-200 transition-all text-sm mt-2 transform active:scale-[0.98]"
          >
            Sign In
          </Button>
        </form>

        {/* Separator / Divider Split Element */}
        <div className="w-full flex items-center gap-4 my-6">
          <div className="h-[1px] bg-zinc-900 w-full" />
          <span className="text-[10px] uppercase font-bold tracking-widest text-zinc-600">
            or
          </span>
          <div className="h-[1px] bg-zinc-900 w-full" />
        </div>

        {/* Third-Party Single Sign On Authentication Row */}
        <Button
          variant="bordered"
          radius="xl"
          className="w-full h-12 border-zinc-800 text-zinc-300 font-medium hover:bg-[#141416]/50 hover:text-white transition-all text-sm flex items-center justify-center gap-3"
        >
          <svg
            className="w-4 h-4 flex-shrink-0"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              fill="#4285F4"
            />
            <path
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              fill="#34A853"
            />
            <path
              d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
              fill="#FBBC05"
            />
            <path
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
              fill="#EA4335"
            />
          </svg>
          <span>Continue with Google</span>
        </Button>

        {/* Alternate Navigation Flow Routing Trigger */}
        <p className="text-xs text-zinc-500 font-normal text-center mt-8">
          Don't have an account?{" "}
          <Link
            href="/sign-up"
            className="text-xs font-semibold text-indigo-400 hover:text-indigo-300 transition-colors"
          >
            Create account
          </Link>
        </p>
      </div>
    </main>
  );
};

export default SignInPage;
