export const strings = {
  meta: {
    title: "Etto Labs — One AI workflow live in 45 days",
    description:
      "We put one AI workflow into production in 45 days for a fixed fee. Miss the deadline or the agreed metric, and you withhold the final tranche.",
    ogTitle: "Etto Labs — AI workflow deployment for the GCC mid-market",
  },
  nav: {
    howItWorks: "How it works",
    theOffer: "The offer",
    verticals: "Verticals",
    faq: "FAQ",
    bookAudit: "Start a trial",
  },
  hero: {
    headlineLines: [
      "One AI workflow, live in production",
      "in 45 days. Or you don't pay",
      "the final tranche.",
    ],
    subhead:
      "We diagnose one high-value process, build the workflow against your real data, run it live with your team, and hand it over measured. Fixed fee. Fixed deadline.",
    primaryCta: "Start a trial",
    secondaryCta: "See how the 45 days work",
  },
  problem: {
    header: "You've sat through the AI demo that never shipped.",
    rows: [
      {
        left: "The pilot looked great in the demo.",
        right:
          "Then it met your real data and broke. We build against your real documents from day one, not a curated demo set.",
      },
      {
        left: "The vendor said it was basically done.",
        right:
          '"Basically" is where these projects die. We define what "live in production" means in writing on day 5, with a number attached.',
      },
      {
        left: "You paid up front, then chased them for months.",
        right:
          "You hold the final tranche until the workflow hits the metric we agreed. Miss it, and you don't pay it.",
      },
    ],
  },
  offer: {
    header: "A fixed price, a fixed deadline, and skin in the game.",
    steps: [
      {
        title: "Operations AI Audit",
        price: "AED 5,000",
        body: "Five working days. A written findings memo, three ranked automation candidates, an hours-saved model, and a fixed-price proposal for the top candidate. Credited in full against the build if you proceed.",
      },
      {
        title: "The 45-day build",
        price: "AED 90,000–140,000",
        body: "Fixed fee, fixed deadline. Payment 40% on signature, 30% at pilot, 30% on the measured outcome. Shown openly, one band, no tiers.",
      },
      {
        title: "Retainer",
        price: "Monthly",
        body: "From handover. Maintenance, monitoring, and the next workflow when you are ready.",
      },
    ],
  },
  spine: {
    header: "How the 45 days work",
    phases: [
      {
        num: "01",
        title: "Diagnose",
        days: "Days 1–5",
        body: "Process map, data inventory, and the success metric agreed in writing with a number attached.",
      },
      {
        num: "02",
        title: "Build",
        days: "Days 6–20",
        body: "A working workflow against your real client data, not demo data.",
      },
      {
        num: "03",
        title: "Pilot",
        days: "Days 21–30",
        body: "Three named users run it live. Daily error log, weekly fix cycle.",
      },
      {
        num: "04",
        title: "Harden",
        days: "Days 31–40",
        body: "Error handling, human-in-the-loop escalation, logging, access control.",
      },
      {
        num: "05",
        title: "Hand over",
        days: "Days 41–45",
        body: "Runbook, recorded training, and a measurement report against the day-5 metric.",
      },
    ],
  },
  measurement: {
    header: "We report accuracy before anything goes live.",
    body: "Before go-live we run the workflow against 50 real documents from your business and report the accuracy honestly, so you sign off on a number, not a feeling.",
    stats: [
      { value: 50, label: "real documents tested before go-live" },
      { value: 45, label: "day fixed timeline" },
      { value: 3, label: "named pilot users" },
    ],
  },
  verticals: {
    header: "Where we start.",
    cards: [
      {
        title: "Distribution, trading and logistics (UAE)",
        body: "Quotation and RFQ response, invoice and PO processing. Speed of response moves win rate, and the owner feels it directly.",
      },
      {
        title:
          "Healthcare clinic groups and multi-site retail back-office (UAE and KSA)",
        body: "Intake, records, and the repetitive back-office document flows that scale badly across sites.",
      },
    ],
  },
  faq: {
    header: "FAQ",
    items: [
      {
        q: "What happens if you miss the 45 days?",
        a: "You don't pay the final 30% tranche. The deadline is the deal, not a target.",
      },
      {
        q: 'What counts as "live in production"?',
        a: "Defined in writing on day 5 with a measurable target, running on your real data with your own users. Not a demo, not a slide.",
      },
      {
        q: "Is our data secure?",
        a: "Access control, logging, and human-in-the-loop escalation are built in during the harden phase, and we work inside your infrastructure where required.",
      },
      {
        q: "How much does it cost?",
        a: "The audit is AED 5,000, credited against the build. The build is AED 90,000 to 140,000, shown openly. Retainers start at handover.",
      },
      {
        q: "Do you work in Arabic?",
        a: "Yes. Workflows and handover materials in Arabic and English.",
      },
      {
        q: "What if we don't proceed after the audit?",
        a: "You keep the findings memo, the ranked candidates, and the hours-saved model. It stands on its own.",
      },
    ],
  },
  finalCta: {
    header: "Start a trial. Five days, one clear answer.",
    whatsapp: "Or message us on WhatsApp",
  },
  footer: {
    copyright: "© 2026 Etto Labs",
    languageNote: "English — العربية coming soon",
    contact: "Contact",
    privacy: "Privacy",
    terms: "Terms",
  },
  booked: {
    title: "You're booked.",
    body: "We'll send a calendar confirmation shortly. Bring one process that costs you time or money — that's enough for the audit.",
    back: "Back to Etto Labs",
  },
  privacy: {
    title: "Privacy",
    body: "We collect only what we need to run the audit booking and deliver the engagement. No trackers beyond a single privacy-friendly analytics tool. Full policy will ship with launch.",
  },
  terms: {
    title: "Terms",
    body: "Engagement terms are set in the statement of work: fixed fee, fixed deadline, and the final tranche withheld if we miss. Full terms will ship with launch.",
  },
} as const

export type Strings = typeof strings
