import Link from "next/link"

export function CTASection() {
  const navLinks = [
    { name: "Opera", href: "/opera", description: "Projects & Systems" },
    { name: "Cogito", href: "/cogito", description: "Research & Ideas" },
    { name: "Arena", href: "/arena", description: "Hackathons" },
    { name: "Quest", href: "/quest", description: "Challenges" },
    { name: "Allies", href: "/allies", description: "Experience" },
    { name: "Arsenal", href: "/arsenal", description: "Skills & Tools" },
    { name: "Logos", href: "/logos", description: "Blog & Insights" },
    { name: "Signal", href: "/signal", description: "Get in Touch" },
  ]

  return (
    <section className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight mb-4">
            Explore More
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Navigate through different sections to learn more about my work, research, and journey.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="group p-4 rounded-xl bg-card border border-border hover:border-primary/50 hover:bg-card/80 transition-all duration-300 text-center"
            >
              <h3 className="font-semibold group-hover:text-primary transition-colors">{link.name}</h3>
              <p className="text-xs text-muted-foreground mt-1">{link.description}</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
