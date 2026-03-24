"use client";

import Link from "next/link";
import { useState } from "react";

const benefits = [
  "Get up to 40 minutes and 100 participants per meeting",
  "Share up to 10 Docs",
  "Get 3 editable whiteboards",
  "Unlimited instant messages",
  "Create up to 5 two-minute video messages",
];

export default function SignUpPage() {
  const [step, setStep] = useState<"age" | "form">("age");
  const [birthYear, setBirthYear] = useState("");
  const [loading, setLoading] = useState(false);

  function handleAgeSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!birthYear || parseInt(birthYear) > 2010) {
      alert("You must be at least 16 years old.");
      return;
    }
    setStep("form");
  }

  function handleFormSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      alert("Account created! Check your email to verify.");
      setLoading(false);
    }, 800);
  }

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Top bar */}
      <header className="flex h-[64px] items-center justify-between px-[54px]">
        <Link href="/" className="text-[28px] font-bold tracking-[-0.04em] text-[#0d6bde]">
          zoom
        </Link>
        <div className="flex items-center gap-4 text-[14px]">
          <span className="text-[#232333]">
            Already have an account?{" "}
            <Link href="/signin" className="font-medium text-[#0d6bde] hover:underline">Sign In</Link>
          </span>
          <Link href="/support" className="text-[#0d6bde] hover:underline">Support</Link>
          <button type="button" className="text-[#0d6bde]">English ▾</button>
        </div>
      </header>

      {/* Split layout */}
      <div className="flex flex-1" style={{ background: "linear-gradient(to right, #f7f9fa 0%, #f7f9fa 38.5%, #ffffff 38.5%, #ffffff 100%)" }}>
        {/* Left panel — promotional image + benefits */}
        <div className="hidden w-[38.5%] shrink-0 flex-col items-center justify-center px-10 lg:flex">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/auth/signin-promo.png"
            alt="Get the most out of Zoom"
            className="mb-6 h-auto w-full max-w-[460px]"
          />

          {/* Benefits card */}
          <div className="w-full max-w-[420px] rounded-2xl bg-white p-8 shadow-sm">
            <h3 className="text-[20px] font-semibold text-[#00031f]">Create your free Basic account</h3>
            <ul className="mt-5 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">✓</span>
                  <span className="text-[14px] text-[#232333]">{b}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right panel — form */}
        <div className="flex flex-1 flex-col items-center bg-white pt-[60px]">
          <div className="w-full max-w-[360px]">
            {step === "age" ? (
              <>
                <h1 className="text-center text-[32px] font-medium leading-[40px] text-[#222325]">
                  Verify your age
                </h1>
                <p className="mt-3 text-center text-[14px] text-[#686f79]">
                  Please confirm your birth year. This data will not be stored.
                </p>

                <form onSubmit={handleAgeSubmit} className="mt-8">
                  <input
                    type="number"
                    value={birthYear}
                    onChange={(e) => setBirthYear(e.target.value)}
                    placeholder="Birth Year"
                    min="1900"
                    max="2025"
                    required
                    className="h-[48px] w-full rounded-[8px] border border-[#c1c6ce] bg-white px-3 text-[16px] text-[#222325] placeholder:text-[#6e7680] focus:border-[#4b96f1] focus:outline-none"
                  />
                  <button
                    type="submit"
                    disabled={!birthYear}
                    className={`mt-4 h-[40px] w-full rounded-[10px] text-[16px] font-medium transition-colors ${
                      birthYear
                        ? "bg-[#0d6bde] text-white hover:bg-[#0b5cff]"
                        : "bg-[rgba(82,82,128,0.09)] text-[#909096]"
                    }`}
                  >
                    Continue
                  </button>
                </form>
              </>
            ) : (
              <>
                <h1 className="text-center text-[32px] font-medium leading-[40px] text-[#222325]">
                  Create your free account
                </h1>

                <form onSubmit={handleFormSubmit} className="mt-8 space-y-4">
                  <input
                    type="email"
                    required
                    placeholder="Email address"
                    className="h-[48px] w-full rounded-[8px] border border-[#c1c6ce] bg-white px-3 text-[16px] text-[#222325] placeholder:text-[#6e7680] focus:border-[#4b96f1] focus:outline-none"
                  />
                  <div className="grid grid-cols-2 gap-3">
                    <input
                      type="text"
                      required
                      placeholder="First name"
                      className="h-[48px] w-full rounded-[8px] border border-[#c1c6ce] bg-white px-3 text-[16px] text-[#222325] placeholder:text-[#6e7680] focus:border-[#4b96f1] focus:outline-none"
                    />
                    <input
                      type="text"
                      required
                      placeholder="Last name"
                      className="h-[48px] w-full rounded-[8px] border border-[#c1c6ce] bg-white px-3 text-[16px] text-[#222325] placeholder:text-[#6e7680] focus:border-[#4b96f1] focus:outline-none"
                    />
                  </div>
                  <input
                    type="password"
                    required
                    minLength={8}
                    placeholder="Password"
                    className="h-[48px] w-full rounded-[8px] border border-[#c1c6ce] bg-white px-3 text-[16px] text-[#222325] placeholder:text-[#6e7680] focus:border-[#4b96f1] focus:outline-none"
                  />

                  <label className="flex items-start gap-2 text-[13px] text-[#686f79]">
                    <input type="checkbox" required className="mt-0.5 rounded" />
                    <span>
                      I agree to Zoom&apos;s{" "}
                      <Link href="/trust" className="text-[#0d6bde] hover:underline">Terms of Service</Link>
                      {" "}and{" "}
                      <Link href="/trust" className="text-[#0d6bde] hover:underline">Privacy Policy</Link>
                    </span>
                  </label>

                  <button
                    type="submit"
                    disabled={loading}
                    className="h-[40px] w-full rounded-[10px] bg-[#0d6bde] text-[16px] font-medium text-white hover:bg-[#0b5cff] disabled:opacity-60"
                  >
                    {loading ? "Creating account..." : "Create Account"}
                  </button>
                </form>

                {/* Separator */}
                <div className="my-6 flex items-center gap-3">
                  <div className="h-px flex-1 bg-[#e0e0e0]" />
                  <span className="text-[14px] text-[#686f79]">Or sign up with</span>
                  <div className="h-px flex-1 bg-[#e0e0e0]" />
                </div>

                <div className="flex justify-center gap-4">
                  {["Google", "Apple", "Facebook"].map((p) => (
                    <button
                      key={p}
                      type="button"
                      className="flex w-[80px] flex-col items-center gap-2 rounded-lg py-2 text-[14px] text-[#686f79] hover:bg-[#f5f5f5]"
                    >
                      <span className="flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#e0e0e0] text-[16px]">
                        {p[0]}
                      </span>
                      {p}
                    </button>
                  ))}
                </div>
              </>
            )}

            {/* Footer */}
            <div className="mt-10 text-center text-[14px] text-[#686f79]">
              <Link href="/support" className="text-[#0d6bde] hover:underline">Help</Link>
              <span className="mx-2">·</span>
              <Link href="/trust" className="text-[#0d6bde] hover:underline">Terms</Link>
              <span className="mx-2">·</span>
              <Link href="/trust" className="text-[#0d6bde] hover:underline">Privacy</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
