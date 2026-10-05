/**
 * All homepage content lives here, separate from the components.
 *
 * Every string is copied from the current RESONANCE Lab website
 * (https://sites.google.com/aait.edu.et/resonance-lab/home) as of 5 Oct 2026.
 * The comment above each block names the page it came from.
 * Nothing here is invented. If the lab updates a fact, change it here only.
 */

const LIVE_SITE = "https://sites.google.com/aait.edu.et/resonance-lab/home";

// The prototype covers the homepage only, so inner pages link to the live site.
export const pages = {
  about: `${LIVE_SITE}/about`,
  research: `${LIVE_SITE}/research`,
  team: `${LIVE_SITE}/team`,
  news: `${LIVE_SITE}/news-events`,
  publications: `${LIVE_SITE}/publications`,
  getInvolved: `${LIVE_SITE}/get-involved`,
  application: `${LIVE_SITE}/get-involved/application-202526`,
  contact: `${LIVE_SITE}/contact`,
} as const;

export type NavLink = { label: string; href: string };

// Source: site navigation menu (same order).
export const navLinks: NavLink[] = [
  { label: "About", href: pages.about },
  { label: "Research", href: pages.research },
  { label: "Team", href: pages.team },
  { label: "News & Events", href: pages.news },
  { label: "Publications", href: pages.publications },
  { label: "Contact", href: pages.contact },
];

export const getInvolvedLink: NavLink = {
  label: "Get Involved",
  href: pages.getInvolved,
};

// Source: About page ("Our Mission") and the site title.
export const lab = {
  name: "RESONANCE AI4D Lab",
  fullName: "Responsible AI Solutions and Networks for Sustainable Development",
  university: "Addis Ababa University",
  college: "College of Technology and Built Environment",
  collegeShort: "CTBE",
  motto: "Harnessing AI for Sustainable and Inclusive Development.",
  // The second sentence of the mission, used verbatim as the hero summary.
  missionLead:
    "We focus on creating ethical and scalable AI solutions tailored to Ethiopia's specific needs, advancing key Sustainable Development Goals (SDGs) across health, agriculture, governance, and energy.",
  mission:
    "The Resonance Lab (Responsible AI Solutions and Networks for Sustainable Development) at Addis Ababa University aims to position Ethiopia as a leader in Responsible AI for development. We focus on creating ethical and scalable AI solutions tailored to Ethiopia's specific needs, advancing key Sustainable Development Goals (SDGs) across health, agriculture, governance, and energy.",
} as const;

// Source: Contact page ("Our Contact Details").
export const contact = {
  email: "resonance@aau.edu.et",
  addressLines: [
    "College of Technology and Built Environment",
    "Addis Ababa University",
    "King George VI st",
    "P.O.Box 385",
    "Addis Ababa, Ethiopia",
  ],
} as const;

export type VisionItem = { title: string; description: string };

// Source: Home page ("Our Vision").
export const vision: VisionItem[] = [
  {
    title: "Innovation Hub",
    description:
      "Positioning Ethiopia as a leader in Responsible AI for development, advancing key SDGs.",
  },
  {
    title: "Sustainable Solutions",
    description:
      "Creating ethical and scalable AI solutions tailored to Ethiopia's specific needs in health, agriculture, governance, and energy.",
  },
  {
    title: "Collaborative Ecosystem",
    description:
      "Fostering collaborations between academia, government, industry, and communities.",
  },
];

export type FocusArea = {
  id: "health" | "agriculture" | "governance" | "energy";
  title: string;
  description: string;
  examples: string[];
};

// Source: Home page ("Key Focus Areas") for titles;
// Research page ("Thematic Research Areas") for descriptions and examples.
export const focusAreas: FocusArea[] = [
  {
    id: "health",
    title: "Innovative Health Solutions",
    description:
      "Developing AI-powered tools to improve healthcare access and outcomes, particularly in rural and underserved areas.",
    examples: [
      "AI Telemedicine for Rural Health",
      "AI Diagnostics for Early Detection",
      "Predictive Analytics for Outbreak Management",
    ],
  },
  {
    id: "agriculture",
    title: "Resilient Agriculture & Food Systems",
    description:
      "Leveraging AI and IoT to enhance food security, improve productivity, and mitigate climate variability in agriculture.",
    examples: [
      "Precision Agriculture and Resource Optimization",
      "AI-Driven Dairy Management",
      "AI for Wheat Disease Management",
    ],
  },
  {
    id: "governance",
    title: "Inclusive Governance & Justice",
    description:
      "Enhancing transparency, optimizing decision-making, and improving public service delivery through AI.",
    examples: [
      "AI-Driven Judicial Case Management",
      "Natural Language Processing and Resource Allocation",
      "Sentiment Analysis for Policy Feedback",
    ],
  },
  {
    id: "energy",
    title: "Sustainable Energy & Climate Resilience",
    description:
      "Designing AI-powered models to optimize energy forecasting, promote sustainable energy, and build climate resilience.",
    examples: [
      "Energy Demand Forecasting",
      "AI for Energy Distribution",
      "Climate Risk Prediction and Early Warning System",
    ],
  },
];

// Source: Get Involved page ("Opportunities for Students", "Collaborate & Partner with Us").
export const getInvolved = {
  students: {
    title: "Students",
    description:
      "We are building a robust and inclusive AI talent pipeline. Join our Masters or PhD research positions, or align your ongoing research with our core focus areas.",
  },
  partners: {
    title: "Collaborators & Partners",
    description:
      "We actively seek strategic collaborations with academic institutions, government entities, industry partners, and community organizations to enhance our impact and ensure the relevance, scalability, and sustainability of our initiatives.",
  },
} as const;

// Source: Get Involved > Application 2025/26 page ("Application Timeline").
// The deadlines have passed, so the homepage shows this call as closed
// instead of repeating "applications are now open".
export const applicationCall = {
  title: "Call for Applications 2025/26",
  subtitle: "Funded Masters and PhD Research Positions",
  status: "closed" as "open" | "closed",
  timeline: [
    { date: "July 28, 2025", label: "Application deadline (Masters)" },
    { date: "August 11, 2025", label: "Application deadline (PhD)" },
    { date: "August 12-18, 2025", label: "Shortlisting & Assessment" },
    { date: "August 20-25, 2025", label: "Interviews" },
    { date: "August 29, 2025", label: "Final Selection & Offers" },
    { date: "September 12, 2025", label: "Program Commencement" },
  ],
};

export type Partner = {
  name: string;
  logo: string;
  url: string;
  width: number;
  height: number;
};

// Source: Home page ("Our Partners:" logos). Names are taken from the logos;
// the links go to each organization's official website.
export const partners: Partner[] = [
  {
    name: "Artificial Intelligence for Development (AI4D)",
    logo: "/partner-ai4d.png",
    url: "https://www.ai4d.ai/",
    width: 1280,
    height: 455,
  },
  {
    name: "International Development Research Centre (IDRC), Canada",
    logo: "/partner-idrc.png",
    url: "https://idrc-crdi.ca/en",
    width: 692,
    height: 390,
  },
  {
    name: "UK International Development",
    logo: "/partner-uk-international-development.png",
    url: "https://www.gov.uk/government/organisations/foreign-commonwealth-development-office",
    width: 1280,
    height: 375,
  },
];
