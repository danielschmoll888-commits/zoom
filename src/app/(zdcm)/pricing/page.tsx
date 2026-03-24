"use client";

import { useState } from "react";
import Link from "next/link";

const sidebarItems = [
  { id: "workplace", label: "Zoom Workplace", icon: "💼", active: true },
  { id: "phone", label: "Zoom Phone", icon: "📞", active: false },
  { id: "events", label: "Zoom Events", icon: "📡", active: false },
  { id: "contact-center", label: "Contact Center", icon: "📱", active: false },
  { id: "rooms", label: "Zoom Rooms", icon: "🏢", active: false },
  { id: "workvivo", label: "Workvivo", icon: "🔗", active: false },
];

const plans = [
  {
    name: "Basic",
    price: "Free",
    priceSuffix: "",
    cta: "Sign up",
    ctaPrimary: false,
    popular: false,
    features: [
      "Up to 100 participants",
      "40-minute group meetings",
      "Team Chat",
      "Mail & Calendar",
      "Whiteboard (3 boards)",
      "Clips (5 videos)",
      "Docs (10 docs)",
      "Local recording",
    ],
  },
  {
    name: "Pro",
    price: "$14.16",
    priceSuffix: "/month/user",
    cta: "Buy now",
    ctaPrimary: true,
    popular: true,
    features: [
      "Everything in Basic, plus:",
      "Up to 300 participants",
      "30-hour meetings",
      "5 GB cloud recording",
      "AI Companion",
      "Clips Plus",
      "Custom branding",
      "App integrations",
    ],
  },
  {
    name: "Business",
    price: "$18.33",
    priceSuffix: "/month/user",
    cta: "Buy now",
    ctaPrimary: true,
    popular: false,
    features: [
      "Everything in Pro, plus:",
      "Up to 300 participants",
      "Unlimited cloud recording",
      "Managed domains & SSO",
      "Company branding",
      "Admin analytics",
      "Phone support",
      "Whiteboard Plus",
    ],
  },
  {
    name: "Enterprise",
    price: "Talk to us",
    priceSuffix: "",
    cta: "Contact Sales",
    ctaPrimary: false,
    popular: false,
    features: [
      "Everything in Business, plus:",
      "Up to 1,000 participants",
      "Unlimited storage",
      "Dedicated success manager",
      "99.99% uptime SLA",
      "End-to-end encryption",
      "Data residency",
      "Premium 24/7 support",
    ],
  },
];

const addons = [
  { name: "Large Meeting", desc: "Increase capacity to 500 or 1,000 participants", price: "From $50 for 500 participants" },
  { name: "Cloud Storage", desc: "Additional cloud recording and clip storage", price: "From $10 for 100GB" },
  { name: "Translated Captions", desc: "Real-time translation in 35+ languages", price: "All paid plans" },
];

const faqs = [
  "What is a Licensed user and what is a Participant?",
  "How many people can use one meeting license?",
  "How many people can join Zoom Meetings license?",
  "What is the difference between monthly vs annual Zoom Plans?",
  "What is the difference between Zoom Phone and Zoom Meetings?",
  "Can I pay quarterly or for 6 months at a time for Zoom?",
  "How do I know which meeting plan is for me? Can I try paid plans?",
  "Where can I find Zoom $13.33 or its discounted plans?",
  "How does Zoom support contact work?",
];

export default function PricingPage() {
  const [activeSidebar, setActiveSidebar] = useState("workplace");

  return (
    <>
      {/* Pricing layout — Zoom: sidebar left + content right */}
      <div className="max-w-[1400px] mx-auto px-6 py-8 flex flex-col lg:flex-row gap-8">
        {/* Left sidebar — Zoom: product navigation */}
        <div className="lg:w-[200px] shrink-0">
          <p className="body-xs font-semibold uppercase tracking-wider text-[var(--zoom-gray-500)] mb-3">Explore pricing</p>
          <nav className="space-y-0.5">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSidebar(item.id)}
                className={`w-full flex items-center gap-2.5 px-3 py-2.5 rounded-lg text-sm transition-colors text-left ${
                  activeSidebar === item.id
                    ? "bg-[var(--zoom-blue-light)] text-[var(--zoom-midnight)] font-semibold"
                    : "text-[var(--zoom-gray-500)] hover:bg-[var(--zoom-gray-100)]"
                }`}
              >
                <span className="text-base">{item.icon}</span>
                {item.label}
              </button>
            ))}
          </nav>
        </div>

        {/* Right content */}
        <div className="flex-1">
          {/* Header */}
          <div className="mb-8">
            <h1 className="heading-xxl text-[var(--zoom-midnight)] mb-2">Workplace</h1>
            <p className="body-sm text-[var(--zoom-gray-500)]">Collaboration tools in an AI-first work platform.</p>
            <div className="flex items-center gap-2 mt-3">
              <Link href="/" className="body-xs font-semibold text-[var(--zoom-blue)] hover:underline">Learn More</Link>
            </div>
          </div>

          {/* Plan tabs — Zoom: Meetings / AI Companion / Team Chat / Phone / ... */}
          <div className="flex gap-0 border-b border-[var(--zoom-gray-200)] mb-8 overflow-x-auto">
            {["Meetings", "AI Companion", "Team Chat", "Phone", "Mail & Calendar", "Scheduler", "Docs", "Whiteboard", "Clips"].map((tab, i) => (
              <button
                key={tab}
                type="button"
                className={`px-4 py-2.5 text-xs font-medium whitespace-nowrap relative ${
                  i === 0 ? "text-[var(--zoom-midnight)] bg-[var(--zoom-blue-light)]" : "text-[var(--zoom-gray-500)]"
                }`}
              >
                {tab}
                {i === 0 && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-[var(--zoom-blue)]" />
                )}
              </button>
            ))}
          </div>

          {/* Plan cards — Zoom: 4 columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`bg-white border rounded-xl p-6 relative ${
                  plan.popular ? "border-[var(--zoom-blue)] border-2" : "border-[var(--zoom-gray-200)]"
                }`}
              >
                {plan.popular && (
                  <span className="absolute -top-2.5 left-4 bg-[var(--zoom-blue)] text-white text-[10px] font-semibold px-2.5 py-0.5 rounded-full">
                    Best Value
                  </span>
                )}
                <h3 className="body-md font-semibold text-[var(--zoom-midnight)] mb-3">{plan.name}</h3>
                <p className="text-[28px] font-bold text-[var(--zoom-midnight)] mb-0.5 tracking-tight">
                  {plan.price}
                  {plan.priceSuffix && (
                    <span className="body-xs font-normal text-[var(--zoom-gray-500)]">{plan.priceSuffix}</span>
                  )}
                </p>
                <p className="body-xs text-[var(--zoom-gray-500)] mb-4">
                  {plan.name === "Basic" ? "Free forever" : plan.name === "Enterprise" ? "Custom pricing" : "Billed annually"}
                </p>

                <Link
                  href={plan.name === "Enterprise" ? "/contact" : "/signup"}
                  className={`block text-center font-semibold py-[13px] px-[14px] rounded-xl transition-colors mb-5 text-sm ${
                    plan.ctaPrimary
                      ? "btn-primary w-full"
                      : "btn-secondary w-full"
                  }`}
                >
                  {plan.cta}
                </Link>

                <ul className="space-y-2">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 body-xs text-[var(--zoom-text-secondary)]">
                      <span className="text-[var(--zoom-blue)] mt-0.5 shrink-0">✓</span>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Compare All Features — Zoom: H2 32px */}
          <div className="border-t border-[var(--zoom-gray-200)] pt-12 mb-12">
            <div className="text-center mb-8">
              <span className="body-xs font-semibold text-[var(--zoom-blue)] bg-[var(--zoom-blue-light)] px-3 py-1 rounded-full">Features</span>
              <h2 className="heading-xxl text-[var(--zoom-midnight)] mt-4">Compare All Features</h2>
            </div>
            {/* Feature comparison rows */}
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-[var(--zoom-gray-200)]">
                    <th className="text-left py-3 pr-4 body-sm font-semibold text-[var(--zoom-midnight)] w-[40%]">Feature</th>
                    <th className="text-center py-3 px-2 body-xs font-semibold text-[var(--zoom-midnight)]">Basic</th>
                    <th className="text-center py-3 px-2 body-xs font-semibold text-[var(--zoom-midnight)]">Pro</th>
                    <th className="text-center py-3 px-2 body-xs font-semibold text-[var(--zoom-midnight)]">Business</th>
                    <th className="text-center py-3 px-2 body-xs font-semibold text-[var(--zoom-midnight)]">Enterprise</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Participants", values: ["100", "300", "300", "1,000"] },
                    { name: "Meeting duration", values: ["40 min", "30 hrs", "30 hrs", "30 hrs"] },
                    { name: "Cloud recording", values: ["—", "5 GB", "Unlimited", "Unlimited"] },
                    { name: "AI Companion", values: ["—", "✓", "✓", "✓"] },
                    { name: "Team Chat", values: ["✓", "✓", "✓", "✓"] },
                    { name: "Whiteboard", values: ["3", "Unlimited", "Unlimited", "Unlimited"] },
                    { name: "Mail & Calendar", values: ["✓", "✓", "✓", "✓"] },
                    { name: "SSO", values: ["—", "—", "✓", "✓"] },
                    { name: "Managed domains", values: ["—", "—", "✓", "✓"] },
                    { name: "Admin analytics", values: ["—", "—", "✓", "✓"] },
                    { name: "Custom branding", values: ["—", "✓", "✓", "✓"] },
                    { name: "Phone support", values: ["—", "—", "✓", "✓"] },
                  ].map((row) => (
                    <tr key={row.name} className="border-b border-[var(--zoom-gray-200)]">
                      <td className="py-3 pr-4 body-sm text-[var(--zoom-midnight)]">{row.name}</td>
                      {row.values.map((v, i) => (
                        <td key={i} className={`text-center py-3 px-2 body-xs ${v === "✓" ? "text-[var(--zoom-blue)]" : v === "—" ? "text-[var(--zoom-gray-500)]" : "text-[var(--zoom-midnight)]"}`}>
                          {v}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Add-ons — Zoom: H2 32px "Add-ons to Workplace" */}
          <div className="border-t border-[var(--zoom-gray-200)] pt-12 mb-12">
            <h2 className="heading-xxl text-[var(--zoom-midnight)] mb-8">Add-ons to Workplace</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
              {addons.map((a) => (
                <div key={a.name} className="border border-[var(--zoom-gray-200)] rounded-xl p-6">
                  <h3 className="heading-xl text-[var(--zoom-midnight)] mb-2">{a.name}</h3>
                  <p className="body-sm text-[var(--zoom-gray-500)] mb-3">{a.desc}</p>
                  <p className="body-xs font-semibold text-[var(--zoom-midnight)]">{a.price}</p>
                </div>
              ))}
            </div>
          </div>

          {/* FAQ — Zoom: H2 "Frequently asked questions" */}
          <div className="border-t border-[var(--zoom-gray-200)] pt-12">
            <span className="body-xs font-semibold text-[var(--zoom-blue)] bg-[var(--zoom-blue-light)] px-3 py-1 rounded-full">FAQ</span>
            <h2 className="heading-xxl text-[var(--zoom-midnight)] mt-4 mb-8">Frequently asked questions</h2>
            <div className="space-y-0">
              {faqs.map((q) => (
                <details key={q} className="border-b border-[var(--zoom-gray-200)] group">
                  <summary className="py-4 body-md text-[var(--zoom-midnight)] cursor-pointer flex items-center justify-between hover:text-[var(--zoom-blue)]">
                    {q}
                    <span className="text-[var(--zoom-gray-500)] group-open:rotate-180 transition-transform ml-4 shrink-0">▼</span>
                  </summary>
                  <p className="pb-4 body-sm text-[var(--zoom-gray-500)] leading-relaxed">
                    This information will be available soon. Please contact our sales team for details.
                  </p>
                </details>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
