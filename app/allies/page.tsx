import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Allies | Experience",
  description: "Professional experience, internships, and collaborations.",
}

const experiences = [
  {
    company: "Infosys Springboard",
    logo: "IS",
    role: "AI Intern",
    type: "Internship",
    period: "Dec 2025 - Mar 2026",
    location: "Remote",
    description: "Participating in an intensive AI internship program focused on advanced machine learning and industrial AI applications.",
    responsibilities: [
      "Exploring deep learning frameworks and model deployment strategies",
      "Gaining hands-on experience with industry-level AI projects",
      "Collaborating on real-world problem-solving using modern AI tools",
    ],
    technologies: ["AI/ML", "Deep Learning", "Python"],
    impact: "Currently developing industry-level technical proficiency in artificial intelligence.",
  },
  {
    company: "IBM | Edunet Foundation",
    logo: "IBM",
    role: "ML Intern – IBM SkillsBuild",
    type: "Internship",
    period: "Jun 2025 - Jul 2025",
    location: "Remote",
    description: "Immersive program focused on AI & Machine Learning, designed to offer industry-level exposure and hands-on technical training.",
    responsibilities: [
      "Deep dive into Machine Learning Algorithms, Model Training, and Data Analysis",
      "Studied AI ethics, responsible AI development, and model fairness",
      "Analyzed real-world case studies involving AI use in social sectors",
      "Worked with IBM SkillsBuild Platform, IBM Cloud, and modern ML tools",
    ],
    technologies: ["Machine Learning", "IBM Cloud", "AI Ethics", "Data Analysis"],
    impact: "Built technical proficiency and professional skills through mentor-driven learning and real-world projects.",
  },
  {
    company: "Microsoft x SAP CSR Program | Edunet Foundation",
    logo: "MS",
    role: "AI Intern",
    type: "Internship",
    period: "Mar 2025 - Apr 2025",
    location: "Remote",
    description: "Completed the TechSaksham initiative, a national CSR-driven training program equipping students with cutting-edge industry skills.",
    responsibilities: [
      "Mastered core AI/ML concepts, ethical AI, and model evaluation",
      "Built AI solutions for social causes (healthcare, environment)",
      "Implemented Computer Vision (CNNs) for image-based diagnostics",
      "Developed 'Arogya', an AI-powered medical diagnosis system using ResNet 50 and EfficientNet",
    ],
    technologies: ["Artificial Intelligence", "Computer Vision", "CNN", "ResNet 50", "EfficientNet"],
    impact: "Equipped with industry-relevant skills in AI and Cloud Computing for Social Impact.",
  },
]

const education = [
  {
    institution: "VIDYA VIKAS INSTITUTE OF ENGINEERING AND TECHNOLOGY",
    degree: "Bachelor of Technology - BTech, Computer Science",
    period: "Sep 2023 - Aug 2027",
    highlights: ["Focusing on AI/ML and Systems Building", "Core Computer Science fundamentals", "Active participation in tech initiatives"],
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
