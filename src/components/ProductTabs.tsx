"use client";

import { useState } from "react";
import Link from "next/link";

const tabs = [
  {
    id: "collaboration",
    label: "Collaboration",
    eyebrow: "Zoom-style core workspace",
    title: "AI-first teamwork that keeps projects moving",
    desc: "Zoom Workplace gives teams one operating layer for meetings, chat, docs, whiteboarding, and async video, so work stays connected instead of scattered across apps.",
    features: [
      "Unify meetings, phone, chat, docs, and recordings in one workspace.",
      "Replace scattered point tools with a tighter platform surface and fewer handoffs.",
      "Keep hybrid teams aligned with shared notes, async clips, and built-in AI follow-through.",
      "Move from conversation to deliverable faster with summaries, drafts, and next steps.",
      "Give admins one control plane instead of several separate products to govern.",
    ],
    image: "/home/img/collaboration.png",
  },
  {
    id: "support",
    label: "Customer support",
    eyebrow: "CX operations",
    title: "A faster support flow across voice, chat, and AI triage",
    desc: "Bring agent tooling, context, and escalation signals into one cleaner support surface so teams can resolve issues with less repetition and less tab switching.",
    features: [
      "Route phone, chat, messaging, and video into one shared support workflow.",
      "Let AI handle triage and repetitive intake before cases hit live agents.",
      "Give agents summaries, suggested replies, and next actions while they work.",
      "Connect customer context to CRM and analytics without rebuilding the workflow manually.",
      "Use one quality and insight layer to improve service over time.",
    ],
    image: "/home/img/customer-support.png",
  },
  {
    id: "marketing",
    label: "Marketing",
    eyebrow: "Events and demand gen",
    title: "Polished webinars and events without the usual event-stack sprawl",
    desc: "Run branded experiences, capture demand, and extend campaign value with AI-assisted prep and post-event follow-up built into the workflow.",
    features: [
      "Host webinar and event programs that look more premium and stay easier to run.",
      "Capture leads, engagement, and content artifacts from the same operating layer.",
      "Use AI to repurpose sessions into follow-up assets and campaign content.",
      "Extend reach across live, virtual, and hybrid formats without separate tools.",
      "Keep the audience experience cleaner from registration through replay.",
    ],
    image: "/home/img/marketing.png",
  },
  {
    id: "sales",
    label: "Sales",
    eyebrow: "Revenue workflows",
    title: "Conversation intelligence that stays close to the deal",
    desc: "Help revenue teams prepare, follow up, and coach from a shared conversation layer rather than losing signal across notes, recordings, and disconnected systems.",
    features: [
      "Cut admin work with automatic notes, summaries, and follow-up scaffolding.",
      "Spot deal risks faster with captured call themes and buying-signal visibility.",
      "Give managers a cleaner review surface for coaching and forecasting.",
      "Keep reps focused on customer time instead of manual CRM cleanup.",
      "Push insights into pipeline reviews while the conversation context is still fresh.",
    ],
    image: "/home/img/sales.png",
  },
  {
    id: "engagement",
    label: "Employee engagement",
    eyebrow: "Internal culture",
    title: "A stronger internal pulse for distributed teams",
    desc: "Support internal communication, recognition, and culture moments with a tighter mix of live events, async content, and employee-experience tooling.",
    features: [
      "Share updates, recognition, and leadership messaging in richer formats.",
      "Make all-hands, launches, and celebrations feel more intentional and less generic.",
      "Use clips, events, and community feeds to keep remote teams in the loop.",
      "Measure participation and spot engagement gaps before they become drift.",
      "Give culture programs a home that is connected to the rest of work.",
    ],
    image: "/home/img/employee-engagement.png",
  },
];

export default function ProductTabs() {
  const [active, setActive] = useState("collaboration");
  const currentTab = tabs.find((tab) => tab.id === active) ?? tabs[0];

  return (
    <section className="bg-white pb-[120px] pt-[60px] px-5">
      <div className="mx-auto max-w-[1400px]">
        <div className="mx-auto max-w-[902px] text-center">
          <h2 className="text-[46px] font-normal leading-[52.9px] text-[#00053d]">One platform. Endless ways to work together.</h2>
          <p className="mx-auto mt-5 max-w-[734px] text-[18px] leading-[24.3px] text-[#00053d]">
            From client pitches to global all-hands, patient consults to classrooms, Zoom delivers the flexibility and reliability you need. And with AI built in, every interaction is faster, easier, and more productive.
          </p>
        </div>

        <div className="mt-10 flex justify-center overflow-x-auto">
          <div className="flex min-w-max gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                type="button"
                onClick={() => setActive(tab.id)}
                className={`rounded-[12px] px-4 py-4 text-[16px] font-medium transition-all ${
                  tab.id === active
                    ? "bg-[#f3f8ff] text-[#00053d]"
                    : "text-[#6e7680] hover:text-[#00053d]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-10 grid items-start gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)]">
          <div className="lg:pr-4">
            <h3 className="text-[32px] font-semibold leading-[1.2] text-[#00031f]">
              {currentTab.title}
            </h3>
            <p className="mt-4 text-[16px] leading-[24px] text-[#6e7680]">{currentTab.desc}</p>

            <ul className="mt-6 space-y-3">
              {currentTab.features.map((feature) => (
                <li key={feature} className="flex items-start gap-3 text-[15px] leading-[24px] text-[#232333]">
                  <span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-[#00031f]" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <div className="mt-8">
              <Link href="/signup" className="inline-flex h-[44px] items-center rounded-[12px] bg-[#00053d] px-5 text-[16px] font-semibold text-white hover:opacity-90">
                Get started
              </Link>
            </div>
          </div>

          <div className="overflow-hidden rounded-[24px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={currentTab.image}
              alt={currentTab.label}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
