import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Arsenal | Skills & Tools",
  description: "Technical skills, tools, and technologies I work with.",
}

const skillCategories = [
  {
    title: "AI / Machine Learning",
    description: "Deep expertise in building and deploying ML systems",
    skills: [
      { name: "PyTorch", level: "Expert" },
      { name: "TensorFlow", level: "Expert" },
      { name: "NLP", level: "Expert" },
      { name: "Model Optimization", level: "Advanced" },
    ],
  },
  {
    title: "Programming Languages",
    description: "Languages I use daily for different purposes",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "C++", level: "Advanced" },
      { name: "TypeScript", level: "Advanced" },
      { name: "SQL", level: "Expert" },
    ],
  },
  {
    title: "Tools & Frameworks",
    description: "Development tools and frameworks",
    skills: [
      { name: "Git", level: "Expert" },
      { name: "FastAPI", level: "Expert" },
      { name: "React", level: "Advanced" },
      { name: "Next.js", level: "Advanced" },
    ],
  },
]

const certifications = [
  { name: "Introduction to generative AI concepts", issuer: "Google Cloud", year: "2025" },
  { name: "Design a dream destination using Microsoft Copilot", issuer: "Microsoft", year: "2025" },
]

function getLevelColor(level: string) {
  switch (level) {
    case "Expert":
      return "bg-primary text-primary-foreground"
    case "Advanced":
      return "bg-primary/60 text-primary-foreground"
    case "Intermediate":
      return "bg-secondary text-secondary-foreground"
    default:
      return "bg-muted text-muted-foreground"
  }
}

function getLevelWidth(level: string) {
  switch (level) {
    case "Expert":
      return "w-full"
    case "Advanced":
      return "w-4/5"
    case "Intermediate":
      return "w-3/5"
    default:
      return "w-2/5"
  }
}

export default function ArsenalPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Arsenal</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Skills & Tools
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            A comprehensive overview of my technical toolkit. These are the technologies 
            I use to build intelligent systems and solve complex problems.
          </p>
        </div>

        {/* Skills Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-bold mb-2">{category.title}</h3>
                <p className="text-sm text-muted-foreground mb-6">{category.description}</p>
                
                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className={`text-xs px-2 py-0.5 rounded-full ${getLevelColor(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                      <div className="h-1.5 bg-secondary rounded-full overflow-hidden">
                        <div className={`h-full bg-primary rounded-full ${getLevelWidth(skill.level)}`} />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Certifications */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Certifications</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {certifications.map((cert, index) => (
              <div 
                key={index}
                className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 text-primary flex items-center justify-center flex-shrink-0">
                  <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12c0 1.268-.63 2.39-1.593 3.068a3.745 3.745 0 01-1.043 3.296 3.745 3.745 0 01-3.296 1.043A3.745 3.745 0 0112 21c-1.268 0-2.39-.63-3.068-1.593a3.746 3.746 0 01-3.296-1.043 3.745 3.745 0 01-1.043-3.296A3.745 3.745 0 013 12c0-1.268.63-2.39 1.593-3.068a3.745 3.745 0 011.043-3.296 3.746 3.746 0 013.296-1.043A3.746 3.746 0 0112 3c1.268 0 2.39.63 3.068 1.593a3.746 3.746 0 013.296 1.043 3.746 3.746 0 011.043 3.296A3.745 3.745 0 0121 12z" />
                  </svg>
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-semibold truncate">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.issuer} · {cert.year}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
