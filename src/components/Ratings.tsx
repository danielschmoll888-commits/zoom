import Link from "next/link";

const analystCards = [
  {
    image: "/home/img/gartner2.png",
    title: "A Leader in the Gartner\u00AE Magic Quadrant\u2122 for UCaaS, Worldwide 2025, sixth year in a row.",
    cta: "Read the report",
  },
  {
    image: "/home/img/gartner.png",
    title: "Zoom recognized in the 2025 Gartner\u00AE Magic Quadrant\u2122 for CCaaS.",
    cta: "Explore the report",
  },
  {
    image: "/home/img/forrest.png",
    title: "Zoom named a leader in The Forrester Wave\u2122: UCaaS 2025.",
    cta: "Read the report",
  },
];

export default function Ratings() {
  return (
    <section className="py-[60px]">
      <div className="mx-auto max-w-[1150px] px-5">
        <div className="grid gap-5 lg:grid-cols-3">
          {analystCards.map((card) => (
            <article
              key={card.title}
              className="group overflow-hidden rounded-[24px] border border-[#e8ecf0] bg-white transition-shadow hover:shadow-lg"
            >
              <div className="overflow-hidden rounded-t-[24px]">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={card.image} alt={card.title} className="h-auto w-full" />
              </div>
              <div className="p-6">
                <h3 className="text-[20px] font-medium leading-[21px] text-[#00053d]">
                  {card.title}
                </h3>
                <Link
                  href="/resources"
                  className="mt-4 inline-flex text-[14px] font-medium text-[#0b5cff] hover:underline"
                >
                  {card.cta}
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
