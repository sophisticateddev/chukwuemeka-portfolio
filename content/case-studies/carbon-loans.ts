import type { CaseStudy } from "@/lib/case-study";

const img = (name: string) => `/images/work/carbon-loans/${name}.jpg`;

export const carbonLoans: CaseStudy = {
  headline: "Grew loan applications 20% and cut bad loans 10% at a bank serving 3M+ people.",
  roles: ["Lead Product Designer", "Led a team of 2 designers", "Research to handoff"],
  summary: {
    problem:
      "Loans are the heart of Carbon’s business, but customers were confused by wordy screens, unclear offers and declines with no explanation, so many never took up the loans they qualified for.",
    did:
      "I led the redesign end to end: stakeholder interviews, research with 15 customers and 2,700+ survey responses, then a new loan dashboard, application, offer, bank statement and repayment flows.",
    result:
      "Every target met or beaten: loan applications up 20% against a 15% goal, drop-offs down 10%, and non-performing loans down 10%, so more people borrowed and more of them repaid.",
  },
  metrics: [
    { value: "+20%", label: "loan applications (target: +15%)" },
    { value: "−10%", label: "loan drop-offs (target met)" },
    { value: "−10%", label: "non-performing loans" },
    { value: "3M+", label: "customers on the platform" },
  ],
  hero: {
    mobile: { src: img("dashboard"), alt: "Redesigned Carbon loans dashboard showing total left to pay, active loans and loan history" },
  },
  meta: [
    { label: "Role", value: "Lead Product Designer" },
    { label: "Team", value: "3 designers, 1 PM, 6 engineers, 1 QA, 1 scrum master" },
    { label: "Platform", value: "iOS and Android" },
    { label: "Tools", value: "Figma, FigJam, Confluence, Jira" },
  ],

  context: {
    takeaway: "Credit runs the economy, and Carbon’s loan product was getting in its customers’ way.",
    body: [
      "Carbon is a credit-led digital bank offering instant loans, Buy Now Pay Later and savings. Loans are the heart of the business, so small points of confusion turn directly into lost revenue and lost trust.",
      "The goal was to redesign the experience to reward loyal customers, make the journey easier to understand, and improve the business’s margins by reducing loans that were offered but never taken up.",
    ],
    constraints: [
      "A live product with millions of customers, so no big-bang changes",
      "Lending rules and credit decisions owned by a separate team",
      "Under NDA: sensitive data in the screens below is blurred",
    ],
  },

  team: {
    takeaway: "I led design within a cross-functional team of twelve.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Lead Product Designer",
        owned: "Research, problem framing, interaction design, UI and prototypes; led two designers and partnered with product and engineering.",
        me: true,
      },
      { name: "Design", role: "2 Product Designers", owned: "UI production and design QA across the flows." },
      { name: "Product & engineering", role: "PM, 6 engineers, QA, scrum master", owned: "Scope, build, testing and delivery." },
    ],
  },

  insights: {
    takeaway: "Customers weren’t avoiding loans. They were avoiding confusion.",
    intro:
      "We interviewed 15 customers about why they weren’t taking up loans, and a survey drew 2,700+ responses. Affinity mapping turned what we heard into clear themes.",
    items: [
      { title: "Offers didn’t fit the amount", body: "Tenors weren’t matched to the loan. A ₦2,000 loan shouldn’t come with a 3-month tenor." },
      { title: "Declines felt like a dead end", body: "Customers were declined with no reason, so they didn’t know what to change or whether to try again." },
      { title: "Good borrowers wanted recognition", body: "Reliable customers expected better offers, top-ups on unused limits and rewards like cashback for paying early." },
      { title: "The words got in the way", body: "A wordy welcome screen and ‘Skip and continue’ buttons on steps that weren’t optional made the flow feel untrustworthy." },
    ],
  },

  process: {
    takeaway: "From interviews to sticky notes to a prioritised set of fixes.",
    steps: [
      { title: "Audit the current journey", body: "Mapped seven concrete problems in the live app, from wordy screens to the app resetting to the homepage when the phone locked." },
      { title: "Listen at scale", body: "15 in-depth interviews plus a 2,700+ response survey, combining the why with the how many." },
      { title: "Synthesise and act", body: "Affinity mapping grouped findings into themes, then into action points the team could own." },
    ],
    artifacts: [{ src: img("affinity-map"), alt: "Affinity map of research findings grouped by theme in FigJam", caption: "Affinity mapping the research into themes." }],
  },

  decisions: {
    takeaway: "Six changes, each tied to something customers told us.",
    items: [
      {
        title: "Give loans a home: a dedicated dashboard",
        context: "There was no clear path to apply for a loan or see your loan history.",
        choice: "A loan dashboard showing what’s left to pay, active loans, history, on-time repayment score and credit bureau record.",
        why: "Shorter time to start an application, and customers can see their credit standing before they decide.",
      },
      {
        title: "Explain every offer, and every decline",
        context: "Customers struggled to understand their offer and were declined without a reason.",
        choice: "A simplified offer screen with a clear payment plan, alternative offers, and explicit decline reasons.",
        why: "Understanding increases acceptance. Decline reasons also give the credit team data to improve offer criteria.",
        tradeoff: "Showing reasons meant working closely with the decisioning team on what could be shared safely.",
      },
      {
        title: "Match tenors to the loan",
        context: "Every amount came with the same tenor options, however small the loan.",
        choice: "Tenors that adapt to the offer amount.",
        why: "Fewer impossible choices and more sensible repayment plans.",
      },
      {
        title: "Say what the step actually does",
        context: "Steps that were required still said ‘Skip and continue’, even after customers had completed them.",
        choice: "Rewrote the UX copy so buttons and progress reflect the real state of each step.",
        why: "Honest language builds trust in a product that handles people’s money.",
      },
      {
        title: "Accept statements from more banks",
        context: "Offers were limited by the information Carbon could see.",
        choice: "A new bank statement flow that links other bank accounts.",
        why: "More information means better offers for customers and better risk decisions for the business.",
      },
      {
        title: "Make repayment the easiest screen in the app",
        context: "Repayment is the most important moment for the business in the loan flow.",
        choice: "A clear repayment screen with full or partial amounts, wallet funding in place, and a ‘pay as you get’ option.",
        why: "If repaying is effortless, more loans are repaid on time, and customers qualify for more.",
      },
    ],
  },

  before: {
    takeaway: "Where we started: wordy, ambiguous and easy to abandon.",
    shots: [
      { src: img("before-welcome"), alt: "Old loan welcome screen with long explanatory text", caption: "A welcome screen too wordy to use." },
      { src: img("before-steps"), alt: "Old loan steps screen with a Skip and Continue button", caption: "‘Skip and continue’ on a required step." },
      { src: img("before-offers"), alt: "Old loan offers screen with fixed tenor options", caption: "Offers that were hard to compare." },
    ],
  },

  mobile: {
    takeaway: "The redesigned journey, from first look to final repayment.",
    shots: [
      { src: img("dashboard"), alt: "Loans dashboard with active loans and history", caption: "Everything about your loans, at a glance." },
      { src: img("dashboard-offer"), alt: "Dashboard prompting the customer to view their loan offer", caption: "An offer waiting, one tap away." },
      { src: img("apply-amount"), alt: "Get a loan screen asking how much the customer needs", caption: "One question per screen." },
      { src: img("loan-offer"), alt: "Loan offer with tenor, monthly payment and interest rate", caption: "The offer, explained plainly." },
      { src: img("terms"), alt: "Terms of use summarising early and late payment rules", caption: "Benefits and penalties in plain words." },
      { src: img("statement-select"), alt: "Select a bank account to share statements (details blurred)", caption: "Linking another bank’s statement." },
      { src: img("statement-add"), alt: "Add bank statement form (details blurred)", caption: "Confirming the account to add." },
      { src: img("repay"), alt: "Repay loan screen with next or full repayment options", caption: "Repay in full or in part." },
      { src: img("repay-success"), alt: "Repayment successful celebration screen", caption: "A moment worth celebrating." },
    ],
  },

  outcomes: {
    takeaway: "Every target met or beaten, and better loans on the books.",
    items: [
      "New loan dashboard giving instant access to applications and history",
      "Simpler application and offer flow with decline reasons and alternative offers",
      "Bank statement linking from other banks to improve offer quality",
      "Clear repayment with multiple funding options",
      "Loan applications up 20%, beating the 15% target",
      "Loan drop-offs down 10%, meeting the target",
      "Non-performing loans down 10%",
    ],
  },

  testimonials: [
    {
      quote:
        "He led the successful introduction of a design system into Carbon. He championed UI & UX improvements that energised our users while mentoring & developing a great design org.",
      name: "Afiola Etomi",
      context: "managed me at Carbon (LinkedIn recommendation)",
    },
  ],
};
