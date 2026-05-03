import Link from "next/link"

export function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient background effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <div className="space-y-4">
            <p className="text-primary font-mono text-sm tracking-wider uppercase">AI/ML Engineer & Systems Builder</p>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-balance">
              Building intelligent systems
              <br />
              <span className="text-primary">that shape tomorrow</span>
            </h1>
          </div>
          
          <p className="mx-auto max-w-2xl text-lg sm:text-xl text-muted-foreground leading-relaxed text-pretty">
            Crafting AI-powered solutions at the intersection of research and production. 
            Turning complex problems into elegant, scalable systems.
          </p>
          
          <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
            <Link 
              href="/opera"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              View Projects
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
              </svg>
            </Link>
            <Link 
              href="/signal"
              className="inline-flex items-center gap-2 px-6 py-3 border border-border text-foreground font-medium rounded-lg hover:bg-secondary transition-colors"
            >
              Get in Touch
            </Link>
          </div>
          
          <div className="pt-12 flex items-center justify-center gap-8 text-muted-foreground">
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">15+</p>
              <p className="text-sm">Projects Built</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">1+</p>
              <p className="text-sm">Hackathons Won</p>
            </div>
            <div className="w-px h-12 bg-border" />
            <div className="text-center">
              <p className="text-2xl sm:text-3xl font-bold text-foreground">1+</p>
              <p className="text-sm">Patent Publication</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-muted-foreground" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </div>
    </section>
  )
}
