"use client";

import Link from "next/link";
import { useState } from "react";

type AuthTab = "email" | "phone";

const socialProviders = [
  { id: "sso", label: "SSO", icon: "🔑" },
  { id: "apple", label: "Apple", icon: "" },
  { id: "google", label: "Google", icon: "G" },
  { id: "facebook", label: "Facebook", icon: "f" },
  { id: "microsoft", label: "Microsoft", icon: "⊞" },
];

export default function SignInPage() {
  const [tab, setTab] = useState<AuthTab>("email");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [smsCode, setSmsCode] = useState("");
  const [staySignedIn, setStaySignedIn] = useState(false);
  const [error, setError] = useState("");

  function handleEmailSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email || !password) {
      setError("Wrong user name or password. Try signing in again.");
      return;
    }
    setError("");
    alert(`Signing in as ${email}`);
  }

  function handlePhoneSubmit(e: React.FormEvent) {
    e.preventDefault();
    alert(`Signing in with phone: ${phone}`);
  }

  return (
    <div className="flex min-h-[calc(100vh-300px)] items-start justify-center bg-white px-5 pb-16 pt-14 lg:pt-20">
      <div className="w-full max-w-[460px]">
        {/* Heading */}
        <h1 className="text-[38px] font-bold leading-[1.1] text-[#1F2937]">Sign In</h1>

        {/* Error */}
        {error && (
          <div className="mt-4 rounded-[12px] border border-red-200 bg-red-50 px-4 py-3 text-[14px] text-[#C62828]" role="alert" aria-live="assertive">
            {error}
          </div>
        )}

        {/* Tab switch: Email / Phone */}
        <div className="mt-6 flex gap-1 rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-[#F8FAFC] p-1">
          <button
            type="button"
            onClick={() => { setTab("email"); setError(""); }}
            className={`flex-1 rounded-[10px] py-2.5 text-[14px] font-medium transition-colors ${tab === "email" ? "bg-white text-[#1F2937] shadow-sm" : "text-[#4B5563]"}`}
          >
            Sign In
          </button>
          <button
            type="button"
            onClick={() => { setTab("phone"); setError(""); }}
            className={`flex-1 rounded-[10px] py-2.5 text-[14px] font-medium transition-colors ${tab === "phone" ? "bg-white text-[#1F2937] shadow-sm" : "text-[#4B5563]"}`}
          >
            Phone Number Sign In
          </button>
        </div>

        {tab === "email" ? (
          <>
            {/* Email/Password form */}
            <form onSubmit={handleEmailSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="email" className="mb-1.5 block text-[14px] font-medium text-[#1F2937]">
                  Email Address
                </label>
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="h-[48px] w-full rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-white px-4 text-[16px] text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#0B5CFF] focus:outline-none focus:ring-2 focus:ring-[#0B5CFF]/20"
                />
              </div>

              <div>
                <div className="mb-1.5 flex items-center justify-between">
                  <label htmlFor="password" className="text-[14px] font-medium text-[#1F2937]">
                    Password
                  </label>
                  <Link href="/signin" className="text-[13px] font-medium text-[#0B5CFF] hover:underline">
                    Forgot?
                  </Link>
                </div>
                <input
                  id="password"
                  type="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="h-[48px] w-full rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-white px-4 text-[16px] text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#0B5CFF] focus:outline-none focus:ring-2 focus:ring-[#0B5CFF]/20"
                />
              </div>

              <button
                type="submit"
                className="h-[48px] w-full rounded-[12px] bg-[#0B5CFF] text-[16px] font-semibold text-white transition-colors hover:bg-[#094FE0]"
              >
                Sign In
              </button>
            </form>

            {/* Stay signed in */}
            <label className="mt-4 flex items-center gap-2 text-[13px] text-[#4B5563]">
              <input
                type="checkbox"
                checked={staySignedIn}
                onChange={(e) => setStaySignedIn(e.target.checked)}
                className="h-4 w-4 rounded border-[rgba(17,24,39,0.10)]"
              />
              Stay signed in
            </label>

            {/* Divider */}
            <div className="my-6 flex items-center gap-3">
              <div className="h-px flex-1 bg-[rgba(17,24,39,0.10)]" />
              <span className="text-[13px] text-[#4B5563]">or sign in with</span>
              <div className="h-px flex-1 bg-[rgba(17,24,39,0.10)]" />
            </div>

            {/* Social sign-in grid */}
            <div className="flex justify-center gap-3">
              {socialProviders.map((p) => (
                <button
                  key={p.id}
                  type="button"
                  className="flex h-[56px] w-[72px] flex-col items-center justify-center gap-1 rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-white text-[#4B5563] transition-all hover:-translate-y-0.5 hover:border-[rgba(11,92,255,0.18)] hover:shadow-[0_8px_24px_rgba(15,23,42,0.08)]"
                >
                  <span className="text-[18px]">{p.icon}</span>
                  <span className="text-[11px] font-medium">{p.label}</span>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Phone number sign-in */}
            <form onSubmit={handlePhoneSubmit} className="mt-6 space-y-4">
              <div>
                <label htmlFor="phone" className="mb-1.5 block text-[14px] font-medium text-[#1F2937]">
                  Phone Number
                </label>
                <input
                  id="phone"
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter your phone number"
                  className="h-[48px] w-full rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-white px-4 text-[16px] text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#0B5CFF] focus:outline-none focus:ring-2 focus:ring-[#0B5CFF]/20"
                />
              </div>

              <div>
                <label htmlFor="captcha" className="mb-1.5 block text-[14px] font-medium text-[#1F2937]">
                  Captcha Code
                </label>
                <div className="flex gap-3">
                  <div className="flex h-[48px] w-[120px] shrink-0 items-center justify-center rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-[#F8FAFC] text-[18px] font-bold tracking-[0.2em] text-[#4B5563]">
                    A7x3K
                  </div>
                  <input
                    id="captcha"
                    type="text"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    placeholder="Enter captcha"
                    className="h-[48px] flex-1 rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-white px-4 text-[16px] text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#0B5CFF] focus:outline-none focus:ring-2 focus:ring-[#0B5CFF]/20"
                  />
                </div>
                <button type="button" className="mt-1 text-[13px] text-[#0B5CFF] hover:underline">
                  Play Audio
                </button>
              </div>

              <div>
                <label htmlFor="sms-code" className="mb-1.5 block text-[14px] font-medium text-[#1F2937]">
                  SMS Verification Code
                </label>
                <div className="flex gap-3">
                  <input
                    id="sms-code"
                    type="text"
                    value={smsCode}
                    onChange={(e) => setSmsCode(e.target.value)}
                    placeholder="Enter code"
                    className="h-[48px] flex-1 rounded-[12px] border border-[rgba(17,24,39,0.10)] bg-white px-4 text-[16px] text-[#1F2937] placeholder:text-[#9CA3AF] focus:border-[#0B5CFF] focus:outline-none focus:ring-2 focus:ring-[#0B5CFF]/20"
                  />
                  <button type="button" className="h-[48px] shrink-0 rounded-[12px] border border-[#0B5CFF] px-5 text-[14px] font-semibold text-[#0B5CFF] hover:bg-[#0B5CFF]/5">
                    Send Code
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="h-[48px] w-full rounded-[12px] bg-[#0B5CFF] text-[16px] font-semibold text-white transition-colors hover:bg-[#094FE0]"
              >
                Sign In
              </button>
            </form>

            {/* Stay signed in */}
            <label className="mt-4 flex items-center gap-2 text-[13px] text-[#4B5563]">
              <input
                type="checkbox"
                checked={staySignedIn}
                onChange={(e) => setStaySignedIn(e.target.checked)}
                className="h-4 w-4 rounded border-[rgba(17,24,39,0.10)]"
              />
              Stay signed in
            </label>
          </>
        )}

        {/* Bottom links */}
        <div className="mt-8 space-y-3 text-center text-[14px]">
          <p className="text-[#4B5563]">
            New to Zoom?{" "}
            <Link href="/signup" className="font-semibold text-[#0B5CFF] hover:underline">
              Sign Up Free
            </Link>
          </p>
          <p className="text-[13px] text-[#9CA3AF]">
            By signing in, I agree to the{" "}
            <Link href="/trust" className="text-[#0B5CFF] hover:underline">Privacy Policy</Link>
            {" "}and{" "}
            <Link href="/trust" className="text-[#0B5CFF] hover:underline">Terms of Service</Link>.
          </p>
        </div>
      </div>
    </div>
  );
}
