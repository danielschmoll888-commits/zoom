export type NavLink = {
  badge?: string;
  description?: string;
  href: string;
  label: string;
};

export type NavSection = {
  links: NavLink[];
  title: string;
};

export type NavPanel = {
  featured: {
    body: string;
    cta: string;
    eyebrow: string;
    href: string;
    title: string;
  };
  href: string;
  id: string;
  sections: NavSection[];
  subtitle: string;
  title: string;
};

export type FooterColumn = {
  links: NavLink[];
  title: string;
};

export type MarketingPage = {
  deck: string;
  eyebrow: string;
  headline: string;
  highlights: { body: string; title: string }[];
  label: string;
  primaryCta: { href: string; label: string };
  resources: { body: string; cta: string; href: string; title: string }[];
  secondaryCta: { href: string; label: string };
  sections: { body: string; title: string }[];
  slug: string;
  theme: "dark" | "gradient" | "light";
};

type LinkContext = {
  category: "ai" | "footer" | "product" | "solution";
  link: NavLink;
  sectionTitle: string;
  siblingHrefs: string[];
};

const workplaceSections: NavSection[] = [
  {
    title: "Communication",
    links: [
      {
        badge: "MT",
        label: "Meetings",
        href: "/products/meetings",
        description: "Host launches, working sessions, and customer conversations in one meeting layer.",
      },
      {
        badge: "TC",
        label: "Team Chat",
        href: "/products/team-chat",
        description: "Persistent messaging that keeps projects moving between calls.",
      },
      {
        badge: "PH",
        label: "Phone",
        href: "/products/phone",
        description: "Cloud voice, routing, and call controls without the old PBX overhead.",
      },
      {
        badge: "MC",
        label: "Mail & Calendar",
        href: "/products/mail-calendar",
        description: "Inbox and scheduling context stitched into the rest of the workspace.",
      },
      {
        badge: "SC",
        label: "Scheduler",
        href: "/products/scheduler",
        description: "Share booking links, enforce rules, and keep calendars clean.",
      },
    ],
  },
  {
    title: "Productivity",
    links: [
      {
        badge: "AD",
        label: "AI Docs",
        href: "/products/ai-docs",
        description: "Turn meeting outcomes into briefs, plans, and polished follow-through.",
      },
      {
        badge: "WB",
        label: "Whiteboard",
        href: "/products/whiteboard",
        description: "Visual workshops for mapping ideas, decisions, and dependencies.",
      },
      {
        badge: "CL",
        label: "Clips",
        href: "/products/clips",
        description: "Record async walkthroughs instead of repeating the same update twice.",
      },
      {
        badge: "HB",
        label: "Hub",
        href: "/products/hub",
        description: "A home base for content, recordings, notes, and reusable assets.",
      },
      {
        badge: "VM",
        label: "Video Management",
        href: "/products/video-management",
        description: "Organize and govern your growing library of internal and external video.",
      },
    ],
  },
  {
    title: "Spaces",
    links: [
      {
        badge: "RM",
        label: "Rooms",
        href: "/products/rooms",
        description: "Bring in-person rooms into the same operating model as remote work.",
      },
      {
        badge: "WR",
        label: "Workspace Reservation",
        href: "/products/workspace-reservation",
        description: "Coordinate desks, rooms, and hybrid attendance without manual juggling.",
      },
      {
        badge: "DS",
        label: "Digital Signage",
        href: "/products/digital-signage",
        description: "Push clear, branded updates into office and event spaces.",
      },
      {
        badge: "VG",
        label: "Visitor Management",
        href: "/products/visitor-management",
        description: "Create a safer, faster guest flow from invite to arrival.",
      },
    ],
  },
  {
    title: "Employee Experience",
    links: [
      {
        badge: "WV",
        label: "Workvivo",
        href: "/products/workvivo",
        description: "Build a stronger internal pulse with social updates, recognition, and community.",
      },
    ],
  },
];

const serviceSections: NavSection[] = [
  {
    title: "Customer Experience",
    links: [
      {
        badge: "CC",
        label: "Contact Center",
        href: "/products/contact-center",
        description: "Unify phone, digital channels, and agent tooling in one service layer.",
      },
      {
        badge: "VA",
        label: "Virtual Agent",
        href: "/products/virtual-agent",
        description: "Automate high-volume support and routing with AI-driven front doors.",
      },
      {
        badge: "WE",
        label: "Workforce Engagement",
        href: "/products/workforce-engagement",
        description: "Coach teams with quality management, analytics, and staffing signals.",
      },
    ],
  },
  {
    title: "Marketing",
    links: [
      {
        badge: "EV",
        label: "Webinars & Events",
        href: "/products/webinars-events",
        description: "Run polished launches, field events, and broadcasts from one platform.",
      },
    ],
  },
  {
    title: "Revenue",
    links: [
      {
        badge: "RA",
        label: "Revenue Accelerator",
        href: "/products/revenue-accelerator",
        description: "Pull insights from customer conversations into coaching and pipeline reviews.",
      },
    ],
  },
];

export const productPanels: NavPanel[] = [
  {
    id: "workplace",
    title: "Zoom Workplace",
    subtitle: "Collaboration tools in an AI-first work platform.",
    href: "/products",
    sections: workplaceSections,
    featured: {
      eyebrow: "Connected suite",
      title: "One workplace, not a pile of tabs",
      body: "Meetings, chat, docs, recordings, and AI stay close enough to feel like one system.",
      href: "/products",
      cta: "Explore the platform",
    },
  },
  {
    id: "services",
    title: "Business Services",
    subtitle: "Deliver customer, revenue, and event experiences from the same operating layer.",
    href: "/products",
    sections: serviceSections,
    featured: {
      eyebrow: "Go to market",
      title: "Customer-facing workflows with less sprawl",
      body: "Support, events, and revenue teams can share context instead of rebuilding it in every tool.",
      href: "/products/contact-center",
      cta: "See the services stack",
    },
  },
];

export const aiSections: NavSection[] = [
  {
    title: "AI at Zoom",
    links: [
      {
        badge: "AI",
        label: "AI Companion",
        href: "/ai/companion",
        description: "Surface summaries, prep, and next steps where work is already happening.",
      },
      {
        badge: "CU",
        label: "Customize AI Companion",
        href: "/ai/customize",
        description: "Tailor AI to your workflows, teams, prompts, and governance model.",
      },
      {
        badge: "NT",
        label: "My Notes",
        href: "/ai/notes",
        description: "Capture transcripts, action items, and decision trails without manual cleanup.",
      },
      {
        badge: "SV",
        label: "AI Services",
        href: "/ai/services",
        description: "Speech and language building blocks for product and platform teams.",
      },
      {
        badge: "SL",
        label: "AI Slides",
        href: "/ai/slides",
        description: "Turn meeting outcomes into decks that are closer to ready on the first pass.",
      },
      {
        badge: "SH",
        label: "AI Sheets",
        href: "/ai/sheets",
        description: "Pull structured insights into spreadsheet-style workflows and planning models.",
      },
    ],
  },
  {
    title: "Resources",
    links: [
      {
        badge: "RL",
        label: "AI Companion by Role",
        href: "/ai/by-role",
        description: "See how operators, sellers, managers, and builders each use the same AI layer.",
      },
      {
        badge: "OB",
        label: "Onboarding Center",
        href: "/ai/onboarding",
        description: "Roll AI out with clearer expectations, enablement, and adoption plans.",
      },
      {
        badge: "PS",
        label: "Privacy & Security",
        href: "/ai/privacy-security",
        description: "Understand how governance, retention, and policy controls shape the AI rollout.",
      },
      {
        badge: "ROI",
        label: "ROI Calculator",
        href: "/ai/roi-calculator",
        description: "Estimate where AI saves time and where it compounds downstream impact.",
      },
    ],
  },
];

export const aiPanel = {
  href: "/ai",
  title: "AI",
  subtitle: "An AI layer for meetings, docs, planning, and operating cadence.",
  sections: aiSections,
  featured: {
    eyebrow: "AI workspace",
    title: "Keep the useful parts of AI close to execution",
    body: "Notes, summaries, and first drafts matter more when they land inside the workflows your team already uses.",
    href: "/ai",
    cta: "Explore AI",
  },
};

export const solutionSections: NavSection[] = [
  {
    title: "By industry",
    links: [
      { badge: "ED", label: "Education", href: "/solutions/education", description: "Support classes, advising, events, and distributed staff operations." },
      { badge: "FS", label: "Financial Services", href: "/solutions/financial-services", description: "Balance client communication, compliance, and high-trust service delivery." },
      { badge: "GV", label: "Government", href: "/solutions/government", description: "Coordinate secure collaboration for agencies, vendors, and public programs." },
      { badge: "HC", label: "Healthcare", href: "/solutions/healthcare", description: "Connect care teams, patients, and back-office teams with less friction." },
      { badge: "MF", label: "Manufacturing", href: "/solutions/manufacturing", description: "Bridge frontline operations, supplier coordination, and office planning." },
      { badge: "RT", label: "Retail", href: "/solutions/retail", description: "Support store teams, field enablement, and service workflows at scale." },
      { badge: "FL", label: "Frontline", href: "/solutions/frontline", description: "Equip non-desk teams with updates, tasks, and quick communication loops." },
      { badge: "BC", label: "Broadcast", href: "/solutions/broadcast", description: "Run production, contribution, and audience experiences with tighter control." },
    ],
  },
  {
    title: "By audience",
    links: [
      { badge: "SMB", label: "Small & Midsize Business", href: "/solutions/small-midsize-business", description: "Adopt a broad workspace stack without adding enterprise-level admin burden." },
      { badge: "IT", label: "Information Technology", href: "/solutions/information-technology", description: "Give IT fewer systems to police and more leverage per deployment." },
      { badge: "CX", label: "Customer Experience", href: "/solutions/customer-experience", description: "Pull service quality, agent tooling, and escalation paths into one view." },
      { badge: "SR", label: "Sales & Revenue", href: "/solutions/sales-revenue", description: "Keep pipeline insight, follow-up, and enablement closer to the call layer." },
      { badge: "FC", label: "Facilities", href: "/solutions/facilities", description: "Coordinate rooms, guests, signage, and hybrid occupancy without guesswork." },
      { badge: "ME", label: "Marketing & Events", href: "/solutions/marketing-events", description: "Plan launches and audience programs with a tighter operating rhythm." },
    ],
  },
  {
    title: "Builder ecosystem",
    links: [
      { badge: "DV", label: "Developers", href: "/developers", description: "Use APIs, SDKs, and webhooks to extend Zoom into your own workflows." },
      { badge: "VS", label: "Video SDK", href: "/developers/video-sdk", description: "Embed flexible video primitives inside custom experiences and products." },
      { badge: "MS", label: "Meeting SDK", href: "/developers/meeting-sdk", description: "Bring meeting surfaces into your own app flows with shared identity." },
      { badge: "AM", label: "App Marketplace", href: "/integrations/app-marketplace", description: "Connect Zoom with the tools your teams already depend on." },
      { badge: "AP", label: "APIs", href: "/developers/apis", description: "Automate provisioning, workflows, and reporting through stable endpoints." },
      { badge: "WH", label: "Webhooks", href: "/developers/webhooks", description: "React to events in near real time across your Zoom footprint." },
      { badge: "PT", label: "Partner Solutions", href: "/partners/solutions", description: "Package platform capabilities into tailored offers with implementation support." },
    ],
  },
];

export const solutionPanel = {
  href: "/solutions",
  title: "Solutions",
  subtitle: "A broader route map for industry, audience, and builder-focused entry points.",
  sections: solutionSections,
  featured: {
    eyebrow: "Go deeper",
    title: "Choose the path that matches the buying motion",
    body: "Some visitors want product detail, others want an industry proof point. Zoom now supports both.",
    href: "/solutions",
    cta: "Browse solutions",
  },
};

export const footerColumns: FooterColumn[] = [
  {
    title: "About",
    links: [
      { label: "About Zoom", href: "/about" },
      { label: "Zoom Blog", href: "/about/blog" },
      { label: "Customers", href: "/customers" },
      { label: "Our Team", href: "/about/team" },
      { label: "Careers", href: "/about/careers" },
      { label: "Integrations", href: "/integrations" },
      { label: "Partners", href: "/partners" },
      { label: "Investors", href: "/about/investors" },
      { label: "Press", href: "/about/press" },
      { label: "Sustainability & ESG", href: "/about/esg" },
      { label: "Zoom Cares", href: "/about/cares" },
      { label: "Media Kit", href: "/about/media-kit" },
      { label: "How-To Videos", href: "/resources/how-to-videos" },
      { label: "Developer Platform", href: "/developers" },
      { label: "Zoom Ventures", href: "/about/ventures" },
      { label: "Zoom Store", href: "/store" },
    ],
  },
  {
    title: "Download",
    links: [
      { label: "Download Center", href: "/download" },
      { label: "Zoom Workplace App", href: "/download/workplace-app" },
      { label: "Zoom Rooms App", href: "/download/rooms-app" },
      { label: "Zoom Rooms Controller", href: "/download/rooms-controller" },
      { label: "Browser Extension", href: "/download/browser-extension" },
      { label: "Outlook Plug-In", href: "/download/outlook-plugin" },
      { label: "iPhone/iPad App", href: "/download/ios" },
      { label: "Android App", href: "/download/android" },
      { label: "Virtual Backgrounds", href: "/download/virtual-backgrounds" },
    ],
  },
  {
    title: "Sales",
    links: [
      { label: "Contact Sales", href: "/contact" },
      { label: "Plans & Pricing", href: "/pricing" },
      { label: "Request a Demo", href: "/demo" },
      { label: "Webinars & Events", href: "/events" },
      { label: "Experience Center", href: "/experience-center" },
    ],
  },
  {
    title: "Support",
    links: [
      { label: "Support Center", href: "/support" },
      { label: "Test Zoom", href: "/test" },
      { label: "Account", href: "/account" },
      { label: "Learning Center", href: "/learning-center" },
      { label: "Community", href: "/community" },
      { label: "Technical Content Library", href: "/resources/technical-library" },
      { label: "Feedback", href: "/feedback" },
      { label: "Accessibility", href: "/accessibility" },
      { label: "Developer Support", href: "/developers/support" },
      { label: "Legal & Compliance", href: "/trust/legal-compliance" },
    ],
  },
];

export const legalLinks: NavLink[] = [
  { label: "Terms", href: "/trust/terms" },
  { label: "Privacy", href: "/trust/privacy" },
  { label: "Trust Center", href: "/trust" },
  { label: "Acceptable Use", href: "/trust/acceptable-use" },
  { label: "Legal & Compliance", href: "/trust/legal-compliance" },
];

function trimSlashes(value: string) {
  return value.replace(/^\/+|\/+$/g, "");
}

function labelFromSlug(slug: string) {
  return slug
    .split("/")
    .filter(Boolean)
    .map((part) => part.replace(/-/g, " "))
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" / ");
}

function makeHubPage(
  slug: string,
  label: string,
  eyebrow: string,
  headline: string,
  deck: string,
  resources: { body: string; cta: string; href: string; title: string }[],
  theme: MarketingPage["theme"] = "light",
): MarketingPage {
  return {
    slug,
    label,
    eyebrow,
    headline,
    deck,
    theme,
    primaryCta: { label: "Start free", href: "/signup" },
    secondaryCta: { label: "Talk to sales", href: "/contact" },
    highlights: [
      {
        title: "Designed for real operating cadence",
        body: "This section now exists so visitors can move from curiosity to a concrete next step without dead ends.",
      },
      {
        title: "Shared patterns, clearer coverage",
        body: "Every imported route uses a consistent Zoom shell so the site feels connected even as coverage expands.",
      },
      {
        title: "Ready for deeper customization",
        body: "The route system is data-backed, which makes future content expansion much faster than hand-building each page.",
      },
    ],
    sections: [
      {
        title: "Broader public-site coverage",
        body: "Zoom now carries a larger public information architecture based on the March 21, 2026 Zoom surface audit, but rendered with original copy and internal route ownership.",
      },
      {
        title: "Shared navigation model",
        body: "Header, footer, and leaf pages all resolve from the same data source so the crawl result lives in code instead of drifting across isolated files.",
      },
      {
        title: "Built for iteration",
        body: "This hub page is a staging point. You can keep the route, deepen the copy, or replace it with a custom page later without breaking navigation.",
      },
    ],
    resources,
  };
}

const manualPages: Record<string, MarketingPage> = {
  products: makeHubPage(
    "products",
    "Products",
    "Platform",
    "A broader product surface for Zoom",
    "Explore the workspace, business services, and builder entry points that now anchor the public-site architecture.",
    [
      { title: "Meetings", body: "Launch with a high-signal communications foundation.", href: "/products/meetings", cta: "Open page" },
      { title: "AI Companion", body: "See how the AI layer now spans multiple routes.", href: "/ai/companion", cta: "Open page" },
      { title: "Contact Center", body: "Customer-facing workflows now have their own destination pages.", href: "/products/contact-center", cta: "Open page" },
    ],
    "gradient",
  ),
  ai: makeHubPage(
    "ai",
    "AI",
    "AI layer",
    "AI routes that map to work, not novelty",
    "Zoom now exposes a fuller AI story across productized capabilities, rollout support, and governance detail.",
    [
      { title: "AI Companion", body: "Core assistant workflow with notes, prep, and summaries.", href: "/ai/companion", cta: "Explore" },
      { title: "Privacy & Security", body: "Governance framing for rollout conversations.", href: "/ai/privacy-security", cta: "Review" },
      { title: "ROI Calculator", body: "A practical buying-motion entry point for value discussions.", href: "/ai/roi-calculator", cta: "Open" },
    ],
    "dark",
  ),
  about: makeHubPage(
    "about",
    "About Zoom",
    "Company",
    "A company section that can hold more than a logo and boilerplate",
    "The Zoom crawl exposed how much of the public trust story sits outside product pages. Zoom now has a place for that layer.",
    [
      { title: "Customers", body: "Customer proof now has a route-backed destination.", href: "/customers", cta: "See stories" },
      { title: "Our Team", body: "Leadership and culture content can now live in the About tree.", href: "/about/team", cta: "Meet the team" },
      { title: "Press", body: "Announcements and media touchpoints have a stable address.", href: "/about/press", cta: "Open press page" },
    ],
  ),
  support: makeHubPage(
    "support",
    "Support",
    "Help center",
    "Support entry points that do not dead-end",
    "Support now behaves like a real section with adjacent learning, account, feedback, and developer-support routes.",
    [
      { title: "Learning Center", body: "A dedicated place for onboarding and enablement content.", href: "/learning-center", cta: "Open" },
      { title: "Community", body: "Peer help, discussion, and product questions now have a route path.", href: "/community", cta: "Visit" },
      { title: "Developer Support", body: "Builders no longer have to share a generic support destination.", href: "/developers/support", cta: "View" },
    ],
  ),
  customers: makeHubPage(
    "customers",
    "Customers",
    "Proof",
    "Proof points that support the buying journey",
    "This route gives Zoom a stable place for stories, outcomes, and trust-building material beyond the homepage carousel.",
    [
      { title: "Retail", body: "See how industry-specific framing can connect to proof.", href: "/solutions/retail", cta: "View route" },
      { title: "Sales & Revenue", body: "Tie customer outcomes to audience-based messaging.", href: "/solutions/sales-revenue", cta: "Open" },
      { title: "Events", body: "Map event-led growth and customer engagement into the story.", href: "/events", cta: "Open" },
    ],
  ),
  developers: makeHubPage(
    "developers",
    "Developers",
    "Builder ecosystem",
    "Developer entry points with room to grow",
    "APIs, SDKs, webhooks, and support routes now sit under one developer tree instead of being implied inside product copy.",
    [
      { title: "APIs", body: "Automation and provisioning routes for platform teams.", href: "/developers/apis", cta: "Read more" },
      { title: "Video SDK", body: "Custom video experiences for product teams.", href: "/developers/video-sdk", cta: "Explore" },
      { title: "Developer Support", body: "Give builders a clearer path when they get blocked.", href: "/developers/support", cta: "Open" },
    ],
    "dark",
  ),
  integrations: makeHubPage(
    "integrations",
    "Integrations",
    "Connected tools",
    "An integrations layer that connects the stack instead of referencing it vaguely",
    "This route can now grow into marketplace, partner, and ecosystem content without breaking the core product flow.",
    [
      { title: "App Marketplace", body: "A dedicated page for app and workflow discovery.", href: "/integrations/app-marketplace", cta: "Browse" },
      { title: "Partners", body: "Connect product integration detail to services and implementation support.", href: "/partners", cta: "See partners" },
      { title: "Developers", body: "Move from integration curiosity into platform implementation paths.", href: "/developers", cta: "Open developer section" },
    ],
  ),
  partners: makeHubPage(
    "partners",
    "Partners",
    "Partner network",
    "A partner section that can support co-sell, implementation, and ecosystem narratives",
    "The public-site crawl showed partner entry points as a real top-level layer. Zoom now has a route for that motion.",
    [
      { title: "Partner Solutions", body: "Offer packaged implementations and verticalized solutions.", href: "/partners/solutions", cta: "Explore" },
      { title: "Integrations", body: "Tie technical ecosystem value to partner motions.", href: "/integrations", cta: "Open" },
      { title: "Demo", body: "Create a direct handoff from partner interest to sales motion.", href: "/demo", cta: "Request demo" },
    ],
  ),
  resources: makeHubPage(
    "resources",
    "Resources",
    "Library",
    "A resources layer for guides, technical content, and explainers",
    "This gives Zoom a route family for educational content that does not belong in pricing or product leaf pages.",
    [
      { title: "Technical Content Library", body: "A home for technical explainers and implementation detail.", href: "/resources/technical-library", cta: "Open" },
      { title: "How-To Videos", body: "A lighter-weight learning format for common workflows.", href: "/resources/how-to-videos", cta: "Watch collection" },
      { title: "Learning Center", body: "Move from passive resources into structured enablement.", href: "/learning-center", cta: "Go to learning" },
    ],
  ),
  "download/admin": makeHubPage(
    "download/admin",
    "Admin Downloads",
    "Deployment",
    "Managed installs, admin packages, and rollout references",
    "This route gives Zoom a clean place for admin-oriented installers, VDI guidance, and deployment documentation without overloading the public download page.",
    [
      { title: "Rooms App", body: "Package room deployments with the dedicated room client route.", href: "/download/rooms-app", cta: "Open route" },
      { title: "Rooms Controller", body: "Controller guidance and install references for managed room fleets.", href: "/download/rooms-controller", cta: "Open route" },
      { title: "Support", body: "Move from package selection into rollout help and operational support.", href: "/support", cta: "Get help" },
    ],
  ),
};

function collectLinksFromSections(category: LinkContext["category"], sections: NavSection[]) {
  const collected: LinkContext[] = [];

  for (const section of sections) {
    const siblingHrefs = section.links.map((link) => link.href);

    for (const link of section.links) {
      if (!link.href.startsWith("/")) {
        continue;
      }

      collected.push({
        category,
        link,
        sectionTitle: section.title,
        siblingHrefs,
      });
    }
  }

  return collected;
}

const collectedLinks = [
  ...productPanels.flatMap((panel) => collectLinksFromSections("product", panel.sections)),
  ...collectLinksFromSections("ai", aiSections),
  ...collectLinksFromSections("solution", solutionSections),
  ...footerColumns.flatMap((column) =>
    column.links
      .filter((link) => link.href.startsWith("/"))
      .map((link) => ({
        category: "footer" as const,
        link,
        sectionTitle: column.title,
        siblingHrefs: column.links.map((item) => item.href),
      })),
  ),
  ...legalLinks.map((link) => ({
    category: "footer" as const,
    link,
    sectionTitle: "Legal",
    siblingHrefs: legalLinks.map((item) => item.href),
  })),
];

const linkContextByHref = new Map<string, LinkContext>();

for (const entry of collectedLinks) {
  if (!linkContextByHref.has(entry.link.href)) {
    linkContextByHref.set(entry.link.href, entry);
  }
}

function makeGenericBody(label: string, sectionTitle: string, category: LinkContext["category"]) {
  const lowerLabel = label.toLowerCase();

  switch (category) {
    case "product":
      return `Zoom ${lowerLabel} is now a dedicated route so teams can evaluate the workflow, rollout shape, and adjacent tools without relying on a single umbrella page.`;
    case "ai":
      return `${label} sits inside the Zoom AI layer, where summaries, drafting, and operational context stay close to execution instead of floating off into a separate tool.`;
    case "solution":
      return `${label} now has a destination page so Zoom can speak to the audience, industry, or builder motion directly rather than forcing every visitor through the same generic product path.`;
    default:
      return `${label} is part of the ${sectionTitle.toLowerCase()} section and now has a stable Zoom route instead of a placeholder link.`;
  }
}

function buildAutoPage(entry: LinkContext): MarketingPage {
  const href = trimSlashes(entry.link.href);
  const label = entry.link.label;
  const body = entry.link.description ?? makeGenericBody(label, entry.sectionTitle, entry.category);
  const theme: MarketingPage["theme"] =
    entry.category === "ai" ? "dark" : entry.category === "product" ? "gradient" : "light";

  const related = entry.siblingHrefs
    .filter((hrefValue) => hrefValue !== entry.link.href && hrefValue.startsWith("/"))
    .slice(0, 3)
    .map((hrefValue) => {
      const relatedContext = linkContextByHref.get(hrefValue);
      const relatedLabel = relatedContext?.link.label ?? labelFromSlug(trimSlashes(hrefValue));
      return {
        title: relatedLabel,
        href: hrefValue,
        cta: "Open page",
        body:
          relatedContext?.link.description ??
          `See how ${relatedLabel.toLowerCase()} connects to this part of the Zoom surface area.`,
      };
    });

  return {
    slug: href,
    label,
    eyebrow: entry.sectionTitle,
    headline: `${label} that keeps work moving`,
    deck: body,
    theme,
    primaryCta: { label: "Start free", href: "/signup" },
    secondaryCta: { label: "Talk to sales", href: "/contact" },
    highlights: [
      {
        title: "Built for momentum",
        body: `Use ${label.toLowerCase()} as part of a broader Zoom workflow instead of as another isolated destination.`,
      },
      {
        title: "Clearer public coverage",
        body: `This route was added as part of the March 21, 2026 current-state import so the site reflects a much wider public surface.`,
      },
      {
        title: "Shared structure",
        body: "The page uses the same data-backed shell as the rest of the expanded Zoom marketing system, making later edits much cheaper.",
      },
    ],
    sections: [
      {
        title: `What ${label} unlocks`,
        body: body,
      },
      {
        title: "Operational fit",
        body: `Zoom positions ${label.toLowerCase()} alongside planning, communication, and governance so adoption does not depend on users stitching the workflow together themselves.`,
      },
      {
        title: "Why this route exists",
        body: `The live Zoom crawl showed that visitors expect leaf pages for ${label.toLowerCase()} and adjacent categories. Zoom now has that coverage in-repo.`,
      },
    ],
    resources: related,
  };
}

const autoPages: Record<string, MarketingPage> = {};

for (const entry of linkContextByHref.values()) {
  const slug = trimSlashes(entry.link.href);
  if (!slug || manualPages[slug]) {
    continue;
  }

  if (["pricing", "contact", "download", "signin", "signup", "solutions"].includes(slug)) {
    continue;
  }

  autoPages[slug] = buildAutoPage(entry);
}

export const marketingPages: Record<string, MarketingPage> = {
  ...autoPages,
  ...manualPages,
};

export function getMarketingPage(slug: string) {
  return marketingPages[trimSlashes(slug)];
}
