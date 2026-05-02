import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Logos | Blog & Insights",
  description: "Technical articles, insights, and thoughts on AI/ML and systems engineering.",
}

const posts = [
  {
    title: "Building Real-Time ML Inference at Scale",
    excerpt: "A deep dive into the architecture decisions and optimizations that enabled us to serve 50M+ users with sub-50ms latency. From model optimization to infrastructure choices.",
    date: "March 15, 2024",
    readTime: "12 min read",
    category: "Engineering",
    slug: "real-time-ml-inference",
  },
  {
    title: "The Art of Model Compression: A Practical Guide",
    excerpt: "Everything you need to know about pruning, quantization, and knowledge distillation. With code examples and benchmarks from production deployments.",
    date: "February 28, 2024",
    readTime: "15 min read",
    category: "ML",
    slug: "model-compression-guide",
  },
  {
    title: "Lessons from Building ML Infrastructure from Scratch",
    excerpt: "What I learned being the first ML hire at a startup. Feature stores, model registries, monitoring - the good, the bad, and the ugly.",
    date: "February 10, 2024",
    readTime: "10 min read",
    category: "MLOps",
    slug: "ml-infrastructure-lessons",
  },
  {
    title: "Transformers on the Edge: Pushing the Boundaries",
    excerpt: "How we deployed transformer models on mobile devices with less than 50MB memory. TensorRT, ONNX optimization, and custom operators.",
    date: "January 25, 2024",
    readTime: "18 min read",
    category: "Edge AI",
    slug: "transformers-on-edge",
  },
  {
    title: "A/B Testing ML Models: Beyond Accuracy Metrics",
    excerpt: "Why accuracy isn&apos;t enough and how to properly evaluate ML models in production. Statistical significance, guardrail metrics, and long-term effects.",
    date: "January 12, 2024",
    readTime: "8 min read",
    category: "ML",
    slug: "ab-testing-ml-models",
  },
  {
    title: "The Hidden Costs of ML in Production",
    excerpt: "Technical debt, monitoring complexity, and operational overhead. A honest look at what it really takes to maintain ML systems at scale.",
    date: "December 20, 2023",
    readTime: "11 min read",
    category: "Engineering",
    slug: "hidden-costs-ml-production",
  },
]

const categories = ["All", "Engineering", "ML", "MLOps", "Edge AI"]

export default function LogosPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Logos</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Blog & Insights
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            Technical articles, deep dives, and lessons learned from building AI systems. 
            Sharing knowledge to help others avoid the mistakes I&apos;ve made.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
                category === "All"
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Posts Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="group p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                  {post.category}
                </span>
                <span className="text-sm text-muted-foreground">{post.date}</span>
                <span className="text-sm text-muted-foreground">·</span>
                <span className="text-sm text-muted-foreground">{post.readTime}</span>
              </div>
              
              <h2 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors leading-tight">
                {post.title}
              </h2>
              
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                {post.excerpt}
              </p>
              
              <Link 
                href={`/logos/${post.slug}`}
                className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
              >
                Read more
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                </svg>
              </Link>
            </article>
          ))}
        </div>

        {/* Newsletter */}
        <section className="mt-20 p-8 rounded-2xl bg-card border border-border text-center">
          <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Subscribe to get notified when I publish new articles. No spam, just quality content about AI/ML and systems engineering.
          </p>
          <form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="your@email.com"
              className="flex-1 px-4 py-3 rounded-lg bg-secondary border border-border text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors"
            >
              Subscribe
            </button>
          </form>
        </section>
      </div>
    </div>
  )
}
