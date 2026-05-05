import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arena | Competitions",
  description: "Participation and achievements in various technical competitions and festivals.",
}

const competitions = [
  {
    name: "Microsoft AI Skills Fest",
    date: "May 2025",
    location: "Online",
    activity: "Festival Participation",
    description: "Participated in the Microsoft AI Skills Fest, a comprehensive event focused on the latest advancements in AI, including generative AI, Copilot integration, and AI-driven development. Engaged in hands-on modules and workshops to master modern AI tools.",
    result: "Festival Participation",
    achievement: "Badge Earned",
    participants: ["Individual"],
    technologies: ["Microsoft Copilot", "Generative AI", "Azure AI", "OpenAI"],
    learnings: "Explored the vast landscape of Microsoft's AI ecosystem and learned practical applications for integrating AI into everyday productivity and professional workflows.",
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
            Competitions
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            The Arena is where I put my skills to the test. From global hackathons to specialized technical 
            festivals, this is a record of my participation and achievements in the competitive tech landscape.
          </p>
        </div>

        {/* Timeline */}
        <div className="space-y-8">
          {competitions.map((comp, index) => (
            <article 
              key={index}
              className="p-8 rounded-2xl bg-card border border-border"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-3 py-1.5 rounded-full bg-primary text-primary-foreground">
                      {comp.result}
                    </span>
                    <span className="text-sm font-mono text-primary">{comp.achievement}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{comp.date}</span>
                    <span className="text-sm text-muted-foreground">·</span>
                    <span className="text-sm text-muted-foreground">{comp.location}</span>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-2">{comp.name}</h2>
                  <h3 className="text-lg text-primary mb-4">{comp.activity}</h3>
                  
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {comp.description}
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Participation</h4>
                      <p className="text-sm text-muted-foreground">{comp.participants.join(", ")}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold mb-2">Key Learning</h4>
                      <p className="text-sm text-muted-foreground">{comp.learnings}</p>
                    </div>
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {comp.technologies.map((tech) => (
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
