// Long-form content for each service detail page, keyed by slug (see SERVICES
// in config/site.ts). Kept separate so the config stays light.

export type ServiceDetail = {
  /** One-line value statement under the H1. */
  lede: string;
  /** Intro paragraphs. */
  intro: string[];
  /** "What's included" / capability bullets. */
  highlights: { title: string; text: string }[];
  /** Optional closing paragraph. */
  outro?: string;
};

export const SERVICE_DETAILS: Record<string, ServiceDetail> = {
  "brokering-and-consulting": {
    lede: "Expert guidance and a nationwide vendor network that puts you back in control of your waste spend.",
    intro: [
      "Waste and recycling contracts are written by the hauler, for the hauler. Auto-renewals, escalators, fuel and environmental surcharges, and oversized containers all quietly inflate your bill. We read the fine print you don't have time for — and we negotiate from experience, not guesswork.",
      "As an independent broker, our incentive is the opposite of a hauler's: we win when your cost goes down. We source service across a nationwide network, benchmark your rates, and hold vendors accountable to the terms we agree on.",
    ],
    highlights: [
      { title: "Contract & invoice audit", text: "We comb your current agreement and recent invoices for overcharges, surcharges, and the auto-renewal clause that's quietly trapping you." },
      { title: "Competitive sourcing", text: "We put your service out to a nationwide network of qualified vendors and bring back apples-to-apples options." },
      { title: "Negotiation on your behalf", text: "Right-sized containers, fair pricing, and terms without the gotchas — negotiated by people who've sat on the other side." },
      { title: "Ongoing oversight", text: "We keep watching after the deal is signed, so creeping rates and surprise fees don't undo the savings." },
    ],
    outro: "If you have a hauling contract, there's a good chance we can find money in it. The review is free.",
  },
  "sustainability-programs": {
    lede: "Practical sustainability solutions for a greener future — measured in real numbers, not buzzwords.",
    intro: [
      "Sustainability only sticks when it also makes operational and financial sense. We start by understanding what your business actually throws away, then build a diversion program that lowers landfill volume and gives you the reporting to prove it.",
      "No vague promises about 'synergistic waste intelligence.' Just a clear plan: what to divert, how to capture it, and what it saves.",
    ],
    highlights: [
      { title: "Waste stream assessment", text: "A grounded look at what you generate and where it goes today." },
      { title: "Diversion strategy", text: "Right-sized recycling and organics streams that cut the most expensive part of your bill." },
      { title: "Reporting you can share", text: "Diversion and tonnage data for stakeholders, ESG reporting, and corporate goals. [Placeholder — confirm reporting formats offered.]" },
    ],
  },
  "recycling-waste-management": {
    lede: "Making recycling easy and efficient — for a single site or an entire portfolio.",
    intro: [
      "A recycling program that's set up wrong costs you twice: you pay to haul contaminated loads and you miss the diversion savings. We identify the materials worth capturing, design a sorting setup your team will actually use, and route material to the right end markets.",
    ],
    highlights: [
      { title: "Material identification", text: "We find the recyclable and compostable streams hiding in your trash." },
      { title: "Right-sized sorting systems", text: "Bins, signage, and placement that make the right choice the easy choice." },
      { title: "Landfill diversion", text: "Lower disposal costs and a smaller footprint, tracked over time." },
    ],
  },
  "commercial-waste-disposal": {
    lede: "Effortless, optimized waste disposal for businesses with one location or five hundred.",
    intro: [
      "Reliable collection, schedules sized to your real volume, and compliance handled — without the surcharges and service gaps that come from dealing with a national hauler's call center.",
      "For ongoing commercial service across multiple locations, our consulting and brokering team builds one consistent program with standardized billing. Need a one-time container fast? Our transactional site handles that in minutes.",
    ],
    highlights: [
      { title: "Optimized scheduling", text: "Pickups matched to how much you actually generate, so you stop paying to haul air." },
      { title: "Compliance handled", text: "Service that keeps you on the right side of local requirements." },
      { title: "Multi-site consistency", text: "One program, one point of contact, standardized billing across every location." },
    ],
  },
  "event-waste-management": {
    lede: "Efficient waste management for clean, successful events of any scale.",
    intro: [
      "Events are waste management on hard mode: high volume, tight windows, and a brand watching. We plan the containers, integrate recycling, and coordinate cleanup so the grounds stay presentable from gates-open to load-out.",
      "We've managed waste and recycling for the LIV Golf tournament at Rich Harvest Farms — and even captured it with a drone flyover. [Placeholder — add event results, tonnage, and photo/video.]",
    ],
    highlights: [
      { title: "Container planning", text: "The right number, the right sizes, in the right places for the crowd and footprint." },
      { title: "Recycling integration", text: "Diversion built into the event, not bolted on after." },
      { title: "Cleanup coordination", text: "Staged labor and hauling so the venue is reset on schedule." },
    ],
  },
  "roll-off-dumpsters": {
    lede: "Convenient roll-off dumpsters for any project — order online and we route it to the closest qualified hauler.",
    intro: [
      "Cleanouts, renovations, construction, roofing, a garage that's finally getting handled — we'll size the container right and get it on your driveway fast.",
      "Ordering is fastest on our transactional site, midwestwaste.app: pick a size, pay online, and the order is routed to the nearest qualified hauler. No phone tag, no quotes to chase.",
    ],
    highlights: [
      { title: "Right-sized containers", text: "From small cleanouts to construction-scale projects." },
      { title: "Fast delivery", text: "Often quicker than the big national haulers can manage." },
      { title: "Online ordering", text: "Pick, pay, and schedule in minutes at midwestwaste.app." },
    ],
  },
};
