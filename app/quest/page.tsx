import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quest | Challenges",
  description: "Personal challenges and learning sprints I've undertaken.",
}

const challenges = [
  /*{
    title: "100 Days of AI/ML Learning Challenge",
    duration: "100 days",
    period: "April 2026 - Ongoing",
    description: "A comprehensive roadmap covering AI foundations, search, logic, probabilistic AI, and deep learning, culminating in LLMs and Transformers.",
    goals: [
      "Master AI foundations and intelligent agent architectures",
      "Implement classical search and optimization algorithms",
      "Understand probabilistic reasoning and knowledge representation",
      "Build deep learning models from scratch including Transformers",
    ],
    outcomes: [
      "Deep theoretical understanding of AI history and future",
      "Hands-on proficiency with BFS, DFS, A*, and Local Search",
      "Ability to build and evaluate constraint satisfaction and planning systems",
      "Mastery of ML foundations, supervised/unsupervised learning, and neural networks",
    ],
    timeline: [
      { day: "Days 1-7", focus: "AI Foundations (Agents, PEAS, Intelligence)" },
      { day: "Days 8-24", focus: "Search, CSP & Planning (BFS, DFS, A*, Backtracking)" },
      { day: "Days 25-44", focus: "Logic, Probabilistic AI & Game Theory" },
      { day: "Days 45-100", focus: "ML, Deep Learning & LLMs (CNNs, RNNs, Transformers)" },
    ],
    status: "On Going",
  },*/
  {
    title: "10-Days Systems Design",
    duration: "10 days",
    period: "March 2026",
    description: "An intensive sprint designing and deploying ten production-ready AI systems focused on governance, reliability, and business context.",
    goals: [
      "Build production AI systems for real-world enterprise problems",
      "Implement RAG, PromptOps, and Governance frameworks",
      "Optimize sales, meetings, and CRM workflows using LLMs",
    ],
    outcomes: [
      "Designed and deployed 10 systems including PromptPilot and Unified Knowledge AI",
      "Reduced prompt iteration time by 5x and review time from minutes to seconds",
      "Achieved zero hallucinations on core business questions with context engines",
      "Automated CRM updates and meeting action item extraction",
    ],
    timeline: [
      { day: "Day 1-2", focus: "Prompt Management & Reliability (PromptPilot, AI Evidence Layer)" },
      { day: "Day 3-4", focus: "Business Context & Governance (Context Engine, Decision Receipt)" },
      { day: "Day 5-7", focus: "Intelligence Dashboards & Proposals (Feedback Intel, Proposal Builder)" },
      { day: "Day 8-10", focus: "Productivity & CRM Automation (Action Extractor, Auto CRM Updater)" },
    ],
    status: "Completed",
  },
  {
    title: "50-Days AI Systems Challenge",
    duration: "50 days",
    period: "Jan - Feb 2026",
    description: "A deep dive into building the infrastructure layers necessary for secure, reliable, and observable AI systems in production.",
    goals: [
      "Implement model reliability and safety layers",
      "Establish governance and compliance frameworks for AI",
      "Build operational intelligence and trust layers",
    ],
    outcomes: [
      "Built 50 critical AI system components across 10 specialized layers",
      "Developed silent drift detection and prompt injection defenses",
      "Implemented explainability generators and dataset lineage trackers",
      "Created a unified AI monitoring and control plane",
    ],
    timeline: [
      { day: "Days 1-10", focus: "Reliability & Safety (Drift Detection, Injection Defense)" },
      { day: "Days 11-25", focus: "Governance & Trust (Risk Tiering, Explainability)" },
      { day: "Days 26-40", focus: "Ops & Data Quality (Cost Observability, Bias Detection)" },
      { day: "Days 41-50", focus: "Infrastructure & Platform (Lifecycle Dashboards, Watchtower)" },
    ],
    status: "Completed",
  },
  {
    title: "AI Skills Fest Challenge: Teaching toolkit/essentials for Educators",
    duration: "50 days",
    period: "April - May 2025",
    description: "An intensive 50-day challenge focused on building a comprehensive teaching toolkit and mastering AI essentials for the modern educator.",
    goals: [
      "Master AI tools for educational content creation and productivity",
      "Develop deep understanding of AI ethics and governance in classrooms",
      "Build a scalable, personalized AI teaching toolkit",
    ],
    outcomes: [
      "Developed a full-stack AI toolkit for classroom automation",
      "Achieved proficiency in prompt engineering for educational scenarios",
      "Certified in AI essentials for educators after 50 days of rigorous learning",
    ],
    timeline: [
      { day: "Days 1-15", focus: "AI Foundations & Classroom Ethics" },
      { day: "Days 16-35", focus: "Toolkit Development & PromptOps for Teachers" },
      { day: "Days 36-50", focus: "Workflow Integration & Final Assessment" },
    ],
    status: "Completed",
  },
]

export default function QuestPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Quest</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Challenges
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Structured challenges and learning sprints I&apos;ve undertaken to push my skills. 
            These intensive periods of focused learning have been instrumental in my growth.
          </p>
        </div>

        {/* Challenges */}
        <div className="space-y-12">
          {challenges.map((challenge, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className={`text-xs font-bold px-3 py-1.5 rounded-full ${
                  challenge.status === "Completed" 
                    ? "bg-primary text-primary-foreground" 
                    : "bg-secondary text-secondary-foreground"
                }`}>
                  {challenge.status}
                </span>
                <span className="text-sm font-mono text-muted-foreground">{challenge.duration}</span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{challenge.period}</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-4">{challenge.title}</h2>
              <p className="text-muted-foreground leading-relaxed mb-8 max-w-3xl">
                {challenge.description}
              </p>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-8">
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Goals</h3>
                  <ul className="space-y-2">
                    {challenge.goals.map((goal, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        {goal}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold mb-4 text-primary">Outcomes</h3>
                  <ul className="space-y-2">
                    {challenge.outcomes.map((outcome, i) => (
                      <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                        <svg className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z" />
                        </svg>
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div>
                <h3 className="text-lg font-semibold mb-4">Timeline</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                  {challenge.timeline.map((item, i) => (
                    <div key={i} className="p-4 rounded-lg bg-secondary/50">
                      <p className="text-xs font-mono text-primary mb-1">{item.day}</p>
                      <p className="text-sm text-muted-foreground">{item.focus}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
