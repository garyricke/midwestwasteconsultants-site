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
    image: "https://res.cloudinary.com/dsbllwpbh/image/upload/f_auto,q_auto/mwc/images/photos/truck-logo",
  },
  {
    slug: "sustainability-programs",
    title: "Sustainability Programs",
    summary:
      "Practical diversion strategies and reporting that move you toward real sustainability goals — not buzzwords.",
    image: "https://res.cloudinary.com/dsbllwpbh/image/upload/f_auto,q_auto/mwc/images/photos/tinley-nonhaz-2",
  },
  {
    slug: "recycling-waste-management",
    title: "Recycling & Waste Diversion",
    summary:
      "Material identification, right-sized sorting systems, and landfill diversion that lowers cost while improving outcomes.",
    image: "https://res.cloudinary.com/dsbllwpbh/image/upload/f_auto,q_auto/mwc/images/photos/tinley-nonhaz-1",
  },
  {
    slug: "commercial-waste-disposal",
    title: "Commercial Waste Disposal",
    summary:
      "Optimized collection schedules and compliance for businesses with one location or five hundred.",
    appCta: true,
    image: "https://res.cloudinary.com/dsbllwpbh/image/upload/f_auto,q_auto/mwc/images/photos/branded-frontloads",
  },
  {
    slug: "event-waste-management",
    title: "Event Waste Management",
    summary:
      "Container planning, recycling integration, and cleanup for events of any scale — we've managed waste for the LIV Golf tournament at Rich Harvest Farms.",
    image: "https://res.cloudinary.com/dsbllwpbh/image/upload/f_auto,q_auto/mwc/images/photos/roll-off-containers",
  },
  {
    slug: "roll-off-dumpsters",
    title: "Roll-Off Dumpsters",
    summary:
      "Need a dumpster on the driveway by Friday? Order one in minutes on our transactional site, midwestwaste.app.",
    appCta: true,
    image: "https://res.cloudinary.com/dsbllwpbh/image/upload/f_auto,q_auto/mwc/images/photos/roll-off-driveway",
  },
];

export type ServiceArea = {
  slug: string;
  city: string;
  state: "IL";
  // When true, cinematic town imagery is hosted on Cloudinary at
  // mwc/images/areas/<slug>-hero and mwc/images/areas/<slug>-panel.
  hasImage?: boolean;
  // When set (>1), the town hero renders a cross-fading carousel pulling
  // mwc/images/areas/<slug>-hero-1 … -N. Otherwise a single <slug>-hero is used.
  // Real, on-location cinematic renders (golden-hour grade, dark/wet asphalt
  // streets, brick left as brick, Midwest Waste truck composited in).
  heroCount?: number;
  // Optional per-slide Cloudinary crop applied BEFORE the delivery transform,
  // keyed by 1-based hero slide number. Use to pan/reframe a shot so the truck
  // clears the right-hand copy panel (e.g. a center-parked truck → "c_crop,g_east,w_0.72").
  heroCrops?: Record<number, string>;
  // Optional per-slide side for the frosted copy panel ("left" | "right"),
  // keyed by 1-based hero slide number. Defaults to "right". Flip to "left" when
  // the truck/landmark sit on the right of the frame (e.g. Geneva windmill).
  heroPanels?: Record<number, "left" | "right">;
  // Optional per-slide object-position (the hero crops top/bottom via object-cover),
  // keyed by 1-based hero slide number. Defaults to center. Use a smaller Y (e.g.
  // "50% 30%") to pan up and reveal a tall landmark's top + more sky.
  heroFocus?: Record<number, string>;
};

// Fox Valley corridor, west of Chicago. Sourced from the live site.
// NOTE: town images (hasImage) are AI-generated PLACEHOLDERS. Post-launch todo:
// shoot a real phone photo on location in each town, composite the actual truck
// in, grade it cinematic, and replace these one town at a time over time.
export const SERVICE_AREAS: ServiceArea[] = [
  { slug: "sugar-grove-il", city: "Sugar Grove", state: "IL", hasImage: true },
  { slug: "aurora-il", city: "Aurora", state: "IL", hasImage: true },
  { slug: "naperville-il", city: "Naperville", state: "IL", hasImage: true },
  { slug: "geneva-il", city: "Geneva", state: "IL", hasImage: true, heroCount: 2, heroPanels: { 2: "left" }, heroFocus: { 1: "50% 30%" } },
  { slug: "st-charles-il", city: "St. Charles", state: "IL", hasImage: true, heroCount: 2, heroCrops: { 1: "c_crop,g_east,w_0.62", 2: "c_crop,g_east,w_0.80" }, heroFocus: { 1: "50% 25%", 2: "50% 22%" } },
  { slug: "batavia-il", city: "Batavia", state: "IL", hasImage: true, heroCount: 3, heroCrops: { 3: "c_crop,g_east,w_0.72" } },
  { slug: "north-aurora-il", city: "North Aurora", state: "IL", hasImage: true },
  { slug: "oswego-il", city: "Oswego", state: "IL", hasImage: true },
  { slug: "elburn-il", city: "Elburn", state: "IL", hasImage: true },
  { slug: "west-chicago-il", city: "West Chicago", state: "IL", hasImage: true },
  { slug: "wheaton-il", city: "Wheaton", state: "IL", hasImage: true },
  { slug: "yorkville-il", city: "Yorkville", state: "IL", hasImage: true },
  { slug: "montgomery-il", city: "Montgomery", state: "IL", hasImage: true },
  { slug: "plainfield-il", city: "Plainfield", state: "IL", hasImage: true },
  { slug: "south-elgin-il", city: "South Elgin", state: "IL", hasImage: true },
  { slug: "elgin-il", city: "Elgin", state: "IL", hasImage: true },
  { slug: "winfield-il", city: "Winfield", state: "IL", hasImage: true },
  { slug: "warrenville-il", city: "Warrenville", state: "IL", hasImage: true },
  { slug: "glen-ellyn-il", city: "Glen Ellyn", state: "IL", hasImage: true },
  { slug: "downers-grove-il", city: "Downers Grove", state: "IL", hasImage: true },
];

export type Review = {
  author: string;
  date: string;
  rating: number;
  body: string;
  ownerReply?: string;
};

// Real Google reviews from the full Google feed (exported 2026-06-29).
export const REVIEWS: Review[] = [
  { author: "Erin and Travis Brown", date: "6 months ago", rating: 5, body: "We rented a 15 yd dumpster last month for a home clean up and couldn't be happier with our experience! The communication with Greg was fantastic, drop off and pick up were timely, and the price can't be beat. They were very flexible with our needs and made sure we were satisfied. We will definitely work with Midwest Waste Consultants again and cannot recommend them enough." },
  { author: "Phil Morris", date: "a month ago", rating: 5, body: "I have used Midwest twice in the last year and the service is awesome as well as the price. The team that dropped the it to our driveway was so professional and the driver put it perfectly in driveway and so gentle. Highly recommend them. Greg answers every time I called and never had to leave a voicemail. This company is all about customer service!" },
  { author: "julia schulte", date: "7 months ago", rating: 5, body: "Greg and Ryan did a fabulous job assisting me with inventory removal. Highly recommend this company for honest and efficient disposal. What a relief to have their help!" },
  { author: "Bridget Dodd", date: "7 months ago", rating: 5, body: "Phenomenal company, people & service! After calling multiple dumpster companies for quotes & info, these guys were the easy choice." },
  { author: "Mike Bradle", date: "9 months ago", rating: 5, body: "Fantastic, A+ experience with Greg and team! We are moving out of state and required a dumpster and \"smart hands\" to assist in de-cluttering 25 years' worth of accumulation." },
  { author: "Michelle Liebold", date: "10 months ago", rating: 5, body: "We got a 20 yard rolloff dumpster for a residential clean-out from Midwest Waste Consultants and could't be happier with their service and responsiveness. The owner, Greg, and his team were amazing to work with. Definitely would use them again. If you are in need of a dumpster, I highly recommend giving them a call!" },
  { author: "Marsha Kerr", date: "4 weeks ago", rating: 5, body: "These guys are great awesome prices available time to have the dumpster 100% great job" },
  { author: "Chris Parsons", date: "9 months ago", rating: 5, body: "This company provides an incredibly seamless and reliable service. I have rented an 8 yard dumpster from them on 2 occasions now. They delivered the dumpsters when scheduled and placed them exactly where I requested." },
  { author: "Gail Bolin", date: "a year ago", rating: 5, body: "Midwest Waste took on our HOA property and are impressed.Example of their professionalism : there was a mixup with our previous management company and Midwest took it upon themselves to resolve the problem so our" },
  { author: "Cindy Ybarra", date: "a year ago", rating: 5, body: "Since switching from the \"big\" waste hauling company to Midwest for half the cost, we have not noticed any disruption in service. Tyler and Greg have both been very professional without the heavy-handed sales pitch. Highly recommend." },
  { author: "Mike Backer", date: "a year ago", rating: 5, body: "From the moment that I first placed a call to Greg, to the follow-up text after the dumpster was picked up, every aspect of my experience with Midwest Waste was phenomenal. Not only was Greg very professional and knowledgeable, he was also accommodating and flexible for delivery, the length of rental, and pickup. The dumpster was in great shape and placed exactly where I requested, Greg was communicative and supportive throughout the whole process, and the rental was an incredibly competitive rate versus larger companies. The website states that the company was founded after the owners found themselves fed up with with all of the red tape that customers experience when renting dumpsters, and this mission of providing simple, affordable, excellent service certainly rings true. I couldn't imagine renting a dumpster anywhere else." },
  { author: "Rachel Hyde", date: "a year ago", rating: 5, body: "By far the best garbage experience I've had. We needed a large dumpster for a basement/garage cleanout, and Greg and team were able to deliver same day of request at a great rate!" },
  { author: "Scott Rose", date: "a year ago", rating: 5, body: "We're moving out of state and needed to purge stuff we haven't seen our touched in years. We looked around at different companies and got a few quotes." },
  { author: "Tina Abbatecola", date: "a year ago", rating: 5, body: "If I could choose 20 stars I would! Greg and Tyler are AMAZING! Our HOA has not only switched garbage companies after 10 years, we also switched property managers after 15 years.. at the same time!" },
  { author: "Erin Busse", date: "a year ago", rating: 5, body: "Highly recommend! We rented a small dumpster for our block party and couldn’t be happier. Timely arrival and removal. Greg was personable and accommodating. Can’t imagine having a block party without the dumpster again - it made it so convenient to dispose of everything quickly and easily." },
  { author: "Belinda Demski", date: "a year ago", rating: 5, body: "I use Midwest Waste for my 2 business locations. They are super responsive, very competitively priced (they beat my current supplier) and just great people to work with. I would highly recommend then. Ask for Tyler!" },
  { author: "Alison Domino", date: "a year ago", rating: 5, body: "Great company!!Greg and Tyler have been so accommodating as we've STRUGGLED to get our major home project going." },
  { author: "Melissa K", date: "2 years ago", rating: 5, body: "We had a great experience renting a dumpster with this company. Super nice guys that showed up when they said they were going to. They were even able to drop off the dumpster the same day I called! I shopped around and they had the best prices too. Glad I found them and was able to support a local family owned business." },
  { author: "Maria Najera", date: "a year ago", rating: 5, body: "They were amazing at helping me out at the last minute. I'm very thankful for their service." },
  { author: "Katharine Furby", date: "2 years ago", rating: 5, body: "Midwest Waste Consultants is an EXCELLENT choice for renting a large roll-off dumpster for any private home owner or demolition novice, such as myself." },
  { author: "Diana Chapa", date: "a year ago", rating: 5, body: "EXCELLENT experience.. We needed a dumpster pretty much LAST MINUTE.. as in called the day before and confirmed morning of when it was needed.. We got it in record time ." },
  { author: "Cheryl Kessler", date: "a year ago", rating: 5, body: "Midwest Waste Consultants are THE BEST!! They are professional, reliable and quick to respond with any questions or requests. Greg and Tyler really do put their hearts into this business." },
  { author: "Becky Hultine", date: "3 years ago", rating: 5, body: "It was the best experience dealing with Midwest Waste Consultants. There was great communication, friendly service and on time delivery. They are our #1 go to company for dumpster rental!" },
  { author: "Jerry Planek", date: "a year ago", rating: 5, body: "We have a business account with MWC. After engaging with the \"big guys\" out there and reviewing their contracts, I am so glad I found this company. They have competitive pricing, great communication, have never missed a pick-up, and their service contract is not a one-sided \"sell your soul\" agreement, its fair." },
  { author: "Walter Sutphin", date: "2 years ago", rating: 5, body: "We are a disaster mitigation contractor. Our needs fluctuate based on the projects & services being performed. The quick response & flexibility Midwest has provided is truly best in class service." },
  { author: "Tom Stanczak", date: "5 years ago", rating: 5, body: "Working with Midwest Waste Consultants was as easy as can be. I was cleaning out a hoarder house and needed a dumpster or two. I contacted 2 companies and MWC reached out quickly and Greg was as professional as you would want." },
  { author: "Starla Kealey", date: "3 years ago", rating: 5, body: "I had a wonderful experience with Mudwest Waste. Greg was responsive and friendly and did everything he said when he said he would. I needed a couple quick swap out and he did it with ease. Really can't ask for much more. They were all great. Definitely recommend them and will definitely use them in the future." },
  { author: "Melissa Capezio", date: "3 years ago", rating: 5, body: "I called and spoke with Tyler about a dumpster rental inquiring about the price, I had called several dumpster companies. After speaking with Tyler his Compassion and professionalism to my circumstances were above and beyond." },
  { author: "Mike Hobart", date: "5 years ago", rating: 5, body: "We had a great experience using Midwest Waste Consultants for our basement demolition project! Communication was very clear, friendly and prompt. Drop off and pick up were handled in a timely fashion." },
  { author: "Ron Davis", date: "3 years ago", rating: 5, body: "I was a first time roll off dumpster user and was unsure of the process - and I had difficult timing. Midwest Waste Consultants came through with everything I needed and made the process very smooth and as stress free as possible." },
  { author: "lily staples", date: "5 years ago", rating: 5, body: "After talking to the owners at Complete Midwest Waste Consultants, LLC, I instantly felt at ease. It can be hard to find a company who is passionate about what they do all while backing it up with experience and references." },
  { author: "ALYSHA BANKS", date: "a year ago", rating: 5, body: "Highly recommend. Great pricing, delivery when expected and easy to work with. Will definitely be using Midwest Waste in the future. Thank you!" },
  { author: "Genel Thompson", date: "2 years ago", rating: 5, body: "Great experience, great company. 30 day rental was a game changer! Highly recommended! Greg is the best." },
  { author: "George Spence", date: "4 years ago", rating: 5, body: "Very easy to work with. On time with drop off and pick up, and complied with my request to give advance notice of arrival. The cost was reasonable, and they accomodated my request for a more convenient pick up." },
  { author: "Matthew Clarke", date: "a year ago", rating: 5, body: "Setting pick up and delivery was easy. Greg was able to text back in 15 minutes when I would send a request." },
  { author: "Jennifer Parnell", date: "3 years ago", rating: 5, body: "I love this company. They helped me figure out what I needed, they were super friendly and prompt. They made my day . We are moving very far away so we had a lot of stuff to get rid of." },
  { author: "Jeremy Kobbeman", date: "4 years ago", rating: 5, body: "Greg was very helpful and responsive. Couldn’t have asked for better service for our dumpster rental." },
  { author: "Sarah Macaluso", date: "3 years ago", rating: 5, body: "Great experience all around. Great communication, very polite to talk to and communicate with, efficient and timely and competitive pricing. Would definitely recommend and I will use them again in the future!" },
  { author: "Bob Rogerson", date: "a year ago", rating: 5, body: "Great owners of this company and very professional to work with. If I call them, they answer the phone and always willing to help. I would recommend Midwest." },
  { author: "Sherilyn Kingsbury", date: "a year ago", rating: 5, body: "Recommended by a friend and had a wonderful experience. Very professional and accommodating to our needs." },
  { author: "Joann Smith", date: "a year ago", rating: 5, body: "Great service, competitively priced. Would use them again. Value for the dollar spent." },
  { author: "Vicky Bergeron", date: "a year ago", rating: 5, body: "This company has really worked with me well as I've had a large task to take care of I'd highly recommend them to anybody" },
  { author: "Rudy Asuncion", date: "4 years ago", rating: 5, body: "Greg Lower is truly professional, easy to talk with and gave me a better deal on what I need for. highly recommended. Hats off to you Mr. Lower." },
  { author: "Kenneth w Roberts", date: "3 years ago", rating: 5, body: "Great experience , easier then what i thought it would be . Tyler done a great job, quick to respond with details. Easy drop off and pick up . Thank-you." },
  { author: "Jesse Rodriguez", date: "9 months ago", rating: 5, body: "Reasonable prices- on time delivery and pick up." },
  { author: "Kevin Demsky", date: "3 years ago", rating: 5, body: "Great company. Two owners were a pleasure to deal with. Highly recommend." },
  { author: "Jennifer Lorenzin", date: "4 years ago", rating: 5, body: "Fantastic company and service! Communication was timely, polite and top notch! I was impressed with this company and highly recommend them to anyone!" },
  { author: "James Blandi", date: "3 years ago", rating: 5, body: "Tyler was a big help! enjoyed working with him on my project.Positive:" },
  { author: "Nick Kasper", date: "a year ago", rating: 5, body: "These guys are awesome! I would totally rent from them again" },
  { author: "Patrick Jennings", date: "3 years ago", rating: 5, body: "Showed up on time price was right and picked up when no hassle was very happyPositive:" },
  { author: "J MAC", date: "a year ago", rating: 5, body: "Absolutely the best highly recommended!" },
  { author: "Maureen Davis", date: "3 years ago", rating: 5, body: "Great communication, simplicity and service!" },
  { author: "Collin Marwitz", date: "2 years ago", rating: 5, body: "Great company to work with!" },
];

export const REVIEW_STATS = { average: 4.8, count: 64 } as const;

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
