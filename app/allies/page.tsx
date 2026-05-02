import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Allies | Experience",
  description: "Professional experience, internships, and collaborations.",
}

const experiences = [
  {
    company: "TechCorp AI Labs",
    logo: "TC",
    role: "Senior ML Engineer",
    type: "Full-time",
    period: "2023 - Present",
    location: "San Francisco, CA",
    description: "Leading the recommendation systems team, building real-time ML infrastructure serving 50M+ users.",
    responsibilities: [
      "Lead a team of 5 engineers building recommendation systems",
      "Architected real-time inference pipeline with sub-50ms latency",
      "Reduced model training costs by 40% through optimization",
      "Established MLOps best practices across the organization",
    ],
    technologies: ["PyTorch", "Kubernetes", "Ray", "Kafka", "Redis"],
    impact: "Increased user engagement by 25% through personalization improvements",
  },
  {
    company: "StartupX",
    logo: "SX",
    role: "ML Engineer",
    type: "Full-time",
    period: "2021 - 2023",
    location: "New York, NY",
    description: "First ML hire, built the core ML infrastructure and productionized multiple AI features.",
    responsibilities: [
      "Built ML infrastructure from scratch (feature store, model registry, monitoring)",
      "Developed and deployed 10+ production ML models",
      "Created automated model training and deployment pipelines",
      "Mentored junior engineers on ML best practices",
    ],
    technologies: ["TensorFlow", "AWS SageMaker", "Airflow", "Docker", "FastAPI"],
    impact: "Reduced model deployment time from weeks to hours, enabled rapid experimentation",
  },
  {
    company: "Research Institute",
    logo: "RI",
    role: "Research Intern",
    type: "Internship",
    period: "2020 - 2021",
    location: "Boston, MA",
    description: "Conducted research on efficient neural network architectures for edge deployment.",
    responsibilities: [
      "Researched model compression techniques (pruning, quantization)",
      "Published 2 papers at top ML conferences",
      "Developed custom CUDA kernels for efficient inference",
      "Collaborated with industry partners on deployment challenges",
    ],
    technologies: ["PyTorch", "CUDA", "TensorRT", "ONNX", "C++"],
    impact: "Research adopted by major autonomous vehicle company for edge deployment",
  },
  {
    company: "BigTech Inc.",
    logo: "BT",
    role: "Software Engineering Intern",
    type: "Internship",
    period: "Summer 2020",
    location: "Seattle, WA",
    description: "Worked on the search ranking team, improving ML models for query understanding.",
    responsibilities: [
      "Improved query understanding model accuracy by 3%",
      "Built data pipelines for training data collection",
      "Developed A/B testing framework for model evaluation",
      "Presented findings to senior leadership",
    ],
    technologies: ["Python", "Spark", "TensorFlow", "Elasticsearch"],
    impact: "Query understanding improvements shipped to production, affecting billions of queries",
  },
  {
    company: "University AI Lab",
    logo: "UA",
    role: "Undergraduate Researcher",
    type: "Research",
    period: "2019 - 2020",
    location: "Campus",
    description: "Conducted research on computer vision and deep learning under faculty supervision.",
    responsibilities: [
      "Implemented state-of-the-art computer vision models",
      "Contributed to ongoing research projects",
      "Assisted in writing grant proposals",
      "Published first author paper at workshop",
    ],
    technologies: ["PyTorch", "OpenCV", "NumPy", "MATLAB"],
    impact: "Research led to successful grant funding for lab expansion",
  },
]

const education = [
  {
    institution: "Stanford University",
    degree: "M.S. Computer Science (AI Track)",
    period: "2020 - 2021",
    highlights: ["GPA: 4.0/4.0", "Research Focus: Efficient ML", "Teaching Assistant for CS229"],
  },
  {
    institution: "MIT",
    degree: "B.S. Computer Science & Mathematics",
    period: "2016 - 2020",
    highlights: ["Summa Cum Laude", "Undergraduate Thesis Award", "Dean&apos;s List all semesters"],
  },
]

export default function AlliesPage() {
  return (
    <div className="min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="text-primary font-mono text-sm tracking-wider uppercase mb-4">Allies</p>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight mb-6">
            Experience
          </h1>
          <p className="text-muted-foreground text-lg max-w-3xl leading-relaxed">
            My professional journey through internships, full-time roles, and research positions. 
            Each experience has shaped my approach to building intelligent systems.
          </p>
        </div>

        {/* Experience Timeline */}
        <section className="mb-20">
          <h2 className="text-2xl font-bold mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <article 
                key={index}
                className="relative p-8 rounded-2xl bg-card border border-border"
              >
                <div className="flex flex-col lg:flex-row gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl bg-primary/10 text-primary flex items-center justify-center text-xl font-bold">
                      {exp.logo}
                    </div>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3 mb-2">
                      <span className="text-xs font-medium px-2.5 py-1 rounded-full bg-secondary text-secondary-foreground">
                        {exp.type}
                      </span>
                      <span className="text-sm font-mono text-muted-foreground">{exp.period}</span>
                      <span className="text-sm text-muted-foreground">·</span>
                      <span className="text-sm text-muted-foreground">{exp.location}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-1">{exp.company}</h3>
                    <p className="text-primary font-medium mb-4">{exp.role}</p>
                    
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {exp.description}
                    </p>
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Responsibilities</h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((resp, i) => (
                            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
                              <span className="text-primary mt-1">•</span>
                              {resp}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold mb-3">Impact</h4>
                        <p className="text-sm text-muted-foreground">{exp.impact}</p>
                        
                        <h4 className="text-sm font-semibold mb-3 mt-4">Technologies</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech) => (
                            <span 
                              key={tech}
                              className="text-xs px-2 py-1 rounded bg-secondary text-secondary-foreground"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* Education */}
        <section>
          <h2 className="text-2xl font-bold mb-8">Education</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {education.map((edu, index) => (
              <div 
                key={index}
                className="p-6 rounded-xl bg-card border border-border"
              >
                <p className="text-sm font-mono text-muted-foreground mb-2">{edu.period}</p>
                <h3 className="text-lg font-bold mb-1">{edu.institution}</h3>
                <p className="text-primary text-sm mb-4">{edu.degree}</p>
                <ul className="space-y-1">
                  {edu.highlights.map((highlight, i) => (
                    <li key={i} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="text-primary">•</span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
