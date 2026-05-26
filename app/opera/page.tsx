import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Opera | Projects & Systems",
  description: "Explore my portfolio of AI/ML projects, systems, and open-source contributions.",
}

interface Project {
  id: string
  title: string
  description: string
  problem?: string
  solution?: string
  architecture?: string
  impact?: string
  tags: string[]
  status: string
  github?: string
  demo?: string
}

const projects: Project[] = [
  {
    id: "uemp",
    title: "Unified E-Waste Management Platform (UEMP)",
    description: "An intelligent, robust digital system to streamline the lifecycle management of electronic products—from manufacturing to recycling—supporting a sustainable circular economy.",
    problem: "Lack of centralized, secure tracking mechanisms for electronics, creating massive environmental challenges and cross-stakeholder audit gaps.",
    solution: "A unified portal connecting manufacturers, consumers, recyclers, and regulators using secure optical tag registration.",
    architecture: "Next.js, Node.js API, Firebase Authentication, Firestore Database, and Google Gemini AI module integration.",
    impact: "🏆 Selected as one of the Top 105 Projects Pan India in the Google GDG Hack2Skill Hackathon 2025. Provides secure device tracking and real-time impact reports.",
    tags: ["React", "Next.js", "Firebase", "Node.js", "Gemini AI", "ElectronJS"],
    status: "Award-winning",
  },
  {
    id: "autoforge",
    title: "AutoForge",
    description: "Automated, secure CI/CD pipeline leveraging industry-standard cloud workflows to streamline code deployment and infrastructure resets.",
    problem: "Manual code delivery, regression testing, and EC2 application restarts were slow, prone to credentials exposure, and lacked process orchestration.",
    solution: "Fully automated pipeline executing test suites, build actions, image caching, and instance restarts with secure secret variable storage.",
    architecture: "GitHub Actions workflows coupled with AWS EC2 container endpoints and cloud instances.",
    impact: "Bypasses manual maintenance and credentials exposure completely, achieving a highly secure, zero-overhead deployment loop.",
    tags: ["AWS EC2", "GitHub Actions", "Docker", "CI/CD", "TypeScript", "Shell"],
    status: "Public",
  },
  {
    id: "arogya",
    title: "Arogya AI",
    description: "An intelligent medical diagnosis system leveraging deep learning to automate disease detection and medical imaging diagnostics.",
    problem: "Lack of immediate, reliable diagnostic support in resource-constrained communities with few medical specialists.",
    solution: "Computer-aided diagnostic system utilizing high-precision convolutional neural networks (CNNs) for multi-class image classification.",
    architecture: "Jupyter Notebook running PyTorch and fine-tuned ResNet-50 / EfficientNet neural network backbones.",
    impact: "Highly optimized deep learning model providing automated, high-precision image detection for rapid healthcare decisions.",
    tags: ["Deep Learning", "CNN", "ResNet 50", "EfficientNet", "PyTorch", "Jupyter"],
    status: "Public",
  },
  {
    id: "pii-redaction",
    title: "PII Detection & Redaction Tool",
    description: "A secure, desktop-based Python application designed to automatically detect and redact sensitive Personally Identifiable Information (PII) from PDFs.",
    problem: "Manual sanitization of research files and legal documents is highly slow and poses serious data privacy leaks.",
    solution: "High-precision regular expression analyzers and SpaCy NLP models combined to target Aadhaar, PAN, emails, and phone numbers.",
    architecture: "Python desktop framework running PyMuPDF (Fitz) and local regular expression filters for absolute data privacy.",
    impact: "🛡️ Bypasses manual redaction completely, ensuring GDPR and IT Act compliance with local document anonymization.",
    tags: ["Python", "NLP", "PyMuPDF", "Data Privacy", "GDPR", "Regex"],
    status: "Public",
  },
  {
    id: "veda",
    title: "VEDA",
    description: "An intelligent Next.js platform designed for robust and highly secure cloud data aggregation and user metrics visualization.",
    tags: ["Next.js", "TypeScript", "React", "Tailwind CSS"],
    status: "Public",
  },
  {
    id: "devverse",
    title: "DevVerse",
    description: "A collaborative online community space built for developers to review repositories, share technical tips, and discuss frameworks.",
    tags: ["Next.js", "TypeScript", "React", "Node.js"],
    status: "Public",
  },
  {
    id: "citinexus",
    title: "CitiNexus",
    description: "A smart city data portal aggregating infrastructure usage, electricity loads, and public transportation updates.",
    tags: ["Next.js", "TypeScript", "React", "Recharts"],
    status: "Public",
  },
  {
    id: "ayush",
    title: "Ayush",
    description: "A public wellness portal mapping traditional Ayurvedic resources, herbal indices, and regime guides to modern user interfaces.",
    tags: ["React", "TypeScript", "Tailwind CSS", "MIT License"],
    status: "Public",
  },
  {
    id: "salary-insights",
    title: "Salary Insights",
    description: "An interactive analytics dashboard tracking regional tech compensation statistics, roles, and experience bands.",
    tags: ["Next.js", "TypeScript", "Recharts", "Tailwind CSS"],
    status: "Public",
  },
  {
    id: "journey",
    title: "Journey",
    description: "A beautifully animated timeline assistant enabling individuals to chart milestones, qualifications, and project timelines.",
    tags: ["Next.js", "TypeScript", "Framer Motion"],
    status: "Public",
  },
  {
    id: "suvitta",
    title: "Suvitta",
    description: "A clean, responsive personal wealth planner with local storage backups and compound interest graphing widgets.",
    tags: ["React", "TypeScript", "ChartJS", "LocalStorage"],
    status: "Public",
  },
  {
    id: "govind",
    title: "Govind",
    description: "A localized inventory and resource management system for optimizing regional municipal asset allocation logs.",
    tags: ["React", "JavaScript", "Node.js"],
    status: "Public",
  },
  {
    id: "sanjeevani",
    title: "Sanjeevani",
    description: "A critical care bed management and medical dispatch portal designed for emergency hospital networks.",
    tags: ["Next.js", "TypeScript", "Firebase", "Geolocator"],
    status: "Public",
  },
  {
    id: "project-mysore",
    title: "Project Mysore",
    description: "An interactive map dashboard cataloging historical structures, cultural sites, and tourist paths in Mysore.",
    tags: ["JavaScript", "HTML5", "CSS3", "Leaflet Maps"],
    status: "Public",
  },
  {
    id: "dev-voting",
    title: "DEV - Decentralized E-Voting",
    description: "A private, tamper-proof e-voting platform leveraging decentralized ledger tech to verify and register voter choices securely.",
    tags: ["Solidity", "Ethereum", "Web3.js", "React", "Cryptography"],
    status: "Private",
  },
]

export default function OperaPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Opera</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Projects & Systems
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            A collection of systems I&apos;ve designed and built, from production ML infrastructure 
            to open-source tools. Each project represents a unique challenge solved with thoughtful engineering.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="space-y-8">
          {projects.map((project) => (
            <article 
              key={project.id}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="flex flex-col lg:flex-row gap-8">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-xs font-bold px-2.5 py-1 rounded-full bg-primary/10 text-primary">
                      {project.status}
                    </span>
                    <div className="flex gap-2">
                      {project.github && (
                        <Link href={project.github} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      )}
                      {project.demo && (
                        <Link href={project.demo} target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                          <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </div>
                  
                  <h2 className="text-2xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {project.description}
                  </p>
                  
                  {(project.problem || project.solution || project.architecture || project.impact) && (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {project.problem && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                          <p className="text-sm text-muted-foreground">{project.problem}</p>
                        </div>
                      )}
                      {project.solution && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                          <p className="text-sm text-muted-foreground">{project.solution}</p>
                        </div>
                      )}
                      {project.architecture && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Architecture</h4>
                          <p className="text-sm text-muted-foreground">{project.architecture}</p>
                        </div>
                      )}
                      {project.impact && (
                        <div>
                          <h4 className="text-sm font-semibold text-primary mb-2">Impact</h4>
                          <p className="text-sm text-muted-foreground">{project.impact}</p>
                        </div>
                      )}
                    </div>
                  )}
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="text-xs px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground"
                      >
                        {tag}
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
