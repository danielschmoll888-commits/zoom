import Link from "next/link";
import type { MarketingPage } from "@/lib/site-structure";

const heroThemes = {
  light: {
    section: "bg-white",
    shell: "border border-[var(--zoom-gray-200)] bg-white",
    card: "bg-[var(--zoom-gray-100)]",
    title: "text-[var(--zoom-midnight)]",
    deck: "text-[var(--zoom-gray-500)]",
    accent: "bg-[var(--zoom-blue-light)] text-[var(--zoom-blue)]",
  },
  dark: {
    section: "bg-[var(--zoom-midnight)]",
    shell: "border border-white/10 bg-[rgba(255,255,255,0.05)] backdrop-blur",
    card: "bg-white/5 border border-white/10",
    title: "text-white",
    deck: "text-white/70",
    accent: "bg-white/10 text-white",
  },
  gradient: {
    section: "bg-[radial-gradient(circle_at_top,_rgba(141,93,247,0.32),_transparent_35%),linear-gradient(180deg,#03113c_0%,#091f67_48%,#f8fbff_48.1%,#ffffff_100%)]",
    shell: "border border-white/10 bg-[rgba(255,255,255,0.06)] backdrop-blur",
    card: "border border-white/10 bg-[rgba(255,255,255,0.08)]",
    title: "text-white",
    deck: "text-white/80",
    accent: "bg-[rgba(255,255,255,0.12)] text-white",
  },
} as const;

export default function MarketingPageTemplate({ page }: { page: MarketingPage }) {
  const theme = heroThemes[page.theme];
  const sectionSurface =
    page.theme === "dark"
      ? "bg-[var(--zoom-dark)] text-white"
      : "bg-white text-[var(--zoom-text)]";

  return (
    <>
      <section className={`${theme.section} overflow-hidden`}>
        <div className="mx-auto max-w-[1240px] px-6 pt-[4.5rem] pb-16 lg:pt-24 lg:pb-[5.5rem]">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,440px)] lg:items-center">
            <div>
              <div className={`inline-flex items-center rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] ${theme.accent}`}>
                {page.eyebrow}
              </div>
              <h1 className={`mt-6 max-w-[14ch] text-[44px] font-medium tracking-[-0.04em] leading-[1.02] md:text-[50px] ${theme.title}`}>
                {page.headline}
              </h1>
              <p className={`mt-5 max-w-[56ch] text-[17px] leading-7 ${theme.deck}`}>{page.deck}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href={page.primaryCta.href} className="inline-flex rounded-full bg-[#00053d] px-6 py-3.5 text-[16px] font-semibold text-white hover:opacity-90">
                  {page.primaryCta.label}
                </Link>
                <Link
                  href={page.secondaryCta.href}
                  className={`inline-flex rounded-full border px-6 py-3.5 text-[16px] font-semibold ${
                    page.theme !== "light"
                      ? "border-white/15 bg-[rgba(255,255,255,0.08)] text-white hover:bg-[rgba(255,255,255,0.12)]"
                      : "border-[#00053d]/20 bg-white text-[#00053d] hover:bg-gray-50"
                  }`}
                >
                  {page.secondaryCta.label}
                </Link>
              </div>
            </div>

            <div className={`rounded-[28px] p-5 lg:p-6 ${theme.shell}`}>
              <div className="grid gap-3">
                {page.highlights.map((highlight) => (
                  <div key={highlight.title} className={`rounded-[22px] p-5 ${theme.card}`}>
                    <p className={`text-[13px] font-semibold uppercase tracking-[0.16em] ${page.theme === "light" ? "text-[var(--zoom-blue)]" : "text-white/60"}`}>
                      {highlight.title}
                    </p>
                    <p className={`mt-3 text-[15px] leading-6 ${page.theme === "light" ? "text-[var(--zoom-text-secondary)]" : "text-white/80"}`}>
                      {highlight.body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={sectionSurface}>
        <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--zoom-blue)]">How this route works</p>
            <h2 className={`mt-4 text-[32px] font-semibold tracking-[-0.03em] leading-[1.08] ${page.theme === "dark" ? "text-white" : "text-[#00031f]"}`}>
              Shared patterns, room for deeper content
            </h2>
          </div>

          <div className="mt-10 grid gap-5 lg:grid-cols-3">
            {page.sections.map((section) => (
              <article
                key={section.title}
                className={`rounded-[24px] border p-6 ${
                  page.theme === "dark"
                    ? "border-white/10 bg-white/5"
                    : "border-[var(--zoom-gray-200)] bg-[var(--zoom-gray-100)]"
                }`}
              >
                <h3 className={`text-[20px] font-semibold tracking-[-0.02em] ${page.theme === "dark" ? "text-white" : "text-[var(--zoom-midnight)]"}`}>
                  {section.title}
                </h3>
                <p className={`mt-3 text-[15px] leading-7 ${page.theme === "dark" ? "text-white/70" : "text-[var(--zoom-gray-500)]"}`}>
                  {section.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-[1200px] mx-auto px-6 py-16 lg:py-20">
          <div className="flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--zoom-blue)]">Adjacent pages</p>
              <h2 className="mt-3 text-[32px] font-semibold tracking-[-0.03em] leading-[1.08] text-[#00031f]">
                Related routes in the Zoom public site
              </h2>
            </div>
            <Link href="/products" className="body-sm font-semibold text-[var(--zoom-blue)] hover:underline">
              Browse the broader platform
            </Link>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
            {page.resources.length > 0 ? (
              page.resources.map((resource) => (
                <article
                  key={resource.href}
                  className="group rounded-[24px] border border-[var(--zoom-gray-200)] bg-[linear-gradient(180deg,#ffffff_0%,#f6f9ff_100%)] p-6 transition-transform duration-200 hover:-translate-y-1"
                >
                  <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--zoom-blue)]">{resource.title}</p>
                  <p className="mt-4 text-[15px] leading-7 text-[var(--zoom-gray-500)]">{resource.body}</p>
                  <Link href={resource.href} className="mt-5 inline-flex text-[14px] font-semibold text-[var(--zoom-midnight)] group-hover:text-[var(--zoom-blue)]">
                    {resource.cta}
                  </Link>
                </article>
              ))
            ) : (
              <article className="rounded-[24px] border border-[var(--zoom-gray-200)] bg-[var(--zoom-gray-100)] p-6">
                <p className="text-[12px] font-semibold uppercase tracking-[0.16em] text-[var(--zoom-blue)]">Coverage expanding</p>
                <p className="mt-4 text-[15px] leading-7 text-[var(--zoom-gray-500)]">
                  This page is part of the imported site architecture. It is ready for bespoke copy, visuals, and conversion modules when you want to deepen it.
                </p>
              </article>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
