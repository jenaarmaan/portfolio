import Link from "next/link"

export function ResearchPreviewSection() {
  const research = [
    {
      title: "Efficient Transformer Architectures for Edge Deployment",
      venue: "NeurIPS 2024",
      description: "Novel compression techniques achieving 4x speedup with minimal accuracy loss on resource-constrained devices.",
    },
    {
      title: "Self-Supervised Learning for Multi-Modal Sensor Fusion",
      venue: "ICML 2024",
      description: "A contrastive learning approach for aligning representations across different sensor modalities.",
    },
  ]

  return (
    <section className="py-24 bg-card/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-12">
          <div>
            <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Research</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
              Latest Publications
            </h2>
          </div>
          <Link 
            href="/cogito"
            className="text-primary hover:text-primary/80 font-medium inline-flex items-center gap-2 transition-colors"
          >
            View all research
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {research.map((item, index) => (
            <Link 
              key={index}
              href="/cogito"
              className="group block p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {item.venue}
                </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors leading-tight">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
