import Link from "next/link";

const items = [
  {
    title: "Zoomtopia 2025: New AI UCaaS features announced",
    dek: "Watch the event on demand: Catch the sessions, stories, and innovations, all on your schedule.",
    image: "/home/img/news-main-image.png",
    size: "large",
  },
  {
    title: "Zoom wins Emmy for Engineering, Science & Technology",
    dek: "From connecting remote workers to powering Emmy-winning broadcast technology, Zoom is changing how the world connects.",
    image: "/home/img/news-emmy-award-main-image.png",
    size: "large",
  },
  {
    title: "Eric Yuan on accessible AI: Include AI tools for business",
    dek: "Zoom CEO discusses how Zoom is making AI available at no extra cost.",
    size: "small",
  },
  {
    title: "Zoom launches AI app for frontline workers",
    dek: "The app handles scheduling, updates, chat, push-to-talk, and tasks, while AI Companion summarizes shifts, attendance, and task status.",
    size: "small",
  },
];

function ArrowIcon() {
  return (
    <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center rounded-full border border-white/20 bg-white/10">
      <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
        <path d="M6 14L14 6M14 6H7M14 6V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  );
}

export default function NewsCards() {
  return (
    <section id="whats-new">
      <div className="mx-auto max-w-[1280px] px-5 pt-16 pb-[96px]">
        {/* Eyebrow + heading */}
        <div className="mb-10 text-center">
          <p className="text-[16px] font-semibold leading-[24px] text-[#0B5CFF]">What&apos;s new</p>
          <h2 className="mx-auto mt-3 max-w-[800px] text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
            Making news, making impact
          </h2>
        </div>

        {/* 2-column layout: 2 large left + 2 stacked right */}
        <div className="grid gap-4 lg:grid-cols-[1fr_1fr_1fr]">
          {/* First large card */}
          <Link
            href="/events"
            className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#0B5CFF] p-7 text-white"
          >
            <div>
              <h3 className="max-w-[280px] text-[24px] font-bold leading-[1.2]">{items[0].title}</h3>
              <p className="mt-3 max-w-[280px] text-[15px] leading-[1.5] text-white/80">{items[0].dek}</p>
            </div>
            {items[0].image && (
              <div className="mt-4 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={items[0].image} alt="" className="h-auto max-h-[180px] w-auto rounded-xl" />
              </div>
            )}
            <div className="absolute bottom-6 right-6">
              <ArrowIcon />
            </div>
          </Link>

          {/* Second large card — Emmy */}
          <Link
            href="/about/press"
            className="group relative flex min-h-[400px] flex-col justify-between overflow-hidden rounded-[20px] bg-[#0B5CFF] p-7 text-white"
          >
            <div>
              <h3 className="max-w-[280px] text-[24px] font-bold leading-[1.2]">{items[1].title}</h3>
              <p className="mt-3 max-w-[280px] text-[15px] leading-[1.5] text-white/80">{items[1].dek}</p>
            </div>
            {items[1].image && (
              <div className="mt-4 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={items[1].image} alt="" className="h-auto max-h-[180px] w-auto rounded-xl" />
              </div>
            )}
            <div className="absolute bottom-6 right-6">
              <ArrowIcon />
            </div>
          </Link>

          {/* Right column — 2 stacked small cards */}
          <div className="flex flex-col gap-4">
            {items.slice(2).map((item) => (
              <Link
                key={item.title}
                href="/about/press"
                className="group relative flex flex-1 flex-col justify-between rounded-[20px] bg-[#0B5CFF] p-7 text-white"
              >
                <div>
                  <h3 className="text-[20px] font-bold leading-[1.2]">{item.title}</h3>
                  <p className="mt-2 text-[14px] leading-[1.5] text-white/80">{item.dek}</p>
                </div>
                <div className="mt-4 self-end">
                  <ArrowIcon />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
