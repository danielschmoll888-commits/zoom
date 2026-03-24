import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Download Center | Zoom",
  description: "Download Zoom desktop apps, mobile clients, browser tools, room software, and admin packages.",
};

type DownloadCard = {
  body: string;
  buttons?: { href: string; label: string; tone?: "outline" | "solid" | "store" | "vendor" }[];
  id: string;
  note?: string;
  title: string;
};

const otherDownloads: DownloadCard[] = [
  {
    id: "outlook_plugin",
    title: "Zoom add-in for Microsoft Outlook",
    body: "Schedule, join, and manage Zoom meetings from your Outlook web, desktop, or mobile calendar.",
    buttons: [{ href: "/download/outlook-plugin", label: "Microsoft AppSource", tone: "vendor" }],
  },
  {
    id: "chrome_ext",
    title: "Zoom Extension for Browsers",
    body: "Start or schedule meetings with a single click from your browser or Google Calendar.",
    note: "Currently available for Chrome and Firefox.",
  },
  {
    id: "room_client",
    title: "Zoom Rooms for Conference Room",
    body: "Set up one-touch meeting and calendar integration for your conference rooms.",
    buttons: [{ href: "/download/rooms-app", label: "Download Zoom Rooms", tone: "outline" }],
    note: "Version 6.8.2 (11841)",
  },
  {
    id: "room_controller",
    title: "Controllers for Zoom Rooms",
    body: "Install on an iPad or Android tablet used to control Zoom Room meetings in your conference room.",
    buttons: [
      { href: "/download/android", label: "Google Play", tone: "store" },
      { href: "/download/rooms-controller", label: "App Store", tone: "store" },
    ],
  },
];

function StoreBadge({ href, label }: { href: string; label: string }) {
  const isAppStore = label === "App Store";
  const src = isAppStore ? "/download/badge-appstore.svg" : "/download/badge-googleplay.svg";
  const alt = isAppStore ? "Download on the App Store" : "Get it on Google Play";

  return (
    <Link href={href} className="inline-flex items-center rounded-[8px] bg-black px-3 py-2 transition-opacity hover:opacity-80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={src} alt={alt} height={30} className="h-[30px] w-auto" />
    </Link>
  );
}

function VendorBadge({ href }: { href: string; label: string }) {
  return (
    <Link href={href} className="inline-flex items-center rounded-[8px] bg-black px-3 py-2 transition-opacity hover:opacity-80">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/download/badge-microsoft.svg" alt="Get it from Microsoft AppSource" height={34} className="h-[34px] w-auto" />
    </Link>
  );
}

function CardButton({
  href,
  label,
  tone = "solid",
}: {
  href: string;
  label: string;
  tone?: "outline" | "solid" | "store" | "vendor";
}) {
  if (tone === "store") {
    return <StoreBadge href={href} label={label} />;
  }

  if (tone === "vendor") {
    return <VendorBadge href={href} label={label} />;
  }

  return (
    <Link
      href={href}
      className={
        tone === "outline"
          ? "inline-flex rounded-full border border-[var(--Zoom-blue)] px-[15px] py-[9px] text-[16px] font-semibold leading-[20px] text-[var(--Zoom-blue)] transition-colors hover:bg-[var(--zoom-blue-light)]"
          : "inline-flex rounded-full bg-[#0d6bde] px-[15px] py-[9px] text-[16px] font-medium leading-[20px] text-white transition-opacity hover:opacity-90"
      }
    >
      {label}
    </Link>
  );
}

const cardIcons: Record<string, string> = {
  outlook_plugin: "/download/icon-outlook.svg",
  chrome_ext: "/download/icon-browser.svg",
  room_client: "/download/icon-rooms.svg",
  room_controller: "/download/icon-rooms.svg",
};

export default function DownloadPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#00031f]">
        <div className="px-14 py-12 text-center md:py-[96px]">
          <h1 className="text-[48px] font-semibold leading-[1.1] text-white">Download Center</h1>
          <p className="mt-5 text-[24px] font-normal text-white">
            Get the most out of Zoom by downloading our apps
          </p>
        </div>
        <div className="h-[6px] bg-[var(--zoom-blue)]" />
      </section>

      <div id="the-main-content">
        {/* Desktop download */}
        <section className="flex flex-col gap-10 bg-white px-14 py-12 lg:flex-row lg:items-center">
          <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-[40%]">
            <Image
              src="/download/workplace-desktop.jpeg"
              alt="Original Zoom workplace illustration"
              width={515}
              height={345}
              className="h-auto w-full"
              priority
            />
          </div>

          <div className="flex-1">
            <h2 className="text-[32px] font-semibold leading-[1.2] text-[#222325]">
              Zoom Workplace for Mac
            </h2>
            <Link href="/download/workplace-app" className="mt-2.5 inline-flex py-2.5 text-[16px] font-medium leading-[1.2] text-[#0b5cff] hover:underline">
              Version 7.1.4 (14820)
            </Link>
            <p className="text-[20px] leading-[1.2] text-[#00053d]">
              Unlock the full suite of collaboration with Team Chat, Whiteboard, Notes and more - included with your Zoom Meetings account.
            </p>
            <div className="mt-5 flex flex-wrap gap-[30px]">
              <CardButton href="/api/download" label="Download for Windows" />
              <CardButton href="/api/download" label="Download for Mac" />
            </div>
          </div>
        </section>

        {/* Mobile download */}
        <section className="flex flex-col gap-10 bg-[#d7e6fc] px-14 py-12 lg:flex-row lg:items-center">
          <div className="flex-1">
            <h2 className="text-[32px] font-semibold leading-[1.1] text-[#222325]">
              Zoom Workplace for mobile
            </h2>
            <p className="mt-3 text-[20px] leading-[1.6] text-[#232333]">
              Stay connected on your mobile device and never miss a beat, no matter where you are.
            </p>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <StoreBadge href="/download/ios" label="App Store" />
              <StoreBadge href="/download/android" label="Google Play" />
            </div>
            <div className="mt-8">
              <Image src="/download/zoom-qr.png" alt="QR code for Zoom mobile download" width={96} height={96} />
            </div>
            <p className="mt-5 text-[20px] leading-[1.2] text-[#00053d]">
              Scan the QR code or go to{" "}
              <Link href="/download" className="text-[var(--zoom-blue)] hover:underline">
                zoom/download
              </Link>
              .
            </p>
          </div>

          <div className="w-full shrink-0 overflow-hidden rounded-2xl lg:w-[40%]">
            <Image
              src="/download/workplace-mobile.png"
              alt="Original Zoom mobile illustration"
              width={531}
              height={329}
              className="h-auto w-full"
            />
          </div>
        </section>

        {/* Other download options */}
        <section className="bg-[#f8f8fa] px-14 py-12">
          <h2 className="mb-2.5 text-[32px] font-semibold leading-[1.1] text-[#222325]">
            Other download options
          </h2>

          <div className="mt-5 flex flex-col gap-[15px] lg:flex-row">
            {otherDownloads.map((card) => (
              <article
                key={card.id}
                id={card.id}
                className="flex-1 rounded-2xl bg-white p-[30px]"
              >
                <div className="flex items-start gap-2.5">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={cardIcons[card.id]} alt="" width={32} height={32} className="mr-[10px] shrink-0" />
                  <h3 className="text-[20px] font-semibold leading-[1.6] text-[#232333]">
                    {card.title}
                  </h3>
                </div>
                <p className="mt-5 text-[16px] leading-[1.125] text-[#232333]">{card.body}</p>

                {card.note && card.id === "chrome_ext" ? (
                  <div className="mt-5 rounded bg-[#f3f4f7] px-5 py-4 text-[16px] leading-[1.5] text-[#232333]">
                    Currently available for{" "}
                    <Link href="/download/browser-extension" className="text-[var(--zoom-blue)] hover:underline">
                      Chrome
                    </Link>
                    {" "}and{" "}
                    <Link href="/download/browser-extension" className="text-[var(--zoom-blue)] hover:underline">
                      Firefox
                    </Link>
                    .
                  </div>
                ) : null}

                {card.buttons ? (
                  <div className="mt-5 flex flex-wrap gap-3">
                    {card.buttons.map((button) => (
                      <CardButton key={button.label} href={button.href} label={button.label} tone={button.tone} />
                    ))}
                  </div>
                ) : null}

                {card.note && card.id !== "chrome_ext" ? (
                  <p className="mt-2.5 text-[16px] leading-[1.5] text-[#6e7680]">{card.note}</p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        {/* VDI / Admin */}
        <section className="px-14 py-12 text-center">
          <h2 className="mb-2.5 text-[32px] font-medium leading-[1.1] text-[#222325]">
            Looking for VDI and admin downloads?
          </h2>
          <p className="mt-5 text-[20px] leading-[1.6] text-[#232333]">
            Visit our{" "}
            <Link href="/download/admin" className="text-[var(--zoom-blue)] hover:underline">
              Admin download page
            </Link>
            .
          </p>
        </section>
      </div>
    </>
  );
}
