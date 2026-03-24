"use client";

import { useState } from "react";
import Link from "next/link";

const stories = [
  {
    slug: "major-league-baseball",
    title: "Major League Baseball\u2122 and Zoom expand the employee-fan experience",
    quote: "Zoom has allowed us to continue a tradition of really being a technology-focused company and making sure that we are using cutting-edge technology not only to advance our business but also for our fans.",
    attribution: "Noah Garden",
    role: "Chief Revenue Officer",
    image: "/home/img/baseball-club-bg.jpg",
    imagePosition: "center",
    logo: "/home/img/logo-4.svg",
    href: "/customers",
  },
  {
    slug: "theshareco",
    title: "Advancing mental wellness through TheShareCo\u2019s journey with Zoom Video SDK",
    quote: "Zoom Video SDK\u2019s full flexibility in layout customization allowed us to achieve a real-life experience within the limited real estate presented by a phone or smart device.",
    attribution: "Tan Han Sing",
    role: "Founder and CEO, TheShareCo",
    image: "/home/img/share-bg.jpg",
    imagePosition: "80% center",
    logo: "/home/img/logo-mlb-white.svg",
    href: "/customers",
  },
  {
    slug: "cricut",
    title: "Cricut slashed call abandonment rates by 90% with Zoom",
    quote: "Before Zoom, we juggled 10-plus tabs to handle calls. Now, everything is integrated into one clean platform, from CRM connections to video transitions. It is a dream workflow.",
    attribution: "Taylor Nelson",
    role: "Member Care QA Specialist",
    image: "/home/img/cricut-bg.jpg",
    imagePosition: "65% center",
    logo: "/home/img/logo-2.svg",
    href: "/customers",
  },
  {
    slug: "capital-one",
    title: "A connected, collaborative workforce drives innovation at Capital One",
    quote: "We are highly collaborative, we are people-centered, we are interested in moving ourselves and our goals to the next level. Zoom is, I believe, the ideal tool to suit the culture that we are and that we strive to be at Capital One.",
    attribution: "Nikita Steals",
    role: "VP, Tech Talent Acquisition, Capital One",
    image: "/home/img/capital-one-bg.jpg",
    imagePosition: "center",
    logo: "/home/img/logo-3.svg",
    href: "/customers",
  },
];

function ArrowIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path d="M6 14L14 6M14 6H7M14 6V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NavArrow({ direction, onClick }: { direction: "prev" | "next"; onClick: () => void }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="flex h-[36px] w-[36px] items-center justify-center rounded-full border border-[rgba(17,24,39,0.14)] bg-white text-[#111827] hover:bg-[#f5f5f5]"
      aria-label={direction === "prev" ? "Previous story" : "Next story"}
    >
      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
        <path d={direction === "prev" ? "M9 2L4 7L9 12" : "M5 2L10 7L5 12"} stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </button>
  );
}

export default function Achievements() {
  const [active, setActive] = useState(0);

  const goPrev = () => setActive((a) => (a - 1 + stories.length) % stories.length);
  const goNext = () => setActive((a) => (a + 1) % stories.length);

  return (
    <section id="customer-stories" className="bg-white">
      <div className="mx-auto max-w-[1280px] px-8 pt-[96px] pb-[72px]">
        {/* Eyebrow with blue dot + heading + nav arrows */}
        <div className="mb-10 text-center">
          <div className="flex items-center justify-center gap-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/home/img/blue-dot.svg" alt="" className="h-2 w-2" />
            <p className="text-[16px] font-semibold leading-[24px] text-[#0B5CFF]">Customer stories</p>
          </div>
          <div className="mt-3 flex items-start justify-center gap-6">
            <h2 className="max-w-[880px] text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
              Companies are achieving more<br />with Zoom
            </h2>
            <div className="flex shrink-0 items-center gap-2 pt-4">
              <NavArrow direction="prev" onClick={goPrev} />
              <NavArrow direction="next" onClick={goNext} />
            </div>
          </div>
        </div>

        {/* Carousel using flex */}
        <div className="flex gap-3" style={{ height: 520 }}>
          {stories.map((story, i) => {
            const isActive = i === active;
            return (
              <a
                key={story.slug}
                href={story.href}
                onClick={(e) => {
                  if (!isActive) {
                    e.preventDefault();
                    setActive(i);
                  }
                }}
                onMouseEnter={() => {
                  if (!isActive) setActive(i);
                }}
                className="group relative block overflow-hidden rounded-[24px]"
                style={{
                  flex: isActive ? "6 1 0%" : "1 1 0%",
                  transition: "flex 800ms cubic-bezier(0.4, 0, 0.2, 1)",
                }}
                aria-expanded={isActive}
              >
                {/* Background image — zooms on hover when expanded */}
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={story.image}
                  alt={story.title}
                  className={`absolute inset-0 h-full w-full object-cover ${isActive ? "group-hover:scale-105" : ""}`}
                  style={{
                    objectPosition: story.imagePosition,
                    filter: isActive ? "none" : "grayscale(100%)",
                    transition: "filter 800ms cubic-bezier(0.4, 0, 0.2, 1), transform 600ms ease",
                  }}
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(3,7,18,0.72)_0%,rgba(3,7,18,0.3)_50%,rgba(3,7,18,0.1)_100%)]" />

                {/* Expanded content */}
                <div
                  className="absolute inset-0 z-[2] flex flex-col justify-end p-7 text-left"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 500ms ease",
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={story.logo} alt="" className="mb-4 block h-[36px] max-w-[160px] object-contain" />
                  <h3 className="mb-4 max-w-[500px] text-[28px] font-bold leading-[1.12] text-white">
                    {story.title}
                  </h3>
                  <p className="mb-3 max-w-[520px] text-[15px] leading-[1.6] text-white/[0.96]">
                    &ldquo;{story.quote}&rdquo;
                  </p>
                  <p className="text-[14px] text-white/80">
                    - <span className="font-semibold">{story.attribution}</span>, {story.role}
                  </p>
                </div>

                {/* Collapsed: logo centered */}
                <div
                  className="absolute inset-0 z-[2] flex items-center justify-center"
                  style={{
                    opacity: isActive ? 0 : 1,
                    transition: "opacity 500ms ease",
                  }}
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={story.logo} alt="" className="h-[28px] max-w-[80px] object-contain" />
                </div>

                {/* Arrow button — only on expanded */}
                <div
                  className="absolute bottom-5 right-5 z-10 flex h-[48px] w-[48px] items-center justify-center rounded-full bg-[#0B5CFF] text-white"
                  style={{
                    opacity: isActive ? 1 : 0,
                    transition: "opacity 300ms ease",
                  }}
                >
                  <ArrowIcon />
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}
