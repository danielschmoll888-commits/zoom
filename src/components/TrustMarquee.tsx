const logos = [
  "The New York Times",
  "Walmart",
  "Werner",
  "Hofstra",
  "ExxonMobil",
  "Oracle",
  "Capital One",
  "MLB",
  "ServiceNow",
  "VMware",
];

const reviews = [
  { score: "4.5/5", stars: 4.5, meta: "out of 7.9k+ reviews", source: "Gartner Peer Insights", icon: "/home/img/rates-gartner.png" },
  { score: "4.6/5", stars: 4.5, meta: "out of 54.9k+ reviews", source: "G2", icon: "/home/img/rates-g2.png" },
  { score: "8.5/10", stars: 4, meta: "out of 5.8k+ reviews", source: "TrustRadius", icon: "/home/img/rates-trustradius.png" },
];

function Stars({ count }: { count: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <img key={i} src="/home/img/star.png" alt="" className={`h-[16px] w-[16px] ${i >= Math.ceil(count) ? "opacity-25" : ""}`} />
      ))}
    </div>
  );
}

export default function TrustMarquee() {
  return (
    <div>
      {/* Logo marquee */}
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 z-10 w-[80px] bg-gradient-to-r from-white to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 z-10 w-[80px] bg-gradient-to-l from-white to-transparent" />
        <div className="marquee-track flex min-w-max items-center gap-12 px-6 py-8">
          {[...logos, ...logos].map((name, i) => (
            <span key={`${name}-${i}`} className="text-[18px] font-semibold tracking-[-0.02em] text-[#6e7680] whitespace-nowrap">
              {name}
            </span>
          ))}
        </div>
      </div>

      {/* Ratings strip */}
      <div className="mx-auto max-w-[1400px] px-5">
        <div className="grid gap-4 border-t border-[#e8ecf0] pt-[57px] md:grid-cols-3">
          {reviews.map((review) => (
            <div key={review.source} className="rounded-[24px] border border-[#e8ecf0] bg-white px-6 py-6 text-center">
              <p className="text-[36px] font-semibold tracking-[-0.04em] text-[#00053d]">{review.score}</p>
              <div className="mt-2 flex justify-center">
                <Stars count={review.stars} />
              </div>
              <p className="mt-2 text-[13px] text-[#6e7680]">{review.meta}</p>
              <div className="mt-3 flex justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={review.icon} alt={review.source} className="h-[20px] w-auto" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
