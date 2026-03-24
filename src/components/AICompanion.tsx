import Link from "next/link";

const benefits = [
  "Capturing and summarizing conversations wherever your meeting takes place.",
  "Turning notes and insights into ready-to-use docs, briefs, and deliverables.",
  "Automating prep, follow-up, and documentation so teams can focus on impact.",
];

export default function AICompanion() {
  return (
    <section className="bg-white py-[120px]">
      <div className="mx-auto max-w-[1400px] px-5">
        {/* Top: icon + heading + description + CTA */}
        <div className="mx-auto max-w-[690px] text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/home/img/icon-aic.svg" alt="" width={56} height={56} className="mx-auto" />
          <p className="mt-6 text-[16px] leading-[50px] text-black">Introducing</p>
          <h2 className="text-[46px] font-normal leading-[50px] text-black">Zoom AI Companion 3.0</h2>
          <p className="mx-auto mt-5 max-w-[44rem] text-[16px] leading-[24px] text-[#6e7680]">
            AI Companion does more than save you time. It captures context, uncovers insights, and helps you deliver better work.
          </p>
          <div className="mt-7">
            <Link
              href="/ai/companion"
              className="inline-flex h-[44px] items-center rounded-[12px] border border-[#00053d] bg-white px-5 text-[16px] font-semibold text-[#00053d] hover:bg-[#f5f5f5]"
            >
              Learn more
            </Link>
          </div>
        </div>

        {/* Bottom: two-column — image left, benefits + testimonial right */}
        <div className="mt-16 grid items-center gap-12 lg:grid-cols-2">
          {/* Left: AI preview image */}
          <div className="overflow-hidden rounded-[24px] bg-[#f3f8ff]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/home/images/meetings-inner.webp"
              alt="Zoom AI Companion in action"
              className="h-auto w-full"
            />
          </div>

          {/* Right: benefits + testimonial */}
          <div>
            <h3 className="text-[20px] font-semibold leading-[28px] text-[#00053d]">
              Zoom AI Companion helps by:
            </h3>
            <ul className="mt-5 space-y-4">
              {benefits.map((b) => (
                <li key={b} className="flex items-start gap-3">
                  <span className="mt-2 h-[6px] w-[6px] shrink-0 rounded-full bg-[#0b5cff]" />
                  <span className="text-[16px] leading-[24px] text-[#232333]">{b}</span>
                </li>
              ))}
            </ul>

            {/* Testimonial */}
            <div className="mt-10 rounded-[20px] border border-[#e8ecf0] bg-[#f9fafb] p-6">
              <p className="text-[18px] font-normal leading-[28px] text-[#00053d]">
                &ldquo;It always comes down to I want to work on my business, not in my business. Zoom AI Companion gives that time back to do the work that only you can do.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div>
                  <p className="text-[14px] font-semibold text-[#00053d]">Nancy Koziol</p>
                  <p className="text-[13px] text-[#6e7680]">Founder, couch + cork</p>
                </div>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src="/home/img/aic-testimonial-logo.png" alt="couch + cork" className="ml-auto h-[32px] w-auto" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
