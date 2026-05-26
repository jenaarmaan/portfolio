import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cogito | Research & Ideas",
  description: "My research work, ideas, and explorations in AI/ML and systems engineering.",
}

interface Publication {
  title: string
  venue: string
  authors: string
  abstract: string
  link: string
  pdf?: string
}

const publications: Publication[] = [
  {
    title: "AI-Powered Unified Platform for Sustainable E-Waste Management",
    venue: "Patent Application (Indian Patent Act 1970)",
    authors: "Harihar Jeevan, Arya H. R., Armaan Samir Jena, Parinith R., Prof. Rumana Anjum, Dr. Madhu B. K.",
    abstract: "A unified digital system (Unified E-Waste Management Platform - UEMP) for full lifecycle traceability and management of electronic products using a secure QR-code-based optical tagging and authentication framework. The platform integrates React, Next.js, and ElectronJS frontends with secure backend services (Firebase, Firestore, Node.js APIs) and a Gemini AI module for intelligent analytics, chatbot capabilities, and automated regulatory compliance reporting across manufacturers, consumers, recyclers, and government regulators.",
    link: "https://drive.google.com/file/d/1p2Odjm3JEyGAP4rp8W_n6McJhJKBPLAD/view?usp=sharing",
    // pdf: "https://drive.google.com/file/d/1p2Odjm3JEyGAP4rp8W_n6McJhJKBPLAD/view?usp=sharing",
  },
]

const researchDomains = [
  {
    title: "Efficient Deep Learning",
    description: "Model compression, quantization, pruning, and knowledge distillation for deploying neural networks on resource-constrained devices.",
    topics: ["Model Compression", "Quantization", "Pruning", "Knowledge Distillation", "Edge AI"],
  },
  {
    title: "Multi-Modal Learning",
    description: "Techniques for learning unified representations from multiple data modalities like vision, language, and sensor data.",
    topics: ["Sensor Fusion", "Vision-Language Models", "Contrastive Learning", "Cross-Modal Transfer"],
  },
  {
    title: "ML Systems",
    description: "Building efficient and scalable infrastructure for training and deploying machine learning models at scale.",
    topics: ["Distributed Training", "Model Serving", "MLOps", "AutoML"],
  },
]

const ideas = [
  {
    title: "Quantum Computing & AI/ML",
    description: "Current research on applying quantum algorithms to accelerate machine learning, optimize complex neural networks, and process quantum data.",
    status: "Current",
  },
  {
    title: "Energy-Efficient Training",
    description: "Developing training methodologies that minimize compute requirements while maintaining model quality.",
    status: "Active Research",
  },
  {
    title: "Interpretable ML Systems",
    description: "Building tools for understanding and debugging production ML systems at scale.",
    status: "Future Work",
  },
]

export default function CogitoPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Cogito</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Research & Ideas
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            My research focuses on making AI systems more efficient, accessible, and deployable. 
            Here you&apos;ll find my publications, current research interests, and future directions.
          </p>
        </div>

        {/* Publications */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Publications</h2>
          <div className="space-y-6">
            {publications.map((pub, index) => (
              <article 
                key={index}
                className="p-6 rounded-xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                    {pub.venue}
                  </span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{pub.title}</h3>
                <p className="text-sm text-muted-foreground mb-3">{pub.authors}</p>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{pub.abstract}</p>
                <div className="flex gap-4">
                  <Link href={pub.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                    Paper
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                  {pub.pdf && (
                    <Link href={pub.pdf} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1">
                      PDF
                      <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3" />
                      </svg>
                    </Link>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Research Domains */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Research Domains</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {researchDomains.map((domain, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <h3 className="text-lg font-semibold mb-3">{domain.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed mb-4">{domain.description}</p>
                <div className="flex flex-wrap gap-2">
                  {domain.topics.map((topic) => (
                    <span 
                      key={topic}
                      className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Ideas & Future Work */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Ideas & Future Work</h2>
          <div className="space-y-4">
            {ideas.map((idea, index) => (
              <div 
                key={index}
                className="flex flex-col sm:flex-row sm:items-center gap-4 p-6 rounded-xl bg-card border border-border"
              >
                <div className="flex-1">
                  <h3 className="text-lg font-semibold mb-1">{idea.title}</h3>
                  <p className="text-muted-foreground text-sm">{idea.description}</p>
                </div>
                <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground self-start sm:self-center">
                  {idea.status}
                </span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
