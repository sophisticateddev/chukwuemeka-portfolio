import type { CaseStudy } from "@/lib/case-study";

// Client work under NDA. Every image here is a blurred copy: biller, bank and people's names,
// account numbers, fees and figures are obscured. The originals are kept outside this repo.
const img = (name: string) => `/images/work/e-bills/${name}.webp`;

export const eBills: CaseStudy = {
  headline: "Designed the platform Nigeria’s banks use to set up billers and take bill payments.",
  roles: ["Senior UX/UI Designer", "One of 5 designers", "Worked with NIBSS and bank staff"],
  summary: {
    problem:
      "Paying a bill at a bank meant each bank setting up each biller its own way. NIBSS needed one shared platform where any bank could onboard billers, so tellers anywhere in the country could settle a customer’s bill quickly, and so other apps could plug in to sell the same bills.",
    did:
      "As one of five designers, I designed portals for 19 user roles across NIBSS, banks and billers: onboarding, products and fees, approvals, transactions and disputes. I worked directly with our NIBSS contact and staff at key banks to get the rules and documentation right, and visited bank branches to see how tellers handled bills at the time.",
    result:
      "The platform is used by banks and other financial institutions across Nigeria. NIBSS reported 1.1 million e-BillsPay transactions worth ₦2.2 trillion in 2021.",
  },
  metrics: [
    { value: "₦2.2tn", label: "paid through e-BillsPay in 2021 (NIBSS fact sheet)" },
    { value: "1.1M", label: "transactions that year" },
    { value: "3", label: "tiers on one platform: NIBSS, banks, billers" },
    { value: "19", label: "user roles, each with its own view" },
  ],
  hero: {
    desktop: { src: img("nibss-dashboard"), alt: "E-Bills dashboard for NIBSS showing users, billers, institutions and unapproved requests, with names and figures blurred" },
  },
  meta: [
    { label: "Company", value: "At SBSC, for NIBSS (Nigeria Inter-Bank Settlement System)" },
    { label: "Role", value: "Senior UX/UI Designer" },
    { label: "Team", value: "5 designers led by Samuel Olumoyeke, with business analysts and engineers" },
    { label: "Platform", value: "Enterprise web application" },
    { label: "Timeline", value: "2020 to 2021" },
  ],

  context: {
    takeaway: "Every bank and every biller needed to meet in one place.",
    body: [
      "NIBSS runs the shared payment infrastructure for Nigeria’s banks. E-Bills is its bill payment service: a customer walks into a branch, or opens their bank’s app, and pays for something like a TV subscription, electricity or a tax bill.",
      "For that to work everywhere, there had to be one aggregate platform. A bank needs to set up a biller once, with its products and fees. A teller in any branch needs to find that biller and settle the bill in a few steps. The biller needs to see the money arrive and raise a dispute when it doesn’t. And NIBSS needs to oversee all of it.",
      "There was a second need alongside the portals: APIs, so that merchant and fintech apps could plug in and let their own customers pay the same bills.",
    ],
    constraints: [
      "Client work under NDA: names, account numbers, fees and figures in the screens are blurred",
      "A regulated environment where most changes need a second person’s approval",
      "Many organisations, each with its own staff, branches and permissions",
      "This case study shows a sample of the screens, not the whole system",
    ],
  },

  team: {
    takeaway: "Five designers, and a lot of conversations with the people who would use it.",
    members: [
      {
        name: "Chukwuemeka Iheonye",
        role: "Senior UX/UI Designer",
        owned: "Design across the portals, and working directly with our NIBSS contact and staff at key banks to gather requirements and documentation.",
        me: true,
      },
      { name: "Samuel Olumoyeke", role: "Lead Designer", owned: "Design direction across the product." },
      { name: "Design", role: "3 Product Designers", owned: "The rest of the portals." },
      { name: "Business analysis", role: "Business analysts", owned: "Led most of the research and requirements." },
      { name: "Client and partners", role: "NIBSS and bank staff", owned: "Rules, existing processes and review of the designs." },
    ],
  },

  insights: {
    takeaway: "The hard part wasn’t the screens. It was learning the rules.",
    intro:
      "Our business analysts led most of the research. I worked alongside them with NIBSS staff and bank staff to understand what each group needed, how bill payments were handled at the time, and whether what we were building solved their problem. I also went into some banks to watch how tellers were already settling bills for customers.",
    items: [
      { title: "Three organisations, one flow", body: "A single bill payment touches NIBSS, a bank and a biller. Each one needed to see its own part without seeing the others’." },
      { title: "Checks and balances come first", body: "In financial institutions, nothing goes live on one person’s say-so. One person sets something up, and another approves it." },
      { title: "A very large number of users", body: "Staff at NIBSS, at every bank and branch, and at every biller all use the same system, in very different jobs." },
      { title: "The rules already existed", body: "Fees, settlement and limits follow rules that NIBSS sets. The design had to make those rules visible instead of leaving people to remember them." },
      { title: "Tellers need speed", body: "At the counter there is a customer waiting, so setup happens once, in advance, and paying stays short." },
    ],
  },

  process: {
    takeaway: "Understand the rules, map the roles, then design each role’s view.",
    steps: [
      { title: "Learn", body: "Sessions with our NIBSS contact and bank staff, the documentation they shared, and visits to bank branches to watch tellers at work." },
      { title: "Map", body: "Who does what at each level, what needs approval, and what each role should and shouldn’t see." },
      { title: "Design", body: "A shared layout and components across every portal, so a person moving between roles finds things in the same place." },
      { title: "Review", body: "Designs went back to NIBSS and the banks to check them against how the work is really done." },
    ],
  },

  decisions: {
    takeaway: "Four decisions that shaped the system.",
    items: [
      {
        title: "One platform in three tiers",
        context: "NIBSS, banks and billers all take part in a bill payment, but they have different jobs and must not see each other’s data.",
        choice: "Each tier sets up the one below it. NIBSS onboards institutions, banks onboard billers and their products, and billers manage their own users.",
        why: "Setup follows the real chain of responsibility, and each organisation only ever sees its own part.",
      },
      {
        title: "A second person approves every setup",
        context: "A wrong settlement account or fee on a biller affects real money.",
        choice: "A creator and approver pair at the bank, and an initiator and authoriser pair at the biller. Every request records who made it, who decided, and when. A rejection carries a reason and can be sent back for another look.",
        why: "It matches how banks already control risk, and it leaves a clear trail when something is questioned later.",
        tradeoff: "Setup takes longer than it would with a single step. For this kind of product that is the right cost.",
      },
      {
        title: "Nineteen roles, each with its own menu",
        context: "The system has a very large number of users doing very different jobs, and financial institutions need checks and balances between them. Showing everyone everything would bury a teller’s or a biller’s daily task, and would let one person do too much.",
        choice: "Nineteen roles: three at the biller, nine at the bank and seven at NIBSS, most of them in creator and approver pairs. A branch creator has a branch approver, a payment teller has a payment approver, and so on up to NIBSS. The menu changes by role, and admins set what each role may do in a simple grid.",
        why: "Nobody can both make and approve the same change, people learn one short menu, and there is less they can do by mistake.",
      },
      {
        title: "Put the rule next to the field",
        context: "Fees and limits follow rules set by NIBSS, and getting them wrong means a rejected request.",
        choice: "The allowed range sits beside the fee field. Choosing an option switches off anything that no longer applies. A bank can arrange the details that appear in a payment’s description and see a sample before saving.",
        why: "People get it right the first time, so fewer requests bounce back from the approver.",
      },
    ],
  },

  web: {
    takeaway: "A sample of the screens, from the top of the system down.",
    intro: "Sensitive details are blurred. The layout, structure and wording are as designed.",
    shots: [
      { src: img("institution-type"), alt: "NIBSS admin choosing the type of institution to create: bank types, payment service providers or super agent", caption: "NIBSS: choosing the kind of institution to onboard." },
      { src: img("institution-wizard"), alt: "Step 1 of 4 in creating an institution, with bank details blurred", caption: "NIBSS: a long setup split into four steps." },
      { src: img("branch-limits"), alt: "Bank admin setting up a branch with separate transaction limits for the branch and for tellers, values blurred", caption: "Bank: branch setup, with limits for the branch and its tellers." },
      { src: img("add-product"), alt: "Bank user adding a biller’s product with amount type and fee options, details blurred", caption: "Bank: adding a biller’s product and its fee." },
      { src: img("narration"), alt: "Narration screen where payment and biller details are arranged into the order they appear in a payment description", caption: "Bank: arranging what appears in a payment’s description." },
      { src: img("billing"), alt: "Billing screen with fee frequency and fee bearer; choosing weekly disables the payer option", caption: "Bank: one choice switches off options that no longer apply." },
      { src: img("approvals"), alt: "Approver’s list of billers awaiting approval, with names and numbers blurred", caption: "Bank: the approver’s queue, with resubmitted requests marked." },
      { src: img("permissions"), alt: "Permissions grid showing what a role can approve, process, view, edit and delete", caption: "Bank: what each role may do, in one grid." },
      { src: img("biller-create-user"), alt: "Biller admin creating a user with a role, channel, state and assigned products, details blurred", caption: "Biller: creating a user, who then needs approval." },
      { src: img("biller-approvals"), alt: "Biller authoriser’s list of users pending approval, with names blurred", caption: "Biller: the authoriser approves or rejects." },
    ],
  },

  outcomes: {
    takeaway: "One platform that the country’s banks share.",
    items: [
      "Used by banks and other financial institutions across Nigeria to onboard billers and take bill payments",
      "NIBSS reported 1.1 million e-BillsPay transactions worth ₦2.2 trillion in 2021 (NIBSS e-Payments Fact Sheet, January to December 2021)",
      "Bills can be paid at bank branches, in internet and mobile banking, by USSD and through agents",
      "Nineteen user roles across NIBSS, banks and billers, with approvals and a record of who did what at every level",
      "APIs so merchant and fintech apps can let their own customers pay the same bills",
    ],
  },

  reflection: {
    takeaway: "On enterprise products, the design work is mostly understanding.",
    learned: [
      "Most of my time went into learning how banks and NIBSS already worked. The screens came easily once the rules were clear.",
      "Working directly with the people who would use it, and not only through documents, caught misunderstandings early.",
      "A consistent layout across portals mattered more than any single screen, because the same people move between roles.",
    ],
    next: {
      title: "What I’d do differently",
      body: "I’d go back to the same bank branches with the designs in hand. I watched how tellers worked before we started, and we reviewed designs with NIBSS and the banks, but watching a teller complete a task on the new screens would have told us more than a review meeting.",
    },
  },
};
