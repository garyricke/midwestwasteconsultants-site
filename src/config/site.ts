// ---------------------------------------------------------------------------
// Single source of truth for site-wide data: company info, nav, services,
// service areas, reviews, FAQ. Pages and components import from here.
// ---------------------------------------------------------------------------

export const SITE = {
  name: "Midwest Waste Consultants",
  legalName: "Midwest Waste Consultants, LLC",
  tagline: "Stop Throwing Your Money In The Trash",
  description:
    "National waste consulting, brokering, and sustainability programs from an owner-operated team with 30+ years in the field. Based in the Illinois Fox Valley, serving clients nationwide.",
  url: "https://www.midwestwasteconsultants.com",
  phone: "630-800-8549",
  phoneHref: "tel:6308008549",
  email: "info@midwestwasteconsultants.com", // PLACEHOLDER — confirm real inbox
  baseCity: "Sugar Grove & Aurora, Illinois",
  established: "2015",
  hours: [
    { days: "Monday – Saturday", time: "8:00 am – 5:00 pm" },
    { days: "Sunday", time: "Closed" },
  ],
  badges: ["Free Estimates", "Licensed & Insured", "Military Discounts Available"],
  // The transactional sister site — where dumpster ordering lives.
  appUrl: "https://midwestwaste.app",
  social: {
    facebook: "https://www.facebook.com/MidwestWasteConsultants/",
    linkedin: "https://www.linkedin.com/company/midwest-waste-consultants",
  },
} as const;

// Primary navigation (Services rendered as a dropdown from SERVICES below).
export const NAV = [
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Areas We Serve", href: "/areas-we-serve" },
  { label: "Resources", href: "/resources" },
  { label: "Reviews", href: "/reviews" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export type Service = {
  slug: string;
  title: string;
  summary: string;
  // If set, the primary CTA on the card/page links out to the transactional app.
  appCta?: boolean;
  // Hero photo for the service page (under /images/photos/).
  image?: string;
};

// Consulting-led order. Transactional services deep-link to midwestwaste.app.
export const SERVICES: Service[] = [
  {
    slug: "brokering-and-consulting",
    title: "Brokering & Consulting",
    summary:
      "We sit on your side of the table — auditing contracts, exposing auto-renewal traps, and leveraging a nationwide vendor network to cut your waste spend.",
    image: "/images/photos/truck-logo.webp",
  },
  {
    slug: "sustainability-programs",
    title: "Sustainability Programs",
    summary:
      "Practical diversion strategies and reporting that move you toward real sustainability goals — not buzzwords.",
    image: "/images/photos/tinley-nonhaz-2.webp",
  },
  {
    slug: "recycling-waste-management",
    title: "Recycling & Waste Diversion",
    summary:
      "Material identification, right-sized sorting systems, and landfill diversion that lowers cost while improving outcomes.",
    image: "/images/photos/tinley-nonhaz-1.webp",
  },
  {
    slug: "commercial-waste-disposal",
    title: "Commercial Waste Disposal",
    summary:
      "Optimized collection schedules and compliance for businesses with one location or five hundred.",
    appCta: true,
    image: "/images/photos/branded-frontloads.webp",
  },
  {
    slug: "event-waste-management",
    title: "Event Waste Management",
    summary:
      "Container planning, recycling integration, and cleanup for events of any scale — we've managed waste for the LIV Golf tournament at Rich Harvest Farms.",
    image: "/images/photos/roll-off-containers.webp",
  },
  {
    slug: "roll-off-dumpsters",
    title: "Roll-Off Dumpsters",
    summary:
      "Need a dumpster on the driveway by Friday? Order one in minutes on our transactional site, midwestwaste.app.",
    appCta: true,
    image: "/images/photos/roll-off-driveway.webp",
  },
];

export type ServiceArea = {
  slug: string;
  city: string;
  state: "IL";
};

// Fox Valley corridor, west of Chicago. Sourced from the live site.
export const SERVICE_AREAS: ServiceArea[] = [
  { slug: "sugar-grove-il", city: "Sugar Grove", state: "IL" },
  { slug: "aurora-il", city: "Aurora", state: "IL" },
  { slug: "naperville-il", city: "Naperville", state: "IL" },
  { slug: "geneva-il", city: "Geneva", state: "IL" },
  { slug: "st-charles-il", city: "St. Charles", state: "IL" },
  { slug: "batavia-il", city: "Batavia", state: "IL" },
  { slug: "north-aurora-il", city: "North Aurora", state: "IL" },
  { slug: "oswego-il", city: "Oswego", state: "IL" },
  { slug: "elburn-il", city: "Elburn", state: "IL" },
  { slug: "west-chicago-il", city: "West Chicago", state: "IL" },
  { slug: "wheaton-il", city: "Wheaton", state: "IL" },
  { slug: "yorkville-il", city: "Yorkville", state: "IL" },
  { slug: "montgomery-il", city: "Montgomery", state: "IL" },
  { slug: "plainfield-il", city: "Plainfield", state: "IL" },
  { slug: "south-elgin-il", city: "South Elgin", state: "IL" },
  { slug: "elgin-il", city: "Elgin", state: "IL" },
  { slug: "winfield-il", city: "Winfield", state: "IL" },
  { slug: "warrenville-il", city: "Warrenville", state: "IL" },
  { slug: "glen-ellyn-il", city: "Glen Ellyn", state: "IL" },
  { slug: "downers-grove-il", city: "Downers Grove", state: "IL" },
];

export type Review = {
  author: string;
  date: string;
  rating: number;
  body: string;
  ownerReply?: string;
};

// Real Google reviews (5.0 average, 4 reviews) provided by the client.
export const REVIEWS: Review[] = [
  {
    author: "Christopher Parsons",
    date: "9 months ago",
    rating: 5,
    body: "As I prepared my home for sale, I searched for a reliable waste removal service to help me clean up my property. Midwest Waste was highly rated and I soon found out why. They listened to my needs and provided great recommendations on 2 occasions. In addition to the dumpsters, they took additional items, including a refrigerator, without additional charges. The service was very personal and seamless.",
  },
  {
    author: "Alma Fonseca",
    date: "8 months ago",
    rating: 5,
    body: "Amazing customer service, containers are delivered promptly. I have been working with them for months. All staff are so friendly and accessible!",
    ownerReply: "Thanks Alma — It's a pleasure working with you.",
  },
  {
    author: "Josh L",
    date: "2 years ago",
    rating: 5,
    body: "Got me a great rate on a dumpster and quicker than any of the big guys could deliver it. Called and got to talk to a person, A++ customer service.",
    ownerReply: "You're the best Josh L!",
  },
  {
    author: "Eric Kmiec",
    date: "a year ago",
    rating: 5,
    body: "Great service, great price, great people.",
  },
];

export const REVIEW_STATS = { average: 5.0, count: 4 } as const;

export type Faq = { question: string; answer: string };

export const FAQS: Faq[] = [
  {
    question: "What types of clients benefit from waste management consulting?",
    answer:
      "Any business paying for waste service benefits from a second set of expert eyes — from a single restaurant or retail store to property managers and multi-site operators across the country. If you have a hauling contract, there's a good chance you're overpaying, locked into an auto-renewal, or hit with surcharges you were never told about. We find that money.",
  },
  {
    question: "How does brokering waste services work?",
    answer:
      "We act on your behalf, not the hauler's. Using a nationwide network of vendors, we source and negotiate service so you get the right container, the right schedule, and a fair rate — without the markups and gotcha clauses that come from signing directly. You deal with one accountable point of contact instead of a call center.",
  },
  {
    question: "Can waste management services be coordinated nationwide?",
    answer:
      "Yes. While our trucks run the Illinois Fox Valley, our brokering and consulting work is national. We coordinate service across multiple states and locations, standardizing billing and reporting so a company with sites in many cities gets one consistent program.",
  },
  {
    question: "Do recycling programs really reduce disposal costs?",
    answer:
      "Often, yes. Diverting recyclable or compostable material out of the landfill stream can shrink the most expensive part of your bill, and a right-sized program means you stop paying to haul air in half-empty containers. We evaluate what you actually throw away before recommending anything.",
  },
];
