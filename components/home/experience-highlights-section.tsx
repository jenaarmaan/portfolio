import Link from "next/link"

export function ExperienceHighlightsSection() {
  const experiences = [
    {
      company: "TechCorp AI Labs",
      role: "Senior ML Engineer",
      period: "2023 - Present",
      highlight: "Led team of 5 engineers building real-time recommendation systems serving 50M+ users",
    },
    {
      company: "StartupX",
      role: "ML Engineer",
      period: "2021 - 2023",
      highlight: "Built core ML infrastructure from scratch, reducing model training time by 70%",
    },
    {
      company: "Research Institute",
      role: "Research Intern",
      period: "2020 - 2021",
      highlight: "Published 2 papers on efficient neural network architectures for edge devices",
    },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Career Highlights
            </h2>
          </div>
          <Link 
            href="/allies"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
          >
            Full experience
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="space-y-4">
          {experiences.map((exp, index) => (
            <div 
              key={index}
              className="group flex flex-col md:flex-row md:items-center gap-4 p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex-1 min-w-0">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 mb-2">
                  <h3 className="text-lg font-semibold group-hover:text-primary transition-colors">{exp.company}</h3>
                  <span className="hidden sm:inline text-muted-foreground">·</span>
                  <span className="text-muted-foreground">{exp.role}</span>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{exp.highlight}</p>
              </div>
              <div className="flex-shrink-0">
                <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
