export type FAQ = {
  question: string;
  answer: string;
};

export type Service = {
  slug: string;
  index: string;
  title: string;
  shortTitle: string;
  kicker: string;
  summary: string;
  answer: string;
  outcomes: string[];
  deliverables: string[];
  architecture: string[];
  relatedIndustries: string[];
  faqs: FAQ[];
};

export type Industry = {
  slug: string;
  title: string;
  shortTitle: string;
  summary: string;
  answer: string;
  workflows: string[];
  outcomes: string[];
  relatedServices: string[];
  faqs: FAQ[];
};

export const site = {
  name: "GRWSURE INFOTECH",
  legalName: "GRWSURE INFOTECH",
  url: "https://www.grwsureinfotech.in",
  email: "grwsure217@gmail.com",
  phoneDisplay: "+91 63797 61638",
  phoneInternational: "+916379761638",
  hours: "Monday–Friday, 9:00 AM–7:00 PM IST",
  country: "India",
  description:
    "Custom software, web and mobile applications, AI agents, business automation, and ERP/CRM platforms for growing organizations.",
};

export const services: Service[] = [
  {
    slug: "custom-software-development",
    index: "01",
    title: "Custom Software Development",
    shortTitle: "Custom software",
    kicker: "Purpose-built systems",
    summary:
      "Operational software designed around your roles, rules, integrations, and growth plan—not a generic template.",
    answer:
      "GRWSURE designs and develops custom business software for organizations whose workflows no longer fit spreadsheets or off-the-shelf tools. We turn operational requirements into a maintainable system with clear user roles, secure integrations, usable interfaces, and a practical path from discovery to launch.",
    outcomes: [
      "Replace fragmented manual workflows with one dependable system",
      "Give each role a focused view of the work it owns",
      "Connect existing tools without forcing an abrupt migration",
      "Build a foundation that can evolve as the organization grows",
    ],
    deliverables: [
      "Workflow and requirements map",
      "Technical architecture and data model",
      "Responsive web application",
      "Role-based access and audit-ready activity history",
      "API and third-party integrations",
      "Deployment documentation and support plan",
    ],
    architecture: ["Next.js", "React", "Node.js", "PostgreSQL", "REST / GraphQL", "Cloud infrastructure"],
    relatedIndustries: ["startups-smes", "enterprises", "education"],
    faqs: [
      {
        question: "When is custom software better than off-the-shelf SaaS?",
        answer:
          "Custom software is usually the better fit when your workflow, permissions, integrations, reporting, or customer experience creates a durable competitive advantage that a standard product cannot support without repeated workarounds.",
      },
      {
        question: "Who owns the source code and project assets?",
        answer:
          "Ownership, repositories, credentials, and handover terms should be written into the project agreement before development starts. GRWSURE defines these responsibilities during discovery so there is no ambiguity at launch.",
      },
      {
        question: "Can an existing system be modernized in phases?",
        answer:
          "Yes. A phased approach can place new interfaces or services around a legacy system, migrate one workflow at a time, and reduce operational disruption while the replacement proves itself.",
      },
    ],
  },
  {
    slug: "web-application-development",
    index: "02",
    title: "Web Application Development",
    shortTitle: "Web applications",
    kicker: "Fast, accessible, indexable",
    summary:
      "Corporate websites, customer portals, and web applications engineered for clarity, performance, and measurable business action.",
    answer:
      "GRWSURE builds responsive websites and web applications using modern, server-rendered architecture. Each experience is structured for search visibility, accessibility, fast interaction, maintainable content, and integration with the systems that already run your business.",
    outcomes: [
      "Turn complex offerings into a clear customer journey",
      "Create fast, discoverable pages for each search intent",
      "Connect lead, account, payment, or operational systems",
      "Give internal teams a maintainable publishing workflow",
    ],
    deliverables: [
      "Content and information architecture",
      "Responsive interface design",
      "Next.js application development",
      "CMS or API integration",
      "Technical SEO and structured data",
      "Performance and accessibility checks",
    ],
    architecture: ["Next.js App Router", "React", "TypeScript", "Headless CMS", "Schema.org", "Analytics-ready events"],
    relatedIndustries: ["startups-smes", "real-estate", "education"],
    faqs: [
      {
        question: "What is the difference between a website and a web application?",
        answer:
          "A website primarily explains and publishes information. A web application adds task-oriented workflows such as accounts, dashboards, submissions, approvals, payments, or live operational data. Many projects combine both.",
      },
      {
        question: "Can GRWSURE integrate an existing CMS or API?",
        answer:
          "Yes. The architecture can preserve an existing content system, CRM, payment service, or backend API when it is reliable and appropriate for the new experience.",
      },
      {
        question: "How are SEO, accessibility, and performance handled?",
        answer:
          "They are treated as engineering requirements: semantic server-rendered content, useful metadata, structured data, keyboard-friendly interactions, responsive media, and measured performance are built into the implementation and validation plan.",
      },
    ],
  },
  {
    slug: "mobile-app-development",
    index: "03",
    title: "Mobile App Development",
    shortTitle: "Mobile apps",
    kicker: "Work that travels",
    summary:
      "Mobile experiences for customers and field teams, with practical offline, notification, location, and secure sign-in workflows.",
    answer:
      "GRWSURE plans and builds mobile applications for iOS and Android around real user tasks. The team can evaluate native and cross-platform approaches, define offline and synchronization needs, connect backend services, and prepare a release pathway that fits the product and operating model.",
    outcomes: [
      "Put essential workflows in the hands of field or customer teams",
      "Support intermittent connectivity with intentional offline behavior",
      "Deliver timely, permission-aware notifications",
      "Share business logic safely across mobile and web platforms",
    ],
    deliverables: [
      "Mobile product requirements",
      "iOS and Android interface flows",
      "React Native or Flutter implementation",
      "Secure API and authentication integration",
      "Offline data and synchronization plan",
      "Release-readiness checklist",
    ],
    architecture: ["React Native", "Flutter", "Secure APIs", "SQLite", "Push notifications", "Mobile analytics"],
    relatedIndustries: ["healthcare-diagnostics", "manufacturing", "education"],
    faqs: [
      {
        question: "Should we build native or cross-platform?",
        answer:
          "The choice depends on device features, performance needs, team skills, release cadence, and long-term maintenance. Cross-platform is efficient for many business apps; fully native development is useful when platform-specific behavior dominates.",
      },
      {
        question: "Can the app work without a stable connection?",
        answer:
          "Yes, when offline behavior is designed deliberately. The scope should define which data is stored locally, how conflicts are resolved, what actions queue for later, and what users see when synchronization is incomplete.",
      },
      {
        question: "Is app-store submission included?",
        answer:
          "Store preparation and submission can be included in the delivery scope. Account ownership, policy requirements, screenshots, privacy details, and review responsibilities are agreed before release work begins.",
      },
    ],
  },
  {
    slug: "ai-agent-development",
    index: "04",
    title: "AI Agent Development",
    shortTitle: "AI agents",
    kicker: "Useful AI, grounded in context",
    summary:
      "Assistants and document workflows that combine language models with your approved knowledge, tools, rules, and human review.",
    answer:
      "GRWSURE develops focused AI assistants and document-processing workflows that connect language models to approved business knowledge and actions. Every use case starts with boundaries: what the system may read, what it may do, when it must ask a person, and how its output will be evaluated.",
    outcomes: [
      "Help teams find answers across approved business knowledge",
      "Triage enquiries or documents into structured workflows",
      "Automate low-risk steps while retaining human approval",
      "Evaluate quality, safety, cost, and latency before scaling",
    ],
    deliverables: [
      "Use-case and risk assessment",
      "Knowledge retrieval and grounding design",
      "Agent prompts, tools, and permission boundaries",
      "Evaluation dataset and success criteria",
      "Human review and escalation experience",
      "Monitoring and iteration plan",
    ],
    architecture: ["LLM APIs", "Retrieval-augmented generation", "Vector search", "Tool calling", "Evaluation harnesses", "Human-in-the-loop"],
    relatedIndustries: ["real-estate", "healthcare-diagnostics", "enterprises"],
    faqs: [
      {
        question: "How is an AI agent different from a chatbot?",
        answer:
          "A chatbot mainly exchanges messages. An agent may also retrieve approved information, call tools, create structured output, or move a workflow forward. Those additional actions require explicit permissions, validation, and escalation rules.",
      },
      {
        question: "How can private business data be protected?",
        answer:
          "Protection starts with data minimization, access controls, provider configuration, retention choices, logging policy, and clear separation between public and private knowledge. The exact controls depend on the data and selected services.",
      },
      {
        question: "Can an agent connect to our CRM, documents, or WhatsApp workflow?",
        answer:
          "Potentially, yes. Each connection is assessed for API availability, authentication, data sensitivity, user consent, failure behavior, and any required human approval before automation is enabled.",
      },
    ],
  },
  {
    slug: "business-process-automation",
    index: "05",
    title: "Business Process Automation",
    shortTitle: "Automation",
    kicker: "Fewer handoffs, clearer control",
    summary:
      "Event-driven integrations that move information between systems, reduce repetitive work, and keep people informed when attention is needed.",
    answer:
      "GRWSURE maps repeatable business processes and builds automation around the systems you already use. The objective is not automation for its own sake; it is a controlled workflow with clear triggers, data validation, exception handling, ownership, and measurable operational impact.",
    outcomes: [
      "Remove repetitive copying between business tools",
      "Route leads, documents, and alerts consistently",
      "Make exceptions visible instead of silently losing work",
      "Create an auditable view of automated decisions and handoffs",
    ],
    deliverables: [
      "Process and exception map",
      "Integration and webhook design",
      "Validation and retry logic",
      "Operational alerts and escalation paths",
      "Workflow dashboard or audit trail",
      "Runbook and ownership handover",
    ],
    architecture: ["REST APIs", "Webhooks", "Queues", "Scheduled jobs", "CRM integrations", "Email / SMS / WhatsApp providers"],
    relatedIndustries: ["real-estate", "healthcare-diagnostics", "manufacturing"],
    faqs: [
      {
        question: "Which process should we automate first?",
        answer:
          "Start with a frequent, rules-based process that consumes meaningful time, has clear inputs and outputs, and causes visible errors or delays. A smaller high-confidence workflow is usually a better first release than a broad transformation program.",
      },
      {
        question: "Can older tools without modern APIs be connected?",
        answer:
          "Sometimes. Options may include scheduled file exchange, email parsing, database access, or a controlled interface layer. The reliability and security tradeoffs should be assessed before choosing an approach.",
      },
      {
        question: "How is automation impact measured?",
        answer:
          "Useful baselines include handling time, rework, missed handoffs, response time, error rate, and throughput. The project should define a small set of measures before automation begins so improvements can be evaluated honestly.",
      },
    ],
  },
  {
    slug: "custom-erp-crm-development",
    index: "06",
    title: "Custom ERP & CRM Development",
    shortTitle: "ERP & CRM",
    kicker: "One operational source of truth",
    summary:
      "Role-based customer and operations platforms shaped around the way your teams sell, deliver, manage, and report.",
    answer:
      "GRWSURE develops custom ERP and CRM platforms when generic products create more work than they remove. The system can unite customer records, pipelines, inventory, approvals, branches, reporting, and integrations while preserving permissions and accountability across teams.",
    outcomes: [
      "Unify customer and operational data across teams",
      "Model the real stages, roles, branches, and approvals in your business",
      "Give managers useful live reporting without spreadsheet consolidation",
      "Integrate existing channels and services around one trusted record",
    ],
    deliverables: [
      "Entity, workflow, and permission design",
      "Lead, customer, order, or operations modules",
      "Role-based dashboards",
      "Migration and data-quality plan",
      "Integration layer and notifications",
      "Audit trail, documentation, and support plan",
    ],
    architecture: ["Next.js", "PostgreSQL", "RBAC", "Audit logs", "Multi-branch design", "Reporting pipelines"],
    relatedIndustries: ["real-estate", "education", "enterprises"],
    faqs: [
      {
        question: "When should we choose a custom ERP or CRM?",
        answer:
          "A custom platform becomes reasonable when core workflows, permissions, integrations, or reporting are materially different from standard products and the ongoing cost of workarounds is higher than owning a focused system.",
      },
      {
        question: "Can existing data be migrated?",
        answer:
          "Yes, but migration quality depends on source consistency. A safe plan profiles the data, defines mappings and ownership, rehearses import and rollback steps, and validates critical records with business users before cutover.",
      },
      {
        question: "Can it support multiple branches and roles?",
        answer:
          "Yes. Branch boundaries, shared records, approval levels, reporting access, and audit needs should be defined explicitly in the permission model before development.",
      },
    ],
  },
  {
    slug: "ui-ux-design",
    index: "07",
    title: "UI/UX Product Design",
    shortTitle: "UI/UX design",
    kicker: "Clarity before code",
    summary:
      "Research, workflow design, prototypes, and scalable interface systems for products people can understand and use confidently.",
    answer:
      "GRWSURE turns complex requirements into clear product flows, interface prototypes, and reusable design systems. Design work can support a new build, improve an existing product, or de-risk a larger investment before engineering begins.",
    outcomes: [
      "Align stakeholders around visible user journeys",
      "Find usability problems before they become expensive code",
      "Create consistent patterns for a growing product",
      "Give engineering teams clear, responsive specifications",
    ],
    deliverables: [
      "Stakeholder and user-flow mapping",
      "Information architecture",
      "Wireframes and interactive prototypes",
      "Responsive high-fidelity screens",
      "Design tokens and component specifications",
      "Usability findings and implementation handoff",
    ],
    architecture: ["Figma", "Design systems", "Responsive patterns", "Accessibility", "Prototyping", "Usability review"],
    relatedIndustries: ["startups-smes", "enterprises", "healthcare-diagnostics"],
    faqs: [
      {
        question: "What design deliverables are included?",
        answer:
          "A typical engagement may include journey maps, information architecture, wireframes, high-fidelity responsive screens, clickable prototypes, reusable components, and implementation notes. The exact set follows the decision the design needs to support.",
      },
      {
        question: "Is user research included?",
        answer:
          "It can be. Research may range from stakeholder interviews and workflow observation to usability sessions with representative users. The plan depends on access, risk, and the stage of the product.",
      },
      {
        question: "Can design be commissioned without development?",
        answer:
          "Yes. GRWSURE can deliver a stand-alone design package for another engineering team, with component behavior and responsive guidance defined for handoff.",
      },
    ],
  },
];

export const industries: Industry[] = [
  {
    slug: "real-estate",
    title: "Real Estate Software Solutions",
    shortTitle: "Real estate",
    summary: "Connect property discovery, lead intake, agent action, site visits, follow-up, and reporting in one deliberate flow.",
    answer:
      "GRWSURE builds real-estate software around the journey from property interest to qualified conversation. A tailored system can connect website enquiries, validation, CRM assignment, WhatsApp follow-up, visit scheduling, inventory, and sales reporting while preserving agent ownership and consent rules.",
    workflows: ["Property catalogue and search", "Lead validation and deduplication", "CRM routing and agent ownership", "Visit scheduling and reminders", "Brochure and enquiry automation", "Pipeline and source reporting"],
    outcomes: ["Respond to enquiries consistently", "Reduce duplicate or lost leads", "Give agents a clear next action", "Understand channel and inventory performance"],
    relatedServices: ["custom-erp-crm-development", "business-process-automation", "ai-agent-development"],
    faqs: [
      { question: "Can property portal enquiries enter our existing CRM?", answer: "Usually, yes, when the portal and CRM provide suitable APIs, webhooks, email notifications, or structured exports. The integration should define field mapping, duplicate handling, ownership, and failure alerts." },
      { question: "How are duplicate leads handled?", answer: "A deduplication policy can compare normalized phone, email, property, campaign, and time-window data, then merge, link, or flag the record according to your sales rules." },
      { question: "How should WhatsApp consent be handled?", answer: "Consent language, template approval, opt-out handling, retention, and provider rules should be defined with your legal and messaging partners before automated outreach begins." },
    ],
  },
  {
    slug: "healthcare-diagnostics",
    title: "Healthcare & Diagnostics Software",
    shortTitle: "Healthcare",
    summary: "Coordinate appointments, diagnostic requests, laboratory stages, secure delivery, and follow-up with explicit privacy boundaries.",
    answer:
      "GRWSURE can design healthcare and diagnostics workflows that connect registration, scheduling, orders, processing stages, report availability, and patient communication. Each project requires early decisions about data responsibility, access control, consent, retention, integration standards, and the regulations that apply to the operator.",
    workflows: ["Registration and scheduling", "Diagnostic order routing", "Lab or instrument status integration", "Review and release controls", "Patient notification and delivery", "Operational queue monitoring"],
    outcomes: ["Make handoffs and queue status visible", "Reduce manual re-entry", "Deliver notifications consistently", "Keep sensitive access intentional and reviewable"],
    relatedServices: ["business-process-automation", "mobile-app-development", "custom-software-development"],
    faqs: [
      { question: "Can a new workflow connect to a LIMS or EMR?", answer: "Potentially. Integration depends on the system's supported interface, data ownership, security model, version, and vendor cooperation. These are verified during technical discovery." },
      { question: "How can reports be delivered securely?", answer: "The delivery design may use authenticated portals, expiring links, verified recipient information, controlled notifications, and access logs. The right approach depends on data sensitivity and applicable requirements." },
      { question: "Who is responsible for regulatory compliance?", answer: "The healthcare operator remains responsible for identifying applicable regulations and approving policy. GRWSURE can implement agreed technical controls and provide evidence for review, but does not replace legal or clinical compliance advice." },
    ],
  },
  {
    slug: "education",
    title: "Education & Campus Technology",
    shortTitle: "Education",
    summary: "Unify admissions, student records, fees, attendance, faculty workflows, communication, and multi-campus reporting.",
    answer:
      "GRWSURE develops modular education platforms that reflect the roles and calendar of an institution. Admissions, student records, fees, attendance, faculty workflows, parent communication, and reporting can be introduced in phases and connected to approved payment, biometric, and learning systems.",
    workflows: ["Admissions and enrolment", "Student and guardian records", "Fees and reconciliation", "Attendance and timetable", "Faculty and administrative workflows", "Parent and student communication"],
    outcomes: ["Create a consistent institutional record", "Reduce duplicate administration", "Give each role the right operational view", "Support phased adoption across campuses"],
    relatedServices: ["custom-erp-crm-development", "web-application-development", "mobile-app-development"],
    faqs: [
      { question: "Can one system support multiple campuses?", answer: "Yes. Shared policies, campus-specific operations, permissions, consolidated reporting, and data boundaries should be modelled explicitly rather than added as an afterthought." },
      { question: "Are fee, attendance, and faculty modules independent?", answer: "They can be planned as modules with a shared identity and data model, allowing the institution to phase delivery while avoiding disconnected records." },
      { question: "Can biometric and payment systems integrate?", answer: "Often, subject to vendor interfaces, security review, data quality, reconciliation rules, and the institution's consent and retention policies." },
    ],
  },
  {
    slug: "manufacturing",
    title: "Manufacturing & Industrial Software",
    shortTitle: "Manufacturing",
    summary: "Turn machine, quality, inventory, maintenance, and production signals into role-specific operational views and actions.",
    answer:
      "GRWSURE designs industrial web interfaces and integration services that make production and machine data useful to operators and managers. A solution may combine telemetry, alerts, quality events, maintenance tasks, inventory signals, and reporting while respecting the reliability and security needs of the plant environment.",
    workflows: ["Machine and sensor telemetry", "Production status and downtime", "Quality events and traceability", "Threshold alerts and escalation", "Maintenance workflow", "Yield, OEE, and operational reporting"],
    outcomes: ["See current conditions without manual consolidation", "Route anomalies to the right role", "Preserve historical operating context", "Support better maintenance and production decisions"],
    relatedServices: ["business-process-automation", "web-application-development", "custom-software-development"],
    faqs: [
      { question: "Which PLC or sensor sources can connect?", answer: "Compatibility depends on the existing controller, gateway, protocol, network boundaries, sampling needs, and vendor access. Discovery documents the exact data path before architecture is selected." },
      { question: "How is OEE calculated?", answer: "OEE combines availability, performance, and quality. The project must agree on each input, planned time, event classification, and data source so the calculation matches the plant's operating definition." },
      { question: "Can alerts work during connectivity interruptions?", answer: "A resilient design can place local collection or alert logic near the equipment and synchronize with cloud services later. The approach depends on safety, latency, and infrastructure requirements." },
    ],
  },
  {
    slug: "startups-smes",
    title: "Software for Startups & SMEs",
    shortTitle: "Startups & SMEs",
    summary: "Focus an early product or internal platform on the smallest valuable release, with room to learn and scale.",
    answer:
      "GRWSURE helps startups and SMEs translate a product or operational idea into a focused first release. The engagement prioritizes the core user journey, measurable learning, sensible architecture, and ownership of the accounts and assets required to keep building after launch.",
    workflows: ["MVP definition and prioritization", "Rapid product prototyping", "Customer or internal portals", "Payments and third-party integrations", "Operational dashboards", "Release and feedback loops"],
    outcomes: ["Test the core proposition earlier", "Avoid building low-value scope", "Create a maintainable starting architecture", "Keep product and deployment ownership clear"],
    relatedServices: ["custom-software-development", "web-application-development", "ui-ux-design"],
    faqs: [
      { question: "What should an MVP include?", answer: "An MVP should complete one important end-to-end job for a specific user and collect evidence about value. Secondary roles, automation, and refinements can follow once that core loop works." },
      { question: "Can the architecture scale after validation?", answer: "Yes, when likely growth points are understood and the first release avoids unnecessary coupling. Scaling plans should be evidence-led rather than adding enterprise complexity before demand exists." },
      { question: "Who owns the code and deployment accounts?", answer: "Ownership and access should be explicit in the agreement. A durable setup normally gives the client appropriate repository, cloud, domain, analytics, and store-account access from the start." },
    ],
  },
  {
    slug: "enterprises",
    title: "Enterprise Application Development",
    shortTitle: "Enterprises",
    summary: "Modernize high-value workflows in phases while respecting identity, governance, integration, and operational continuity.",
    answer:
      "GRWSURE supports enterprise application and modernization work with structured discovery, integration planning, role and audit design, and phased delivery. The goal is to improve an important workflow without creating an uncontrolled replacement program or a new isolated system.",
    workflows: ["Legacy workflow modernization", "Departmental and partner portals", "Identity and access integration", "Approval and audit workflows", "Data exchange and reporting", "Phased rollout and operational handover"],
    outcomes: ["Improve priority workflows incrementally", "Connect instead of duplicating trusted systems", "Make access and change responsibility explicit", "Reduce rollout risk with staged adoption"],
    relatedServices: ["custom-software-development", "custom-erp-crm-development", "business-process-automation"],
    faqs: [
      { question: "Can legacy systems be integrated incrementally?", answer: "Yes. A façade, API layer, event feed, scheduled exchange, or module-by-module replacement can reduce disruption, depending on the legacy system's constraints." },
      { question: "Can SSO and audit logs be included?", answer: "They can be designed into the platform when identity provider details, role rules, event requirements, retention, and reviewer responsibilities are known." },
      { question: "Can delivery be phased by department?", answer: "Yes. A phased plan should define shared data, cross-department dependencies, migration boundaries, training, and success criteria for each rollout group." },
    ],
  },
];

export const blueprints = [
  {
    slug: "institutional-management-platform",
    title: "Institutional Management Platform",
    sector: "Education",
    summary: "A reference architecture for joining admissions, student records, fee operations, attendance, faculty work, and campus reporting.",
    disclaimer: "Solution blueprint — illustrative architecture, not a published client case study.",
    challenge: "Institutions often operate important workflows across disconnected spreadsheets, payment exports, biometric systems, and departmental tools. The result is duplicate records, delayed reconciliation, and limited visibility.",
    flow: ["Student or staff action", "Role-aware application", "Shared institutional data model", "Approved external integration", "Operational queue and alerts", "Campus and group reporting"],
    components: ["Admissions and identity", "Fees and reconciliation", "Attendance integration", "Faculty workflows", "Parent and student communication", "Multi-campus reporting"],
    relatedIndustry: "education",
    relatedServices: ["custom-erp-crm-development", "web-application-development"],
  },
  {
    slug: "diagnostics-patient-logistics-hub",
    title: "Diagnostics & Patient Logistics Hub",
    sector: "Healthcare",
    summary: "A reference workflow for routing diagnostic requests, tracking processing stages, controlling review, and notifying patients.",
    disclaimer: "Solution blueprint — illustrative architecture, not a published client case study.",
    challenge: "Diagnostic operations can lose time across registration, order entry, instrument or laboratory status, review, report release, and patient communication—especially when systems do not share clear status.",
    flow: ["Registration and request", "Validated diagnostic order", "Processing status integration", "Review and release control", "Secure notification", "Exception and queue monitoring"],
    components: ["Order orchestration", "Integration adapters", "Review permissions", "Patient notification", "Exception dashboard", "Access and activity history"],
    relatedIndustry: "healthcare-diagnostics",
    relatedServices: ["business-process-automation", "custom-software-development"],
  },
  {
    slug: "factory-telemetry-machine-interface",
    title: "Factory Telemetry & Machine Interface",
    sector: "Manufacturing",
    summary: "A reference architecture for combining real-time machine signals, event history, alerts, and role-specific production views.",
    disclaimer: "Solution blueprint — illustrative architecture, not a published client case study.",
    challenge: "Production teams need a shared view of machine state, downtime, quality, and yield without compromising local reliability or overwhelming operators with unfiltered telemetry.",
    flow: ["Machine or gateway signal", "Edge validation and buffering", "Event and time-series ingestion", "Role-specific live interface", "Threshold and anomaly routing", "Historical analysis"],
    components: ["Telemetry gateway", "Event stream", "Time-series storage", "Operator interface", "Alert rules", "Production reporting"],
    relatedIndustry: "manufacturing",
    relatedServices: ["business-process-automation", "web-application-development"],
  },
] as const;

export const team = [
  {
    name: "Reshmic Christo C D",
    initials: "RC",
    role: "Founder & Business Operations Director",
    bio: "Steers business strategy, client operations, and partnerships, keeping technology work aligned with practical organizational outcomes.",
    focus: ["Business strategy", "Client operations", "Partnerships", "Operational planning"],
  },
  {
    name: "Rittu Ronald",
    initials: "RR",
    role: "Chief Technology Officer",
    bio: "Leads system architecture and technical delivery across custom software, AI workflows, web automation, and cloud solutions.",
    focus: ["System architecture", "AI workflows", "Web automation", "Cloud delivery"],
  },
  {
    name: "Roshini Catherin F",
    initials: "RCF",
    role: "Chief Marketing & Content Officer",
    bio: "Leads brand communication, digital marketing strategy, and content that makes complex technology useful and understandable.",
    focus: ["Brand communication", "Digital marketing", "Content systems", "Growth strategy"],
  },
  {
    name: "Selva",
    initials: "S",
    role: "Chief Business Development Officer",
    bio: "Develops market opportunities, enterprise relationships, and partnerships across the industries GRWSURE serves.",
    focus: ["Business development", "Enterprise alliances", "Partnership growth", "Market development"],
  },
] as const;

export const commonFaqs: FAQ[] = [
  {
    question: "What does GRWSURE INFOTECH build?",
    answer:
      "GRWSURE designs and develops custom software, web and mobile applications, AI assistants, business automation, and purpose-built ERP/CRM systems for organizations with specific workflows and integration needs.",
  },
  {
    question: "Which industries does GRWSURE work with?",
    answer:
      "The current focus includes real estate, healthcare and diagnostics, education, manufacturing, startups and SMEs, and enterprise operations. Projects in other sectors can be assessed when the workflow and responsibilities are clear.",
  },
  {
    question: "How does a software project start?",
    answer:
      "It starts with a focused discovery conversation about the business problem, users, current process, systems, risks, and desired outcome. That information is used to propose an appropriate first scope and technical direction.",
  },
  {
    question: "Can GRWSURE improve an existing product?",
    answer:
      "Yes. Existing architecture, code, content, integrations, analytics, and user feedback can be reviewed before deciding whether to improve, modernize, integrate, or replace parts of the current system.",
  },
  {
    question: "Does GRWSURE provide support after launch?",
    answer:
      "A maintenance and support plan can be included in the project agreement. Monitoring, response responsibilities, update cadence, infrastructure ownership, and service expectations should be defined before launch.",
  },
];

export const insights = [
  {
    slug: "custom-software-vs-saas",
    title: "Custom software vs SaaS: a practical decision framework",
    description: "Compare cost, speed, workflow fit, ownership, integration, and long-term change before choosing custom software or an off-the-shelf platform.",
    category: "Software strategy",
    readTime: "6 min read",
    published: "2026-10-08",
    lead: "The right answer is rarely “custom is better” or “SaaS is cheaper.” The useful question is which parts of your operation are standard, which create strategic value, and how much friction your team absorbs to bridge the gap.",
    takeaways: ["Use SaaS for mature, standard workflows when configuration is enough.", "Consider custom software when the workflow, data, permissions, or customer experience is strategically distinct.", "Compare total operating friction—not only subscription fees and initial build cost."],
    sections: [
      { heading: "Start with the workflow, not the product category", paragraphs: ["Map the people, triggers, decisions, data, and exceptions in the process. If a mature product supports that map with reasonable configuration, SaaS may reduce time and risk. If critical steps depend on repeated exports, manual re-entry, shadow spreadsheets, or brittle workarounds, the fit deserves closer review."] },
      { heading: "Count the cost of mismatch", paragraphs: ["Subscription cost is visible. Process mismatch is distributed across staff time, delayed response, errors, reporting effort, training, and missed opportunities. Those costs should be estimated alongside build, hosting, maintenance, security, and change management."] },
      { heading: "Choose where to own complexity", paragraphs: ["A hybrid approach is often strongest: keep commodity capabilities in trusted products and build the differentiating workflow or integration layer. The architecture should make ownership, data movement, vendor dependency, and exit options clear."] },
    ],
  },
  {
    slug: "ai-agent-vs-chatbot",
    title: "AI agent vs chatbot: what changes when software can act",
    description: "Understand the difference between conversational interfaces and tool-using agents, including permissions, grounding, evaluation, and human approval.",
    category: "Applied AI",
    readTime: "5 min read",
    published: "2026-10-08",
    lead: "A chatbot answers in a conversation. An AI agent may also retrieve private knowledge, call tools, update systems, or move a workflow forward. That ability to act changes the design and risk model.",
    takeaways: ["Define the job and boundaries before choosing a model.", "Separate read access from action permissions.", "Evaluate real tasks, failure modes, cost, and escalation—not just fluent responses."],
    sections: [
      { heading: "Conversation is an interface; agency is a permission model", paragraphs: ["A useful agent needs explicit tools and rules. Each tool should have a narrow purpose, validated inputs, understandable output, and a decision about whether a person must approve the action. The safest useful system is usually more constrained than an open-ended demo."] },
      { heading: "Ground answers in approved context", paragraphs: ["Retrieval can help a system answer from selected documents or records, but it does not guarantee correctness. Source visibility, access control, freshness, refusal behavior, and evaluation examples are part of the product—not optional technical detail."] },
      { heading: "Design the handoff to people", paragraphs: ["The interface should show what the agent understood, what source or rule it used, what it proposes to do, and how a person can correct or stop it. Escalation quality often determines whether automation earns trust."] },
    ],
  },
  {
    slug: "business-process-automation-guide",
    title: "A low-risk guide to business process automation",
    description: "Identify a strong first automation, map exceptions, design observability, and measure operational impact without over-automating.",
    category: "Automation",
    readTime: "7 min read",
    published: "2026-10-08",
    lead: "Good automation makes a process more reliable and visible. It does not simply hide a fragile set of steps behind a script. A strong first project is frequent, rules-based, measurable, and safe to recover when something fails.",
    takeaways: ["Choose a bounded workflow with clear ownership.", "Model exceptions before the happy path is automated.", "Add logs, alerts, retry rules, and manual recovery from the first release."],
    sections: [
      { heading: "Find the right first workflow", paragraphs: ["Look for high-frequency work with consistent inputs, a known outcome, and visible pain. Avoid starting with a politically complex process, ambiguous decisions, or an end-to-end transformation that depends on many unverified systems."] },
      { heading: "Map failures and responsibility", paragraphs: ["Document missing data, duplicates, timeouts, rejected actions, changed records, unavailable systems, and human exceptions. Every failure class needs an owner, a visible state, and a recovery path."] },
      { heading: "Measure what improved", paragraphs: ["Capture a baseline before launch. Handling time, rework, error rate, response time, missed handoffs, and throughput are more useful than a vague claim that the process is “automated.” Review results after adoption, not just after technical deployment."] },
    ],
  },
] as const;

export const serviceBySlug = (slug: string) => services.find((item) => item.slug === slug);
export const industryBySlug = (slug: string) => industries.find((item) => item.slug === slug);
export const blueprintBySlug = (slug: string) => blueprints.find((item) => item.slug === slug);
export const insightBySlug = (slug: string) => insights.find((item) => item.slug === slug);
