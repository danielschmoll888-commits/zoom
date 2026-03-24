import Link from "next/link";
import ProductTabs from "@/components/ProductTabs";
import TrustMarquee from "@/components/TrustMarquee";
import AICompanion from "@/components/AICompanion";
import Achievements from "@/components/Achievements";
import NewsCards from "@/components/NewsCards";
import Ratings from "@/components/Ratings";

export default function HomePage() {
  return (
    <>
      <section
        className="relative overflow-hidden pt-16 pb-24 lg:pt-20 lg:pb-28"
        style={{ background: "radial-gradient(400% 240% at 50% 100%, #fff, #fff 10%, 15%, #c7c5fd 16%, rgba(154,103,250,0.6) 17%, 21%, #264cab 28%, 35%, #00031d 45%, #00031d)" }}
      >
        <div className="relative z-10 mx-auto max-w-[1400px] px-5 text-center">
          <div className="mx-auto">
            <Link
              href="/events"
              className="mx-auto mb-6 flex max-w-[1400px] items-center justify-between rounded-[16px] bg-white/10 px-6 py-3 text-[14px] text-white backdrop-blur transition-colors hover:bg-white/15"
            >
              <span>Beyond friction in collaboration: How AI and human connection move work forward</span>
              <span className="ml-4 shrink-0 rounded-full bg-white/15 px-4 py-1.5 text-[14px] font-medium">Register now</span>
            </Link>
            <h1 className="mx-auto mt-7 text-[54px] font-normal leading-[60.48px] text-white">
              Find out what&apos;s possible
              <br />
              when work connects
            </h1>
            <p className="mx-auto mt-6 text-[18px] leading-[25.2px] text-white">
              Whether you&apos;re chatting with teammates or supporting customers, Zoom makes it easier to connect, collaborate, and reach goals — all with built-in AI doing the heavy lifting.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/products" className="inline-flex items-center rounded-[12px] bg-[#00053d] px-5 py-[4px] text-[16px] font-semibold leading-[24px] text-white hover:opacity-90" style={{ height: 46 }}>
              Explore products
            </Link>
            <Link href="/pricing" className="inline-flex items-center rounded-[12px] bg-[#f3f8ff] px-5 py-[4px] text-[16px] font-semibold leading-[24px] text-[#00053d] hover:bg-[#e8f0ff]" style={{ height: 46 }}>
              Find your plan
            </Link>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-2.5">
            {["Meetings", "AI Companion", "My notes", "Phone", "Whiteboard", "Webinars", "AI Docs", "Rooms", "Virtual Agent", "Clips", "Contact Center"].map((item) => (
              <Link
                key={item}
                href="/products"
                className="rounded-full border border-white/10 bg-[rgba(255,255,255,0.08)] px-4 py-2 text-[13px] font-medium text-white/80 backdrop-blur transition-colors hover:bg-[rgba(255,255,255,0.12)]"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="relative mx-auto mt-14 max-w-[1080px]">
            <div className="absolute left-[10%] top-[16%] h-[56%] w-[24%] rounded-[32px] bg-[#0b5cff]/18 blur-3xl" />
            <div className="absolute right-[8%] top-[14%] h-[52%] w-[26%] rounded-[32px] bg-[#9b5af9]/18 blur-3xl" />

            <div className="grid gap-4 lg:grid-cols-[220px_minmax(0,1fr)_220px]">
              <div className="hidden space-y-4 lg:block">
                {[
                  { title: "Meetings", tone: "from-[#0d5dff] to-[#4677ff]" },
                  { title: "AI Docs", tone: "from-[#6f57ff] to-[#4a98ff]" },
                ].map((card, index) => (
                  <div
                    key={card.title}
                    className={`animate-float-soft rounded-[24px] border border-white/10 bg-gradient-to-br ${card.tone} p-4 text-left text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]`}
                    style={{ animationDelay: `${index * 180}ms` }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">{card.title}</p>
                    <div className="mt-4 space-y-2">
                      <div className="h-2.5 w-[76%] rounded-full bg-white/24" />
                      <div className="h-2.5 w-[62%] rounded-full bg-white/18" />
                    </div>
                  </div>
                ))}
              </div>

              <div className="relative rounded-[32px] border border-white/10 bg-[rgba(0,9,54,0.72)] p-4 shadow-[0_30px_120px_rgba(0,0,0,0.32)] backdrop-blur">
                <div className="rounded-[28px] border border-white/8 bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.02))] p-4">
                  <div className="flex items-center justify-between border-b border-white/10 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                        <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      </div>
                      <span className="text-[12px] font-medium text-white/60">Zoom workplace overview</span>
                    </div>
                    <span className="rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-1 text-[11px] text-white/50">Live</span>
                  </div>

                  <div className="mt-4 grid gap-4 lg:grid-cols-[1.15fr_0.85fr]">
                    <div className="rounded-[24px] border border-white/8 bg-white/5 p-4">
                      <div className="grid grid-cols-3 gap-3">
                        {Array.from({ length: 6 }).map((_, index) => (
                          <div
                            key={index}
                            className="animate-float-soft aspect-[4/3] rounded-[20px] bg-[linear-gradient(180deg,rgba(11,92,255,0.95),rgba(122,94,244,0.75))]"
                            style={{ animationDelay: `${index * 90}ms` }}
                          />
                        ))}
                      </div>
                      <div className="mt-4 rounded-[20px] border border-white/10 bg-black/10 p-4 text-left">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">AI summary</p>
                        <div className="mt-3 space-y-2">
                          <div className="h-2.5 w-[84%] rounded-full bg-white/16" />
                          <div className="h-2.5 w-[73%] rounded-full bg-white/12" />
                          <div className="h-2.5 w-[59%] rounded-full bg-white/10" />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-4">
                      <div className="rounded-[24px] border border-white/8 bg-white/5 p-4 text-left">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">Activity pulse</p>
                        <div className="mt-4 flex items-end gap-2">
                          {[36, 58, 72, 54, 88].map((height, index) => (
                            <div
                              key={height}
                              className="animate-rise-bar w-full rounded-t-xl bg-[linear-gradient(180deg,rgba(122,94,244,0.85),rgba(11,92,255,0.95))]"
                              style={{ height: `${height}px`, animationDelay: `${index * 70}ms` }}
                            />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[24px] border border-white/8 bg-white/5 p-4 text-left">
                        <p className="text-[11px] uppercase tracking-[0.16em] text-white/42">Suggested workflows</p>
                        <div className="mt-3 space-y-2.5">
                          {["Follow-up note", "Customer handoff", "Launch brief"].map((item) => (
                            <div key={item} className="rounded-full bg-[rgba(255,255,255,0.08)] px-3 py-2 text-[13px] text-white/70">
                              {item}
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="hidden space-y-4 lg:block">
                {[
                  { title: "Virtual Agent", tone: "from-[#0a88cb] to-[#0b5cff]" },
                  { title: "Contact Center", tone: "from-[#1a2d5d] to-[#2a75e2]" },
                ].map((card, index) => (
                  <div
                    key={card.title}
                    className={`animate-float-soft rounded-[24px] border border-white/10 bg-gradient-to-br ${card.tone} p-4 text-left text-white shadow-[0_20px_50px_rgba(0,0,0,0.18)]`}
                    style={{ animationDelay: `${index * 220 + 120}ms` }}
                  >
                    <p className="text-[11px] uppercase tracking-[0.16em] text-white/60">{card.title}</p>
                    <div className="mt-4 rounded-[18px] bg-[rgba(255,255,255,0.08)] p-3">
                      <div className="h-2.5 w-[70%] rounded-full bg-white/22" />
                      <div className="mt-2 h-2.5 w-[54%] rounded-full bg-white/15" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <AICompanion />
      <Ratings />

      <ProductTabs />

      {/* Trust — pt/pb: 60px */}
      <section className="py-[60px]">
        <div className="mx-auto text-center">
          <h2 className="text-[20px] font-semibold leading-[24px] text-black">Trusted by millions. Built for you.</h2>
        </div>
        <div className="mt-8">
          <TrustMarquee />
        </div>
      </section>

      {/* Quote — max-w: 1040px, pt/pb: 100px */}
      <section className="py-[100px]">
        <div className="mx-auto max-w-[1040px] px-6 text-center">
          <blockquote>
            <p className="text-[32px] font-normal leading-[38.4px] text-[#00053d]">
              &ldquo;Zoom Workplace turns my brainwaves into polished gems. From meetings, I can create Clips, Notes, Docs, or even whiteboards faster than you can say, &apos;transcript.&apos;&rdquo;
            </p>
            <footer className="mt-8">
              <p className="text-[16px] font-medium text-[#00053d]">Marquesa Pettway</p>
              <p className="text-[14px] text-[#6e7680]">Founder</p>
            </footer>
          </blockquote>
        </div>
      </section>

      {/* Customer stories — pt: 60px, pb: 100px */}
      <Achievements />

      {/* News — pt/pb: 60px, px: 24px */}
      <NewsCards />

      {/* Closing CTA — simple centered, white bg */}
      <section id="bottom-cta" className="bg-white px-5 py-[120px]">
        <div className="mx-auto max-w-[800px] text-center">
          <h2 className="text-[56px] font-bold leading-[1.02] tracking-[-0.03em] text-[#111827]">
            See what Zoom can do for your business
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link href="/signup" className="inline-flex h-[48px] items-center rounded-full bg-[#0B5CFF] px-8 text-[16px] font-semibold text-white transition-colors hover:bg-[#094FE0]">
              Get started today
            </Link>
            <Link href="/pricing" className="inline-flex h-[48px] items-center rounded-full border border-[rgba(17,24,39,0.14)] bg-white px-8 text-[16px] font-semibold text-[#111827] transition-colors hover:bg-[#F8FAFC]">
              Find your plan
            </Link>
          </div>
        </div>
      </section>

      {/* Disclaimer bar */}
      <section className="border-t border-[rgba(17,24,39,0.08)] bg-white px-5 py-6">
        <p className="mx-auto max-w-[1280px] text-center text-[14px] leading-[1.5] text-[#4B5563]">
          <span className="font-semibold text-[#111827]">Zoom AI Companion</span> is available with eligible paid Zoom Workplace plans. May not be available for all regions or industry verticals.{" "}
          <Link href="/ai" className="font-medium text-[#0B5CFF] hover:underline">Learn more.</Link>
        </p>
      </section>
    </>
  );
}
