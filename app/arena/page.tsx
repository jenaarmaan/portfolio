import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arena | Hackathons",
  description: "Hackathon projects, wins, and learnings from various competitions.",
}

const hackathons = [
  {
    name: "AI Hack Global 2024",
    date: "March 2024",
    location: "San Francisco, CA",
    project: "AutoML Pipeline Generator",
    description: "Built an AI-powered tool that automatically generates end-to-end ML pipelines from natural language descriptions. The system analyzes the problem, selects appropriate algorithms, and generates production-ready code.",
    result: "1st Place",
    prize: "$25,000",
    team: ["Alex Chen", "Sarah Williams", "Mike Johnson"],
    technologies: ["LLMs", "Python", "FastAPI", "React"],
    learnings: "Learned the importance of user experience in ML tools - most teams focused on model performance while we prioritized usability.",
  },
  {
    name: "HackMIT 2023",
    date: "September 2023",
    location: "Cambridge, MA",
    project: "Real-time Sign Language Translator",
    description: "Developed a mobile app that translates American Sign Language to text and speech in real-time using computer vision and on-device ML models.",
    result: "Grand Prize",
    prize: "$15,000",
    team: ["Emma Davis", "Chris Park"],
    technologies: ["TensorFlow Lite", "Swift", "MediaPipe", "Core ML"],
    learnings: "Edge deployment constraints forced us to think creatively about model efficiency. The 200ms latency requirement drove significant optimizations.",
  },
  {
    name: "ETHGlobal SF 2023",
    date: "October 2023",
    location: "San Francisco, CA",
    project: "Decentralized ML Marketplace",
    description: "Created a blockchain-based marketplace for ML model training and inference, enabling decentralized compute sharing and model monetization.",
    result: "Best AI Track",
    prize: "$10,000",
    team: ["Jordan Lee", "Taylor Swift", "Morgan Brown"],
    technologies: ["Solidity", "Python", "IPFS", "React"],
    learnings: "The intersection of AI and blockchain presents unique challenges around verification and trust. Model integrity verification was the hardest problem.",
  },
  {
    name: "TreeHacks 2023",
    date: "February 2023",
    location: "Stanford, CA",
    project: "AI-Powered Accessibility Tool",
    description: "Built a browser extension that automatically makes any website accessible by generating alt-text, improving contrast, and adding navigation aids.",
    result: "2nd Place",
    prize: "$5,000",
    team: ["Riley Johnson", "Casey Kim"],
    technologies: ["GPT-4", "Chrome Extension", "TypeScript"],
    learnings: "Accessibility is often an afterthought - automating it can have massive impact. User testing with visually impaired users was eye-opening.",
  },
  {
    name: "CalHacks 2022",
    date: "October 2022",
    location: "Berkeley, CA",
    project: "Smart Study Assistant",
    description: "Developed an AI tutor that adapts to individual learning styles, generates practice problems, and provides personalized explanations.",
    result: "Top 10 Finalist",
    prize: "$2,000",
    team: ["Drew Wilson"],
    technologies: ["OpenAI API", "Next.js", "Supabase"],
    learnings: "Building for education requires understanding pedagogy, not just technology. Talked to teachers throughout the hackathon for feedback.",
  },
]

export default function ArenaPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Arena</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Hackathons
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Hackathons are where ideas become reality in 24-48 hours. Here&apos;s a collection of 
            competitions I&apos;ve participated in, the projects we built, and the lessons learned.
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <p className="text-3xl font-bold text-primary">12+</p>
            <p className="text-sm text-muted-foreground">Hackathons</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <p className="text-3xl font-bold text-primary">8</p>
            <p className="text-sm text-muted-foreground">Wins</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <p className="text-3xl font-bold text-primary">$57K+</p>
            <p className="text-sm text-muted-foreground">Prize Money</p>
          </div>
          <div className="p-6 rounded-xl bg-card border border-border text-center">
            <p className="text-3xl font-bold text-primary">15+</p>
            <p className="text-sm text-muted-foreground">Team Members</p>
          </div>
        </div>

        {/* Hackathon Timeline */}
        <div className="space-y-8">
          {hackathons.map((hack, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
                      {hack.result}
                    </span>
                    <span className="text-sm font-mono text-primary">{hack.prize}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{hack.date}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{hack.location}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">{hack.name}</h2>
                  <h3 className="text-lg text-primary mb-4">{hack.project}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {hack.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Team</h4>
                      <p className="text-sm text-muted-foreground">{hack.team.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Learning</h4>
                      <p className="text-sm text-muted-foreground">{hack.learnings}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {hack.technologies.map((tech) => (
                      <span 
                        key={tech}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
