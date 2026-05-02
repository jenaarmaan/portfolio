import Link from "next/link"

export function HackathonHighlightsSection() {
  const hackathons = [
    {
      name: "AI Hack Global 2024",
      project: "AutoML Pipeline Generator",
      result: "1st Place",
      prize: "$25,000",
    },
    {
      name: "HackMIT 2023",
      project: "Real-time Sign Language Translator",
      result: "Grand Prize",
      prize: "$15,000",
    },
    {
      name: "ETHGlobal SF",
      project: "Decentralized ML Marketplace",
      result: "Best AI Track",
      prize: "$10,000",
    },
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Hackathons</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Competition Wins
            </h2>
          </div>
          <Link 
            href="/arena"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
          >
            All hackathons
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {hackathons.map((hack, index) => (
            <div 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary text-primary-foreground">
                  {hack.result}
                </span>
                <span className="text-sm font-mono text-primary">{hack.prize}</span>
              </div>
              <h3 className="text-lg font-semibold mb-1 group-hover:text-primary transition-colors">{hack.name}</h3>
              <p className="text-muted-foreground text-sm">{hack.project}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
