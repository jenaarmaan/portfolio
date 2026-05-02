import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Quest | Challenges",
  description: "Personal challenges and learning sprints I've undertaken.",
}

const challenges = [
  {
    title: "50-Day Deep Learning Challenge",
    duration: "50 days",
    period: "Jan - Feb 2024",
    description: "A rigorous daily practice of implementing deep learning papers from scratch. Each day focused on a different architecture, technique, or optimization method.",
    goals: [
      "Implement 50 different neural network architectures",
      "Document learnings in detailed blog posts",
      "Build a public repository of reference implementations",
    ],
    outcomes: [
      "Completed all 50 implementations with clean, documented code",
      "Repository gained 2.5K+ GitHub stars",
      "Wrote 15 technical blog posts explaining key concepts",
      "Significantly deepened understanding of attention mechanisms and transformers",
    ],
    timeline: [
      { day: "Days 1-10", focus: "Foundational architectures (MLPs, CNNs, RNNs)" },
      { day: "Days 11-20", focus: "Attention mechanisms and Transformers" },
      { day: "Days 21-30", focus: "Generative models (VAEs, GANs, Diffusion)" },
      { day: "Days 31-40", focus: "Optimization and training techniques" },
      { day: "Days 41-50", focus: "Advanced architectures and recent papers" },
    ],
    status: "Completed",
  },
  {
    title: "30-Day Systems Design Sprint",
    duration: "30 days",
    period: "June 2023",
    description: "An intensive month focused on designing and documenting scalable system architectures. Each day tackled a different real-world system design problem.",
    goals: [
      "Design 30 production-grade system architectures",
      "Practice estimation and capacity planning",
      "Create reusable design patterns library",
    ],
    outcomes: [
      "Completed 30 detailed system design documents",
      "Created a systems design cheat sheet used by 10K+ engineers",
      "Significantly improved interview performance in system design rounds",
      "Open-sourced all designs with detailed explanations",
    ],
    timeline: [
      { day: "Week 1", focus: "Data-intensive applications (databases, caching)" },
      { day: "Week 2", focus: "Real-time systems (messaging, streaming)" },
      { day: "Week 3", focus: "Distributed systems (consensus, replication)" },
      { day: "Week 4", focus: "ML systems (training, serving, monitoring)" },
    ],
    status: "Completed",
  },
  {
    title: "100 Days of ML Code",
    duration: "100 days",
    period: "2022",
    description: "A foundational challenge to build strong ML fundamentals by coding every day. Covered everything from basic algorithms to production deployment.",
    goals: [
      "Code ML algorithms daily without missing a day",
      "Progress from fundamentals to advanced topics",
      "Build a portfolio of ML projects",
    ],
    outcomes: [
      "100% completion rate - coded every single day",
      "Built 20+ end-to-end ML projects",
      "Mastered scikit-learn, PyTorch, and TensorFlow",
      "Landed first ML engineering role based on portfolio",
    ],
    timeline: [
      { day: "Days 1-25", focus: "Classical ML (regression, classification, clustering)" },
      { day: "Days 26-50", focus: "Deep learning fundamentals" },
      { day: "Days 51-75", focus: "Computer vision and NLP" },
      { day: "Days 76-100", focus: "MLOps and deployment" },
    ],
    status: "Completed",
  },
  {
    title: "Open Source Contribution Sprint",
    duration: "60 days",
    period: "Ongoing",
    description: "A focused effort to contribute meaningful improvements to major ML open source projects. Learning by contributing to production-grade codebases.",
    goals: [
      "Contribute to 5 major ML frameworks",
      "Get at least 10 PRs merged",
      "Fix critical bugs and add new features",
    ],
    outcomes: [
      "8 PRs merged so far (PyTorch, HuggingFace, Ray)",
      "Fixed 3 critical bugs in PyTorch distributed training",
      "Added new feature to HuggingFace Transformers",
      "Building relationships with core maintainers",
    ],
    timeline: [
      { day: "Weeks 1-3", focus: "PyTorch core contributions" },
      { day: "Weeks 4-6", focus: "HuggingFace Transformers" },
      { day: "Weeks 7-8", focus: "Ray distributed computing" },
      { day: "Ongoing", focus: "Continued maintenance and new features" },
    ],
    status: "In Progress",
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
