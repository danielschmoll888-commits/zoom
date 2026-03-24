import Link from "next/link";
import { solutionSections } from "@/lib/site-structure";

const spotlightCards = [
  {
    eyebrow: "Industry fit",
    title: "Route by market, not just by feature",
    body: "Zoom's live site now gives industry buyers obvious paths. Zoom needed the same coverage instead of one education-heavy page.",
  },
  {
    eyebrow: "Audience fit",
    title: "Support different buying motions",
    body: "IT, sales, facilities, and marketing visitors all look for different proof points. The solutions tree now respects that.",
  },
  {
    eyebrow: "Builder fit",
    title: "Do not bury ecosystem pages",
    body: "SDKs, APIs, and partner paths now sit inside the public route system instead of being implied somewhere else.",
  },
];

export default function SolutionsPage() {
  return (
    <>
      <section className="overflow-hidden bg-[linear-gradient(180deg,#f4f8ff_0%,#ffffff_100%)]">
        <div className="mx-auto grid max-w-[1240px] gap-10 px-6 pt-[4.5rem] pb-16 lg:grid-cols-[minmax(0,1.15fr)_minmax(320px,420px)] lg:items-center lg:pt-24 lg:pb-[5.5rem]">
          <div>
            <p className="inline-flex rounded-full bg-[var(--zoom-blue-light)] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--zoom-blue)]">
              Solutions
            </p>
            <h1 className="mt-6 max-w-[14ch] text-[46px] font-[400] tracking-[-0.04em] leading-[1.02] text-[var(--zoom-midnight)] md:text-[60px]">
              Solutions routes that match how buyers actually navigate
            </h1>
            <p className="mt-5 max-w-[60ch] text-[17px] leading-7 text-[var(--zoom-gray-500)]">
              Zoom now mirrors the current Zoom solutions shape with industry, audience, and ecosystem entry points, so visitors do not have to force every question through a generic product page.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary px-6 py-3.5 text-[15px]">
                Talk to sales
              </Link>
              <Link href="/products" className="btn-secondary px-6 py-3.5 text-[15px]">
                See the platform
              </Link>
            </div>
          </div>

          <div className="rounded-[30px] border border-[var(--zoom-gray-200)] bg-white p-5 shadow-[0_24px_60px_rgba(11,92,255,0.08)]">
            <div className="grid gap-3">
              {spotlightCards.map((card) => (
                <div key={card.title} className="rounded-[22px] bg-[var(--zoom-gray-100)] p-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--zoom-blue)]">{card.eyebrow}</p>
                  <h2 className="mt-3 text-[22px] font-semibold tracking-[-0.03em] text-[var(--zoom-midnight)]">{card.title}</h2>
                  <p className="mt-3 text-[15px] leading-7 text-[var(--zoom-gray-500)]">{card.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
          <div className="max-w-[760px]">
            <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--zoom-blue)]">Imported structure</p>
            <h2 className="mt-4 text-[34px] font-[400] tracking-[-0.03em] leading-[1.08] text-[var(--zoom-midnight)]">
              Three ways into the solutions layer
            </h2>
          </div>

          <div className="mt-10 grid gap-6 xl:grid-cols-3">
            {solutionSections.map((section) => (
              <article
                key={section.title}
                className="rounded-[28px] border border-[var(--zoom-gray-200)] bg-[linear-gradient(180deg,#ffffff_0%,#f7faff_100%)] p-6"
              >
                <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[var(--zoom-blue)]">{section.title}</p>
                <div className="mt-5 grid gap-3">
                  {section.links.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      className="rounded-[20px] border border-[var(--zoom-gray-200)] bg-white px-4 py-4 transition-transform duration-200 hover:-translate-y-0.5"
                    >
                      <div className="flex items-start gap-3">
                        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[var(--zoom-blue-light)] text-[11px] font-semibold tracking-[0.12em] text-[var(--zoom-blue)]">
                          {link.badge}
                        </span>
                        <div>
                          <p className="text-[14px] font-semibold text-[var(--zoom-midnight)]">{link.label}</p>
                          <p className="mt-1 text-[13px] leading-6 text-[var(--zoom-gray-500)]">{link.description}</p>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-[var(--zoom-midnight)] text-white">
        <div className="mx-auto max-w-[1200px] px-6 py-16 lg:py-20">
          <div className="grid gap-6 lg:grid-cols-3">
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">What was missing</p>
              <p className="mt-4 text-[16px] leading-7 text-white/80">
                The old Zoom `solutions` page behaved like one vertical landing page. The live Zoom site is much broader than that.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">What changed</p>
              <p className="mt-4 text-[16px] leading-7 text-white/80">
                The route system now carries the full top-level solutions coverage so industry and audience pages exist in repo.
              </p>
            </article>
            <article className="rounded-[28px] border border-white/10 bg-white/5 p-6">
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-white/60">What you can do next</p>
              <p className="mt-4 text-[16px] leading-7 text-white/80">
                Replace any of these generated pages with bespoke conversion-focused pages without changing the navigation model.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}
