import { chromium } from "playwright";
import fs from "fs";
import path from "path";

const PAGES = [
  { name: "home", url: "https://zoom.us" },
  { name: "pricing", url: "https://zoom.us/en/pricing" },
  { name: "solutions", url: "https://zoom.us/en/solutions" },
  { name: "contact", url: "https://zoom.us/en/contact/contact-sales" },
  { name: "download", url: "https://zoom.us/en/download" },
  { name: "signin", url: "https://zoom.us/signin" },
  { name: "signup", url: "https://zoom.us/signup" },
];

const OUT = "./crawl-data";
fs.mkdirSync(OUT, { recursive: true });
fs.mkdirSync(`${OUT}/screenshots`, { recursive: true });

async function extractPageData(page, pageName) {
  console.log(`\n=== Crawling: ${pageName} ===`);

  // Screenshot full page
  await page.screenshot({
    path: `${OUT}/screenshots/${pageName}.png`,
    fullPage: true,
    timeout: 30000,
  });
  console.log(`  Screenshot saved`);

  // Extract design data from DOM
  const data = await page.evaluate(() => {
    function getComputedProps(el) {
      const cs = window.getComputedStyle(el);
      return {
        tag: el.tagName.toLowerCase(),
        text: el.innerText?.slice(0, 200) || "",
        classes: el.className?.toString()?.slice(0, 300) || "",
        fontSize: cs.fontSize,
        fontWeight: cs.fontWeight,
        fontFamily: cs.fontFamily?.slice(0, 100),
        color: cs.color,
        backgroundColor: cs.backgroundColor,
        backgroundImage: cs.backgroundImage?.slice(0, 300),
        padding: cs.padding,
        margin: cs.margin,
        borderRadius: cs.borderRadius,
        display: cs.display,
        gap: cs.gap,
        width: cs.width,
        height: cs.height,
        maxWidth: cs.maxWidth,
        lineHeight: cs.lineHeight,
        letterSpacing: cs.letterSpacing,
      };
    }

    // Extract sections
    const sections = [];
    document.querySelectorAll("section, [class*='section'], [class*='zt-'], main > div > div").forEach((el, i) => {
      if (i > 30) return;
      sections.push({
        index: i,
        ...getComputedProps(el),
        childCount: el.children.length,
        rect: el.getBoundingClientRect(),
      });
    });

    // Extract nav items
    const navItems = [];
    document.querySelectorAll("header a, nav a, [role='navigation'] a").forEach((el) => {
      navItems.push({
        text: el.innerText?.trim()?.slice(0, 100),
        href: el.getAttribute("href"),
      });
    });

    // Extract all headings
    const headings = [];
    document.querySelectorAll("h1, h2, h3, h4").forEach((el) => {
      headings.push({
        ...getComputedProps(el),
        level: el.tagName,
      });
    });

    // Extract buttons
    const buttons = [];
    document.querySelectorAll("a[class*='btn'], button[class*='btn'], a[class*='Button'], button[class*='Button'], [role='button']").forEach((el, i) => {
      if (i > 20) return;
      buttons.push(getComputedProps(el));
    });

    // Extract images info
    const images = [];
    document.querySelectorAll("img").forEach((el, i) => {
      if (i > 30) return;
      images.push({
        src: el.src?.slice(0, 200),
        alt: el.alt,
        width: el.naturalWidth,
        height: el.naturalHeight,
        classes: el.className?.toString()?.slice(0, 200),
      });
    });

    // Extract all unique colors used
    const colors = new Set();
    const fonts = new Set();
    document.querySelectorAll("*").forEach((el, i) => {
      if (i > 500) return;
      const cs = window.getComputedStyle(el);
      colors.add(cs.color);
      colors.add(cs.backgroundColor);
      fonts.add(cs.fontFamily?.split(",")[0]?.trim());
    });

    // Footer links
    const footerLinks = [];
    document.querySelectorAll("footer a").forEach((el) => {
      footerLinks.push({
        text: el.innerText?.trim()?.slice(0, 80),
        href: el.getAttribute("href"),
      });
    });

    return {
      title: document.title,
      sections,
      navItems: navItems.filter((n) => n.text),
      headings,
      buttons,
      images,
      footerLinks: footerLinks.filter((f) => f.text),
      colors: [...colors].filter(Boolean).slice(0, 50),
      fonts: [...fonts].filter((f) => f && f !== ""),
      viewport: { width: window.innerWidth, height: window.innerHeight },
    };
  });

  return data;
}

async function main() {
  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 900 },
    userAgent: "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36",
  });

  const allData = {};

  for (const pg of PAGES) {
    const page = await context.newPage();
    try {
      await page.goto(pg.url, { waitUntil: "networkidle", timeout: 30000 });
      // Wait for dynamic content
      await page.waitForTimeout(3000);
      // Close any popups/banners
      try {
        await page.click('[aria-label="Close"]', { timeout: 2000 });
      } catch {}
      try {
        await page.click('[class*="cookie"] button', { timeout: 2000 });
      } catch {}

      allData[pg.name] = await extractPageData(page, pg.name);
      console.log(`  Sections: ${allData[pg.name].sections.length}`);
      console.log(`  Headings: ${allData[pg.name].headings.length}`);
      console.log(`  Nav items: ${allData[pg.name].navItems.length}`);
      console.log(`  Images: ${allData[pg.name].images.length}`);
    } catch (err) {
      console.error(`  Error on ${pg.name}: ${err.message}`);
      allData[pg.name] = { error: err.message };
    }
    await page.close();
  }

  // Save all extracted data
  fs.writeFileSync(`${OUT}/design-data.json`, JSON.stringify(allData, null, 2));
  console.log(`\n✅ All data saved to ${OUT}/design-data.json`);

  await browser.close();
}

main().catch(console.error);
