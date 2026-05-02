import Link from "next/link"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Opera | Projects & Systems",
  description: "Explore my portfolio of AI/ML projects, systems, and open-source contributions.",
}

const projects = [
  {
    id: "neuralsync",
    title: "NeuralSync",
    description: "Real-time neural network inference engine with sub-10ms latency for production workloads. Built for high-throughput scenarios requiring consistent performance.",
    problem: "Production ML systems often struggle with latency requirements, especially for real-time applications.",
    solution: "Custom inference runtime with CUDA kernel optimizations and intelligent batching strategies.",
    architecture: "Microservices architecture with gRPC endpoints, Redis caching, and Kubernetes orchestration.",
    impact: "Reduced inference latency by 85% and increased throughput by 3x compared to baseline TensorFlow Serving.",
    tags: ["PyTorch", "CUDA", "C++", "gRPC", "Kubernetes"],
    status: "Production",
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    id: "dataforge",
    title: "DataForge",
    description: "Distributed data pipeline framework processing 1M+ events/second with built-in fault tolerance and exactly-once semantics.",
    problem: "Existing pipeline solutions couldn't handle our scale requirements with acceptable reliability.",
    solution: "Custom streaming framework built on Kafka with stateful processing and checkpoint recovery.",
    architecture: "Event-driven architecture with Kafka, Spark Streaming, and Delta Lake for storage.",
    impact: "Powers data pipelines for 3 major products, processing over 2TB of data daily with 99.99% uptime.",
    tags: ["Apache Kafka", "Spark", "Python", "Kubernetes", "Delta Lake"],
    status: "Open Source",
    github: "https://github.com",
  },
  {
    id: "visioncore",
    title: "VisionCore",
    description: "Computer vision platform for autonomous systems with multi-modal sensor fusion capabilities.",
    problem: "Autonomous systems need to process multiple sensor inputs with minimal latency and high accuracy.",
    solution: "Unified perception stack with transformer-based sensor fusion and edge-optimized inference.",
    architecture: "ROS2-based system with custom CUDA kernels for sensor preprocessing and TensorRT inference.",
    impact: "Deployed on 50+ autonomous vehicles with 99.7% obstacle detection accuracy.",
    tags: ["TensorFlow", "OpenCV", "ROS2", "Edge AI", "TensorRT"],
    status: "In Development",
    github: "https://github.com",
  },
  {
    id: "mlops-toolkit",
    title: "MLOps Toolkit",
    description: "End-to-end MLOps platform for model training, versioning, deployment, and monitoring.",
    problem: "Managing ML model lifecycle was fragmented across multiple tools and workflows.",
    solution: "Unified platform integrating experiment tracking, model registry, and automated deployment.",
    architecture: "Built on Kubernetes with MLflow, Seldon Core, and custom monitoring dashboards.",
    impact: "Reduced model deployment time from days to hours, serving 20+ production models.",
    tags: ["MLflow", "Kubernetes", "Seldon", "Prometheus", "Python"],
    status: "Production",
    github: "https://github.com",
  },
  {
    id: "nlp-engine",
    title: "NLP Engine",
    description: "Scalable NLP service for document understanding, entity extraction, and semantic search.",
    problem: "Processing large document collections for insights required expensive commercial solutions.",
    solution: "Custom NLP pipeline with fine-tuned transformers and vector database integration.",
    architecture: "FastAPI service with BERT models, Elasticsearch, and Pinecone for vector search.",
    impact: "Processes 100K+ documents daily with 94% entity extraction accuracy.",
    tags: ["Transformers", "FastAPI", "Elasticsearch", "Pinecone", "Python"],
    status: "Production",
    github: "https://github.com",
  },
  {
    id: "automl-platform",
    title: "AutoML Platform",
    description: "Automated machine learning platform for non-ML engineers to build and deploy models.",
    problem: "Data scientists were bottlenecked with routine model building tasks.",
    solution: "No-code platform with automated feature engineering, model selection, and hyperparameter tuning.",
    architecture: "React frontend with Python backend, Ray for distributed training, and MLflow for tracking.",
    impact: "Enabled 50+ non-ML engineers to build production models, saving 200+ hours monthly.",
    tags: ["Ray", "Optuna", "React", "FastAPI", "Docker"],
    status: "Production",
    github: "https://github.com",
    demo: "https://demo.example.com",
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
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Problem</h4>
                      <p className="text-sm text-muted-foreground">{project.problem}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Solution</h4>
                      <p className="text-sm text-muted-foreground">{project.solution}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Architecture</h4>
                      <p className="text-sm text-muted-foreground">{project.architecture}</p>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-primary mb-2">Impact</h4>
                      <p className="text-sm text-muted-foreground">{project.impact}</p>
                    </div>
                  </div>
                  
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
